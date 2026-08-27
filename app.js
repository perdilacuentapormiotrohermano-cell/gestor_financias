const { useState, useEffect, useMemo } = React;

const Icon = ({ children, size = 22, color = 'currentColor', strokeWidth = 2.2 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">{children}</svg>
);
const HomeIcon = ({ active }) => <Icon color={active ? '#007AFF' : '#8E8E93'} strokeWidth={active ? 2.5 : 2}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></Icon>;
const PlusIcon = ({ active = false }) => <Icon color={active ? 'white' : '#007AFF'} strokeWidth={active ? 2.5 : 2.2}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></Icon>;
const ListIcon = ({ active }) => <Icon color={active ? '#007AFF' : '#8E8E93'} strokeWidth={active ? 2.5 : 2}><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></Icon>;
const CardIcon = ({ active }) => <Icon color={active ? '#007AFF' : '#8E8E93'} strokeWidth={active ? 2.5 : 2}><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></Icon>;
const SettingsIcon = ({ active }) => <Icon color={active ? '#007AFF' : '#8E8E93'} strokeWidth={active ? 2.5 : 2}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></Icon>;
const TrashIcon = () => <Icon size={18} color="#FF3B30"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></Icon>;
const EditIcon = () => <Icon size={18}><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></Icon>;
const ArrowLeftIcon = () => <Icon size={20}><polyline points="15 18 9 12 15 6"/></Icon>;
const ArrowUpIcon = () => <Icon size={17}><polyline points="18 15 12 9 6 15"/></Icon>;
const ArrowDownIcon = () => <Icon size={17}><polyline points="6 9 12 15 18 9"/></Icon>;
const BellIcon = () => <Icon size={20} color="#FF9500"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></Icon>;
const BuildingIcon = () => <Icon size={19}><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></Icon>;
const TrendUp = () => <Icon size={20} color="#34C759"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></Icon>;
const TrendDown = () => <Icon size={20} color="#FF3B30"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></Icon>;

const DEFAULTS = {
  methods: [
    { id: 1, name: 'Efectivo', type: 'cash', color: 'from-green-400 to-emerald-600' },
    { id: 2, name: 'Tarjeta Débito', type: 'debit', color: 'from-blue-400 to-blue-600' }
  ],
  categories: [
    { id: 'comida', name: 'Comida', type: 'gasto', budget: 50000 },
    { id: 'transporte', name: 'Transporte', type: 'gasto', budget: 30000 },
    { id: 'servicios', name: 'Servicios', type: 'gasto', budget: 40000 },
    { id: 'sueldo', name: 'Sueldo', type: 'ingreso', budget: 0 }
  ],
  types: [
    { id: 'diario', name: 'Diario' },
    { id: 'mensual', name: 'Mensual' },
    { id: 'otro', name: 'Otro' }
  ]
};

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

const dateKey = (value) => {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
};

const todayInput = () => new Date().toISOString().slice(0, 10);

function ExpenseTrackerApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [subTab, setSubTab] = useState('historial');
  const [transactions, setTransactions] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [settings, setSettings] = useState({ currency: 'ARS' });
  const [categories, setCategories] = useState([]);
  const [typesList, setTypesList] = useState([]);
  const [commitments, setCommitments] = useState([]);
  const [installmentTracks, setInstallmentTracks] = useState([]);
  const [bankAccounts, setBankAccounts] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(() => dateKey(new Date()));
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setSettings(readStorage('finance_settings', { currency: 'ARS' }));
    setPaymentMethods(readStorage('finance_methods', DEFAULTS.methods));
    setCategories(readStorage('finance_categories', DEFAULTS.categories));
    setTypesList(readStorage('finance_types', DEFAULTS.types));
    setCommitments(readStorage('finance_commitments', []));
    setInstallmentTracks(readStorage('finance_installments_track', []));
    setBankAccounts(readStorage('finance_banks', []));
    setTransactions(readStorage('finance_data', []));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    localStorage.setItem('finance_data', JSON.stringify(transactions));
    localStorage.setItem('finance_methods', JSON.stringify(paymentMethods));
    localStorage.setItem('finance_settings', JSON.stringify(settings));
    localStorage.setItem('finance_categories', JSON.stringify(categories));
    localStorage.setItem('finance_types', JSON.stringify(typesList));
    localStorage.setItem('finance_commitments', JSON.stringify(commitments));
    localStorage.setItem('finance_installments_track', JSON.stringify(installmentTracks));
    localStorage.setItem('finance_banks', JSON.stringify(bankAccounts));
  }, [transactions, paymentMethods, settings, categories, typesList, commitments, installmentTracks, bankAccounts, isLoaded]);

  useEffect(() => {
    if (!isLoaded || installmentTracks.length === 0) return;
    const now = new Date();
    let changed = false;
    const updated = installmentTracks.map((q) => {
      if (!q.startDate || Number(q.current) >= Number(q.total)) return q;
      const start = new Date(q.startDate);
      let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
      if (now.getDate() < start.getDate()) months -= 1;
      if (months <= 0) return q;
      changed = true;
      const current = Math.min(Number(q.total), Number(q.current || 0) + months);
      const nextDate = new Date(start);
      nextDate.setMonth(nextDate.getMonth() + months);
      return { ...q, current, startDate: nextDate.toISOString(), originalStartDate: q.originalStartDate || q.startDate };
    });
    if (changed) setInstallmentTracks(updated);
  }, [isLoaded, installmentTracks]);

  const parseAmount = (value) => {
    if (value === null || value === undefined || value === '') return 0;
    return Number(String(value).replace(/\./g, '').replace(',', '.')) || 0;
  };

  const formatAmountInput = (value) => {
    if (!value) return '';
    const clean = String(value).replace(/[^0-9,]/g, '');
    const parts = clean.split(',');
    if (parts.length > 2) return clean;
    const integer = parts[0] ? Number(parts[0]).toLocaleString('es-AR') : '';
    return integer + (parts[1] !== undefined ? `,${parts[1].slice(0, 2)}` : '');
  };

  const formatCurrency = (amount) => {
    const number = Number(amount) || 0;
    const symbol = settings.currency === 'USD' ? 'US$ ' : settings.currency === 'EUR' ? '€ ' : '$ ';
    return symbol + new Intl.NumberFormat('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(number);
  };

  const inSelectedMonth = (date) => dateKey(date) === selectedMonth;

  const totals = useMemo(() => transactions.filter((t) => inSelectedMonth(t.date)).reduce((acc, t) => {
    const amount = Number(t.amount) || 0;
    if (t.type === 'ingreso') {
      acc.income += amount;
      acc.balance += amount;
    } else {
      acc.expense += amount;
      acc.balance -= amount;
      acc.categoryBreakdown[t.category] = (acc.categoryBreakdown[t.category] || 0) + amount;
    }
    return acc;
  }, { income: 0, expense: 0, balance: 0, categoryBreakdown: {} }), [transactions, selectedMonth]);

  const globalBalance = useMemo(() => {
    const base = bankAccounts.reduce((sum, b) => sum + (Number(b.initialBalance ?? b.balance) || 0), 0);
    const income = transactions.filter((t) => t.type === 'ingreso').reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
    const expense = transactions.filter((t) => t.type === 'gasto').reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
    return base + income - expense;
  }, [transactions, bankAccounts]);

  const getBankBalance = (bankId) => {
    const bank = bankAccounts.find((b) => b.id === bankId);
    if (!bank) return 0;
    let balance = Number(bank.initialBalance ?? bank.balance) || 0;
    transactions.forEach((t) => {
      if (t.type === 'ingreso' && String(t.bankId) === String(bankId)) balance += Number(t.amount) || 0;
      if (t.type === 'gasto') {
        const method = paymentMethods.find((m) => String(m.id) === String(t.methodId));
        if (method && String(method.bankId) === String(bankId)) balance -= Number(t.amount) || 0;
      }
    });
    return balance;
  };

  const Dashboard = () => {
    const [year, month] = selectedMonth.split('-');
    const monthName = new Date(Number(year), Number(month) - 1, 1).toLocaleString('es-AR', { month: 'long', year: 'numeric' });
    const today = new Date().getDate();
    const upcoming = commitments.filter((c) => { const due = Number(c.dueDay || 1); return due >= today && due <= today + 5; });
    return <div className="p-4 pb-24 space-y-6">
      <div className="flex justify-between items-center"><div><h1 className="text-2xl font-bold text-gray-900">Mi Billetera</h1><p className="text-sm text-gray-500 capitalize">{monthName}</p></div><button onClick={() => setActiveTab('profile')} className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold">PF</button></div>
      {upcoming.length > 0 && <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex gap-3"><BellIcon/><div><b className="text-sm text-orange-800">Próximos vencimientos</b>{upcoming.map(c => <p key={c.id} className="text-xs text-orange-700 mt-1">{c.name} · {formatCurrency(c.amount)} · día {c.dueDay}</p>)}</div></div>}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-lg"><p className="text-blue-100 text-sm">Balance Total</p><h2 className="text-3xl font-bold mt-1 mb-6">{formatCurrency(globalBalance)}</h2><div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-4"><div><p className="text-blue-100 text-xs">Ingresos</p><b>{formatCurrency(totals.income)}</b></div><div><p className="text-blue-100 text-xs">Gastos</p><b>{formatCurrency(totals.expense)}</b></div></div></div>
      {bankAccounts.length > 0 && <div><h3 className="text-lg font-bold text-gray-800 mb-3">Cuentas vinculadas</h3><div className="flex gap-3 overflow-x-auto no-scrollbar">{bankAccounts.map(b => <div key={b.id} className="min-w-[170px] bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"><div className="flex items-center gap-2"><span className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><BuildingIcon/></span><b className="text-sm truncate">{b.bankName}</b></div><p className="text-[10px] text-gray-500 mt-2 uppercase">{b.accountType}</p><p className="font-bold text-lg mt-1">{formatCurrency(getBankBalance(b.id))}</p></div>)}<button onClick={() => setActiveTab('settings')} className="min-w-[170px] border-2 border-dashed border-gray-200 rounded-2xl text-xs text-gray-500 font-semibold">+ Vincular otra</button></div></div>}
      <div><div className="flex justify-between items-center mb-3"><h3 className="text-lg font-bold text-gray-800">Presupuestos</h3><button onClick={() => setActiveTab('settings')} className="text-xs text-blue-600 font-semibold">Administrar</button></div><div className="space-y-3">{categories.filter(c => c.type === 'gasto').map(c => { const spent = totals.categoryBreakdown[c.id] || 0; const budget = Number(c.budget) || 0; const percent = budget > 0 ? Math.min(spent / budget * 100, 100) : 0; return <div key={c.id} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"><div className="flex justify-between text-sm mb-2"><span className="font-semibold">{c.name}</span><span>{formatCurrency(spent)} <span className="text-gray-400">/ {budget ? formatCurrency(budget) : 'Sin límite'}</span></span></div>{budget > 0 && <div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className={`h-full rounded-full ${spent > budget ? 'bg-red-500' : percent > 80 ? 'bg-orange-400' : 'bg-blue-500'}`} style={{ width: `${percent}%` }}/></div>}</div>; })}</div></div>
      <div><div className="flex justify-between items-center mb-3"><h3 className="text-lg font-bold text-gray-800">Actividad reciente</h3><button onClick={() => { setSubTab('historial'); setActiveTab('history'); }} className="text-sm text-blue-600 font-semibold">Ver todo</button></div><div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">{transactions.filter(t => inSelectedMonth(t.date)).slice(0,5).map(t => <div key={t.id} className="p-4 border-b border-gray-50 last:border-0 flex items-center justify-between"><div className="flex items-center gap-3"><div className={`w-10 h-10 rounded-full flex items-center justify-center ${t.type === 'ingreso' ? 'bg-green-100' : 'bg-red-100'}`}>{t.type === 'ingreso' ? <TrendUp/> : <TrendDown/>}</div><div><p className="font-semibold text-gray-800">{t.description}</p><p className="text-xs text-gray-500">{categories.find(c => c.id === t.category)?.name || t.category}</p></div></div><b className={t.type === 'ingreso' ? 'text-green-600' : ''}>{t.type === 'ingreso' ? '+' : '-'}{formatCurrency(t.amount)}</b></div>)}{transactions.filter(t => inSelectedMonth(t.date)).length===0&&<p className="p-6 text-center text-gray-500 text-sm">No hay movimientos este mes.</p>}</div></div>
    </div>;
  };

  const AddTransaction = () => {
    const [type, setType] = useState('gasto');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const availableCategories = categories.filter(c => c.type === type);
    const [category, setCategory] = useState(availableCategories[0]?.id || '');
    const [classification, setClassification] = useState(typesList[0]?.id || '');
    const [method, setMethod] = useState(paymentMethods[0]?.id || '');
    const [bankId, setBankId] = useState('');
    const [dateMode, setDateMode] = useState('hoy');
    const [manualDate, setManualDate] = useState(todayInput());
    const [currency, setCurrency] = useState(settings.currency);
    const [rate, setRate] = useState('');
    const [loadingRate, setLoadingRate] = useState(false);

    useEffect(() => {
      if (!availableCategories.some(c => c.id === category)) setCategory(availableCategories[0]?.id || '');
    }, [type, categories]);

    useEffect(() => {
      if (currency === settings.currency) { setRate(''); return; }
      setLoadingRate(true);
      fetch(`https://open.er-api.com/v6/latest/${currency}`).then(r => r.json()).then(data => {
        const value = data?.rates?.[settings.currency];
        if (value) setRate(formatAmountInput(String(value).replace('.', ',')));
      }).catch(() => {}).finally(() => setLoadingRate(false));
    }, [currency, settings.currency]);

    const saveDate = () => {
      const now = new Date();
      if (dateMode === 'hoy') return now.toISOString();
      if (dateMode === 'ayer') return new Date(now.getTime() - 86400000).toISOString();
      if (dateMode === 'hace2') return new Date(now.getTime() - 172800000).toISOString();
      return new Date(`${manualDate}T00:00:00`).toISOString();
    };

    const submit = e => {
      e.preventDefault();
      const originalAmount = parseAmount(amount);
      if (originalAmount <= 0 || !description.trim() || !category) return;
      const exchange = currency === settings.currency ? 1 : (parseAmount(rate) || 1);
      setTransactions(prev => [{ id: Date.now(), type, amount: originalAmount * exchange, originalAmount, originalCurrency: currency, exchangeRate: exchange, description: description.trim(), category, typeClassification: classification, methodId: type === 'gasto' ? (Number(method) || null) : null, bankId: type === 'ingreso' ? (bankId || null) : null, date: saveDate() }, ...prev]);
      setActiveTab('dashboard');
    };

    const DateButton = ({ mode, label, value }) => <button type="button" onClick={() => setDateMode(mode)} className={`rounded-xl border p-2 ${dateMode === mode ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-600'}`}><b className="block text-xs">{value}</b><span className="text-[10px]">{label}</span></button>;
    const now = new Date(), yesterday = new Date(now.getTime() - 86400000), twoDays = new Date(now.getTime() - 172800000);

    return <div className="p-4 pb-24"><h1 className="text-2xl font-bold mb-6">Nuevo Movimiento</h1><form onSubmit={submit} className="space-y-4">
      <div className="bg-gray-200/70 p-1 rounded-xl flex"><button type="button" onClick={() => setType('gasto')} className={`flex-1 py-2 rounded-lg text-sm ${type === 'gasto' ? 'bg-white shadow-sm font-semibold' : 'text-gray-500'}`}>Gasto</button><button type="button" onClick={() => setType('ingreso')} className={`flex-1 py-2 rounded-lg text-sm ${type === 'ingreso' ? 'bg-white shadow-sm font-semibold' : 'text-gray-500'}`}>Ingreso</button></div>
      <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm"><div className="flex justify-between mb-2"><span className="text-sm text-gray-500">Importe</span><select value={currency} onChange={e => setCurrency(e.target.value)} className="bg-gray-100 rounded-lg px-2 py-1 text-xs font-bold"><option>ARS</option><option>USD</option><option>EUR</option></select></div><div className="flex items-center justify-center text-4xl font-bold"><span className="text-gray-400 mr-1">{currency === 'USD' ? 'U$S' : currency === 'EUR' ? '€' : '$'}</span><input value={amount} onChange={e => setAmount(formatAmountInput(e.target.value))} className="w-full max-w-[240px] bg-transparent outline-none text-center" placeholder="0,00" inputMode="decimal" required /></div>{currency !== settings.currency && <div className="mt-4 pt-4 border-t border-gray-100"><label className="text-xs text-gray-500 font-semibold">Tipo de cambio {loadingRate && <span className="text-blue-500">· consultando…</span>}</label><div className="flex items-center mt-1 bg-gray-50 rounded-xl px-3"><span className="text-xs font-bold mr-2">1 {currency}=</span><input value={rate} onChange={e => setRate(e.target.value.replace(/[^0-9,]/g, ''))} className="bg-transparent outline-none flex-1 p-3 text-sm" placeholder="1000,00" required/><span className="text-xs font-bold">{settings.currency}</span></div></div>}</div>
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"><label className="text-xs text-gray-500 font-semibold uppercase">Descripción</label><input value={description} onChange={e => setDescription(e.target.value)} className="w-full mt-2 bg-gray-50 rounded-xl p-3 outline-none" placeholder="Ej. Supermercado, Sueldo" required /></div>
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"><label className="text-xs text-gray-500 font-semibold uppercase">Fecha</label><div className="grid grid-cols-4 gap-2 mt-2"><DateButton mode="hoy" label="Hoy" value={`${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}`}/><DateButton mode="ayer" label="Ayer" value={`${String(yesterday.getDate()).padStart(2,'0')}/${String(yesterday.getMonth()+1).padStart(2,'0')}`}/><DateButton mode="hace2" label="Hace 2 días" value={`${String(twoDays.getDate()).padStart(2,'0')}/${String(twoDays.getMonth()+1).padStart(2,'0')}`}/><button type="button" onClick={() => setDateMode('manual')} className={`rounded-xl border p-2 ${dateMode === 'manual' ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-600'}`}><b className="block text-xs">{manualDate.slice(8)}/{manualDate.slice(5,7)}</b><span className="text-[10px]">Otra</span></button></div>{dateMode === 'manual' && <input type="date" value={manualDate} onChange={e => setManualDate(e.target.value)} className="w-full mt-2 bg-gray-50 rounded-xl p-3 text-sm"/>}</div>
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"><label className="text-xs text-gray-500 font-semibold uppercase">Categoría</label><div className="flex flex-wrap gap-2 mt-2">{availableCategories.map(c => <button key={c.id} type="button" onClick={() => setCategory(c.id)} className={`px-3 py-2 rounded-xl border text-sm font-semibold ${category === c.id ? 'bg-blue-50 border-blue-200 text-blue-700' : 'border-gray-200 text-gray-500'}`}>{c.name}</button>)}</div>{availableCategories.length === 0 && <p className="text-xs text-gray-400 mt-2">Creá una categoría desde Ajustes.</p>}</div>
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"><label className="text-xs text-gray-500 font-semibold uppercase">Clasificación</label><div className="flex flex-wrap gap-2 mt-2">{typesList.map(t => <button key={t.id} type="button" onClick={() => setClassification(t.id)} className={`px-3 py-2 rounded-xl border text-sm font-semibold ${classification === t.id ? 'bg-purple-50 border-purple-200 text-purple-700' : 'border-gray-200 text-gray-500'}`}>{t.name}</button>)}</div></div>
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm"><label className="text-xs text-gray-500 font-semibold uppercase">{type === 'ingreso' ? 'Cuenta de destino' : 'Medio de pago'}</label>{type === 'ingreso' ? <select value={bankId} onChange={e => setBankId(e.target.value)} className="w-full mt-2 bg-gray-50 rounded-xl p-3 outline-none"><option value="">Efectivo / Sin cuenta</option>{bankAccounts.map(b => <option key={b.id} value={b.id}>{b.bankName} · {b.accountType}</option>)}</select> : <select value={method} onChange={e => setMethod(e.target.value)} className="w-full mt-2 bg-gray-50 rounded-xl p-3 outline-none" required>{paymentMethods.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}</select>}</div>
      <button className="w-full bg-blue-600 text-white font-bold text-lg py-4 rounded-2xl shadow-lg">Guardar Movimiento</button>
    </form></div>;
  };

  const History = () => {
    const [period, setPeriod] = useState('todos');
    const [categoryFilter, setCategoryFilter] = useState('todos');
    const [typeFilter, setTypeFilter] = useState('todos');
    const [habitualOpen, setHabitualOpen] = useState(false);
    const [habitualEditing, setHabitualEditing] = useState(null);
    const [hName, setHName] = useState('');
    const [hAmount, setHAmount] = useState('');
    const [hInstallments, setHInstallments] = useState('Mensual');
    const [hCategory, setHCategory] = useState(categories.find(c => c.type === 'gasto')?.id || '');
    const [hMethod, setHMethod] = useState(paymentMethods[0]?.id || '');
    const [hAuto, setHAuto] = useState(false);
    const [hDate, setHDate] = useState(todayInput());
    const [quotaOpen, setQuotaOpen] = useState(false);
    const [quotaEditing, setQuotaEditing] = useState(null);
    const [qName, setQName] = useState('');
    const [qAmount, setQAmount] = useState('');
    const [qCurrent, setQCurrent] = useState('1');
    const [qTotal, setQTotal] = useState('12');
    const [qMethod, setQMethod] = useState(paymentMethods[0]?.id || '');
    const [qDate, setQDate] = useState(todayInput());

    const filtered = useMemo(() => transactions.filter(t => {
      if (period === 'mes' && !inSelectedMonth(t.date)) return false;
      if (categoryFilter !== 'todos' && t.category !== categoryFilter) return false;
      if (typeFilter !== 'todos' && t.type !== typeFilter) return false;
      return true;
    }), [transactions, period, categoryFilter, typeFilter, selectedMonth]);

    const openHabitual = (item = null) => { setHabitualEditing(item?.id || null); setHName(item?.name || ''); setHAmount(item ? formatAmountInput(String(item.amount || '')) : ''); setHInstallments(item?.installments || 'Mensual'); setHCategory(item?.category || categories.find(c => c.type === 'gasto')?.id || ''); setHMethod(item?.methodId || paymentMethods[0]?.id || ''); setHAuto(Boolean(item?.auto)); setHDate(todayInput()); setHabitualOpen(true); };
    const saveHabitual = e => { e.preventDefault(); const amount = parseAmount(hAmount); if (!hName.trim() || amount <= 0) return; const dueDay = new Date(`${hDate}T00:00:00`).getDate(); const methodId = Number(hMethod) || hMethod; if (habitualEditing) setCommitments(prev => prev.map(c => c.id === habitualEditing ? {...c,name:hName.trim(),amount,installments:hInstallments,category:hCategory,methodId,auto:hAuto,dueDay}:c)); else { const id=Date.now(); setCommitments(prev=>[...prev,{id:`com_${id}`,name:hName.trim(),amount,installments:hInstallments,category:hCategory,methodId,auto:hAuto,dueDay}]); setTransactions(prev=>[{id,type:'gasto',amount,description:hName.trim(),category:hCategory,typeClassification:'mensual',methodId,date:new Date(`${hDate}T00:00:00`).toISOString()},...prev]); } setHabitualOpen(false); setHabitualEditing(null); };
    const loadHabitual = c => setTransactions(prev => [{id:Date.now(),type:'gasto',amount:c.amount,description:`${c.name} (Pago Habitual)`,category:c.category,typeClassification:'mensual',methodId:c.methodId,date:new Date().toISOString()},...prev]);
    const openQuota = item => { setQuotaEditing(item?.id || null); setQName(item?.name || ''); setQAmount(item ? formatAmountInput(String(item.amount || '')) : ''); setQCurrent(String(item?.current ?? 1)); setQTotal(String(item?.total ?? 12)); setQMethod(item?.methodId || paymentMethods[0]?.id || ''); setQDate(todayInput()); setQuotaOpen(true); };
    const saveQuota = e => { e.preventDefault(); const amount=parseAmount(qAmount); if(!qName.trim()||amount<=0)return; let current=Math.max(0,parseInt(qCurrent,10)||0),total=Math.max(1,parseInt(qTotal,10)||1); current=Math.min(current,total); const startDate=new Date(`${qDate}T00:00:00`).toISOString(); if(quotaEditing)setInstallmentTracks(prev=>prev.map(q=>q.id===quotaEditing?{...q,name:qName.trim(),amount,current,total,methodId:qMethod,startDate:q.startDate||startDate,originalStartDate:q.originalStartDate||q.startDate||startDate}:q)); else setInstallmentTracks(prev=>[...prev,{id:`quota_${Date.now()}`,name:qName.trim(),amount,current,total,methodId:qMethod,startDate,originalStartDate:startDate}]); setQuotaOpen(false);setQuotaEditing(null); };

    return <div className="p-4 pb-24"><h1 className="text-2xl font-bold mb-4">Registros</h1><div className="bg-gray-200/70 p-1 rounded-2xl flex mb-5"><button onClick={()=>setSubTab('historial')} className={`flex-1 py-2 text-[11px] font-bold rounded-xl ${subTab==='historial'?'bg-white shadow-sm':'text-gray-500'}`}>Historial</button><button onClick={()=>setSubTab('habituales')} className={`flex-1 py-2 text-[11px] font-bold rounded-xl ${subTab==='habituales'?'bg-white shadow-sm':'text-gray-500'}`}>Pagos Habituales</button><button onClick={()=>setSubTab('cuotas')} className={`flex-1 py-2 text-[11px] font-bold rounded-xl ${subTab==='cuotas'?'bg-white shadow-sm':'text-gray-500'}`}>Cuotas</button></div>
      {subTab==='historial'&&<div className="space-y-4"><div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm grid grid-cols-3 gap-2"><select value={period} onChange={e=>setPeriod(e.target.value)} className="bg-gray-50 rounded-xl p-2 text-xs"><option value="todos">Todo</option><option value="mes">Mes</option></select><select value={categoryFilter} onChange={e=>setCategoryFilter(e.target.value)} className="bg-gray-50 rounded-xl p-2 text-xs"><option value="todos">Categorías</option>{categories.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</select><select value={typeFilter} onChange={e=>setTypeFilter(e.target.value)} className="bg-gray-50 rounded-xl p-2 text-xs"><option value="todos">Tipo</option><option value="ingreso">Ingresos</option><option value="gasto">Gastos</option></select></div>{filtered.map(t=>{const cat=categories.find(c=>c.id===t.category),method=paymentMethods.find(m=>String(m.id)===String(t.methodId));return <div key={t.id} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex justify-between gap-3"><div><p className="font-semibold">{t.description}</p><p className="text-xs text-gray-500 mt-1">{new Date(t.date).toLocaleDateString('es-AR')} · {cat?.name||t.category}</p>{method&&<span className="inline-block mt-1 text-[10px] bg-gray-100 px-2 py-1 rounded">{method.name}</span>}</div><div className="text-right"><b className={t.type==='ingreso'?'text-green-600':''}>{t.type==='ingreso'?'+':'-'}{formatCurrency(t.amount)}</b><button onClick={()=>setTransactions(prev=>prev.filter(x=>x.id!==t.id))} className="block ml-auto mt-2 p-1"><TrashIcon/></button></div></div>})}{filtered.length===0&&<p className="text-center text-gray-500 bg-white rounded-2xl p-8">No hay movimientos.</p>}</div>}
      {subTab==='habituales'&&<div className="space-y-4"><div className="flex justify-between items-center"><span className="text-xs font-bold text-gray-500 uppercase">Compromisos y suscripciones</span><button onClick={()=>openHabitual()} className="bg-blue-100 text-blue-700 px-3 py-2 rounded-xl text-xs font-bold">+ Nuevo</button></div>{habitualOpen&&<form onSubmit={saveHabitual} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-3"><input value={hName} onChange={e=>setHName(e.target.value)} placeholder="Nombre" className="w-full bg-gray-50 rounded-xl p-3" required/><input value={hAmount} onChange={e=>setHAmount(formatAmountInput(e.target.value))} placeholder="Monto" className="w-full bg-gray-50 rounded-xl p-3" required/><div className="grid grid-cols-2 gap-2"><input value={hInstallments} onChange={e=>setHInstallments(e.target.value)} placeholder="Mensual / 3/12" className="bg-gray-50 rounded-xl p-3 text-sm"/><select value={hCategory} onChange={e=>setHCategory(e.target.value)} className="bg-gray-50 rounded-xl p-3 text-sm">{categories.filter(c=>c.type==='gasto').map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</select></div><select value={hMethod} onChange={e=>setHMethod(e.target.value)} className="w-full bg-gray-50 rounded-xl p-3 text-sm">{paymentMethods.map(m=><option key={m.id} value={m.id}>{m.name}</option>)}</select><input type="date" value={hDate} onChange={e=>setHDate(e.target.value)} className="w-full bg-gray-50 rounded-xl p-3 text-sm"/><label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={hAuto} onChange={e=>setHAuto(e.target.checked)}/> Recordar / habilitar auto-pago</label><div className="flex gap-2"><button type="button" onClick={()=>setHabitualOpen(false)} className="flex-1 bg-gray-100 rounded-xl py-3">Cancelar</button><button className="flex-1 bg-blue-600 text-white rounded-xl py-3 font-semibold">Guardar</button></div></form>}{commitments.map(c=><div key={c.id} className="bg-white rounded-2xl p-4 border-l-4 border-orange-400 border border-gray-100 shadow-sm flex justify-between gap-3"><div><b>{c.name}</b><p className="text-xs text-gray-500 mt-1">{formatCurrency(c.amount)} · {c.installments||'Mensual'} · día {c.dueDay}</p>{c.auto&&<span className="text-[10px] text-green-700">Auto-pago habilitado</span>}</div><div className="flex items-center gap-1"><button onClick={()=>loadHabitual(c)} className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-bold">+ Cargar</button><button onClick={()=>openHabitual(c)} className="p-2 text-blue-500"><EditIcon/></button><button onClick={()=>setCommitments(prev=>prev.filter(x=>x.id!==c.id))} className="p-2"><TrashIcon/></button></div></div>)}{commitments.length===0&&!habitualOpen&&<p className="text-center text-gray-500 bg-white rounded-2xl p-8">No tienes pagos habituales.</p>}</div>}
      {subTab==='cuotas'&&<div className="space-y-4"><div className="flex justify-between items-center"><div><span className="text-xs font-bold text-gray-500 uppercase">Seguimiento de cuotas</span><p className="text-[10px] text-gray-400">Informativo, no agrega gastos automáticamente</p></div><button onClick={()=>openQuota()} className="bg-purple-100 text-purple-700 px-3 py-2 rounded-xl text-xs font-bold">+ Nueva Cuota</button></div>{quotaOpen&&<form onSubmit={saveQuota} className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-3"><input value={qName} onChange={e=>setQName(e.target.value)} placeholder="Concepto" className="w-full bg-gray-50 rounded-xl p-3" required/><input value={qAmount} onChange={e=>setQAmount(formatAmountInput(e.target.value))} placeholder="Monto cuota" className="w-full bg-gray-50 rounded-xl p-3" required/><div className="grid grid-cols-2 gap-2"><input type="number" min="0" value={qCurrent} onChange={e=>setQCurrent(e.target.value)} className="bg-gray-50 rounded-xl p-3 text-sm"/><input type="number" min="1" value={qTotal} onChange={e=>setQTotal(e.target.value)} className="bg-gray-50 rounded-xl p-3 text-sm"/></div><select value={qMethod} onChange={e=>setQMethod(e.target.value)} className="w-full bg-gray-50 rounded-xl p-3 text-sm">{paymentMethods.map(m=><option key={m.id} value={m.id}>{m.name}</option>)}</select><input type="date" value={qDate} onChange={e=>setQDate(e.target.value)} className="w-full bg-gray-50 rounded-xl p-3 text-sm"/><div className="flex gap-2"><button type="button" onClick={()=>setQuotaOpen(false)} className="flex-1 bg-gray-100 rounded-xl py-3">Cancelar</button><button className="flex-1 bg-purple-600 text-white rounded-xl py-3 font-semibold">Guardar</button></div></form>}{installmentTracks.map(q=>{const percent=Math.min(Math.round(Number(q.current)/(Number(q.total)||1)*100),100),done=Number(q.current)>=Number(q.total),method=paymentMethods.find(m=>String(m.id)===String(q.methodId));return <div key={q.id} className="bg-white rounded-2xl p-4 border-l-4 border-purple-500 border border-gray-100 shadow-sm"><div className="flex justify-between gap-3"><div><div className="flex items-center gap-2 flex-wrap"><b>{q.name}</b><span className="text-[10px] bg-purple-50 text-purple-700 px-2 py-1 rounded">{q.current}/{q.total}</span></div><p className="text-xs text-gray-500 mt-1">Cuota {formatCurrency(q.amount)} · Total {formatCurrency(Number(q.amount)*Number(q.total))}</p>{q.originalStartDate&&<p className="text-[10px] text-gray-400">Inicio: {new Date(q.originalStartDate).toLocaleDateString('es-AR')}</p>}{method&&<span className="text-[10px] inline-block mt-1 bg-gray-100 px-2 py-1 rounded">💳 {method.name}</span>}</div><div className="flex items-start gap-1">{!done&&<button onClick={()=>setInstallmentTracks(prev=>prev.map(x=>x.id===q.id?{...x,current:Math.min(Number(x.current)+1,Number(x.total))}:x))} className="bg-purple-50 text-purple-700 px-2 py-1 rounded-lg text-xs font-bold">+1</button>}<button onClick={()=>openQuota(q)} className="p-2 text-blue-500"><EditIcon/></button><button onClick={()=>setInstallmentTracks(prev=>prev.filter(x=>x.id!==q.id))} className="p-2"><TrashIcon/></button></div></div><div className="mt-3"><div className="flex justify-between text-[10px] text-gray-500 mb-1"><span>{percent}%</span><span>{done?'🎉 Finalizado':`${Number(q.total)-Number(q.current)} restantes`}</span></div><div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className={`h-full ${done?'bg-green-500':'bg-purple-600'}`} style={{width:`${percent}%`}}/></div></div></div>})}{installmentTracks.length===0&&!quotaOpen&&<p className="text-center text-gray-500 bg-white rounded-2xl p-8">No tienes cuotas en seguimiento.</p>}</div>}
    </div>;
  };

  const Cards = () => {
    const [adding, setAdding] = useState(false);
    const [name, setName] = useState('');
    const [type, setType] = useState('credit');
    const [filter, setFilter] = useState('mes');
    const [month, setMonth] = useState(selectedMonth);
    const [from, setFrom] = useState(() => new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().slice(0, 10));
    const [to, setTo] = useState(todayInput());
    const colors = { credit: 'from-purple-500 to-indigo-600', debit: 'from-blue-400 to-blue-600', wallet: 'from-sky-400 to-cyan-600', cash: 'from-green-400 to-emerald-600' };
    const labels = { credit: 'Crédito', debit: 'Débito', wallet: 'Billetera Virtual', cash: 'Efectivo' };
    const expenses = useMemo(() => transactions.reduce((acc, t) => { if (t.type === 'gasto' && inSelectedMonth(t.date)) acc[t.methodId] = (acc[t.methodId] || 0) + (Number(t.amount) || 0); return acc; }, {}), [transactions, selectedMonth]);
    if (selectedCardId !== null) {
      const card = paymentMethods.find(m => String(m.id) === String(selectedCardId));
      const items = transactions.filter(t => { if (String(t.methodId) !== String(selectedCardId)) return false; if (filter === 'mes') return dateKey(t.date) === month; if (filter === 'periodo') return new Date(t.date) >= new Date(`${from}T00:00:00`) && new Date(t.date) <= new Date(`${to}T23:59:59`); return true; });
      return <div className="p-4 pb-24"><button onClick={()=>setSelectedCardId(null)} className="bg-gray-100 rounded-full p-2 mb-4"><ArrowLeftIcon/></button><h1 className="text-xl font-bold">{card?.name || 'Tarjeta'}</h1><p className="text-xs text-gray-500 mb-4">Historial de movimientos</p><div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mb-4"><div className="flex gap-2"><select value={filter} onChange={e=>setFilter(e.target.value)} className="flex-1 bg-gray-50 rounded-xl p-2 text-xs"><option value="mes">Mes</option><option value="periodo">Período</option><option value="todos">Todo</option></select>{filter==='mes'&&<input type="month" value={month} onChange={e=>setMonth(e.target.value)} className="flex-1 bg-gray-50 rounded-xl p-2 text-xs"/>}</div>{filter==='periodo'&&<div className="grid grid-cols-2 gap-2 mt-2"><input type="date" value={from} onChange={e=>setFrom(e.target.value)} className="bg-gray-50 rounded-xl p-2 text-xs"/><input type="date" value={to} onChange={e=>setTo(e.target.value)} className="bg-gray-50 rounded-xl p-2 text-xs"/></div>}</div>{items.map(t=><div key={t.id} className="bg-white rounded-2xl p-4 mb-3 border border-gray-100 shadow-sm flex justify-between"><div><b>{t.description}</b><p className="text-xs text-gray-500 mt-1">{new Date(t.date).toLocaleDateString('es-AR')}</p></div><b>{t.type==='ingreso'?'+':'-'}{formatCurrency(t.amount)}</b></div>)}{items.length===0&&<p className="text-center text-gray-500">No hay movimientos.</p>}</div>;
    }
    const addCard=e=>{e.preventDefault();if(!name.trim())return;setPaymentMethods(prev=>[...prev,{id:Date.now(),name:name.trim(),type,color:colors[type]}]);setName('');setAdding(false)};
    return <div className="p-4 pb-24"><div className="flex justify-between items-center mb-6"><h1 className="text-2xl font-bold">Mis Tarjetas</h1><button onClick={()=>setAdding(!adding)} className="bg-blue-100 rounded-full p-2"><PlusIcon/></button></div>{adding&&<form onSubmit={addCard} className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm mb-5"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Nombre" className="w-full bg-gray-50 rounded-xl p-3 mb-3" required/><select value={type} onChange={e=>setType(e.target.value)} className="w-full bg-gray-50 rounded-xl p-3 mb-4"><option value="credit">Tarjeta de Crédito</option><option value="debit">Tarjeta de Débito</option><option value="wallet">Billetera Virtual</option><option value="cash">Efectivo</option></select><div className="flex gap-2"><button type="button" onClick={()=>setAdding(false)} className="flex-1 bg-gray-100 rounded-xl py-3">Cancelar</button><button className="flex-1 bg-blue-600 text-white rounded-xl py-3 font-semibold">Guardar</button></div></form>}<div className="space-y-4">{paymentMethods.map(m=><div key={m.id} onClick={()=>setSelectedCardId(m.id)} className={`bg-gradient-to-br ${m.color||'from-gray-500 to-gray-700'} rounded-3xl p-5 text-white h-40 shadow-md cursor-pointer relative overflow-hidden`}><div className="flex justify-between"><span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold uppercase">{labels[m.type]||'Método'}</span><button onClick={e=>{e.stopPropagation();setPaymentMethods(prev=>prev.filter(x=>x.id!==m.id))}} className="bg-black/10 rounded-full p-1"><TrashIcon/></button></div><div className="mt-8"><h3 className="text-lg font-bold">{m.name}</h3><p className="text-[10px] uppercase text-white/70 mt-1">Gastos este mes</p><p className="text-2xl font-bold">{formatCurrency(expenses[m.id]||0)}</p></div></div>)}{paymentMethods.length===0&&<p className="text-center text-gray-500">No hay métodos de pago.</p>}</div></div>;
  };

  const Profile = () => {
    const savings = totals.income - totals.expense;
    const savingsRate = totals.income > 0 ? savings / totals.income * 100 : 0;
    const categoriesData = Object.entries(totals.categoryBreakdown).map(([id, amount]) => ({ id, amount, name: categories.find(c=>c.id===id)?.name||id, percent: totals.expense>0?amount/totals.expense*100:0 })).sort((a,b)=>b.amount-a.amount);
    const months=[];
    for(let i=5;i>=0;i--){const d=new Date();d.setMonth(d.getMonth()-i);const key=dateKey(d);let income=0,expense=0;transactions.forEach(t=>{if(dateKey(t.date)===key){if(t.type==='ingreso')income+=Number(t.amount)||0;else expense+=Number(t.amount)||0;}});months.push({label:d.toLocaleString('es-AR',{month:'short'}),income,expense});}
    const max=Math.max(...months.map(m=>Math.max(m.income,m.expense,1)),1);
    return <div className="p-4 pb-24"><div className="flex items-center gap-3 mb-5"><button onClick={()=>setActiveTab('dashboard')} className="bg-gray-100 rounded-full p-2"><ArrowLeftIcon/></button><div><h1 className="text-xl font-bold">Dashboard Personal</h1><p className="text-xs text-gray-500">Resumen financiero avanzado</p></div></div><div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-3xl p-5 mb-5"><b>¡Un dato sobre vos!</b><p className="text-sm opacity-90 mt-1">Ahorraste {formatCurrency(Math.max(0,savings))} este mes, un {savingsRate.toFixed(1)}% de tus ingresos.</p></div><div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm mb-5"><h3 className="text-xs uppercase font-bold text-gray-500 mb-4">Tasa de ahorro</h3><div className="text-4xl font-black text-center">{savingsRate.toFixed(1)}%</div><div className="grid grid-cols-2 text-center mt-4 text-xs"><div><span className="text-green-500 block">Generado</span><b>{formatCurrency(totals.income)}</b></div><div><span className="text-blue-500 block">Ahorrado</span><b>{formatCurrency(Math.max(0,savings))}</b></div></div></div><div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm mb-5"><h3 className="text-xs uppercase font-bold text-gray-500 mb-4">Composición del gasto</h3>{categoriesData.map(c=><div key={c.id} className="mb-3"><div className="flex justify-between text-xs mb-1"><span>{c.name}</span><span>{formatCurrency(c.amount)} · {c.percent.toFixed(1)}%</span></div><div className="h-2 bg-gray-100 rounded-full overflow-hidden"><div className="h-full bg-indigo-500" style={{width:`${c.percent}%`}}/></div></div>)}{categoriesData.length===0&&<p className="text-center text-gray-400 text-sm">No hay gastos este mes.</p>}</div><div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm"><h3 className="text-xs uppercase font-bold text-gray-500 mb-4">Evolución · 6 meses</h3><div className="flex items-end gap-2 h-40">{months.map((m,i)=><div key={i} className="flex-1 h-full flex items-end gap-1"><div className="flex-1 bg-green-400 rounded-t-sm" style={{height:`${Math.max(m.income/max*100,2)}%`}}/><div className="flex-1 bg-red-400 rounded-t-sm" style={{height:`${Math.max(m.expense/max*100,2)}%`}}/></div>)}</div><div className="flex justify-center gap-4 mt-3 text-[10px] text-gray-500"><span>● Ingresos</span><span>● Gastos</span></div></div></div>;
  };

  const Settings = () => {
    const [newCat,setNewCat]=useState(false),[catName,setCatName]=useState(''),[catType,setCatType]=useState('gasto'),[catBudget,setCatBudget]=useState('');
    const [editingId,setEditingId]=useState(null),[editData,setEditData]=useState({name:'',type:'gasto',budget:''});
    const [newType,setNewType]=useState(false),[typeName,setTypeName]=useState('');
    const [newBank,setNewBank]=useState(false),[bankName,setBankName]=useState('BBVA'),[accountType,setAccountType]=useState('Caja de Ahorro'),[bankInput,setBankInput]=useState('');
    const addCategory=e=>{e.preventDefault();if(!catName.trim())return;setCategories(prev=>[...prev,{id:`cat_${Date.now()}`,name:catName.trim(),type:catType,budget:parseAmount(catBudget)}]);setCatName('');setCatBudget('');setNewCat(false)};
    const saveEdit=e=>{e.preventDefault();if(!editData.name.trim())return;setCategories(prev=>prev.map(c=>c.id===editingId?{...c,name:editData.name.trim(),type:editData.type,budget:parseAmount(editData.budget)}:c));setEditingId(null)};
    const addMovementType=e=>{e.preventDefault();if(!typeName.trim())return;setTypesList(prev=>[...prev,{id:`type_${Date.now()}`,name:typeName.trim()}]);setTypeName('');setNewType(false)};
    const addBank=e=>{e.preventDefault();const amount=parseAmount(bankInput);setBankAccounts(prev=>[...prev,{id:`bank_${Date.now()}`,bankName,accountType,initialBalance:amount,balance:amount}]);setBankInput('');setNewBank(false)};
    return <div className="p-4 pb-24"><h1 className="text-2xl font-bold mb-6">Ajustes</h1><div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm mb-5"><h3 className="text-xs uppercase font-bold text-blue-600 mb-4">General</h3><label className="text-xs text-gray-500 font-semibold">Mes seleccionado</label><input type="month" value={selectedMonth} onChange={e=>setSelectedMonth(e.target.value)} className="w-full bg-gray-50 rounded-xl p-3 mt-1 mb-3"/><label className="text-xs text-gray-500 font-semibold">Moneda base</label><select value={settings.currency} onChange={e=>setSettings({...settings,currency:e.target.value})} className="w-full bg-gray-50 rounded-xl p-3 mt-1"><option value="ARS">Peso Argentino (ARS)</option><option value="USD">Dólar (USD)</option><option value="EUR">Euro (EUR)</option></select></div>
      <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm mb-5"><div className="flex justify-between items-center mb-4"><h3 className="text-xs uppercase font-bold text-blue-600">Categorías y presupuestos</h3><button onClick={()=>setNewCat(!newCat)} className="bg-blue-100 text-blue-700 px-3 py-2 rounded-xl text-xs font-bold">+ Añadir</button></div>{newCat&&<form onSubmit={addCategory} className="bg-gray-50 p-4 rounded-2xl mb-4 space-y-2"><input value={catName} onChange={e=>setCatName(e.target.value)} placeholder="Nombre" className="w-full bg-white rounded-xl p-3" required/><div className="grid grid-cols-2 gap-2"><select value={catType} onChange={e=>setCatType(e.target.value)} className="bg-white rounded-xl p-3"><option value="gasto">Gasto</option><option value="ingreso">Ingreso</option></select><input value={catBudget} onChange={e=>setCatBudget(formatAmountInput(e.target.value))} placeholder="Presupuesto" className="bg-white rounded-xl p-3"/></div><button className="w-full bg-blue-600 text-white rounded-xl py-3 font-semibold">Guardar</button></form>}{categories.map((c,i)=>editingId===c.id?<form key={c.id} onSubmit={saveEdit} className="bg-blue-50 p-3 rounded-xl mb-2 space-y-2"><input value={editData.name} onChange={e=>setEditData({...editData,name:e.target.value})} className="w-full bg-white rounded-lg p-2" required/><select value={editData.type} onChange={e=>setEditData({...editData,type:e.target.value})} className="w-full bg-white rounded-lg p-2"><option value="gasto">Gasto</option><option value="ingreso">Ingreso</option></select><input value={editData.budget} onChange={e=>setEditData({...editData,budget:e.target.value})} placeholder="Presupuesto" className="w-full bg-white rounded-lg p-2"/><div className="flex gap-2"><button type="button" onClick={()=>setEditingId(null)} className="flex-1 bg-gray-200 rounded-lg py-2">Cancelar</button><button className="flex-1 bg-blue-600 text-white rounded-lg py-2">Guardar</button></div></form>:<div key={c.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl mb-2"><div className="flex items-center gap-2"><div className="flex flex-col"><button disabled={i===0} onClick={()=>setCategories(prev=>{const n=[...prev];[n[i-1],n[i]]=[n[i],n[i-1]];return n})} className="text-gray-400 disabled:opacity-30"><ArrowUpIcon/></button><button disabled={i===categories.length-1} onClick={()=>setCategories(prev=>{const n=[...prev];[n[i+1],n[i]]=[n[i],n[i+1]];return n})} className="text-gray-400 disabled:opacity-30"><ArrowDownIcon/></button></div><div><b className="text-sm">{c.name}</b><p className="text-[10px] text-gray-500">{c.type}{c.budget>0?' · '+formatCurrency(c.budget):''}</p></div></div><div className="flex"><button onClick={()=>{setEditingId(c.id);setEditData({name:c.name,type:c.type,budget:String(c.budget||'')})}} className="p-2 text-blue-500"><EditIcon/></button><button onClick={()=>setCategories(prev=>prev.filter(x=>x.id!==c.id))} className="p-2"><TrashIcon/></button></div></div>)}</div>
      <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm mb-5"><div className="flex justify-between items-center mb-4"><h3 className="text-xs uppercase font-bold text-blue-600">Tipos de movimiento</h3><button onClick={()=>setNewType(!newType)} className="bg-blue-100 text-blue-700 px-3 py-2 rounded-xl text-xs font-bold">+ Añadir</button></div>{newType&&<form onSubmit={addMovementType} className="flex gap-2 mb-3"><input value={typeName} onChange={e=>setTypeName(e.target.value)} placeholder="Ej. Semestral" className="flex-1 bg-gray-50 rounded-xl p-3" required/><button className="bg-blue-600 text-white px-4 rounded-xl">OK</button></form>}{typesList.map(t=><div key={t.id} className="flex justify-between items-center bg-gray-50 rounded-xl p-3 mb-2"><span className="text-sm font-semibold">{t.name}</span><button onClick={()=>setTypesList(prev=>prev.filter(x=>x.id!==t.id))}><TrashIcon/></button></div>)}</div>
      <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm"><div className="flex justify-between items-center mb-4"><div><h3 className="text-xs uppercase font-bold text-blue-600">Cuentas bancarias</h3><p className="text-[10px] text-gray-400">Gestión manual / prototipo</p></div><button onClick={()=>setNewBank(!newBank)} className="bg-blue-100 text-blue-700 px-3 py-2 rounded-xl text-xs font-bold">{newBank?'Cancelar':'+ Vincular Banco'}</button></div>{newBank&&<form onSubmit={addBank} className="bg-gray-50 p-4 rounded-2xl mb-4 space-y-2"><select value={bankName} onChange={e=>setBankName(e.target.value)} className="w-full bg-white rounded-xl p-3"><option>Galicia</option><option>Santander</option><option>BBVA</option><option>Brubank</option><option>Mercado Pago</option><option>Macro</option><option>Nación</option></select><div className="grid grid-cols-2 gap-2"><select value={accountType} onChange={e=>setAccountType(e.target.value)} className="bg-white rounded-xl p-3"><option>Caja de Ahorro</option><option>Cuenta Sueldo</option><option>Cuenta Corriente</option></select><input value={bankInput} onChange={e=>setBankInput(formatAmountInput(e.target.value))} placeholder="Saldo actual" className="bg-white rounded-xl p-3" required/></div><button className="w-full bg-blue-600 text-white rounded-xl py-3 font-semibold">Guardar cuenta</button></form>}{bankAccounts.map(b=><div key={b.id} className="bg-gray-50 rounded-xl p-3 mb-2 flex justify-between items-center"><div className="flex items-center gap-2"><span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><BuildingIcon/></span><div><b className="text-sm">{b.bankName}</b><p className="text-[10px] text-gray-500">{b.accountType} · {formatCurrency(getBankBalance(b.id))}</p></div></div><button onClick={()=>setBankAccounts(prev=>prev.filter(x=>x.id!==b.id))}><TrashIcon/></button></div>)}{!bankAccounts.length&&!newBank&&<p className="text-center text-xs text-gray-400">No hay bancos vinculados.</p>}</div></div>;
  };

  if (!isLoaded) return null;
  return <div className="bg-gray-200 min-h-screen flex justify-center"><div className="w-full max-w-md min-h-screen bg-gray-50 relative flex flex-col shadow-2xl"><div className="h-safe-top bg-gray-50"/><main className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">{activeTab==='dashboard'&&<Dashboard/>}{activeTab==='profile'&&<Profile/>}{activeTab==='cards'&&<Cards/>}{activeTab==='add'&&<AddTransaction/>}{activeTab==='history'&&<History/>}{activeTab==='settings'&&<Settings/>}</main><nav className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 pb-safe z-50"><div className="h-20 flex items-center justify-between px-4 pb-3"><button onClick={()=>{setActiveTab('dashboard');setSelectedCardId(null)}} className="w-12 flex flex-col items-center gap-1"><HomeIcon active={activeTab==='dashboard'}/><span className="text-[10px] text-gray-500">Inicio</span></button><button onClick={()=>{setActiveTab('cards');setSelectedCardId(null)}} className="w-12 flex flex-col items-center gap-1"><CardIcon active={activeTab==='cards'}/><span className="text-[10px] text-gray-500">Tarjetas</span></button><button onClick={()=>{setActiveTab('add');setSelectedCardId(null)}} className="w-16 -mt-8"><div className="w-14 h-14 mx-auto rounded-full bg-blue-600 flex items-center justify-center border-4 border-gray-50 shadow-lg"><PlusIcon active/></div></button><button onClick={()=>{setActiveTab('history');setSelectedCardId(null)}} className="w-12 flex flex-col items-center gap-1"><ListIcon active={activeTab==='history'}/><span className="text-[10px] text-gray-500">Historial</span></button><button onClick={()=>{setActiveTab('settings');setSelectedCardId(null)}} className="w-12 flex flex-col items-center gap-1"><SettingsIcon active={activeTab==='settings'}/><span className="text-[10px] text-gray-500">Ajustes</span></button></div></nav></div></div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<ExpenseTrackerApp />);
