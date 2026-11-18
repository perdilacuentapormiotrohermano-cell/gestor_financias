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


  // ---------- Utilidades ----------
  const pad = (n) => String(n).padStart(2, '0');
  const fmt2 = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 2 });
  const fmt1 = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 1 });
  const cleanObj = (o) => JSON.parse(JSON.stringify(o));
  const byNum = (x, y) => x - y;
  const slug = (n) => {
    const s = String(n).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return s || 'activo';
  };
  // Acepta "1.234,56", "1234,56", "1234.56", "$ 1.234"
  const parseNum = (s) => {
    s = String(s == null ? '' : s).replace(/[$\s]/g, '');
    if (!s) return null;
    if (s.indexOf(',') >= 0) s = s.replace(/\./g, '').replace(',', '.');
    else if (/^-?\d{1,3}(\.\d{3})+$/.test(s)) s = s.replace(/\./g, '');
    const n = Number(s);
    return isFinite(n) ? n : NaN;
  };
  const numToText = (v) => String(v).replace('.', ',');
  const fdate = (f) => { const p = String(f).split('-'); return p.length === 3 ? `${p[2]}/${p[1]}/${p[0]}` : f; };
  const catIdx = (c) => { const i = CATS.findIndex((x) => x[0] === c); return i < 0 ? 99 : i; };
  const MESC = MES.map((m) => m.charAt(0).toUpperCase() + m.slice(1));

  // ---------- Modelo de datos (igual que la app de inversiones) ----------
  const soldIdx = (a) => {
    if (!a || !a.vendido) return null;
    const q = String(a.vendido).split('-');
    const yy = Number(q[0]), mm = Number(q[1]) - 1;
    return (isFinite(yy) && isFinite(mm)) ? yy * 12 + mm : null;
  };
  const soldYear = (a) => { const i = soldIdx(a); return i == null ? null : Math.floor(i / 12); };
  const heldIn = (a, m, y) => { const i = soldIdx(a); return i == null || (y * 12 + m) < i; };
  const monthVal = (a, m, y) => {
    if (!heldIn(a, m, y)) return null;
    const p = y + '-' + pad(m + 1);
    let best = null;
    (a.lecturas || []).forEach((r) => { if (r.f.indexOf(p) === 0 && (!best || r.f >= best.f)) best = r; });
    return best;
  };
  const hasReadings = (a, y) => (a.lecturas || []).some((r) => r.f.indexOf(y + '-') === 0);
  const visibleIn = (a, y) => {
    const sy = soldYear(a);
    if (sy != null && y > sy) return false;
    return (a.anios || []).indexOf(y) >= 0 || hasReadings(a, y);
  };
  const yearClose = (activos, y) => {
    const ids = Object.keys(activos);
    for (let m = 11; m >= 0; m--) {
      let t = null;
      ids.forEach((id) => { const r = monthVal(activos[id], m, y); if (r) t = (t || 0) + r.v; });
      if (t != null) return t;
    }
    return null;
  };
  const buildModel = (activos, aportesAll, year) => {
    const list = Object.keys(activos).map((id) => ({ ...cleanObj(activos[id]), id })).filter((a) => visibleIn(a, year));
    list.sort((a, b) => catIdx(a.categoria) - catIdx(b.categoria) || (a.orden || 0) - (b.orden || 0) || String(a.nombre).localeCompare(b.nombre));
    const vals = {}, totals = [], cats = {};
    for (let m = 0; m < 12; m++) totals.push(null);
    CATS.forEach((c) => { cats[c[0]] = totals.slice(); });
    list.forEach((a) => {
      vals[a.id] = [];
      for (let m = 0; m < 12; m++) {
        const r = monthVal(a, m, year);
        vals[a.id].push(r);
        if (r) {
          totals[m] = (totals[m] || 0) + r.v;
          if (cats[a.categoria]) cats[a.categoria][m] = (cats[a.categoria][m] || 0) + r.v;
        }
      }
    });
    const ya = aportesAll[year] || {};
    const apm = ya.m || {};
    const ap = [];
    for (let m = 0; m < 12; m++) { const v = apm[pad(m + 1)]; ap.push(typeof v === 'number' ? v : null); }
    const iniSet = typeof ya.inicio === 'number' ? ya.inicio : null;
    const iniAuto = yearClose(activos, year - 1);
    const ini = iniSet != null ? iniSet : iniAuto;
    const gains = totals.map((t, m) => {
      if (t == null) return null;
      const p = m === 0 ? ini : totals[m - 1];
      return p == null ? null : t - p - (ap[m] || 0);
    });
    let latest = -1;
    totals.forEach((t, m) => { if (t != null) latest = m; });
    return { list, vals, totals, cats, ap, ini, iniSet, iniAuto, gains, latest };
  };
  // Último valor cargado antes de ese mes (hasta 24 meses atrás)
  const prevReading = (a, m, y) => {
    for (let k = 1; k <= 24; k++) {
      let mm = m - k, yy = y;
      while (mm < 0) { mm += 12; yy--; }
      const r = monthVal(a, mm, yy);
      if (r) return { v: r.v, m: mm, y: yy };
    }
    return null;
  };
  const defaultDate = (m, y) => {
    const t = new Date();
    const cur = t.getFullYear() === y ? t.getMonth() : -1;
    if (m == null || m === cur) {
      if (t.getFullYear() < y) return y + '-01-01';
      if (t.getFullYear() > y) return y + '-12-31';
      return y + '-' + pad(t.getMonth() + 1) + '-' + pad(t.getDate());
    }
    return y + '-' + pad(m + 1) + '-' + pad(new Date(y, m + 1, 0).getDate());
  };

  // ---------- Piezas de interfaz ----------
  const Delta = ({ v, money: withMoney }) => {
    if (v == null) return <span className="opacity-50">—</span>;
    const cls = v > 0 ? 'text-green-500' : v < 0 ? 'text-red-500' : '';
    return <span className={cls}>{v > 0 ? '▲' : v < 0 ? '▼' : '●'} {withMoney ? '$ ' : ''}{fmt0.format(Math.abs(v))}</span>;
  };
  const pctText = (v) => (v == null || !isFinite(v)) ? '' : (v > 0 ? '+' : v < 0 ? '-' : '') + fmt1.format(Math.abs(v)) + ' %';

  const Sheet = ({ isDarkMode, title, subtitle, onClose, children }) => ReactDOM.createPortal(
    <div className={isDarkMode ? 'app-dark' : ''}>
      <div className="fixed inset-0 bg-black/60 z-[60] flex items-end sm:items-center justify-center" onClick={onClose}>
        <div onClick={(e) => e.stopPropagation()}
          className={`w-full sm:max-w-md max-h-[90vh] overflow-y-auto ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-gray-900'} rounded-t-3xl sm:rounded-3xl p-5 pb-8 shadow-xl`}>
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="min-w-0">
              <h3 className="font-bold text-lg truncate">{title}</h3>
              {subtitle && <p className={`text-xs mt-0.5 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>{subtitle}</p>}
            </div>
            <button onClick={onClose} aria-label="Cerrar"
              className={`${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-gray-100 text-gray-600'} w-8 h-8 rounded-full text-xl leading-none shrink-0`}>×</button>
          </div>
          {children}
        </div>
      </div>
    </div>,
    document.body
  );

  // Valor de un activo en un mes: se toca, se escribe y Enter
  const ValueCell = ({ value, isDarkMode, label, onCommit }) => {
    const [editing, setEditing] = useState(false);
    const [txt, setTxt] = useState('');
    const done = useRef(false);
    const start = () => { done.current = false; setTxt(value != null ? numToText(value) : ''); setEditing(true); };
    const finish = (cancel) => {
      if (done.current) return;
      done.current = true;
      setEditing(false);
      if (!cancel) onCommit(txt.trim());
    };
    if (editing) {
      return (
        <input autoFocus inputMode="decimal" autoComplete="off" aria-label={label} value={txt}
          onChange={(e) => setTxt(e.target.value)}
          onFocus={(e) => e.target.select()}
          onBlur={() => finish(false)}
          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); finish(false); } else if (e.key === 'Escape') finish(true); }}
          className={`${isDarkMode ? 'bg-slate-800 border-blue-500 text-white' : 'bg-white border-blue-500 text-gray-900'} w-32 text-right border-2 rounded-lg px-2 py-1 text-sm font-semibold outline-none`} />
      );
    }
    return (
      <button onClick={start} aria-label={label}
        className={`${value == null ? (isDarkMode ? 'text-slate-500' : 'text-gray-400') : (isDarkMode ? 'text-white' : 'text-gray-900')} text-sm font-semibold px-2 py-1 rounded-lg min-w-[5rem] text-right ${isDarkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}`}>
        {value == null ? '—' : '$ ' + fmt2.format(value)}
      </button>
    );
  };

  const fieldCls = (dark) => `${dark ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} w-full border rounded-xl p-3 text-base outline-none focus:border-blue-500`;
  const lblCls = (dark) => `block text-xs font-bold uppercase tracking-wider mb-1 ${dark ? 'text-slate-400' : 'text-gray-500'}`;


  // ---------- Resumen, gráficos y comparación entre años ----------
  const compact = (v) => {
    if (v >= 1e6) return fmt1.format(v / 1e6).replace(',0', '') + ' M';
    if (v >= 1e3) return fmt0.format(Math.round(v / 1e3)) + ' mil';
    return fmt0.format(v);
  };
  const shortMoney = (v) => {
    const a = Math.abs(v);
    if (a >= 1e6) return '$ ' + fmt1.format(v / 1e6) + ' M';
    if (a >= 1e3) return '$ ' + fmt0.format(v / 1e3) + ' mil';
    return '$ ' + fmt0.format(v);
  };
  const niceMax = (v) => {
    if (v <= 0) return 1;
    const e = Math.pow(10, Math.floor(Math.log10(v))), n = v / e;
    return (n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10) * e;
  };
  const niceTicks = (max) => {
    const raw = max / 4, pw = Math.pow(10, Math.floor(Math.log10(raw))), f = raw / pw;
    const st = (f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10) * pw, out = [];
    for (let v = 0; v <= max + st * 0.999; v += st) { out.push(v); if (out.length > 8) break; }
    return out;
  };
  const palette = (dark) => dark
    ? { c: ['#3987e5', '#d95926', '#199e70', '#c98500', '#d55181', '#2f9e44', '#9085e9', '#e66767'], muted: '#64748b', line: '#334155', label: '#94a3b8', ink: '#f8fafc', surface: '#0f172a' }
    : { c: ['#2a78d6', '#eb6834', '#1baf7a', '#eda100', '#e87ba4', '#008300', '#6250d6', '#e34948'], muted: '#9ca3af', line: '#e5e7eb', label: '#6b7280', ink: '#111827', surface: '#ffffff' };

  // Total de cada mes de un año, sumando todos los activos
  const yearTotals = (activos, y) => {
    const ids = Object.keys(activos), totals = [];
    for (let m = 0; m < 12; m++) {
      let t = null;
      ids.forEach((id) => { const r = monthVal(activos[id], m, y); if (r) t = (t || 0) + r.v; });
      totals.push(t);
    }
    return totals;
  };
  const yearStats = (activos, aportesAll, y) => {
    const totals = yearTotals(activos, y);
    const d = aportesAll[y] || {}, ap = d.m || {};
    const ini = typeof d.inicio === 'number' ? d.inicio : yearClose(activos, y - 1);
    let latest = -1;
    totals.forEach((t, i) => { if (t != null) latest = i; });
    if (latest < 0) return null;
    let gain = 0, base = null, from = -1, apSum = 0, apAny = false;
    Object.keys(ap).forEach((k) => { if (typeof ap[k] === 'number') { apSum += ap[k]; apAny = true; } });
    for (let m = 0; m <= latest; m++) {
      const t = totals[m]; if (t == null) continue;
      const p = m === 0 ? ini : totals[m - 1]; if (p == null) continue;
      const a = typeof ap[pad(m + 1)] === 'number' ? ap[pad(m + 1)] : 0;
      if (from < 0) { from = m; base = p; }
      gain += t - p - a; base += a;
    }
    return { y, cierre: totals[latest], latest, aportado: apSum, hasAp: apAny, ganancia: from < 0 ? null : gain, from, pct: (from < 0 || !(base > 0)) ? null : gain / base * 100 };
  };
  // Serie de todos los años: valor y "lo que fuiste poniendo" acumulado
  const seriesAll = (activos, aportesAll, years) => {
    const pts = []; let cum = 0, started = false;
    years.forEach((y) => {
      const totals = yearTotals(activos, y), ap = (aportesAll[y] || {}).m || {};
      for (let m = 0; m < 12; m++) {
        const t = totals[m], a = typeof ap[pad(m + 1)] === 'number' ? ap[pad(m + 1)] : 0;
        if (t == null) { if (started) cum += a; continue; }
        if (!started) { started = true; cum = t; } else cum += a;
        pts.push({ y, m, t, c: cum });
      }
    });
    return pts;
  };

  const ChartTip = ({ left, align, children, dark }) => (
    <div className={`${dark ? 'bg-slate-800 border-slate-700 text-slate-100' : 'bg-white border-gray-200 text-gray-900'} absolute top-0 z-10 border rounded-xl shadow-lg px-3 py-2 text-xs pointer-events-none whitespace-nowrap space-y-0.5`}
      style={{ left: `${left}%`, transform: `translateX(${align})` }}>{children}</div>
  );
  const tipAlign = (i, n) => (i < n * 0.2 ? '-10%' : i > n * 0.8 ? '-90%' : '-50%');
  const TipRow = ({ k, children }) => <div className="flex justify-between gap-4"><span className="opacity-70">{k}</span><span className="font-semibold">{children}</span></div>;

  // Gráfico del año: valor total por mes y aportes acumulados
  const YearChart = ({ model, pal, isDarkMode }) => {
    const [hi, setHi] = useState(null);
    const ref = useRef(null);
    if (model.latest < 0) return <p className="text-xs opacity-60">El gráfico aparece cuando cargues el primer valor.</p>;
    const W = 360, H = 250, l = 50, r = 14, t = 18, b = 28;
    const acc = []; let run = 0, any = false;
    model.ap.forEach((v, m) => { if (v != null) { run += v; any = true; } acc.push(m <= model.latest ? run : null); });
    const maxV = Math.max(...model.totals.filter((x) => x != null), any ? run : 0);
    const ymax = niceMax(maxV * 1.05), step = (W - l - r) / 11;
    const X = (i) => l + i * step, Y = (v) => t + (H - t - b) * (1 - v / ymax);
    const path = (arr) => { let d = '', pen = false; arr.forEach((v, i) => { if (v == null) { pen = false; return; } d += (pen ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1) + ' '; pen = true; }); return d; };
    const move = (e) => {
      const rc = ref.current.getBoundingClientRect();
      if (!rc.width) return;
      const x = (e.clientX - rc.left) / rc.width * W;
      const i = Math.max(0, Math.min(11, Math.round((x - l) / step)));
      setHi(model.totals[i] == null ? null : i);
    };
    const AB = MES.map((m) => m.slice(0, 3));
    return (
      <div>
        <div className="flex gap-4 text-xs mb-2" style={{ color: pal.label }}>
          <span className="flex items-center gap-1.5"><i className="inline-block w-3 h-0.5 rounded" style={{ background: pal.c[0] }} />Valor total del mes</span>
          {any && <span className="flex items-center gap-1.5"><i className="inline-block w-3 h-0.5 rounded" style={{ background: pal.c[1] }} />Aportes acumulados</span>}
        </div>
        <div className="relative" ref={ref} style={{ touchAction: 'pan-y' }} onPointerMove={move} onPointerDown={move} onPointerLeave={() => setHi(null)}>
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block" role="img" aria-label="Valor total por mes">
            {[0, 1, 2, 3, 4].map((k) => { const v = ymax * k / 4, y = Y(v); return (
              <g key={k}><line x1={l} x2={W - r} y1={y} y2={y} stroke={pal.line} strokeWidth="1" /><text x={l - 8} y={y + 4} textAnchor="end" fontSize="11" fill={pal.label}>{compact(v)}</text></g>
            ); })}
            {AB.map((a, i) => <text key={i} x={X(i)} y={H - 8} textAnchor="middle" fontSize="11" fill={i === model.latest ? pal.ink : pal.label}>{a}</text>)}
            {any && <path d={path(acc)} fill="none" stroke={pal.c[1]} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />}
            <path d={path(model.totals)} fill="none" stroke={pal.c[0]} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            {model.totals.map((v, i) => v != null && <circle key={i} cx={X(i)} cy={Y(v)} r="3.5" fill={pal.c[0]} stroke={pal.surface} strokeWidth="2" />)}
            {any && acc[model.latest] != null && <circle cx={X(model.latest)} cy={Y(acc[model.latest])} r="3.5" fill={pal.c[1]} stroke={pal.surface} strokeWidth="2" />}
            <text x={model.latest > 9 ? X(model.latest) - 8 : X(model.latest)} y={Y(model.totals[model.latest]) - 11} textAnchor={model.latest > 9 ? 'end' : 'middle'} fontSize="12" fontWeight="600" fill={pal.ink}>{compact(model.totals[model.latest])}</text>
            {hi != null && <line x1={X(hi)} x2={X(hi)} y1={t} y2={H - b} stroke={pal.muted} strokeWidth="1" />}
          </svg>
          {hi != null && (
            <ChartTip dark={isDarkMode} left={X(hi) / W * 100} align={tipAlign(hi, 12)}>
              <b>{MESC[hi]}</b>
              <TipRow k="Total">{money(model.totals[hi])}</TipRow>
              {acc[hi] != null && acc[hi] > 0 && <TipRow k="Aportado">{money(acc[hi])}</TipRow>}
              {model.gains[hi] != null && <TipRow k="Rindieron"><Delta v={model.gains[hi]} money /></TipRow>}
            </ChartTip>
          )}
        </div>
      </div>
    );
  };

  // Torta: dónde está la plata en el último mes con datos
  const CompDonut = ({ model, pal, isDarkMode }) => {
    const [hi, setHi] = useState(null);
    if (model.latest < 0) return null;
    const L = model.latest, tot = model.totals[L];
    let items = model.list.map((a) => { const r = model.vals[a.id][L]; return r ? { n: a.nombre, v: r.v } : null; }).filter(Boolean).sort((x, y) => y.v - x.v);
    if (!items.length || !(tot > 0)) return null;
    const cs = CATS.map((c) => { const v = model.cats[c[0]][L]; return v ? `${c[1]} ${fmt1.format(v / tot * 100)} %` : null; }).filter(Boolean).join(' · ');
    if (items.length > 8) {
      const rest = items.slice(7); let sum = 0; rest.forEach((x) => { sum += x.v; });
      items = items.slice(0, 7); items.push({ n: `Otros (${rest.length})`, v: sum, other: true });
    }
    const R = 100, r = 62, cx = 110, cy = 110; let ang = -Math.PI / 2;
    const paths = items.map((x, i) => {
      const f = x.v / tot, col = x.other ? pal.muted : pal.c[i % pal.c.length]; let d;
      if (f >= 0.9999) {
        d = `M${cx} ${cy - R}A${R} ${R} 0 1 1 ${cx} ${cy + R}A${R} ${R} 0 1 1 ${cx} ${cy - R}ZM${cx} ${cy - r}A${r} ${r} 0 1 0 ${cx} ${cy + r}A${r} ${r} 0 1 0 ${cx} ${cy - r}Z`;
      } else {
        const a2 = ang + f * 2 * Math.PI, lg = f > 0.5 ? 1 : 0, c = Math.cos, s = Math.sin;
        d = `M${(cx + R * c(ang)).toFixed(2)} ${(cy + R * s(ang)).toFixed(2)}A${R} ${R} 0 ${lg} 1 ${(cx + R * c(a2)).toFixed(2)} ${(cy + R * s(a2)).toFixed(2)}L${(cx + r * c(a2)).toFixed(2)} ${(cy + r * s(a2)).toFixed(2)}A${r} ${r} 0 ${lg} 0 ${(cx + r * c(ang)).toFixed(2)} ${(cy + r * s(ang)).toFixed(2)}Z`;
        ang = a2;
      }
      return { d, col, x, f };
    });
    return (
      <div className="space-y-3">
        <p className="text-xs" style={{ color: pal.label }}>{cs}</p>
        <svg viewBox="0 0 220 220" className="w-48 h-48 mx-auto block" role="img" aria-label="Reparto del valor total por activo">
          {paths.map((p, i) => (
            <path key={i} d={p.d} fill={p.col} fillRule="evenodd" stroke={pal.surface} strokeWidth="2"
              opacity={hi != null && hi !== i ? 0.35 : 1} onClick={() => setHi(hi === i ? null : i)} style={{ cursor: 'pointer' }}>
              <title>{p.x.n}: {fmt1.format(p.f * 100)} % · {money(p.x.v)}</title>
            </path>
          ))}
          <text x="110" y="104" textAnchor="middle" fontSize="11" fill={pal.label}>{hi != null ? paths[hi].x.n : 'Total'}</text>
          <text x="110" y="124" textAnchor="middle" fontSize="15" fontWeight="600" fill={pal.ink}>{money(hi != null ? paths[hi].x.v : tot)}</text>
        </svg>
        <ul className="space-y-1.5">
          {paths.map((p, i) => (
            <li key={i} onClick={() => setHi(hi === i ? null : i)}
              className="flex items-center gap-2 text-sm cursor-pointer" style={{ opacity: hi != null && hi !== i ? 0.45 : 1 }}>
              <i className="inline-block w-3 h-3 rounded-sm shrink-0" style={{ background: p.col }} />
              <span className="flex-1 min-w-0 truncate font-medium">{p.x.n}</span>
              <span className="text-xs shrink-0" style={{ color: pal.label }}>{fmt1.format(p.f * 100)} % · {money(p.x.v)}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Evolución de todos los años: lo que tenés vs. lo que fuiste poniendo
  const EvoChart = ({ pts, pal, isDarkMode }) => {
    const [hi, setHi] = useState(null);
    const ref = useRef(null);
    const n = pts.length;
    const W = 360, H = 250, pl = 58, pr = 12, pt = 14, pb = 34, iw = W - pl - pr, ih = H - pt - pb;
    let max = 0; pts.forEach((p) => { max = Math.max(max, p.t, p.c); });
    const tk = niceTicks(max * 1.05), top = tk[tk.length - 1] || 1;
    const X = (i) => pl + (n === 1 ? 0 : i / (n - 1) * iw), Y = (v) => pt + ih - v / top * ih;
    const dT = pts.map((p, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(p.t).toFixed(1)).join('');
    const dC = pts.map((p, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(p.c).toFixed(1)).join('');
    const area = dT + 'L' + X(n - 1).toFixed(1) + ' ' + (pt + ih) + 'L' + X(0).toFixed(1) + ' ' + (pt + ih) + 'Z';
    const lp = pts[n - 1], gap = lp.t - lp.c;
    const move = (e) => {
      const rc = ref.current.getBoundingClientRect();
      if (!rc.width) return;
      const x = (e.clientX - rc.left) / rc.width * W;
      setHi(Math.max(0, Math.min(n - 1, Math.round((x - pl) / iw * (n - 1)))));
    };
    let lastY = null;
    return (
      <div className="space-y-3">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs" style={{ color: pal.label }}>
          <span className="flex items-center gap-1.5"><i className="inline-block w-3 h-0.5 rounded" style={{ background: pal.c[0] }} />Lo que tenés ({money(lp.t)})</span>
          <span className="flex items-center gap-1.5"><i className="inline-block w-3 border-t-2 border-dashed" style={{ borderColor: pal.c[1] }} />Lo que fuiste poniendo ({money(lp.c)})</span>
        </div>
        <div className="relative" ref={ref} style={{ touchAction: 'pan-y' }} onPointerMove={move} onPointerDown={move} onPointerLeave={() => setHi(null)}>
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block" role="img" aria-label="Evolución del valor total y de lo aportado, mes a mes">
            {tk.map((v) => <g key={v}><line x1={pl} x2={W - pr} y1={Y(v)} y2={Y(v)} stroke={pal.line} strokeWidth="1" /><text x={pl - 8} y={Y(v) + 4} textAnchor="end" fontSize="11" fill={pal.label}>{shortMoney(v)}</text></g>)}
            {pts.map((p, i) => {
              if (p.y === lastY) return null;
              lastY = p.y; const x = X(i);
              return <g key={'y' + p.y}><line x1={x} x2={x} y1={pt} y2={pt + ih} stroke={pal.line} strokeWidth="1" strokeDasharray="2 4" /><text x={x + 4} y={H - 12} fontSize="11" fill={pal.label}>{p.y}</text></g>;
            })}
            <path d={area} fill={pal.c[0]} opacity="0.1" />
            <path d={dC} fill="none" stroke={pal.c[1]} strokeWidth="2.5" strokeDasharray="6 5" strokeLinejoin="round" strokeLinecap="round" />
            <path d={dT} fill="none" stroke={pal.c[0]} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            <circle cx={X(n - 1)} cy={Y(lp.t)} r="4.5" fill={pal.c[0]} stroke={pal.surface} strokeWidth="2" />
            <circle cx={X(n - 1)} cy={Y(lp.c)} r="4" fill={pal.c[1]} stroke={pal.surface} strokeWidth="2" />
            {hi != null && <line x1={X(hi)} x2={X(hi)} y1={pt} y2={pt + ih} stroke={pal.muted} strokeWidth="1" />}
          </svg>
          {hi != null && (
            <ChartTip dark={isDarkMode} left={X(hi) / W * 100} align={tipAlign(hi, n)}>
              <b>{MESC[pts[hi].m]} {pts[hi].y}</b>
              <TipRow k="Tenés">{money(pts[hi].t)}</TipRow>
              <TipRow k="Pusiste">{money(pts[hi].c)}</TipRow>
              <TipRow k="Diferencia"><Delta v={pts[hi].t - pts[hi].c} money /></TipRow>
            </ChartTip>
          )}
        </div>
        <p className="text-xs" style={{ color: pal.label }}>
          La diferencia entre las dos líneas es lo que ganaron (o perdieron) tus inversiones: hoy {gap >= 0 ? 'son ' : 'son −'}
          <b className={gap >= 0 ? 'text-green-500' : 'text-red-500'}>{money(Math.abs(gap))}</b>. «Lo que fuiste poniendo» arranca con lo que tenías el primer mes cargado y le suma tus aportes. Tocá el gráfico para ver cada mes.
        </p>
      </div>
    );
  };

  // ---------- Hoja: un activo (nombre, tipo, valores, vendido, eliminar) ----------
  const AssetSheet = ({ isDarkMode, asset, year, years, onClose, writeAsset, deleteAsset, toastUndo, notify, btn, btn2 }) => {
    const a = asset;
    const [name, setName] = useState(a.nombre);
    const [sellM, setSellM] = useState(year === new Date().getFullYear() ? new Date().getMonth() : 11);
    const [sellY, setSellY] = useState(year);
    const [sure, setSure] = useState(false);
    const txt = isDarkMode ? 'text-white' : 'text-gray-900';
    const sub = isDarkMode ? 'text-slate-400' : 'text-gray-500';
    const L = (a.lecturas || []).filter((r) => r.f.indexOf(year + '-') === 0).slice().reverse();
    const yrs = years.filter((y) => visibleIn(a, y));
    const sIdx = soldIdx(a);
    const sLbl = sIdx != null ? `${MES[sIdx % 12]} ${Math.floor(sIdx / 12)}` : '';

    const saveName = () => {
      const n = name.trim();
      if (!n) { setName(a.nombre); return; }
      if (n !== a.nombre) writeAsset(a.id, { ...a, nombre: n });
    };
    const delReading = (f) => writeAsset(a.id, { ...a, lecturas: (a.lecturas || []).filter((r) => r.f !== f) });
    const sell = () => {
      const old = { ...a };
      writeAsset(a.id, { ...a, vendido: sellY + '-' + pad(sellM + 1) });
      onClose();
      toastUndo(`«${a.nombre}» vendido desde ${MES[sellM]} ${sellY}`, () => writeAsset(a.id, old));
    };
    const unsell = () => {
      const old = { ...a };
      const o = { ...a }; delete o.vendido;
      writeAsset(a.id, o);
      onClose();
      toastUndo(`«${a.nombre}» volvió a tu cartera`, () => writeAsset(a.id, old));
    };
    const remove = () => {
      if (!sure) { setSure(true); return; }
      deleteAsset(a.id);
      onClose();
      notify('Se eliminó el activo');
    };

    return (
      <Sheet isDarkMode={isDarkMode} title={a.nombre} subtitle={`Aparece en: ${yrs.length ? yrs.join(', ') : 'ningún año'}.${sLbl ? ' Vendido desde ' + sLbl + '.' : ''}`} onClose={onClose}>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={lblCls(isDarkMode)}>Nombre</label>
              <input value={name} maxLength={40} onChange={(e) => setName(e.target.value)} onBlur={saveName} className={fieldCls(isDarkMode)} />
            </div>
            <div>
              <label className={lblCls(isDarkMode)}>Tipo</label>
              <select value={a.categoria} onChange={(e) => writeAsset(a.id, { ...a, categoria: e.target.value })} className={fieldCls(isDarkMode)}>
                {CATS.map((c) => <option key={c[0]} value={c[0]}>{c[1]}</option>)}
              </select>
            </div>
          </div>

          <div>
            <p className={lblCls(isDarkMode)}>Valores cargados en {year}</p>
            {!L.length && <p className={`text-xs ${sub}`}>No hay valores en este año.</p>}
            <div className="space-y-1">
              {L.map((r) => (
                <div key={r.f} className="flex items-center justify-between text-sm">
                  <span className={txt}>{fdate(r.f)} · <b>$ {fmt2.format(r.v)}</b></span>
                  <button onClick={() => delReading(r.f)} className="text-xs font-bold text-red-500 px-2 py-1">Borrar</button>
                </div>
              ))}
            </div>
            <p className={`text-xs mt-2 ${sub}`}>Para cambiar un valor, cerrá esta ventana y tocalo en el mes.</p>
          </div>

          {sLbl ? (
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'} rounded-xl p-3 space-y-2`}>
              <p className={`text-sm font-bold ${txt}`}>Vendido</p>
              <p className={`text-xs ${sub}`}>Desde {sLbl} ya no suma al total y no aparece en los años siguientes. Conservás todo su historial.</p>
              <button onClick={unsell} className={btn2}>Volver a tenerlo</button>
            </div>
          ) : (
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-gray-50'} rounded-xl p-3 space-y-3`}>
              <div>
                <p className={`text-sm font-bold ${txt}`}>¿Lo vendiste?</p>
                <p className={`text-xs mt-1 ${sub}`}>Desde el mes que elijas deja de sumar al total y no aparece en los años siguientes. Si sacaste esa plata de tus inversiones, escribila en negativo en «Pusiste este mes», así la ganancia no sale como pérdida.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <select value={sellM} onChange={(e) => setSellM(Number(e.target.value))} className={fieldCls(isDarkMode)}>
                  {MESC.map((n, i) => <option key={i} value={i}>{n}</option>)}
                </select>
                <select value={sellY} onChange={(e) => setSellY(Number(e.target.value))} className={fieldCls(isDarkMode)}>
                  {years.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
              <button onClick={sell} className={btn2}>Marcar como vendido</button>
            </div>
          )}

          <div className="flex gap-2 pt-1">
            <button onClick={remove} className={`flex-1 border border-red-500/40 text-red-500 font-bold py-2.5 rounded-xl text-sm ${sure ? 'bg-red-500/10' : ''}`}>
              {sure ? 'Tocá otra vez para eliminar' : 'Eliminar de todos los años'}
            </button>
            <button onClick={onClose} className={btn}>Listo</button>
          </div>
        </div>
      </Sheet>
    );
  };

  // ---------- Hoja: qué activos tenías este año + agregar uno nuevo ----------
  const ActivosSheet = ({ isDarkMode, activos, year, onClose, applyOps, notify, btn, btn2 }) => {
    const [checks, setChecks] = useState({});
    const [newName, setNewName] = useState('');
    const [newCat, setNewCat] = useState(CATS[0][0]);
    const [msg, setMsg] = useState('');
    const txt = isDarkMode ? 'text-white' : 'text-gray-900';
    const sub = isDarkMode ? 'text-slate-400' : 'text-gray-500';
    const list = Object.keys(activos).map((id) => ({ id, a: activos[id] }))
      .sort((x, y) => catIdx(x.a.categoria) - catIdx(y.a.categoria) || (x.a.orden || 0) - (y.a.orden || 0) || String(x.a.nombre).localeCompare(String(y.a.nombre)));
    const copiables = list.filter((x) => visibleIn(x.a, year - 1) && !visibleIn(x.a, year) && !(soldYear(x.a) != null && soldYear(x.a) < year));

    const isOn = (x) => (x.id in checks ? checks[x.id] : visibleIn(x.a, year));
    const withYear = (a, on) => {
      const ys = (a.anios || []).filter((y) => y !== year);
      if (on) ys.push(year);
      return { ...a, anios: ys.sort(byNum) };
    };
    const copyPrev = () => {
      const ops = copiables.map((x) => ({ type: 'set', col: 'activos', id: x.id, obj: withYear(x.a, true) }));
      applyOps(ops);
      onClose();
      notify(ops.length ? `Se agregaron ${ops.length} activos a ${year}` : 'No había activos para copiar');
    };
    const save = () => {
      const ops = [];
      list.forEach((x) => {
        if (!(x.id in checks) || hasReadings(x.a, year)) return;
        const has = (x.a.anios || []).indexOf(year) >= 0;
        if (checks[x.id] === has) return;
        ops.push({ type: 'set', col: 'activos', id: x.id, obj: withYear(x.a, checks[x.id]) });
      });
      const n = newName.trim();
      if (n) {
        let id = slug(n); const base = id; let k = 2;
        while (activos[id]) id = base + '-' + (k++);
        let orden = 0;
        Object.keys(activos).forEach((i) => { const a = activos[i]; if (a.categoria === newCat && (a.orden || 0) > orden) orden = a.orden; });
        ops.push({ type: 'set', col: 'activos', id, obj: { nombre: n, categoria: newCat, orden: orden + 1, lecturas: [], anios: [year] } });
      }
      if (ops.length) applyOps(ops);
      onClose();
      notify(ops.length ? 'Cambios guardados' : 'No hubo cambios');
    };

    return (
      <Sheet isDarkMode={isDarkMode} title={`Activos de ${year}`} subtitle={`Tildá los que tenías en ${year}. Los que no tildes no aparecen en este año.`} onClose={onClose}>
        <div className="space-y-4">
          {!list.length && <p className={`text-sm ${sub}`}>Todavía no cargaste ningún activo.</p>}
          {copiables.length > 0 && (
            <button onClick={copyPrev} className={btn2}>Copiar {copiables.length} {copiables.length === 1 ? 'activo' : 'activos'} de {year - 1}</button>
          )}
          {CATS.map((c) => {
            const rows = list.filter((x) => x.a.categoria === c[0] && !(soldYear(x.a) != null && soldYear(x.a) < year));
            if (!rows.length) return null;
            return (
              <div key={c[0]}>
                <p className={lblCls(isDarkMode)}>{c[1]}</p>
                <div className="space-y-1">
                  {rows.map((x) => {
                    const has = hasReadings(x.a, year);
                    return (
                      <label key={x.id} className="flex items-center gap-3 py-1.5">
                        <input type="checkbox" className="w-5 h-5 accent-blue-600" checked={isOn(x)} disabled={has}
                          onChange={(e) => setChecks((s) => ({ ...s, [x.id]: e.target.checked }))} />
                        <span className={`text-sm font-medium ${txt}`}>{x.a.nombre}</span>
                        {has && <span className={`text-[10px] ${sub}`}>tiene valores en {year}</span>}
                        {!has && soldIdx(x.a) != null && <span className={`text-[10px] ${sub}`}>vendido en {MES[soldIdx(x.a) % 12]} {Math.floor(soldIdx(x.a) / 12)}</span>}
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <div>
            <p className={lblCls(isDarkMode)}>Agregar un activo nuevo</p>
            <div className="grid grid-cols-2 gap-3">
              <input value={newName} maxLength={40} placeholder="Ej.: Meli" onChange={(e) => setNewName(e.target.value)} className={fieldCls(isDarkMode)} />
              <select value={newCat} onChange={(e) => setNewCat(e.target.value)} className={fieldCls(isDarkMode)}>
                {CATS.map((c) => <option key={c[0]} value={c[0]}>{c[1]}</option>)}
              </select>
            </div>
            <p className={`text-xs mt-2 ${sub}`}>Se agrega a {year}. Después cargale el valor tocándolo en el mes.</p>
          </div>
          {msg && <p className="text-xs text-orange-500 font-medium">{msg}</p>}
          <div className="flex gap-2">
            <button onClick={onClose} className={btn2}>Cancelar</button>
            <button onClick={save} className={btn}>Guardar</button>
          </div>
        </div>
      </Sheet>
    );
  };

  // ---------- Hoja: "Cargar el mes" paso a paso ----------
  const MonthWizard = ({ isDarkMode, activos, aportesAll, year, initialMonth, onClose, writeAsset, writeAporte, notify, btn, btn2 }) => {
    const [m, setM] = useState(initialMonth);
    const [i, setI] = useState(0);
    const [saved, setSaved] = useState(0);
    const [txt, setTxt] = useState('');
    const [apTxt, setApTxt] = useState('');
    const [msg, setMsg] = useState('');
    const model = useMemo(() => buildModel(activos, aportesAll, year), [activos, aportesAll, year]);
    const ids = useMemo(() => model.list.filter((a) => heldIn(a, m, year)).map((a) => a.id), [model.list, m, year]);
    const n = ids.length;
    const fin = i >= n;
    const curId = ids[i];
    const a = !fin ? activos[curId] : null;
    const dark = isDarkMode;
    const tx = dark ? 'text-white' : 'text-gray-900';
    const sub = dark ? 'text-slate-400' : 'text-gray-500';

    // Al cambiar de activo o de mes, se precarga el valor ya cargado
    useEffect(() => {
      setMsg('');
      if (a) { const r = monthVal(a, m, year); setTxt(r ? numToText(r.v) : ''); }
    }, [i, m, curId]);
    useEffect(() => {
      if (fin) { const v = model.ap[m]; setApTxt(typeof v === 'number' ? numToText(v) : ''); }
    }, [fin, m]);

    const pv = a ? prevReading(a, m, year) : null;
    const num = txt.trim() ? parseNum(txt) : null;
    const diff = (num != null && num >= 0 && pv && pv.v > 0) ? num - pv.v : null;

    const commit = (rawTxt) => {
      const raw = rawTxt.trim();
      if (!raw) return true;
      const v = parseNum(raw);
      if (!(v >= 0)) { setMsg('Escribí un número válido'); return false; }
      if (!a) return true;
      const r = monthVal(a, m, year);
      if (!r || Math.abs(r.v - v) > 1e-9) {
        const f = r ? r.f : defaultDate(m, year);
        const lect = (a.lecturas || []).filter((x) => x.f !== f).concat([{ f, v }]).sort((x, y) => (x.f < y.f ? -1 : x.f > y.f ? 1 : 0));
        writeAsset(curId, { ...a, lecturas: lect });
        setSaved((s) => s + 1);
      }
      return true;
    };
    const next = (rawTxt) => { if (commit(rawTxt)) setI((x) => x + 1); };
    const same = () => { if (pv) next(numToText(pv.v)); };
    const save = () => {
      const raw = apTxt.trim();
      if (raw) {
        const v = parseNum(raw);
        if (!isFinite(v)) { setMsg('Escribí un número válido'); return; }
        const key = pad(m + 1);
        const ya = aportesAll[year] || {};
        const mm = { ...(ya.m || {}) };
        if (mm[key] !== v) { mm[key] = v; writeAporte(year, { m: mm, inicio: typeof ya.inicio === 'number' ? ya.inicio : null }); }
      }
      onClose();
      notify(`Listo: cargaste ${saved} ${saved === 1 ? 'valor' : 'valores'} de ${MES[m]}`);
    };

    const tot = model.totals[m];
    const pt = m === 0 ? model.ini : model.totals[m - 1];
    const missing = ids.filter((id) => !monthVal(activos[id], m, year)).map((id) => activos[id].nombre);

    return (
      <Sheet isDarkMode={dark} title="Cargar el mes" subtitle={`${MESC[m]} ${year}`} onClose={onClose}>
        {!n ? (
          <div className="space-y-4">
            <p className={`text-sm ${sub}`}>No hay activos para cargar en {MES[m]}.</p>
            <button onClick={onClose} className={btn}>Cerrar</button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className={`${dark ? 'bg-slate-800' : 'bg-gray-100'} h-1.5 rounded-full overflow-hidden`}>
              <div className="bg-blue-600 h-full transition-all" style={{ width: `${Math.min(i, n) / n * 100}%` }} />
            </div>
            {i === 0 && (
              <div>
                <label className={lblCls(dark)}>Mes</label>
                <select value={m} onChange={(e) => { setM(Number(e.target.value)); setI(0); }} className={fieldCls(dark)}>
                  {MESC.map((x, k) => <option key={k} value={k}>{x}</option>)}
                </select>
              </div>
            )}
            {!fin ? (
              <>
                <div className={`${dark ? 'bg-slate-800' : 'bg-gray-50'} rounded-2xl p-4 space-y-3`}>
                  <div className={`flex justify-between text-xs ${sub}`}>
                    <span className="font-bold uppercase tracking-wider">{(CATS.find((c) => c[0] === a.categoria) || ['', ''])[1]}</span>
                    <span>{i + 1} de {n}</span>
                  </div>
                  <p className={`text-xl font-bold ${tx}`}>{a.nombre}</p>
                  <p className={`text-xs ${sub}`}>{pv ? <>{MESC[pv.m]}{pv.y !== year ? ' ' + pv.y : ''}: <b>$ {fmt2.format(pv.v)}</b></> : 'Todavía no tiene valores de meses anteriores'}</p>
                  <input autoFocus inputMode="decimal" autoComplete="off" placeholder="$ 0" value={txt}
                    aria-label={`Valor de ${a.nombre} en ${MES[m]}`}
                    onChange={(e) => { setTxt(e.target.value); setMsg(''); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); next(txt); } }}
                    className={`${fieldCls(dark)} text-2xl font-bold text-center`} />
                  <p className="text-xs min-h-[1rem] text-center" aria-live="polite">
                    {diff != null && <><Delta v={diff} money /> · <span className={diff > 0 ? 'text-green-500' : diff < 0 ? 'text-red-500' : ''}>{pctText(diff / pv.v * 100)}</span> <span className={sub}>respecto de {MES[pv.m]}</span></>}
                  </p>
                  {msg && <p className="text-xs text-orange-500 font-medium text-center">{msg}</p>}
                  {pv && <button onClick={same} className={`${btn2} w-full`}>Mismo valor que en {MES[pv.m]}</button>}
                </div>
                <div className="flex gap-2">
                  <button disabled={i === 0} onClick={() => setI((x) => Math.max(0, x - 1))} className={`${btn2} ${i === 0 ? 'opacity-40' : ''}`}>‹ Anterior</button>
                  <button onClick={() => setI((x) => x + 1)} className={btn2}>Saltar</button>
                  <button onClick={() => next(txt)} className={`${btn} flex-1`}>{i === n - 1 ? 'Ver resumen ›' : 'Siguiente ›'}</button>
                </div>
                <p className={`text-xs ${sub}`}>Escribí el valor y apretá Enter para pasar al siguiente. «Saltar» deja ese activo como está.</p>
              </>
            ) : (
              <div className="space-y-4">
                <div className="text-center space-y-1">
                  <p className={`text-3xl font-bold ${tx}`}>{tot == null ? '—' : money(tot)}</p>
                  <p className={`text-xs ${sub}`}>Total de {MES[m]}</p>
                  {tot != null && pt > 0 && <p className="text-xs"><Delta v={tot - pt} money /> · {pctText((tot - pt) / pt * 100)} <span className={sub}>respecto del mes anterior</span></p>}
                  <p className={`text-xs ${sub}`}>Cargaste {saved} {saved === 1 ? 'valor' : 'valores'} en esta vuelta.</p>
                </div>
                {missing.length > 0 && <p className="text-xs text-orange-500 font-medium">Sin valor en {MES[m]}: <b>{missing.join(', ')}</b>. El total puede verse más bajo de lo real.</p>}
                <div>
                  <label className={lblCls(dark)}>Pusiste este mes (opcional)</label>
                  <input inputMode="decimal" autoComplete="off" placeholder="$ 0" value={apTxt}
                    onChange={(e) => { setApTxt(e.target.value); setMsg(''); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); save(); } }}
                    className={fieldCls(dark)} />
                  <p className={`text-xs mt-1 ${sub}`}>Si no pusiste nada, escribí 0. Si sacaste plata, escribila en negativo.</p>
                  {msg && <p className="text-xs text-orange-500 font-medium mt-1">{msg}</p>}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setI((x) => Math.max(0, x - 1))} className={btn2}>‹ Anterior</button>
                  <button onClick={save} className={`${btn} flex-1`}>Guardar y cerrar</button>
                </div>
              </div>
            )}
          </div>
        )}
      </Sheet>
    );
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

    // --- Mes a mes: año/mes mostrado, hojas, aviso ---
    const nowD = new Date();
    const [ym, setYm] = useState({ y: nowD.getFullYear(), m: nowD.getMonth() });
    const [sheet, setSheet] = useState(null); // { kind: 'asset', id } | { kind: 'activos' } | { kind: 'wizard' }
    const [toastS, setToastS] = useState(null);
    const toastTimer = useRef(null);
    const showToast = (t, undo) => {
      clearTimeout(toastTimer.current);
      setToastS({ t, undo });
      toastTimer.current = setTimeout(() => setToastS(null), undo ? 6000 : 3200);
    };
    const notify = (t) => showToast(t);
    const toastUndo = (t, fn) => showToast(t, fn);
    useEffect(() => () => clearTimeout(toastTimer.current), []);

    const baseRef = useMemo(() => (authUser && firebaseReady()) ? firebase.firestore().collection('users').doc(authUser.uid) : null, [authUser && authUser.uid]);
    const safe = (p) => p.catch((e) => showToast(e && e.code === 'permission-denied'
      ? 'No se pudo guardar: faltan las reglas de Firestore'
      : 'No se pudo guardar: ' + ((e && e.message) || 'error')));
    const writeAsset = (id, o) => {
      if (!baseRef) return Promise.resolve();
      const obj = cleanObj(o); delete obj.id;
      return safe(baseRef.collection('activos').doc(id).set(obj));
    };
    const deleteAsset = (id) => (baseRef ? safe(baseRef.collection('activos').doc(id).delete()) : Promise.resolve());
    const writeAporte = (y, o) => (baseRef ? safe(baseRef.collection('aportes').doc(String(y)).set(cleanObj(o))) : Promise.resolve());
    const applyOps = (ops) => {
      if (!baseRef) return;
      const b = firebase.firestore().batch();
      ops.forEach((o) => {
        const ref = baseRef.collection(o.col).doc(o.id);
        if (o.type === 'set') { const obj = cleanObj(o.obj); delete obj.id; b.set(ref, obj); } else b.delete(ref);
      });
      safe(b.commit());
    };

    const model = useMemo(() => buildModel(data.activos, data.aportes, ym.y), [data.activos, data.aportes, ym.y]);
    const years = useMemo(() => {
      const set = {}; const cy = new Date().getFullYear();
      set[ym.y] = 1; set[cy] = 1; set[cy + 1] = 1;
      Object.keys(data.activos).forEach((id) => {
        const a = data.activos[id];
        (a.lecturas || []).forEach((r) => { set[r.f.slice(0, 4)] = 1; });
        (a.anios || []).forEach((y) => { set[y] = 1; });
      });
      Object.keys(data.aportes).forEach((y) => { set[y] = 1; });
      return Object.keys(set).map(Number).filter((y) => y >= 2000 && y <= 2100).sort(byNum);
    }, [data.activos, data.aportes, ym.y]);
    const pal = palette(isDarkMode);
    const yearRows = useMemo(() => years.map((y) => yearStats(data.activos, data.aportes, y)).filter(Boolean), [years, data.activos, data.aportes]);
    const evoPts = useMemo(() => seriesAll(data.activos, data.aportes, years), [years, data.activos, data.aportes]);
    const panelRef = useRef(null);
    const goYear = (y) => {
      setYear(y);
      setTimeout(() => { if (panelRef.current) panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60);
    };
    const moveMonth = (d) => setYm(({ y, m }) => {
      let nm = m + d, ny = y;
      if (nm < 0) { nm = 11; ny = y - 1; } else if (nm > 11) { nm = 0; ny = y + 1; }
      return { y: Math.max(2000, Math.min(2100, ny)), m: nm };
    });
    const setYear = (y) => setYm((s) => ({ ...s, y: Math.max(2000, Math.min(2100, y)) }));

    const commitValue = (id, m, raw) => {
      const a = data.activos[id]; if (!a) return;
      const y = ym.y, r = monthVal(a, m, y);
      if (!raw) {
        if (r) {
          const p = `${y}-${pad(m + 1)}`, old = cleanObj(a);
          writeAsset(id, { ...a, lecturas: (a.lecturas || []).filter((x) => x.f.indexOf(p) !== 0) });
          toastUndo(`Borraste el valor de ${a.nombre} en ${MES[m]}`, () => writeAsset(id, old));
        }
        return;
      }
      const n = parseNum(raw);
      if (!(n >= 0)) { showToast('Escribí un número válido'); return; }
      if (!r || Math.abs(r.v - n) > 1e-9) {
        const f = r ? r.f : defaultDate(m, y);
        const lect = (a.lecturas || []).filter((x) => x.f !== f).concat([{ f, v: n }]).sort((p, q) => (p.f < q.f ? -1 : p.f > q.f ? 1 : 0));
        writeAsset(id, { ...a, lecturas: lect });
      }
    };
    const commitAporte = (m, raw) => {
      const y = ym.y, ya = data.aportes[y] || {}, mm = { ...(ya.m || {}) }, key = pad(m + 1);
      const inicio = typeof ya.inicio === 'number' ? ya.inicio : null;
      if (!raw.trim()) { if (key in mm) { delete mm[key]; writeAporte(y, { m: mm, inicio }); } return; }
      const v = parseNum(raw);
      if (!isFinite(v)) { showToast('Escribí un número válido'); return; }
      if (mm[key] !== v) { mm[key] = v; writeAporte(y, { m: mm, inicio }); }
    };
    const commitInicio = (raw) => {
      const y = ym.y, ya = data.aportes[y] || {};
      let v = null;
      if (raw.trim()) { v = parseNum(raw); if (!isFinite(v)) { showToast('Escribí un número válido'); return; } }
      if (v !== (typeof ya.inicio === 'number' ? ya.inicio : null)) writeAporte(y, { m: ya.m || {}, inicio: v });
    };
    const btnS = btn.replace('py-2.5 px-5', 'py-2 px-3');
    const btn2S = btn2.replace('py-2.5 px-5', 'py-2 px-3');

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

        {/* Indicadores del año */}
        {loaded && model.latest >= 0 && (() => {
          const L = model.latest, t = model.totals[L], p = L > 0 ? model.totals[L - 1] : model.ini;
          let apSum = 0, hasAp = false;
          model.ap.forEach((v, m) => { if (v != null && m <= L) { apSum += v; hasAp = true; } });
          let gsum = 0, from = -1;
          model.gains.forEach((g, m) => { if (g != null && m <= L) { gsum += g; if (from < 0) from = m; } });
          const d = p != null ? t - p : null;
          const prevName = MES[(L + 11) % 12];
          const kc = `${card} !p-3`;
          return (
            <div className="grid grid-cols-3 gap-2">
              <div className={kc}>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${sub}`}>Cambio vs {prevName}</p>
                <p className="text-sm font-bold mt-1">{d == null ? <span className="opacity-50">—</span> : <Delta v={d} money />}</p>
                <p className={`text-[10px] mt-0.5 ${sub}`}>{d == null ? 'Sin datos del mes anterior' : pctText(d / p * 100)}</p>
              </div>
              <div className={kc}>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${sub}`}>Aportado {ym.y}</p>
                <p className={`text-sm font-bold mt-1 ${txt}`}>{hasAp ? money(apSum) : <span className="opacity-50 font-medium">Sin cargar</span>}</p>
                <p className={`text-[10px] mt-0.5 ${sub}`}>{hasAp ? `hasta ${MES[L]}` : 'Cargalo en «Pusiste este mes»'}</p>
              </div>
              <div className={kc}>
                <p className={`text-[10px] font-bold uppercase tracking-wider ${sub}`}>Ganancia {ym.y}</p>
                <p className="text-sm font-bold mt-1">{from < 0 ? <span className="opacity-50">—</span> : <Delta v={gsum} money />}</p>
                <p className={`text-[10px] mt-0.5 ${sub}`}>{from < 0 ? `Falta el cierre de ${ym.y - 1}` : `${MES[from]} a ${MES[L]}${hasAp ? '' : ', sin descontar aportes'}`}</p>
              </div>
            </div>
          );
        })()}

        {/* Mes a mes */}
        <div ref={panelRef} className={`${card} space-y-4`}>
          <div className="flex items-center justify-between gap-2">
            <h2 className={`font-bold text-base ${txt}`}>Mes a mes</h2>
            <div className="flex gap-2">
              <button onClick={() => setSheet({ kind: 'activos' })} className={btn2S}>Activos</button>
              <button onClick={() => setSheet({ kind: 'wizard' })} className={btnS}>Cargar el mes</button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2">
            <button onClick={() => moveMonth(-1)} aria-label="Mes anterior" className={`${btn2S} text-lg leading-none`}>‹</button>
            <div className="text-center">
              <p className={`font-bold ${txt}`}>{MESC[ym.m]}</p>
              <div className="flex items-center justify-center gap-1">
                <button onClick={() => setYear(ym.y - 1)} aria-label="Año anterior" className={`text-xs px-1 ${sub}`}>‹</button>
                <select value={ym.y} onChange={(e) => setYear(Number(e.target.value))} aria-label="Año" className={`text-xs font-bold bg-transparent ${sub} outline-none`}>
                  {years.map((y) => <option key={y} value={y}>{y}</option>)}
                </select>
                <button onClick={() => setYear(ym.y + 1)} aria-label="Año siguiente" className={`text-xs px-1 ${sub}`}>›</button>
              </div>
            </div>
            <button onClick={() => moveMonth(1)} aria-label="Mes siguiente" className={`${btn2S} text-lg leading-none`}>›</button>
          </div>

          {!loaded ? (
            <p className={`text-sm ${sub}`}>Cargando…</p>
          ) : !model.list.length ? (
            <div className="text-center space-y-2 py-2">
              <p className={`font-bold ${txt}`}>No hay activos en {ym.y}</p>
              <p className={`text-xs ${sub}`}>Elegí cuáles tenías este año con el botón «Activos».</p>
            </div>
          ) : (
            <div className="space-y-3">
              {(() => {
                const m = ym.m, v = model.totals[m], p = m === 0 ? model.ini : model.totals[m - 1];
                return (
                  <>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${sub}`}>Total del mes</span>
                      <b className={`text-lg ${txt}`}>
                        {v == null ? <span className="opacity-50">—</span> : <>{p != null && v > p ? <span className="text-green-500">▲ </span> : p != null && v < p ? <span className="text-red-500">▼ </span> : null}{money(v)}</>}
                      </b>
                    </div>
                    <div className="flex justify-between items-center gap-3">
                      <div className="min-w-0">
                        <span className={`text-sm ${sub}`}>Pusiste este mes</span>
                        <p className={`text-[10px] ${sub}`}>Lo que sumaste de tu bolsillo (0 si nada)</p>
                      </div>
                      <input key={`ap-${ym.y}-${m}-${model.ap[m]}`} inputMode="decimal" autoComplete="off" placeholder="$ 0"
                        aria-label={`Lo que pusiste en ${MES[m]}`}
                        defaultValue={model.ap[m] == null ? '' : numToText(model.ap[m])}
                        onBlur={(e) => commitAporte(m, e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') e.target.blur(); }}
                        className={`${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} w-32 text-right border rounded-lg px-2 py-1 text-sm font-semibold outline-none focus:border-blue-500`} />
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className={`text-sm ${sub}`}>Rindieron tus inversiones</span>
                        <p className={`text-[10px] ${sub}`}>Total − mes anterior − lo que pusiste</p>
                      </div>
                      <b className="text-sm"><Delta v={model.gains[m]} money /></b>
                    </div>
                  </>
                );
              })()}

              {CATS.map((c) => {
                const rows = model.list.filter((a) => a.categoria === c[0]);
                if (!rows.length) return null;
                const subt = model.cats[c[0]][ym.m];
                return (
                  <div key={c[0]} className={`border-t ${isDarkMode ? 'border-slate-800' : 'border-gray-100'} pt-3`}>
                    <div className="flex justify-between items-center mb-1">
                      <p className={`text-xs font-bold uppercase tracking-wider ${sub}`}>{c[1]}</p>
                      <p className={`text-sm font-bold ${txt}`}>{subt == null ? '' : money(subt)}</p>
                    </div>
                    {rows.map((a) => {
                      const r = model.vals[a.id][ym.m];
                      return (
                        <div key={a.id} className="flex justify-between items-center gap-2 py-1">
                          <button onClick={() => setSheet({ kind: 'asset', id: a.id })} title="Cambiar nombre o tipo" className="min-w-0 text-left">
                            <span className={`text-sm font-semibold truncate block ${txt}`}>{a.nombre}</span>
                            {soldIdx(a) != null && <span className="text-[10px] font-bold text-orange-500">Vendido · {MES[soldIdx(a) % 12]} {Math.floor(soldIdx(a) / 12)}</span>}
                          </button>
                          <ValueCell key={`${a.id}-${ym.y}-${ym.m}-${r ? r.v : 'x'}`} isDarkMode={isDarkMode}
                            label={`${a.nombre}, ${MES[ym.m]}`} value={r ? r.v : null}
                            onCommit={(raw) => commitValue(a.id, ym.m, raw)} />
                        </div>
                      );
                    })}
                  </div>
                );
              })}

              {model.iniAuto == null && (
                <div className={`border-t ${isDarkMode ? 'border-slate-800' : 'border-gray-100'} pt-3 flex justify-between items-center gap-3`}>
                  <div className="min-w-0">
                    <span className={`text-sm ${sub}`}>Valor al cierre del año anterior</span>
                    <p className={`text-[10px] ${sub}`}>Opcional: sirve para calcular lo que rindió enero</p>
                  </div>
                  <input key={`ini-${ym.y}-${model.iniSet}`} inputMode="decimal" autoComplete="off" placeholder="$ 0"
                    defaultValue={model.iniSet == null ? '' : numToText(model.iniSet)}
                    onBlur={(e) => commitInicio(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') e.target.blur(); }}
                    className={`${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} w-32 text-right border rounded-lg px-2 py-1 text-sm font-semibold outline-none focus:border-blue-500`} />
                </div>
              )}
            </div>
          )}
        </div>

        {vacio && (
          <div className={`${card} text-center space-y-1`}>
            <p className={`font-bold ${txt}`}>Todavía no hay inversiones cargadas</p>
            <p className={`text-xs ${sub}`}>Podés traer todo lo de tu app anterior importando su copia de seguridad.</p>
          </div>
        )}

        {/* Gráfico del año */}
        {loaded && model.latest >= 0 && (
          <div className={`${card} space-y-3`}>
            <h2 className={`font-bold text-base ${txt}`}>Valor total por mes · {ym.y}</h2>
            <YearChart model={model} pal={pal} isDarkMode={isDarkMode} />
          </div>
        )}

        {/* Dónde está la plata */}
        {loaded && model.latest >= 0 && (
          <div className={`${card} space-y-3`}>
            <h2 className={`font-bold text-base ${txt}`}>Dónde está tu plata en {MES[model.latest]}</h2>
            <div className={txt}><CompDonut model={model} pal={pal} isDarkMode={isDarkMode} /></div>
          </div>
        )}

        {/* Evolución de todos los años */}
        {loaded && evoPts.length >= 2 && (
          <div className={`${card} space-y-3`}>
            <h2 className={`font-bold text-base ${txt}`}>Evolución de todos los años</h2>
            <EvoChart pts={evoPts} pal={pal} isDarkMode={isDarkMode} />
          </div>
        )}

        {/* Resumen por año */}
        {loaded && yearRows.length > 0 && (() => {
          let tAp = 0, tG = 0, anyG = false, anyAp = false;
          yearRows.forEach((r) => { if (r.hasAp) { tAp += r.aportado; anyAp = true; } if (r.ganancia != null) { tG += r.ganancia; anyG = true; } });
          const th = `text-[10px] font-bold uppercase tracking-wider ${sub} text-right px-2 py-2`;
          const td = 'text-right px-2 py-2.5 text-xs font-semibold whitespace-nowrap';
          const rowB = `border-t ${isDarkMode ? 'border-slate-800' : 'border-gray-100'}`;
          const dash = <span className="opacity-50">—</span>;
          return (
            <div className={`${card} space-y-3`}>
              <h2 className={`font-bold text-base ${txt}`}>Resumen por año</h2>
              <div className="overflow-x-auto -mx-1">
                <table className={`w-full ${txt}`}>
                  <thead><tr>
                    <th className={`${th} !text-left`}>Año</th><th className={th}>Cierre</th><th className={th}>Aportado</th><th className={th}>Ganancia</th><th className={th}>Rend.</th>
                  </tr></thead>
                  <tbody>
                    {yearRows.map((r) => (
                      <tr key={r.y} className={`${rowB} ${r.y === ym.y ? (isDarkMode ? 'bg-blue-500/10' : 'bg-blue-50') : ''}`}>
                        <td className="px-2 py-2.5 text-left">
                          <button onClick={() => goYear(r.y)} title={`Ver ${r.y}`} className="text-sm font-bold text-blue-500">{r.y}</button>
                        </td>
                        <td className={td}>{money(r.cierre)}<span className={`block text-[10px] font-normal ${sub}`}>{MES[r.latest]}</span></td>
                        <td className={td}>{r.hasAp ? money(r.aportado) : dash}</td>
                        <td className={td}>{r.ganancia == null ? dash : <><Delta v={r.ganancia} money />{r.from > 0 && <span className={`block text-[10px] font-normal ${sub}`}>desde {MES[r.from]}</span>}</>}</td>
                        <td className={td}>{r.pct == null || !isFinite(r.pct) ? dash : <span className={r.pct > 0 ? 'text-green-500' : r.pct < 0 ? 'text-red-500' : ''}>{r.pct > 0 ? '▲ ' : r.pct < 0 ? '▼ ' : ''}{fmt1.format(Math.abs(r.pct))} %</span>}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className={rowB}>
                      <td className="px-2 py-2.5 text-left text-xs font-bold">Todos</td>
                      <td className={td}>{money(yearRows[yearRows.length - 1].cierre)}</td>
                      <td className={td}>{anyAp ? money(tAp) : dash}</td>
                      <td className={td}>{anyG ? <Delta v={tG} money /> : dash}</td>
                      <td className={td}></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <p className={`text-xs ${sub}`}>Ganancia: lo que subió el total sin contar lo que aportaste. Rendimiento: esa ganancia sobre lo que tenías al empezar más lo que fuiste aportando. Tocá un año para verlo.</p>
            </div>
          );
        })()}

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

        {sheet && sheet.kind === 'asset' && data.activos[sheet.id] && (
          <AssetSheet key={sheet.id} isDarkMode={isDarkMode} asset={{ ...data.activos[sheet.id], id: sheet.id }} year={ym.y} years={years}
            onClose={() => setSheet(null)} writeAsset={writeAsset} deleteAsset={deleteAsset} toastUndo={toastUndo} notify={notify} btn={btn} btn2={btn2} />
        )}
        {sheet && sheet.kind === 'activos' && (
          <ActivosSheet isDarkMode={isDarkMode} activos={data.activos} year={ym.y} onClose={() => setSheet(null)}
            applyOps={applyOps} notify={notify} btn={btn} btn2={btn2} />
        )}
        {sheet && sheet.kind === 'wizard' && (
          <MonthWizard isDarkMode={isDarkMode} activos={data.activos} aportesAll={data.aportes} year={ym.y} initialMonth={ym.m}
            onClose={() => setSheet(null)} writeAsset={writeAsset} writeAporte={writeAporte} notify={notify} btn={btn} btn2={btn2} />
        )}
        {toastS && ReactDOM.createPortal(
          <div className="fixed left-0 right-0 bottom-24 z-[70] flex justify-center px-4 pointer-events-none">
            <div className="pointer-events-auto bg-gray-900 text-white text-sm font-medium rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 max-w-sm">
              <span>{toastS.t}</span>
              {toastS.undo && <button onClick={() => { toastS.undo(); setToastS(null); }} className="text-blue-400 font-bold shrink-0">Deshacer</button>}
            </div>
          </div>,
          document.body
        )}
      </div>
    );
  };

  window.InversionesView = InversionesView;
})();
