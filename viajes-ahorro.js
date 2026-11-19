// ============================================================
// MODO VIAJE — Ahorro del viaje (plan mensual + ahorrado por categoría)
// Viene de los "Ahorros" de la app de inversiones, ahora dentro de Modo Viaje.
// Usa los datos que ya tiene un viaje: presupuesto, fecha de salida, categorías y
// movimientos. Un aporte puede traer `savedFor` (id de categoría) para saber
// para qué categoría se juntó esa plata; sin eso cuenta solo en el fondo general.
// ============================================================
(function () {
  const { useState, useEffect } = React;
  const pad = (n) => String(n).padStart(2, '0');
  const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
  const num = (v) => { const n = parseFloat(v); return isFinite(n) ? n : 0; };
  const sum = (arr) => arr.reduce((s, t) => s + num(t.amount), 0);
  const fdate = (f) => (f ? f.split('-').reverse().join('/') : '');
  const localISO = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const txDay = (t) => { const d = new Date(t.date); return isNaN(d.getTime()) ? '' : localISO(d); };
  // Meses que quedan hasta esa fecha, contando el actual (0 si ya pasó)
  const monthsTo = (f) => {
    const p = f.split('-'), idx = Number(p[0]) * 12 + Number(p[1]) - 1;
    const now = new Date(), cur = now.getFullYear() * 12 + now.getMonth();
    const d = idx - cur;
    return d >= 0 ? d + 1 : 0;
  };

  // Fase del viaje: 'ahorro' mientras falta para la salida, 'viaje' desde el día de inicio.
  // Sin fecha de salida: 'viaje' apenas hay un gasto cargado.
  function phaseOf(trip, now) {
    const start = DATE_RE.test(String(trip.startDate || '')) ? trip.startDate : '';
    if (start) return localISO(now || new Date()) < start ? 'ahorro' : 'viaje';
    return (trip.transactions || []).some((t) => t.type === 'gasto') ? 'viaje' : 'ahorro';
  }

  // Resumen de ahorro de un viaje
  function calc(trip, today) {
    const txs = trip.transactions || [], cats = trip.categories || [];
    const aportes = txs.filter((t) => t.type === 'aporte');
    const gastos = txs.filter((t) => t.type === 'gasto');
    const ah = sum(aportes), gas = sum(gastos);
    const catSum = cats.reduce((s, c) => s + num(c.budget), 0);
    const meta = num(trip.budget) > 0 ? num(trip.budget) : catSum;
    const start = DATE_RE.test(String(trip.startDate || '')) ? trip.startDate : '';

    let plan = null;
    if (meta > 0) {
      const falta = Math.max(0, meta - ah);
      plan = { falta, done: falta <= 0, hasDate: !!start, n: 0, mes: 0, state: '', diff: 0 };
      if (start && !plan.done) {
        plan.n = monthsTo(start);
        plan.mes = plan.n > 0 ? falta / plan.n : 0;
        // Ritmo: se compara lo juntado con una línea recta desde el primer aporte hasta la salida
        const dated = aportes.map((t) => ({ f: txDay(t), v: num(t.amount) })).filter((x) => x.f);
        let first = '';
        dated.forEach((x) => { if (!first || x.f < first) first = x.f; });
        if (first && plan.n > 0) {
          const base = dated.filter((x) => x.f === first).reduce((s, x) => s + x.v, 0);
          const d0 = today ? new Date(today) : new Date();
          d0.setHours(0, 0, 0, 0);
          const t0 = d0.getTime(), st = new Date(first + 'T00:00:00').getTime(), end = new Date(start + 'T00:00:00').getTime();
          if (end > st && t0 > st) {
            const exp = base + Math.max(0, meta - base) * Math.min(1, (t0 - st) / (end - st));
            plan.diff = ah - exp;
            plan.state = Math.abs(plan.diff) <= meta * 0.03 ? 'even' : (plan.diff > 0 ? 'up' : 'down');
          }
        }
      }
    }
    const rows = cats.map((c) => ({
      id: c.id, name: c.name, budget: num(c.budget),
      saved: sum(aportes.filter((t) => t.savedFor === c.id)),
      spent: sum(gastos.filter((t) => t.category === c.id))
    }));
    const assigned = rows.reduce((s, r) => s + r.saved, 0);
    return { meta, ah, gas, disp: ah - gas, start, plan, rows, unassigned: ah - assigned, phase: phaseOf(trip, today) };
  }

  const Bar = ({ meta, ah, gas, dark, small }) => {
    if (!(meta > 0)) return null;
    const p = Math.max(0, Math.min(100, ah / meta * 100));
    const g = Math.max(0, Math.min(p, Math.min(gas, Math.max(ah, 0)) / meta * 100));
    return (
      <div className={`${dark ? 'bg-slate-800' : 'bg-gray-100'} w-full ${small ? 'h-1.5' : 'h-2.5'} rounded-full overflow-hidden flex`}
        role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(p)}>
        <div className={`h-full ${ah >= meta ? 'bg-emerald-500' : 'bg-teal-500'}`} style={{ width: `${p - g}%` }} />
        <div className="h-full bg-orange-500" style={{ width: `${g}%` }} />
      </div>
    );
  };

  const PaceChip = ({ plan, formatMoney }) => {
    if (!plan || !plan.state) return null;
    const cls = plan.state === 'up' ? 'bg-emerald-500/10 text-emerald-500' : plan.state === 'down' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-400';
    const icon = plan.state === 'up' ? '▲ ' : plan.state === 'down' ? '▼ ' : '● ';
    const txt = plan.state === 'even' ? 'Vas al día con tu plan'
      : plan.state === 'up' ? `Vas adelantado: ${formatMoney(Math.abs(plan.diff))} de ventaja`
        : `Vas atrasado: te faltan ${formatMoney(Math.abs(plan.diff))} para estar al día`;
    return <p className={`text-xs font-bold rounded-lg px-2.5 py-1.5 mt-2 ${cls}`}>{icon}{txt}</p>;
  };

  const TripSavingsCard = ({ trip, isDarkMode, formatMoney, cardCls, labelCls }) => {
    const [view, setView] = useState(null); // null = automático según la fase del viaje
    const c = calc(trip);
    const mode = view || c.phase;
    const dark = isDarkMode;
    const tx = dark ? 'text-white' : 'text-gray-900';
    const box = `${cardCls} rounded-2xl p-4 shadow-sm border mb-6`;
    const hasCatSaved = c.rows.some((r) => r.saved > 0);

    if (!(c.meta > 0)) {
      return (
        <div className={box}>
          <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${labelCls}`}>Ahorro del viaje</p>
          <p className={`text-xs ${labelCls}`}>Poné un presupuesto (y la fecha de salida) en el viaje para ver cuánto te falta juntar y cuánto apartar por mes.</p>
        </div>
      );
    }
    const p = c.plan, pct = Math.round(Math.max(0, Math.min(100, c.ah / c.meta * 100)));
    const showCats = c.rows.length > 0 && (c.rows.some((r) => r.budget > 0 || r.saved > 0 || r.spent > 0));
    const tabs = (
      <div className={`${dark ? 'bg-slate-800' : 'bg-gray-100'} p-0.5 rounded-lg flex gap-0.5 shrink-0`}>
        {[['ahorro', 'Ahorro'], ['viaje', 'Gastos']].map(([k, l]) => (
          <button key={k} type="button" onClick={() => setView(k)}
            className={`px-2.5 py-1 text-[11px] font-bold rounded-md transition-all ${mode === k ? (k === 'ahorro' ? 'bg-teal-500 text-white shadow-sm' : 'bg-orange-500 text-white shadow-sm') : labelCls}`}>{l}</button>
        ))}
      </div>
    );

    // ---- Vista de gastos: lo gastado de cada categoría contra su presupuesto ----
    if (mode === 'viaje') {
      const rows = c.rows.filter((r) => r.budget > 0 || r.spent > 0);
      return (
        <div className={box}>
          <div className="flex items-center justify-between mb-3 gap-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${labelCls}`}>Gastos por categoría</p>
            {tabs}
          </div>
          {!rows.length ? (
            <p className={`text-xs ${labelCls}`}>Todavía no hay gastos ni presupuestos por categoría.</p>
          ) : (
            <div className="space-y-3">
              {rows.map((r) => {
                const pc = r.budget > 0 ? Math.min(100, r.spent / r.budget * 100) : 0;
                const over = r.budget > 0 && r.spent > r.budget;
                const barCls = pc >= 90 ? 'bg-red-500' : pc >= 75 ? 'bg-orange-400' : 'bg-amber-500';
                return (
                  <div key={r.id}>
                    <div className="flex justify-between items-baseline gap-2">
                      <span className={`text-sm font-semibold truncate ${tx}`}>{r.name}</span>
                      <span className={`text-xs font-semibold shrink-0 ${dark ? 'text-slate-300' : 'text-gray-600'}`}>
                        {formatMoney(r.spent)}{r.budget > 0 && <span className={`font-normal ${labelCls}`}> / {formatMoney(r.budget)}</span>}
                      </span>
                    </div>
                    {r.budget > 0 && (
                      <div className={`${dark ? 'bg-slate-800' : 'bg-gray-100'} w-full h-2 rounded-full overflow-hidden mt-1`}>
                        <div className={`h-full rounded-full ${barCls}`} style={{ width: `${pc}%` }} />
                      </div>
                    )}
                    {over && <p className="text-[11px] text-red-500 font-bold mt-1">Te pasaste {formatMoney(r.spent - r.budget)}</p>}
                  </div>
                );
              })}
            </div>
          )}
          <p className={`text-[11px] mt-3 pt-3 border-t ${dark ? 'border-slate-800' : 'border-gray-100'} ${labelCls}`}>
            Ahorrado <b>{formatMoney(c.ah)}</b> de {formatMoney(c.meta)} · Gastado <b>{formatMoney(c.gas)}</b> · Disponible <b className={c.disp < 0 ? 'text-red-500' : ''}>{formatMoney(c.disp)}</b>
          </p>
        </div>
      );
    }

    return (
      <div className={box}>
        <div className="flex items-center justify-between mb-2 gap-2">
          <div className="flex items-baseline gap-2">
            <p className={`text-xs font-bold uppercase tracking-wider ${labelCls}`}>Ahorro del viaje</p>
            <span className="text-xs font-bold text-teal-500">{pct} %</span>
          </div>
          {tabs}
        </div>
        <p className={`text-sm ${tx}`}><b>{formatMoney(c.ah)}</b> <span className={labelCls}>de {formatMoney(c.meta)}</span></p>
        <div className="mt-2"><Bar meta={c.meta} ah={c.ah} gas={c.gas} dark={dark} /></div>
        {c.gas > 0 && (
          <div className={`flex gap-4 text-[10px] mt-1.5 ${labelCls}`}>
            <span className="flex items-center gap-1"><i className="inline-block w-2 h-2 rounded-sm bg-teal-500" />Disponible</span>
            <span className="flex items-center gap-1"><i className="inline-block w-2 h-2 rounded-sm bg-orange-500" />Gastado</span>
          </div>
        )}
        <ul className={`text-xs mt-3 space-y-1 ${dark ? 'text-slate-300' : 'text-gray-600'}`}>
          {c.gas > 0 && <li>Gastado <b>{formatMoney(c.gas)}</b> · Disponible <b className={c.disp < 0 ? 'text-red-500' : ''}>{formatMoney(c.disp)}</b></li>}
          {p.done ? <li><b className="text-emerald-500">Ya juntaste todo lo que necesitabas.</b></li> : (
            <>
              <li>Te faltan <b>{formatMoney(p.falta)}</b>.</li>
              {c.phase === 'ahorro'
                ? (p.hasDate
                  ? (p.n > 0 ? <li>Para llegar el {fdate(c.start)} tenés que apartar unos <b>{formatMoney(p.mes)}</b> por mes ({p.n} {p.n === 1 ? 'mes' : 'meses'}).</li> : null)
                  : <li>Si ponés la fecha de salida del viaje, te digo cuánto apartar por mes.</li>)
                : <li>El viaje ya empezó: el plan mensual solo aplica antes de la salida.</li>}
            </>
          )}
        </ul>
        {!p.done && c.phase === 'ahorro' && <PaceChip plan={p} formatMoney={formatMoney} />}

        {showCats && (
          <div className={`mt-4 pt-3 border-t ${dark ? 'border-slate-800' : 'border-gray-100'} space-y-3`}>
            <p className={`text-[10px] font-bold uppercase tracking-wider ${labelCls}`}>Por categoría</p>
            {c.rows.map((r) => {
              const over = r.budget > 0 && r.spent > r.budget;
              return (
                <div key={r.id}>
                  <div className="flex justify-between items-baseline gap-2">
                    <span className={`text-sm font-semibold truncate ${tx}`}>{r.name}</span>
                    {r.budget > 0 && r.saved > 0 && <span className="text-[10px] font-bold text-teal-500 shrink-0">{Math.round(Math.min(100, r.saved / r.budget * 100))} %</span>}
                  </div>
                  {r.budget > 0 && <div className="mt-1"><Bar meta={r.budget} ah={r.saved} gas={0} dark={dark} small /></div>}
                  <div className={`flex justify-between gap-2 text-[11px] mt-1 ${labelCls}`}>
                    <span>
                      {r.budget > 0
                        ? <>Ahorrado {formatMoney(r.saved)} de {formatMoney(r.budget)}</>
                        : (r.saved > 0 ? <>Ahorrado {formatMoney(r.saved)}</> : 'Sin presupuesto')}
                    </span>
                    {r.spent > 0 && <span className={over ? 'text-red-500 font-bold' : 'text-orange-500 font-semibold'}>{over ? `Te pasaste ${formatMoney(r.spent - r.budget)}` : `Gastado ${formatMoney(r.spent)}`}</span>}
                  </div>
                </div>
              );
            })}
            {hasCatSaved && Math.abs(c.unassigned) > 0.005 && (
              <p className={`text-[11px] ${labelCls}`}>Aportes sin categoría: <b>{formatMoney(c.unassigned)}</b></p>
            )}
            {!hasCatSaved && (
              <p className={`text-[11px] ${labelCls}`}>Al cargar un aporte podés elegir para qué categoría lo juntás y se ve el avance de cada una.</p>
            )}
          </div>
        )}
      </div>
    );
  };

  // ============================================================
  // Importar los "Ahorros" de la app de inversiones como viajes
  // Lee users/{uid}/ahorros (ya importados en Registro → Inversiones) y crea un viaje
  // por cada uno. Los ahorros originales NO se borran; cada viaje queda marcado con
  // `importedFromAhorro` para no duplicarlo si se repite la importación.
  // ============================================================
  const slugId = (n) => {
    const t = String(n || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return t || 'cat';
  };
  const fsOK = () => typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length;

  // Convierte un ahorro en el documento de un viaje (sin los campos de dueño/miembros)
  function convertAhorro(id, a, user) {
    const used = {};
    const cats = (a.cats || []).map((c, i) => {
      let cid = slugId(c.nombre), k = 2;
      while (used[cid]) cid = slugId(c.nombre) + '-' + (k++);
      used[cid] = 1;
      return { src: c, id: cid, name: String(c.nombre || 'Categoría ' + (i + 1)).slice(0, 40), budget: num(c.meta) > 0 ? num(c.meta) : 0 };
    });
    const todayISO = localISO(new Date());
    const txs = []; let retiros = 0;
    cats.forEach((c) => {
      (c.src.mov || []).forEach((m, j) => {
        const v = Number(m.v);
        if (!isFinite(v) || v === 0) return;
        const gasto = m.t === 'gasto';
        const f = DATE_RE.test(String(m.f || '')) ? m.f : todayISO;
        const note = String(m.n || '').trim();
        const tx = {
          id: `imp_${id}_${c.id}_${m.id || j}`,
          type: gasto ? 'gasto' : 'aporte',
          amount: v,
          description: gasto ? (note || 'Gasto') : (v < 0 ? (note ? 'Retiro: ' + note : 'Retiro') : (note || 'Aporte al fondo')),
          category: c.id,
          date: new Date(f + 'T12:00:00').toISOString(),
          createdBy: user.uid,
          createdByEmail: user.email || ''
        };
        if (!gasto) { tx.savedFor = c.id; if (v < 0) retiros++; }
        txs.push(tx);
      });
    });
    txs.sort((x, y) => (x.date < y.date ? -1 : x.date > y.date ? 1 : 0));
    const budget = cats.reduce((sum2, c) => sum2 + c.budget, 0);
    const ah = txs.filter((t) => t.type === 'aporte').reduce((sum2, t) => sum2 + t.amount, 0);
    const gas = txs.filter((t) => t.type === 'gasto').reduce((sum2, t) => sum2 + t.amount, 0);
    return {
      doc: {
        name: String(a.nombre || 'Viaje').trim().slice(0, 60) || 'Viaje',
        startDate: DATE_RE.test(String(a.fecha || '')) ? a.fecha : null,
        endDate: null,
        budget,
        categories: cats.map((c) => ({ id: c.id, name: c.name, budget: c.budget })),
        transactions: txs,
        importedFromAhorro: id,
        currency: a.moneda === 'USD' ? 'USD' : 'ARS'
      },
      stats: { cats: cats.length, ah, gas, retiros, movs: txs.length, usd: a.moneda === 'USD', archivado: !!a.archivado }
    };
  }

  const TripAhorrosImport = ({ authUser, trips, isDarkMode, formatMoney, cardCls, labelCls }) => {
    const [ahorros, setAhorros] = useState(null);
    const [open, setOpen] = useState(false);
    const [sel, setSel] = useState(null);
    const [busy, setBusy] = useState(false);
    const [msg, setMsg] = useState('');
    const [done, setDone] = useState({});
    const [hidden, setHidden] = useState(false); // solo se oculta mientras la app está abierta
    const uid = authUser && authUser.uid;

    useEffect(() => {
      if (!uid || !fsOK()) return undefined;
      const unsub = firebase.firestore().collection('users').doc(uid).collection('ahorros').onSnapshot((snap) => {
        const o = {}; snap.forEach((d) => { o[d.id] = d.data(); }); setAhorros(o);
      }, () => setAhorros({}));
      return () => { try { unsub(); } catch (e) { /* noop */ } };
    }, [uid]);

    if (!uid || !ahorros || hidden) return null;
    const imported = {};
    (trips || []).forEach((t) => { if (t.importedFromAhorro) imported[t.importedFromAhorro] = 1; });
    const pending = Object.keys(ahorros).filter((id) => !imported[id] && !done[id])
      .sort((x, y) => (num(ahorros[x].orden) - num(ahorros[y].orden)) || String(ahorros[x].nombre).localeCompare(ahorros[y].nombre))
      .map((id) => ({ id, a: ahorros[id], conv: convertAhorro(id, ahorros[id], authUser) }));
    if (!pending.length) return null;

    const dark = isDarkMode;
    const tx = dark ? 'text-white' : 'text-gray-900';
    const btn = 'bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-5 rounded-xl text-sm shadow-md transition-colors';
    const btn2 = `${dark ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-gray-100 text-gray-800 border-gray-200'} border font-bold py-2.5 px-4 rounded-xl text-sm`;
    // Por defecto se tildan los ahorros en pesos y no archivados
    const isOn = (p) => (sel && p.id in sel ? sel[p.id] : !(p.conv.stats.usd || p.conv.stats.archivado));
    const chosen = pending.filter(isOn);

    const hide = () => setHidden(true);

    // Los viajes que estaban archivados se importan ya en "Archivados" (el archivado es personal, vive en tu usuario)
    const userUpdate = (codes, archivedCodes) => ({
      tripIds: firebase.firestore.FieldValue.arrayUnion(...codes),
      ...(archivedCodes.length ? { archivedTripIds: firebase.firestore.FieldValue.arrayUnion(...archivedCodes) } : {})
    });

    const doImport = async () => {
      if (!chosen.length || busy) return;
      setBusy(true); setMsg('');
      const db = firebase.firestore(), codes = [], archivedCodes = [], ok = {};
      try {
        for (const p of chosen) {
          const code = `${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(-2)}`.toUpperCase();
          await db.collection('trips').doc(code).set({
            ...p.conv.doc,
            ownerUid: authUser.uid,
            members: [authUser.uid],
            memberEmails: { [authUser.uid]: authUser.email || '' },
            createdAt: Date.now(),
            updatedAt: Date.now()
          });
          codes.push(code); ok[p.id] = 1;
          if (p.conv.stats.archivado) archivedCodes.push(code);
        }
        await db.collection('users').doc(authUser.uid).set(userUpdate(codes, archivedCodes), { merge: true });
        setDone((d) => ({ ...d, ...ok }));
        setOpen(false); setSel(null);
      } catch (e) {
        setDone((d) => ({ ...d, ...ok }));
        if (codes.length) { try { await db.collection('users').doc(authUser.uid).set(userUpdate(codes, archivedCodes), { merge: true }); } catch (e2) { /* noop */ } }
        setMsg(`No se pudo terminar${codes.length ? ` (se crearon ${codes.length})` : ''}: ${(e && e.message) || 'error'}`);
      }
      setBusy(false);
    };

    const sheet = open && ReactDOM.createPortal(
      <div className={dark ? 'app-dark' : ''}>
        <div className="fixed inset-0 bg-black/60 z-[60] flex items-end sm:items-center justify-center" onClick={() => !busy && setOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} className={`w-full sm:max-w-md max-h-[90vh] overflow-y-auto ${dark ? 'bg-slate-900 text-slate-100' : 'bg-white text-gray-900'} rounded-t-3xl sm:rounded-3xl p-5 pb-8 shadow-xl`}>
            <div className="flex items-start justify-between gap-3 mb-1">
              <h3 className="font-bold text-lg">Traer ahorros como viajes</h3>
              <button onClick={() => !busy && setOpen(false)} aria-label="Cerrar" className={`${dark ? 'bg-slate-800 text-slate-300' : 'bg-gray-100 text-gray-600'} w-8 h-8 rounded-full text-xl leading-none shrink-0`}>×</button>
            </div>
            <p className={`text-xs mb-4 ${labelCls}`}>Cada ahorro se copia como un viaje nuevo, con sus categorías, aportes y gastos. Tus ahorros originales no se borran.</p>
            <div className="space-y-2">
              {pending.map((p) => {
                const st = p.conv.stats, d = p.conv.doc;
                return (
                  <label key={p.id} className={`${dark ? 'bg-slate-800' : 'bg-gray-50'} flex gap-3 items-start rounded-2xl p-3`}>
                    <input type="checkbox" className="w-5 h-5 mt-0.5 accent-orange-500" checked={isOn(p)} disabled={busy}
                      onChange={(e) => setSel((cur) => ({ ...(cur || {}), [p.id]: e.target.checked }))} />
                    <div className="min-w-0 text-xs space-y-0.5">
                      <p className={`text-sm font-bold ${tx}`}>{d.name}</p>
                      <p className={labelCls}>
                        {st.cats} {st.cats === 1 ? 'categoría' : 'categorías'} · presupuesto {formatMoney(d.budget)}{d.startDate ? ` · salida ${fdate(d.startDate)}` : ' · sin fecha'}
                      </p>
                      <p className={labelCls}>Ahorrado <b>{formatMoney(st.ah)}</b> · Gastado <b>{formatMoney(st.gas)}</b> · {st.movs} {st.movs === 1 ? 'movimiento' : 'movimientos'}</p>
                      {st.usd && <p className="text-orange-500 font-semibold">En dólares: el gestor lo va a mostrar con su moneda hasta que agreguemos moneda por viaje.</p>}
                      {st.archivado && <p className={`${labelCls} italic`}>Estaba archivado</p>}
                      {st.retiros > 0 && <p className={labelCls}>{st.retiros} {st.retiros === 1 ? 'retiro' : 'retiros'} (se ven como aporte en negativo)</p>}
                    </div>
                  </label>
                );
              })}
            </div>
            {msg && <p className="text-xs text-red-500 font-medium mt-3">{msg}</p>}
            <div className="flex gap-2 mt-4">
              <button disabled={busy} onClick={() => setOpen(false)} className={btn2}>Cancelar</button>
              <button disabled={busy || !chosen.length} onClick={doImport} className={`${btn} flex-1 ${(busy || !chosen.length) ? 'opacity-60' : ''}`}>
                {busy ? 'Importando…' : `Importar ${chosen.length} ${chosen.length === 1 ? 'viaje' : 'viajes'}`}
              </button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );

    return (
      <>
        <div className={`${cardCls} rounded-2xl p-4 shadow-sm border mb-5 border-orange-500/30`}>
          <p className={`text-sm font-bold ${tx}`}>Tenés {pending.length} {pending.length === 1 ? 'ahorro' : 'ahorros'} de tu app de inversiones</p>
          <p className={`text-xs mt-1 ${labelCls}`}>Podés convertirlos en viajes, con su meta, aportes y gastos, para manejar todo desde acá.</p>
          <div className="flex gap-2 mt-3">
            <button onClick={() => { setMsg(''); setOpen(true); }} className={btn}>Revisar e importar</button>
            <button onClick={hide} className={btn2}>Ahora no</button>
          </div>
        </div>
        {sheet}
      </>
    );
  };

  window.TripAhorrosImport = TripAhorrosImport;
  window.TripSavings = { calc, phaseOf, convertAhorro };
  window.TripSavingsCard = TripSavingsCard;
})();
