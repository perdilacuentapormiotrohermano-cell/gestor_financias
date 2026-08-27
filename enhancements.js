/* Mejoras portadas desde gestor_de_finanzas (9) (1): asistente financiero local,
   captura inteligente y dictado por voz. No requiere API key ni expone secretos. */
(function () {
  'use strict';

  const read = (key, fallback) => {
    try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback; }
    catch (_) { return fallback; }
  };
  const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
  const money = n => new Intl.NumberFormat('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(Number(n) || 0);
  const dateKey = value => { const d = new Date(value); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`; };
  const today = () => new Date().toISOString().slice(0, 10);

  function parseAmount(text) {
    const matches = String(text).match(/(?:\$|ars|usd|u\$s|eur|€)?\s*([0-9][0-9.,]*)/ig) || [];
    if (!matches.length) return 0;
    let raw = matches[matches.length - 1].replace(/[^0-9.,]/g, '');
    if (raw.includes('.') && raw.includes(',')) raw = raw.replace(/\./g, '').replace(',', '.');
    else if (raw.includes(',')) raw = raw.replace(',', '.');
    else if ((raw.match(/\./g) || []).length > 1) raw = raw.replace(/\./g, '');
    return Number(raw) || 0;
  }

  function suggestCategory(text, categories) {
    const s = String(text).toLowerCase();
    const rules = [
      ['comida', ['supermercado','super','comida','almuerzo','cena','desayuno','restaurant','restaurante','pan','pizza','hamburguesa','kiosco','mercado']],
      ['transporte', ['uber','cabify','colectivo','subte','tren','nafta','combustible','taxi','transporte']],
      ['servicios', ['luz','gas','agua','internet','telefono','celular','netflix','spotify','servicio','expensas']],
      ['ahorro', ['ahorro','guardar','meta','emergencia']]
    ];
    for (const [id, words] of rules) if (words.some(w => s.includes(w)) && categories.some(c => c.id === id)) return id;
    return categories.find(c => c.type === 'gasto')?.id || categories[0]?.id || '';
  }

  function classify(text) {
    const s = String(text).toLowerCase();
    if (/\b(ingres|cobr|recib|sueldo|salario|me depositaron|gan[eé])/.test(s)) return 'ingreso';
    if (/\b(ahorr|guard[eé] plata|meta|fondo de emergencia)/.test(s)) return 'ahorro';
    return 'gasto';
  }

  function smartParse(text) {
    const transactions = read('finance_data', []);
    const categories = read('finance_categories', [
      { id:'comida', name:'Comida', type:'gasto' }, { id:'transporte', name:'Transporte', type:'gasto' },
      { id:'servicios', name:'Servicios', type:'gasto' }, { id:'ahorro', name:'Ahorro / Metas', type:'ahorro' }
    ]);
    const type = classify(text);
    const amount = parseAmount(text);
    let description = String(text).trim().replace(/^(gast[eé]|gaste|pagu[eé]|compr[eé]|cobr[eé]|recib[ií]|ahorr[eé])\s+/i, '');
    if (description.length > 55) description = description.slice(0, 55).trim();
    const category = type === 'ahorro' ? 'ahorro' : suggestCategory(text, categories);
    let date = today();
    if (/\bayer\b/i.test(text)) { const d = new Date(); d.setDate(d.getDate() - 1); date = d.toISOString().slice(0,10); }
    return { type, amount, description: description || (type === 'ingreso' ? 'Ingreso' : type === 'ahorro' ? 'Ahorro' : 'Gasto'), category, date };
  }

  function addTransaction(parsed) {
    if (!parsed.amount) return false;
    const transactions = read('finance_data', []);
    const tx = {
      id: Date.now(), type: parsed.type, amount: parsed.amount,
      originalAmount: parsed.amount, originalCurrency: read('finance_settings', {currency:'ARS'}).currency || 'ARS',
      exchangeRate: 1, description: parsed.description, category: parsed.category,
      typeClassification: parsed.type === 'ahorro' ? 'otro' : 'diario', methodId: null, bankId: null,
      date: new Date(parsed.date + 'T12:00:00').toISOString()
    };
    write('finance_data', [tx, ...transactions]);
    if (parsed.type === 'ahorro') {
      const goals = read('finance_goals', []);
      const emergency = read('finance_emergency', {target:0,current:0});
      // La captura rápida aporta al fondo de emergencia por defecto, igual que el flujo de Ahorro.
      write('finance_emergency', { ...emergency, current: Number(emergency.current || 0) + parsed.amount });
      write('finance_goals', goals);
    }
    window.dispatchEvent(new CustomEvent('finance-data-updated'));
    return true;
  }

  function buildInsight() {
    const transactions = read('finance_data', []);
    const settings = read('finance_settings', {currency:'ARS'});
    const month = dateKey(new Date());
    const current = transactions.filter(t => dateKey(t.date) === month);
    const income = current.filter(t => t.type === 'ingreso').reduce((s,t)=>s+Number(t.amount||0),0);
    const expense = current.filter(t => t.type === 'gasto').reduce((s,t)=>s+Number(t.amount||0),0);
    const saving = current.filter(t => t.type === 'ahorro').reduce((s,t)=>s+Number(t.amount||0),0);
    const cats = {};
    current.filter(t=>t.type==='gasto').forEach(t => cats[t.category]=(cats[t.category]||0)+Number(t.amount||0));
    const top = Object.entries(cats).sort((a,b)=>b[1]-a[1])[0];
    const currency = settings.currency === 'USD' ? 'US$' : settings.currency === 'EUR' ? '€' : '$';
    if (!current.length) return 'Todavía no hay movimientos registrados este mes.';
    if (!income && expense) return `Este mes registraste ${currency} ${money(expense)} en gastos. Revisá tus categorías y presupuestos para encontrar oportunidades de ahorro.`;
    const balance = income - expense;
    let text = `Este mes: ingresos ${currency} ${money(income)}, gastos ${currency} ${money(expense)} y ahorro ${currency} ${money(saving)}. `;
    text += balance >= 0 ? `Tu saldo mensual es positivo en ${currency} ${money(balance)}.` : `Tus gastos superan tus ingresos por ${currency} ${money(Math.abs(balance))}.`;
    if (top) text += ` La categoría con mayor gasto es “${top[0]}” con ${currency} ${money(top[1])}.`;
    return text;
  }

  function mount() {
    if (document.getElementById('finance-enhancements')) return;
    const root = document.createElement('div'); root.id = 'finance-enhancements'; document.body.appendChild(root);
    root.innerHTML = `
      <button id="fe-open" aria-label="Abrir asistente financiero" style="position:fixed;right:18px;bottom:92px;z-index:100;background:linear-gradient(135deg,#2563eb,#4f46e5);color:white;border:0;border-radius:999px;width:54px;height:54px;box-shadow:0 8px 24px rgba(37,99,235,.35);font-size:23px;cursor:pointer">✦</button>
      <div id="fe-panel" style="display:none;position:fixed;right:16px;bottom:156px;width:min(360px,calc(100vw - 32px));max-height:70vh;z-index:101;background:#fff;color:#111827;border:1px solid #e5e7eb;border-radius:24px;box-shadow:0 20px 50px rgba(0,0,0,.18);overflow:hidden;font-family:ui-sans-serif,system-ui">
        <div style="padding:16px;background:linear-gradient(135deg,#2563eb,#4f46e5);color:#fff"><div style="font-weight:800">Asistente financiero</div><div style="font-size:11px;opacity:.8">Análisis local + captura inteligente</div></div>
        <div id="fe-messages" style="padding:14px;max-height:260px;overflow:auto;font-size:13px"><div style="background:#f3f4f6;padding:10px;border-radius:14px">Puedo analizar tus movimientos o ayudarte a cargar uno rápidamente.</div></div>
        <div style="padding:12px;border-top:1px solid #eee">
          <div style="display:flex;gap:7px;margin-bottom:8px"><input id="fe-input" placeholder="Ej. Gasté 15000 en supermercado ayer" style="flex:1;padding:10px;border:1px solid #ddd;border-radius:12px;outline:none"><button id="fe-mic" title="Dictar" style="width:42px;border:0;border-radius:12px;background:#eff6ff;color:#2563eb;font-size:18px">🎙</button></div>
          <div style="display:flex;gap:7px"><button id="fe-scan" style="flex:1;border:0;border-radius:12px;background:#2563eb;color:#fff;padding:10px;font-weight:700">Auto-llenar</button><button id="fe-insight" style="flex:1;border:0;border-radius:12px;background:#ecfdf5;color:#047857;padding:10px;font-weight:700">Analizar</button></div>
        </div>
      </div>`;

    const panel = document.getElementById('fe-panel'), input = document.getElementById('fe-input'), messages = document.getElementById('fe-messages');
    document.getElementById('fe-open').onclick = () => { panel.style.display = panel.style.display === 'none' ? 'block' : 'none'; };
    function addMsg(text, mine) { const el=document.createElement('div'); el.textContent=text; el.style.cssText=`padding:10px;border-radius:14px;margin-top:8px;${mine?'background:#eff6ff;margin-left:25px':'background:#f3f4f6;margin-right:25px'}`; messages.appendChild(el); messages.scrollTop=messages.scrollHeight; }
    document.getElementById('fe-scan').onclick = () => { const text=input.value.trim(); if(!text)return; const p=smartParse(text); addMsg(text,true); if(!p.amount){addMsg('No pude detectar un monto. Probá, por ejemplo: “Gasté 15000 en comida”.');return;} addMsg(`Detecté: ${p.type === 'ingreso' ? 'ingreso' : p.type === 'ahorro' ? 'ahorro' : 'gasto'} de $ ${money(p.amount)} · ${p.description}. Categoría sugerida: ${p.category}.`,false); if(addTransaction(p)){ addMsg('✓ Movimiento guardado. Volvé a la pantalla principal para verlo actualizado.',false); input.value=''; } };
    document.getElementById('fe-insight').onclick = () => addMsg(buildInsight(),false);
    document.getElementById('fe-mic').onclick = () => {
      const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if(!SR){ addMsg('Tu navegador no soporta dictado por voz.',false); return; }
      const recognition = new SR(); recognition.lang='es-AR'; recognition.interimResults=false; recognition.maxAlternatives=1;
      const mic=document.getElementById('fe-mic'); mic.textContent='🔴';
      recognition.onresult=e=>{input.value=e.results[0][0].transcript; mic.textContent='🎙';};
      recognition.onerror=()=>{mic.textContent='🎙'; addMsg('No pude reconocer la voz. Revisá el permiso del micrófono.',false);};
      recognition.onend=()=>{mic.textContent='🎙';}; recognition.start();
    };

    const style=document.createElement('style'); style.textContent=`@media (prefers-color-scheme:dark){#fe-panel{background:#0f172a!important;color:#f8fafc!important;border-color:#1e293b!important}#fe-messages>div{background:#1e293b!important;color:#e2e8f0}#fe-input{background:#1e293b;color:#fff;border-color:#334155}#fe-mic{background:#1e293b;color:#60a5fa}}`; document.head.appendChild(style);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
