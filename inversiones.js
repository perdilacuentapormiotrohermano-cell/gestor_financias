// ============================================================
// INVERSIONES — módulo dentro del Gestor de Finanzas (Registro > Inversiones)
// Datos en Firestore: users/{uid}/activos, aportes, ahorros, config
// ============================================================
(function () {
  const { useState, useEffect, useMemo, useRef } = React;

  const CATS = [['acciones', 'Acciones'], ['cedears', 'Cedears'], ['fondos', 'Fondos de inversión']];
  const MES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  const fmt0 = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 });
  const money = (v) => '$ ' + fmt0.format(Math.round(v || 0));
  const norm = (s) => String(s == null ? '' : s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  const clone = (o) => JSON.parse(JSON.stringify(o));
  const mapDocs = (snap) => { const o = {}; snap.forEach((d) => { o[d.id] = d.data(); }); return o; };

  const firebaseReady = () => typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length;

  // Último valor cargado de un activo (null si no tiene lecturas)
  const lastReading = (a) => {
    const L = (a.lecturas || []).slice().sort((x, y) => (x.f < y.f ? -1 : x.f > y.f ? 1 : 0));
    return L.length ? L[L.length - 1] : null;
  };
  const soldLabel = (a) => {
    if (!a.vendido) return '';
    const [y, m] = String(a.vendido).split('-').map(Number);
    return isFinite(y) && isFinite(m) ? `${MES[m - 1] || ''} ${y}` : '';
  };

  const validBackup = (o) => {
    if (!o || typeof o !== 'object' || !o.activos || typeof o.activos !== 'object') return false;
    return Object.keys(o.activos).every((k) => {
      const a = o.activos[k];
      return a && typeof a.nombre === 'string' && CATS.some((c) => c[0] === a.categoria) && Array.isArray(a.lecturas)
        && a.lecturas.every((r) => r && typeof r.f === 'string' && typeof r.v === 'number');
    });
  };

  const InversionesView = ({ isDarkMode, authUser, setActiveTab }) => {
    const [data, setData] = useState({ activos: {}, aportes: {}, ahorros: {}, dolar: null, meta: null });
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState('');
    const [imp, setImp] = useState(null); // { json, resumen }
    const [importMsg, setImportMsg] = useState('');
    const [importing, setImporting] = useState(false);
    const fileRef = useRef(null);

    const card = `${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-2xl p-4 shadow-sm border`;
    const txt = isDarkMode ? 'text-white' : 'text-gray-900';
    const sub = isDarkMode ? 'text-slate-400' : 'text-gray-500';
    const btn = 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-5 rounded-xl text-sm shadow-md transition-colors tap';
    const btn2 = `${isDarkMode ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-gray-100 text-gray-800 border-gray-200'} border font-bold py-2.5 px-5 rounded-xl text-sm tap`;

    // --- Suscripción en tiempo real a las subcolecciones del usuario ---
    useEffect(() => {
      if (!authUser || !firebaseReady()) { setLoaded(true); return; }
      const db = firebase.firestore();
      const base = db.collection('users').doc(authUser.uid);
      const onErr = (e) => {
        setError(e && e.code === 'permission-denied'
          ? 'permiso'
          : ((e && e.message) || 'No se pudieron leer las inversiones.'));
        setLoaded(true);
      };
      setError('');
      const unsubs = [
        base.collection('activos').onSnapshot((s) => { setData((d) => ({ ...d, activos: mapDocs(s) })); setLoaded(true); }, onErr),
        base.collection('aportes').onSnapshot((s) => setData((d) => ({ ...d, aportes: mapDocs(s) })), onErr),
        base.collection('ahorros').onSnapshot((s) => setData((d) => ({ ...d, ahorros: mapDocs(s) })), onErr),
        base.collection('config').onSnapshot((s) => {
          const c = mapDocs(s);
          setData((d) => ({ ...d, dolar: c.dolar || null, meta: c.meta || null }));
        }, onErr)
      ];
      return () => unsubs.forEach((u) => { try { u(); } catch (e) { /* noop */ } });
    }, [authUser && authUser.uid]);

    // --- Resumen ---
    const resumen = useMemo(() => {
      const list = Object.keys(data.activos).map((id) => ({ id, ...data.activos[id] }));
      const vigentes = list.filter((a) => !a.vendido);
      let total = 0;
      let ultimaFecha = '';
      vigentes.forEach((a) => {
        const r = lastReading(a);
        if (r) { total += r.v; if (r.f > ultimaFecha) ultimaFecha = r.f; }
      });
      const grupos = CATS.map(([id, nombre]) => {
        const items = list.filter((a) => a.categoria === id).map((a) => ({ a, r: lastReading(a) }))
          .sort((x, y) => (x.a.orden || 0) - (y.a.orden || 0) || String(x.a.nombre).localeCompare(String(y.a.nombre)));
        const sub = items.filter((i) => !i.a.vendido && i.r).reduce((s, i) => s + i.r.v, 0);
        return { id, nombre, items, subtotal: sub };
      }).filter((g) => g.items.length);
      return { total, ultimaFecha, activos: vigentes.length, vendidos: list.length - vigentes.length, grupos, ahorros: Object.keys(data.ahorros).length };
    }, [data]);

    // --- Importar copia (.json) de la app de inversiones anterior ---
    const readFile = (file) => {
      setImportMsg('');
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const json = JSON.parse(String(reader.result).replace(/^\uFEFF/, ''));
          if (!validBackup(json)) { setImp(null); setImportMsg('Ese archivo no parece una copia de la app de inversiones.'); return; }
          const ap = json.aportes && !json.aportesPorAnio ? { '2026': json.aportes } : (json.aportesPorAnio || {});
          const years = {};
          Object.keys(json.activos).forEach((id) => {
            (json.activos[id].lecturas || []).forEach((r) => { years[r.f.slice(0, 4)] = 1; });
          });
          Object.keys(ap).forEach((y) => { years[y] = 1; });
          const yl = Object.keys(years).sort();
          setImp({
            json: { ...json, aportesPorAnio: ap },
            resumen: {
              activos: Object.keys(json.activos).length,
              ahorros: json.ahorros && typeof json.ahorros === 'object' ? Object.keys(json.ahorros).length : 0,
              anios: yl.length ? (yl.length === 1 ? yl[0] : `${yl[0]}–${yl[yl.length - 1]}`) : '—'
            }
          });
        } catch (e) { setImp(null); setImportMsg('No se pudo leer el archivo.'); }
        if (fileRef.current) fileRef.current.value = '';
      };
      reader.onerror = () => setImportMsg('No se pudo leer el archivo.');
      reader.readAsText(file);
    };

    const doImport = async () => {
      if (!imp || !authUser || !firebaseReady()) return;
      setImporting(true);
      setImportMsg('');
      try {
        const db = firebase.firestore();
        const base = db.collection('users').doc(authUser.uid);
        const inc = imp.json;
        const ops = []; // { ref, obj }

        // Activos: si ya existe (mismo id o mismo nombre) se suman las lecturas; si no, se crea
        const byName = {};
        Object.keys(data.activos).forEach((id) => { byName[norm(data.activos[id].nombre)] = id; });
        Object.keys(inc.activos).forEach((id) => {
          const a = clone(inc.activos[id]);
          const eid = data.activos[id] ? id : byName[norm(a.nombre)];
          if (!eid) { ops.push({ ref: base.collection('activos').doc(id), obj: a }); return; }
          const e = clone(data.activos[eid]);
          const map = {};
          (e.lecturas || []).forEach((r) => { map[r.f] = r.v; });
          (a.lecturas || []).forEach((r) => { map[r.f] = r.v; });
          e.lecturas = Object.keys(map).sort().map((f) => ({ f, v: map[f] }));
          const ys = {};
          (e.anios || []).concat(a.anios || []).forEach((y) => { ys[y] = 1; });
          e.anios = Object.keys(ys).map(Number).sort((x, y) => x - y);
          ops.push({ ref: base.collection('activos').doc(eid), obj: e });
        });

        // Aportes por año: se completan meses faltantes
        Object.keys(inc.aportesPorAnio || {}).forEach((y) => {
          const src = inc.aportesPorAnio[y] || {};
          const dst = data.aportes[y] ? clone(data.aportes[y]) : { m: {}, inicio: null };
          dst.m = dst.m || {};
          Object.keys(src.m || {}).forEach((k) => { dst.m[k] = src.m[k]; });
          if (typeof dst.inicio !== 'number' && typeof src.inicio === 'number') dst.inicio = src.inicio;
          ops.push({ ref: base.collection('aportes').doc(String(y)), obj: dst });
        });

        // Ahorros: solo los que todavía no existen (la unión con metas/viajes viene en la parte 4)
        Object.keys(inc.ahorros || {}).forEach((id) => {
          if (!data.ahorros[id]) ops.push({ ref: base.collection('ahorros').doc(id), obj: clone(inc.ahorros[id]) });
        });

        // Config: dólar y meta solo si no hay
        if (!data.dolar && inc.dolar && typeof inc.dolar.valor === 'number') ops.push({ ref: base.collection('config').doc('dolar'), obj: clone(inc.dolar) });
        if (!data.meta && inc.meta && typeof inc.meta === 'object') ops.push({ ref: base.collection('config').doc('meta'), obj: clone(inc.meta) });

        for (let i = 0; i < ops.length; i += 400) {
          const batch = db.batch();
          ops.slice(i, i + 400).forEach((o) => batch.set(o.ref, JSON.parse(JSON.stringify(o.obj))));
          await batch.commit();
        }
        setImp(null);
        setImportMsg('Listo: se importaron tus inversiones.');
      } catch (e) {
        setImportMsg(e && e.code === 'permission-denied'
          ? 'Firestore no deja guardar todavía: falta actualizar las reglas (ver el aviso de arriba).'
          : 'No se pudo importar: ' + ((e && e.message) || 'error'));
      }
      setImporting(false);
    };

    // --- Estados sin sesión / sin Firebase ---
    if (!firebaseReady()) {
      return (
        <div className={`${card} text-sm ${sub}`}>
          La sincronización no está configurada en esta app, y las inversiones necesitan la nube.
        </div>
      );
    }
    if (!authUser) {
      return (
        <div className={`${card} text-center space-y-3`}>
          <p className={`font-bold ${txt}`}>Iniciá sesión para ver tus inversiones</p>
          <p className={`text-xs ${sub}`}>Entrá desde Ajustes → Cuenta y Sincronización. Es la misma cuenta del gestor.</p>
          <button onClick={() => setActiveTab('settings')} className={btn}>Ir a Ajustes</button>
        </div>
      );
    }

    const vacio = loaded && !error && Object.keys(data.activos).length === 0;

    return (
      <div className="space-y-4">
        {error === 'permiso' && (
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 text-xs text-orange-400 font-medium space-y-2">
            <p className="font-bold text-sm">Falta un permiso en Firestore</p>
            <p>Las reglas actuales solo dejan leer el documento principal del usuario. Agregá esta regla dentro de <code>match /databases/{'{database}'}/documents</code> y publicá:</p>
            <pre className="whitespace-pre-wrap break-all bg-black/20 rounded-lg p-2 text-[11px]">{`match /users/{userId}/{document=**} {\n  allow read, write: if request.auth != null && request.auth.uid == userId;\n}`}</pre>
          </div>
        )}
        {error && error !== 'permiso' && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4 text-xs text-red-400 font-medium">{error}</div>
        )}

        {/* Resumen */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-5 text-white shadow-lg">
          <p className="text-xs font-bold uppercase tracking-wider text-white/70">Total invertido</p>
          <p className="text-3xl font-bold mt-1">{loaded ? money(resumen.total) : '…'}</p>
          <p className="text-xs text-white/70 mt-2">
            {resumen.activos} {resumen.activos === 1 ? 'activo' : 'activos'}
            {resumen.vendidos > 0 ? ` · ${resumen.vendidos} vendido${resumen.vendidos === 1 ? '' : 's'}` : ''}
            {resumen.ultimaFecha ? ` · último valor cargado: ${resumen.ultimaFecha.split('-').reverse().join('/')}` : ''}
          </p>
        </div>

        {/* Lista de solo lectura (la carga y edición llegan en la parte 2) */}
        {resumen.grupos.map((g) => (
          <div key={g.id} className={card}>
            <div className="flex justify-between items-center mb-3">
              <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>{g.nombre}</p>
              <p className={`text-sm font-bold ${txt}`}>{money(g.subtotal)}</p>
            </div>
            <div className="space-y-2">
              {g.items.map(({ a, r }) => (
                <div key={a.id || a.nombre} className="flex justify-between items-center gap-2">
                  <div className="min-w-0">
                    <p className={`text-sm font-semibold truncate ${txt}`}>{a.nombre}</p>
                    {a.vendido && <p className="text-[10px] font-bold text-orange-500">Vendido · {soldLabel(a)}</p>}
                  </div>
                  <p className={`text-sm font-medium shrink-0 ${a.vendido ? sub : txt}`}>{r ? money(r.v) : '—'}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {vacio && (
          <div className={`${card} text-center space-y-1`}>
            <p className={`font-bold ${txt}`}>Todavía no hay inversiones cargadas</p>
            <p className={`text-xs ${sub}`}>Podés traer todo lo de tu app anterior importando su copia de seguridad.</p>
          </div>
        )}

        {/* Importar */}
        <div className={`${card} space-y-3`}>
          <div>
            <p className={`font-bold text-sm ${txt}`}>Traer datos de la app de inversiones</p>
            <p className={`text-xs mt-1 ${sub}`}>
              En esa app: Ajustes → copia de seguridad (descarga un archivo <code>.json</code>). Elegilo acá. No pisa nada de lo que ya tengas cargado: solo agrega lo que falta.
            </p>
          </div>
          <input ref={fileRef} type="file" accept=".json,application/json" className="hidden"
            onChange={(e) => { if (e.target.files && e.target.files[0]) readFile(e.target.files[0]); }} />
          {!imp && <button onClick={() => fileRef.current && fileRef.current.click()} className={btn2}>Elegir archivo…</button>}
          {imp && (
            <div className="space-y-3">
              <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'} rounded-xl p-3 text-xs ${txt}`}>
                El archivo trae <b>{imp.resumen.activos}</b> activos, <b>{imp.resumen.ahorros}</b> ahorros y datos de <b>{imp.resumen.anios}</b>.
              </div>
              <div className="flex gap-2">
                <button disabled={importing} onClick={doImport} className={`${btn} ${importing ? 'opacity-60' : ''}`}>{importing ? 'Importando…' : 'Importar'}</button>
                <button disabled={importing} onClick={() => { setImp(null); setImportMsg(''); }} className={btn2}>Cancelar</button>
              </div>
            </div>
          )}
          {importMsg && <p className={`text-xs font-medium ${importMsg.startsWith('Listo') ? 'text-green-500' : 'text-orange-500'}`}>{importMsg}</p>}
        </div>
      </div>
    );
  };

  window.InversionesView = InversionesView;
})();
