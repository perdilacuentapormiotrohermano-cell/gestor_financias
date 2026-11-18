// ============================================================
// MODO VIAJE — Ahorro del viaje (plan mensual + ahorrado por categoría)
// Viene de los "Ahorros" de la app de inversiones, ahora dentro de Modo Viaje.
// Usa los datos que ya tiene un viaje: presupuesto, fecha de salida, categorías y
// movimientos. Un aporte puede traer `savedFor` (id de categoría) para saber
// para qué categoría se juntó esa plata; sin eso cuenta solo en el fondo general.
// ============================================================
(function () {
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
    return { meta, ah, gas, disp: ah - gas, start, plan, rows, unassigned: ah - assigned };
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
    const c = calc(trip);
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

    return (
      <div className={box}>
        <div className="flex items-center justify-between mb-2">
          <p className={`text-xs font-bold uppercase tracking-wider ${labelCls}`}>Ahorro del viaje</p>
          <span className="text-xs font-bold text-teal-500">{pct} %</span>
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
              {p.hasDate
                ? (p.n > 0
                  ? <li>Para llegar el {fdate(c.start)} tenés que apartar unos <b>{formatMoney(p.mes)}</b> por mes ({p.n} {p.n === 1 ? 'mes' : 'meses'}).</li>
                  : <li>La fecha de salida ya pasó.</li>)
                : <li>Si ponés la fecha de salida del viaje, te digo cuánto apartar por mes.</li>}
            </>
          )}
        </ul>
        {!p.done && <PaceChip plan={p} formatMoney={formatMoney} />}

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

  window.TripSavings = { calc };
  window.TripSavingsCard = TripSavingsCard;
})();
