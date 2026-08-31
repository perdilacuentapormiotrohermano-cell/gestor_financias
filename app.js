const { useState, useEffect, useMemo, useRef } = React;

const HomeIcon = ({ active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "#007AFF" : "#8E8E93"} strokeWidth={active ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const PlusIcon = ({ active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "#007AFF" : "#8E8E93"} strokeWidth={active ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const ListIcon = ({ active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "#007AFF" : "#8E8E93"} strokeWidth={active ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"></line>
    <line x1="8" y1="12" x2="21" y2="12"></line>
    <line x1="8" y1="18" x2="21" y2="18"></line>
    <line x1="3" y1="6" x2="3.01" y2="6"></line>
    <line x1="3" y1="12" x2="3.01" y2="12"></line>
    <line x1="3" y1="18" x2="3.01" y2="18"></line>
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
);

const TrendingDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF3B30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
    <polyline points="16 17 22 17 22 11"></polyline>
  </svg>
);

const CreditCardIcon = ({ active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "#007AFF" : "#8E8E93"} strokeWidth={active ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

const SettingsIcon = ({ active }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={active ? "#007AFF" : "#8E8E93"} strokeWidth={active ? "2.5" : "2"} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF9500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const SparkleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
);

const MicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v1a7 7 0 0 1-14 0v-1"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
);

const ArrowUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
);

const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
);

const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <path d="M9 22v-4h6v4"></path>
    <path d="M8 6h.01"></path>
    <path d="M16 6h.01"></path>
    <path d="M12 6h.01"></path>
    <path d="M12 10h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M16 10h.01"></path>
    <path d="M16 14h.01"></path>
    <path d="M8 10h.01"></path>
    <path d="M8 14h.01"></path>
  </svg>
);

const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
);

const LogOutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
);

const DebouncedTextInput = ({ value, onCommit, type = 'text', placeholder, className }) => {
  const [local, setLocal] = useState(value || '');

  useEffect(() => {
    setLocal(value || '');
  }, [value]);

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={local}
      onChange={e => setLocal(e.target.value)}
      onBlur={() => { if (local !== value) onCommit(local); }}
      className={className}
    />
  );
};

const AiChatInputForm = ({ isDarkMode, isLoading, onSend }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim() || isLoading) return;
    onSend(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Ej. ¿En qué categoría gasté más este mes?"
        className={`flex-1 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-2.5 text-xs outline-none`}
      />
      <button type="submit" disabled={isLoading} className="bg-blue-600 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-md hover:bg-blue-700 transition-colors disabled:opacity-50">Preguntar</button>
    </form>
  );
};

const AddTransaction = ({ categories, typesList, paymentMethods, bankAccounts, settings, isDarkMode, transactions, setTransactions, setEmergencyFund, savingsGoals, setSavingsGoals, setActiveTab, handleSmartScan, startVoiceDictation, isScanning, isListening }) => {
    const [type, setType] = useState('gasto');
    const [amountInput, setAmountInput] = useState('');
    const [description, setDescription] = useState('');
    const [smartInputText, setSmartInputText] = useState('');
    const [smartFeedback, setSmartFeedback] = useState(null); // { type: 'error'|'info', text: '...' } | null
    
    const availableCategories = categories.filter(c => c.type === (type === 'ahorro' ? 'gasto' : type));
    const [categoryId, setCategoryId] = useState(availableCategories.length > 0 ? availableCategories[0].id : '');
    const [typeClassification, setTypeClassification] = useState(typesList.length > 0 ? typesList[0].id : 'diario');
    const [methodId, setMethodId] = useState(paymentMethods.length > 0 ? paymentMethods[0].id : '');
    const [destBankId, setDestBankId] = useState('');
    const [targetGoalId, setTargetGoalId] = useState('emergency');
    
    const [selectedDateMode, setSelectedDateMode] = useState('hoy');
    const [manualDate, setManualDate] = useState(() => {
      const now = new Date();
      return now.toISOString().split('T')[0];
    });

    const [txCurrency, setTxCurrency] = useState(settings.currency);
    const [exchangeRate, setExchangeRate] = useState('');
    const [isFetchingRate, setIsFetchingRate] = useState(false);

    useEffect(() => {
      if (txCurrency !== settings.currency) {
        setIsFetchingRate(true);
        fetch(`https://open.er-api.com/v6/latest/${txCurrency}`)
          .then(res => res.json())
          .then(data => {
            if (data && data.rates && data.rates[settings.currency]) {
              const rate = data.rates[settings.currency];
              setExchangeRate(rate.toLocaleString('es-AR', { maximumFractionDigits: 4 }));
            }
            setIsFetchingRate(false);
          })
          .catch(() => setIsFetchingRate(false));
      } else {
        setExchangeRate('');
      }
    }, [txCurrency, settings.currency]);

    const handleExchangeRateChange = (e) => {
      let val = e.target.value.replace(/[^0-9,]/g, '');
      const parts = val.split(',');
      if (parts.length > 2) return;
      setExchangeRate(val);
    };

    const getNumericExchangeRate = () => {
      if (!exchangeRate) return 1;
      let clean = exchangeRate.replace(/\./g, '').replace(',', '.');
      return parseFloat(clean) || 1;
    };

    const prevTypeRef = useRef(type);
    useEffect(() => {
      if (type !== 'ahorro') {
        const avail = categories.filter(c => c.type === type);
        const typeActuallyChanged = prevTypeRef.current !== type;
        const currentStillValid = avail.some(c => c.id === categoryId);
        if (typeActuallyChanged || !currentStillValid) {
          setCategoryId(avail.length > 0 ? avail[0].id : '');
        }
      }
      prevTypeRef.current = type;
      // eslint-disable-next-line
    }, [type, categories]);

    const handleAmountChange = (e) => {
      let val = e.target.value;
      val = val.replace(/[^0-9,]/g, '');
      const parts = val.split(',');
      if (parts.length > 2) return;

      let integerPart = parts[0];
      let decimalPart = parts[1] !== undefined ? ',' + parts[1].substring(0, 2) : '';

      if (integerPart) {
        integerPart = parseInt(integerPart, 10).toLocaleString('es-AR');
      }

      setAmountInput(integerPart + decimalPart);
    };

    const getNumericAmount = () => {
      if (!amountInput) return 0;
      let clean = amountInput.replace(/\./g, '').replace(',', '.');
      return parseFloat(clean) || 0;
    };

    const getDateToSave = () => {
      const now = new Date();
      if (selectedDateMode === 'hoy') {
        return now.toISOString();
      } else if (selectedDateMode === 'ayer') {
        const d = new Date(now.getTime() - 86400000);
        return d.toISOString();
      } else if (selectedDateMode === 'hace2dias') {
        const d = new Date(now.getTime() - 86400000 * 2);
        return d.toISOString();
      } else {
        return new Date(manualDate + 'T00:00:00').toISOString();
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const originalAmount = getNumericAmount();
      if (originalAmount <= 0) return;

      const rate = txCurrency === settings.currency ? 1 : getNumericExchangeRate();
      const finalAmount = originalAmount * rate;

      if (type === 'ahorro') {
        if (targetGoalId === 'emergency') {
          setEmergencyFund(prev => ({ ...prev, current: prev.current + finalAmount }));
        } else {
          setSavingsGoals(savingsGoals.map(g => g.id === targetGoalId ? { ...g, current: Math.min(g.current + finalAmount, g.target) } : g));
        }
      }

      const newTransaction = {
        id: Date.now(),
        type,
        amount: finalAmount,
        originalAmount: originalAmount,
        originalCurrency: txCurrency,
        exchangeRate: rate,
        description: type === 'ahorro' ? (targetGoalId === 'emergency' ? 'Aporte Fondo de Emergencia' : `Aporte Meta: ${savingsGoals.find(g => g.id === targetGoalId)?.name || ''}`) : description,
        category: type === 'ahorro' ? 'ahorro' : categoryId,
        typeClassification: type === 'ahorro' ? 'otro' : typeClassification,
        methodId: type === 'gasto' ? methodId : null,
        bankId: type === 'ingreso' ? (destBankId || null) : null,
        date: getDateToSave()
      };

      setTransactions([newTransaction, ...transactions]);
      setActiveTab('dashboard');
    };

    return (
      <div className={`p-4 pb-32 min-h-full ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} animate-in fade-in slide-in-from-right-4 duration-300`}>
        <div className="flex justify-between items-center mb-6 mt-2">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Nuevo Movimiento</h1>
        </div>

        {/* Gemini Smart Auto-fill Box with Mic */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 text-white shadow-md mb-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <SparkleIcon />
              <h3 className="font-bold text-xs uppercase tracking-wider">Auto-completar Inteligente</h3>
            </div>
            <button
              type="button"
              onClick={() => { setSmartFeedback(null); startVoiceDictation(setSmartInputText, setDescription, setAmountInput, setCategoryId, setSmartFeedback, setMethodId, setSelectedDateMode); }}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-white/20 hover:bg-white/30 text-white border border-white/20 backdrop-blur-sm'}`}
              title="Dictar por micrófono"
            >
              <MicIcon /> {isListening ? 'Escuchando...' : 'Dictar'}
            </button>
          </div>
          <div className="flex gap-2">
            <input 
              type="text"
              value={smartInputText}
              onChange={e => setSmartInputText(e.target.value)}
              placeholder="Ej. Gasté 15000 en el supermercado ayer"
              className="bg-white/20 placeholder-white/70 text-white rounded-xl px-3 py-2 text-xs flex-1 outline-none backdrop-blur-sm border border-white/20"
            />
            <button 
              type="button"
              disabled={isScanning || !smartInputText}
              onClick={() => { setSmartFeedback(null); handleSmartScan(smartInputText, setDescription, setAmountInput, setCategoryId, setSmartFeedback, setMethodId, setSelectedDateMode); }}
              className="bg-white text-blue-600 font-bold px-3 py-2 rounded-xl text-xs shadow-sm hover:bg-blue-50 transition-colors disabled:opacity-50"
            >
              {isScanning ? 'Analizando...' : 'Auto-llenar'}
            </button>
          </div>
          {smartFeedback && (
            <div className={`mt-3 p-2.5 rounded-xl text-xs font-medium leading-snug ${smartFeedback.type === 'error' ? 'bg-red-500/20 border border-red-300/40 text-white' : smartFeedback.type === 'success' ? 'bg-green-500/20 border border-green-300/40 text-white' : 'bg-white/15 border border-white/20 text-white'}`}>
              {smartFeedback.text}
            </div>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={`${isDarkMode ? 'bg-slate-900 text-slate-300' : 'bg-gray-200/60 text-gray-500'} p-1 rounded-xl flex w-full`}>
            <button 
              type="button" 
              onClick={() => setType('gasto')}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${type === 'gasto' ? (isDarkMode ? 'bg-slate-800 text-white shadow-sm' : 'bg-white text-gray-900 shadow-sm') : ''}`}
            >
              Gasto
            </button>
            <button 
              type="button" 
              onClick={() => setType('ingreso')}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${type === 'ingreso' ? (isDarkMode ? 'bg-slate-800 text-white shadow-sm' : 'bg-white text-gray-900 shadow-sm') : ''}`}
            >
              Ingreso
            </button>
            <button 
              type="button" 
              onClick={() => setType('ahorro')}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${type === 'ahorro' ? (isDarkMode ? 'bg-slate-800 text-emerald-400 font-bold shadow-sm' : 'bg-white text-emerald-600 font-bold shadow-sm') : ''}`}
            >
              🎯 Ahorro
            </button>
          </div>

          <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-6 shadow-sm border text-center`}>
            <div className="flex justify-between items-center mb-2">
              <label className={`text-sm font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Importe</label>
              <select
                value={txCurrency}
                onChange={(e) => setTxCurrency(e.target.value)}
                className={`${isDarkMode ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-gray-100 text-gray-700 border-gray-200'} border rounded-lg px-2 py-1 text-xs font-bold outline-none`}
              >
                <option value="ARS">ARS</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
            <div className={`flex items-center justify-center text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-gray-400 mr-1">{txCurrency === 'USD' ? 'U$S' : txCurrency === 'EUR' ? '€' : '$'}</span>
              <input 
                type="text" 
                value={amountInput}
                onChange={handleAmountChange}
                placeholder="0,00"
                className="w-full max-w-[240px] bg-transparent outline-none text-center appearance-none"
                required
                autoFocus
                inputMode="decimal"
              />
            </div>
            {txCurrency !== settings.currency && (
              <div className={`mt-4 pt-4 border-t ${isDarkMode ? 'border-slate-800' : 'border-gray-100'} text-left animate-in fade-in slide-in-from-top-2`}>
                <label className={`block text-xs font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mb-1`}>
                  Tipo de cambio ({txCurrency} a {settings.currency}) {isFetchingRate && <span className="text-blue-500 animate-pulse font-normal ml-2">Obteniendo...</span>}
                </label>
                <div className={`flex items-center ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl px-3 py-2`}>
                  <span className="text-gray-500 text-sm font-bold mr-2">1 {txCurrency} = </span>
                  <input
                    type="text"
                    value={exchangeRate}
                    onChange={handleExchangeRateChange}
                    placeholder="Ej. 1000,50"
                    className="bg-transparent w-full outline-none font-semibold text-sm"
                    inputMode="decimal"
                    required
                  />
                  <span className="text-gray-500 text-sm font-bold ml-2">{settings.currency}</span>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-2xl p-4 shadow-sm border space-y-4`}>
              {type === 'ahorro' ? (
                <div>
                  <label className={`block text-[10px] font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mb-2`}>Destino del Ahorro</label>
                  <select 
                    value={targetGoalId}
                    onChange={(e) => setTargetGoalId(e.target.value)}
                    className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100 text-gray-800'} border rounded-xl p-3 outline-none font-bold text-sm`}
                  >
                    <option value="emergency">🛡️ Fondo de Emergencia</option>
                    {savingsGoals.map(g => (
                      <option key={g.id} value={g.id}>🎯 {g.name}</option>
                    ))}
                  </select>
                </div>
              ) : (
                <>
                  <input 
                    type="text" 
                    placeholder="Descripción (ej. Supermercado, Sueldo)" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100 text-gray-800'} border rounded-xl p-3 outline-none focus:border-blue-300 transition-colors text-sm font-medium`}
                    required
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={`block text-[10px] font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mb-1`}>Categoría</label>
                      <select 
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100 text-gray-800'} border rounded-xl p-2.5 text-sm outline-none capitalize focus:border-blue-300`}
                        required
                      >
                        {availableCategories.length === 0 && <option value="" disabled>Sin categorías</option>}
                        {availableCategories.map(c => (
                          <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={`block text-[10px] font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mb-1`}>Clasificación</label>
                      <select 
                        value={typeClassification}
                        onChange={(e) => setTypeClassification(e.target.value)}
                        className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100 text-gray-800'} border rounded-xl p-2.5 text-sm outline-none capitalize focus:border-blue-300`}
                      >
                        {typesList.map(t => (
                          <option key={t.id} value={t.id}>{t.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div className={`${isDarkMode ? 'bg-slate-800/60 border-slate-800' : 'bg-gray-50 border-gray-100'} p-3 rounded-xl border`}>
                  <label className={`block text-[10px] font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mb-2`}>Fecha del movimiento</label>
                  <div className="flex gap-2">
                      <button type="button" onClick={() => setSelectedDateMode('hoy')} className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${selectedDateMode === 'hoy' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-sm' : (isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-gray-200 text-gray-600')}`}>Hoy</button>
                      <button type="button" onClick={() => setSelectedDateMode('ayer')} className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${selectedDateMode === 'ayer' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-sm' : (isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-gray-200 text-gray-600')}`}>Ayer</button>
                      <button type="button" onClick={() => setSelectedDateMode('manual')} className={`flex-1 py-1.5 text-xs font-semibold rounded-lg border transition-colors ${selectedDateMode === 'manual' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-sm' : (isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-gray-200 text-gray-600')}`}>Otra</button>
                  </div>
                  {selectedDateMode === 'manual' && (
                      <input type="date" value={manualDate} onChange={e => setManualDate(e.target.value)} className={`w-full mt-2 ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} border rounded-lg p-2 text-sm outline-none font-medium`} required />
                  )}
              </div>

              {type !== 'ahorro' && (
                <div>
                  <label className={`block text-[10px] font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mb-2`}>
                    {type === 'ingreso' ? 'Cuenta Bancaria (Destino)' : 'Medio de Pago / Tarjeta'}
                  </label>
                  <div className="relative">
                    {type === 'ingreso' ? (
                      <select 
                        value={destBankId}
                        onChange={(e) => setDestBankId(e.target.value)}
                        className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} border rounded-xl p-3 outline-none font-bold appearance-none focus:border-blue-300 transition-colors text-sm`}
                      >
                        <option value="">Efectivo / Sin Cuenta vinculada</option>
                        {bankAccounts.map(b => (
                          <option key={b.id} value={b.id}>{b.bankName} - {b.accountType}</option>
                        ))}
                      </select>
                    ) : (
                      <select 
                        value={methodId}
                        onChange={(e) => setMethodId(Number(e.target.value))}
                        className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'} border rounded-xl p-3 outline-none font-bold appearance-none focus:border-blue-300 transition-colors text-sm`}
                        required
                      >
                        {paymentMethods.length === 0 && <option value="" disabled>Sin métodos agregados</option>}
                        {paymentMethods.map(m => (
                          <option key={m.id} value={m.id}>{m.name}</option>
                        ))}
                      </select>
                    )}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-2xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 mt-4"
          >
            Guardar Movimiento
          </button>
        </form>
      </div>
    );
  };

function ExpenseTrackerApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [subTab, setSubTab] = useState('historial');
  const [transactions, setTransactions] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  
  const [settings, setSettings] = useState({ currency: 'ARS', theme: 'system' });
  const [systemTheme, setSystemTheme] = useState('light');

  // --- Cuenta y sincronización en la nube (Firebase) ---
  const [authUser, setAuthUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);
  const [syncStatus, setSyncStatus] = useState('offline'); // 'offline' | 'syncing' | 'synced' | 'error'
  const isRemoteUpdate = useRef(false);
  const hasLoadedCloudOnce = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    const handler = (e) => setSystemTheme(e.matches ? 'dark' : 'light');
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const isDarkMode = settings.theme === 'dark' || (settings.theme === 'system' && systemTheme === 'dark');

  useEffect(() => {
    document.body.classList.toggle('app-dark', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    if (typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) {
      setAuthChecked(true);
      return;
    }
    const unsubscribe = firebase.auth().onAuthStateChanged((u) => {
      setAuthUser(u);
      setAuthChecked(true);
      if (!u) {
        hasLoadedCloudOnce.current = false;
        setSyncStatus('offline');
      }
    });
    return () => unsubscribe();
  }, []);

  const [selectedMonth, setSelectedMonth] = useState(() => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  });
  const [categories, setCategories] = useState([]);
  const [typesList, setTypesList] = useState([]);
  const [commitments, setCommitments] = useState([]);
  const [installmentTracks, setInstallmentTracks] = useState([]);
  const [bankAccounts, setBankAccounts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  
  const [savingsGoals, setSavingsGoals] = useState([]);
  const [emergencyFund, setEmergencyFund] = useState({ target: 0, current: 0 });

  // Gemini AI assistant state
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    { role: 'model', text: '¡Hola! Soy tu asesor financiero con inteligencia artificial (Gemini). ¿En qué puedo ayudarte hoy sobre tus gastos, presupuestos o metas de ahorro?' }
  ]);
  const [aiLoading, setAiLoading] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem('finance_data');
    const savedMethods = localStorage.getItem('finance_methods');
    const savedSettings = localStorage.getItem('finance_settings');
    const savedCategories = localStorage.getItem('finance_categories');
    const savedTypes = localStorage.getItem('finance_types');
    const savedCommitments = localStorage.getItem('finance_commitments');
    const savedInstallmentTracks = localStorage.getItem('finance_installments_track');
    const savedBanks = localStorage.getItem('finance_banks');
    const savedGoals = localStorage.getItem('finance_goals');
    const savedEmergency = localStorage.getItem('finance_emergency');
    
    if (savedGoals) try { setSavingsGoals(JSON.parse(savedGoals)); } catch (e) {}
    if (savedEmergency) try { setEmergencyFund(JSON.parse(savedEmergency)); } catch (e) {}
    if (savedSettings) try { setSettings(JSON.parse(savedSettings)); } catch (e) {}
    
    if (savedTypes) {
      try { setTypesList(JSON.parse(savedTypes)); } catch (e) {}
    } else {
      setTypesList([
        { id: 'diario', name: 'Diario' },
        { id: 'mensual', name: 'Mensual' },
        { id: 'otro', name: 'Otro' }
      ]);
    }

    if (savedCategories) {
      try { setCategories(JSON.parse(savedCategories)); } catch (e) {}
    } else {
      setCategories([
        { id: 'comida', name: 'Comida', type: 'gasto', budget: 50000 },
        { id: 'transporte', name: 'Transporte', type: 'gasto', budget: 30000 },
        { id: 'servicios', name: 'Servicios', type: 'gasto', budget: 40000 },
        { id: 'sueldo', name: 'Sueldo', type: 'ingreso', budget: 0 },
        { id: 'ahorro', name: 'Ahorro / Metas', type: 'ahorro', budget: 0 }
      ]);
    }
    
    if (savedCommitments) try { setCommitments(JSON.parse(savedCommitments)); } catch (e) {}
    if (savedInstallmentTracks) try { setInstallmentTracks(JSON.parse(savedInstallmentTracks)); } catch (e) {}
    if (savedBanks) try { setBankAccounts(JSON.parse(savedBanks)); } catch (e) {}
    
    if (savedMethods) {
      try { setPaymentMethods(JSON.parse(savedMethods)); } catch (e) {}
    } else {
      setPaymentMethods([
        { id: 1, name: 'Efectivo', type: 'cash', color: 'from-green-400 to-emerald-600' },
        { id: 2, name: 'Tarjeta Débito', type: 'debit', color: 'from-blue-400 to-blue-600' }
      ]);
    }

    if (savedData) {
      try {
        setTransactions(JSON.parse(savedData));
      } catch (e) {
        console.error("Error loading data", e);
      }
    } else {
      setTransactions([
        { id: 1, type: 'ingreso', amount: 500000, description: 'Sueldo', date: new Date().toISOString(), category: 'sueldo', typeClassification: 'mensual', methodId: 1 },
        { id: 2, type: 'gasto', amount: 15000, description: 'Supermercado', date: new Date(Date.now() - 86400000).toISOString(), category: 'comida', typeClassification: 'diario', methodId: 2 },
        { id: 3, type: 'gasto', amount: 80000, description: 'Alquiler', date: new Date(Date.now() - 86400000 * 2).toISOString(), category: 'servicios', typeClassification: 'mensual', methodId: 1 },
      ]);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded || !installmentTracks || installmentTracks.length === 0) return;
    let hasChanges = false;
    const now = new Date();

    const updatedTracks = installmentTracks.map(q => {
      if (!q.startDate || q.current >= q.total) return q;
      const start = new Date(q.startDate);
      let monthsPassed = (now.getFullYear() - start.getFullYear()) * 12;
      monthsPassed -= start.getMonth();
      monthsPassed += now.getMonth();

      if (now.getDate() < start.getDate()) {
        monthsPassed--;
      }

      if (monthsPassed > 0) {
        hasChanges = true;
        const nextCurrent = Math.min(q.total, q.current + monthsPassed);
        const nextDate = new Date(start);
        nextDate.setMonth(nextDate.getMonth() + monthsPassed);
        return { 
          ...q, 
          current: nextCurrent, 
          startDate: nextDate.toISOString(),
          originalStartDate: q.originalStartDate || q.startDate 
        };
      }
      return q;
    });

    if (hasChanges) {
      setInstallmentTracks(updatedTracks);
    }
  }, [isLoaded, installmentTracks]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('finance_data', JSON.stringify(transactions));
      localStorage.setItem('finance_methods', JSON.stringify(paymentMethods));
      localStorage.setItem('finance_settings', JSON.stringify(settings));
      localStorage.setItem('finance_categories', JSON.stringify(categories));
      localStorage.setItem('finance_types', JSON.stringify(typesList));
      localStorage.setItem('finance_commitments', JSON.stringify(commitments));
      localStorage.setItem('finance_installments_track', JSON.stringify(installmentTracks));
      localStorage.setItem('finance_banks', JSON.stringify(bankAccounts));
      localStorage.setItem('finance_goals', JSON.stringify(savingsGoals));
      localStorage.setItem('finance_emergency', JSON.stringify(emergencyFund));
    }
  }, [transactions, paymentMethods, settings, categories, typesList, commitments, installmentTracks, bankAccounts, savingsGoals, emergencyFund, isLoaded]);

  // Al iniciar sesión: escuchar cambios en la nube en tiempo real (Firestore)
  useEffect(() => {
    if (!authUser || typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) return;
    const db = firebase.firestore();
    const docRef = db.collection('users').doc(authUser.uid);
    setSyncStatus('syncing');

    const unsubscribe = docRef.onSnapshot((snap) => {
      if (snap.exists) {
        const data = snap.data() || {};
        isRemoteUpdate.current = true;
        if (data.transactions) setTransactions(data.transactions);
        if (data.paymentMethods) setPaymentMethods(data.paymentMethods);
        if (data.settings) setSettings(data.settings);
        if (data.categories) setCategories(data.categories);
        if (data.typesList) setTypesList(data.typesList);
        if (data.commitments) setCommitments(data.commitments);
        if (data.installmentTracks) setInstallmentTracks(data.installmentTracks);
        if (data.bankAccounts) setBankAccounts(data.bankAccounts);
        if (data.savingsGoals) setSavingsGoals(data.savingsGoals);
        if (data.emergencyFund) setEmergencyFund(data.emergencyFund);
        hasLoadedCloudOnce.current = true;
        setSyncStatus('synced');
        setTimeout(() => { isRemoteUpdate.current = false; }, 400);
      } else {
        // Primera vez que este usuario sincroniza: sube los datos que ya tenía en este dispositivo
        hasLoadedCloudOnce.current = true;
        docRef.set({
          transactions, paymentMethods, settings, categories, typesList,
          commitments, installmentTracks, bankAccounts, savingsGoals, emergencyFund,
          updatedAt: Date.now()
        }).then(() => setSyncStatus('synced')).catch(() => setSyncStatus('error'));
      }
    }, () => setSyncStatus('error'));

    return () => unsubscribe();
    // eslint-disable-next-line
  }, [authUser]);

  // Cuando cambian los datos localmente: subirlos a la nube (con una pequeña espera para no saturar)
  useEffect(() => {
    if (!authUser || typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length || !hasLoadedCloudOnce.current) return;
    if (isRemoteUpdate.current) return;
    const db = firebase.firestore();
    const timer = setTimeout(() => {
      setSyncStatus('syncing');
      db.collection('users').doc(authUser.uid).set({
        transactions, paymentMethods, settings, categories, typesList,
        commitments, installmentTracks, bankAccounts, savingsGoals, emergencyFund,
        updatedAt: Date.now()
      }, { merge: true }).then(() => setSyncStatus('synced')).catch(() => setSyncStatus('error'));
    }, 1200);
    return () => clearTimeout(timer);
  }, [transactions, paymentMethods, settings, categories, typesList, commitments, installmentTracks, bankAccounts, savingsGoals, emergencyFund, authUser]);

  const formatAmountInput = (val) => {
    if (!val) return '';
    let clean = val.replace(/[^0-9,]/g, '');
    const parts = clean.split(',');
    if (parts.length > 2) return val;

    let integerPart = parts[0];
    let decimalPart = parts[1] !== undefined ? ',' + parts[1].substring(0, 2) : '';

    if (integerPart) {
      integerPart = parseInt(integerPart, 10).toLocaleString('es-AR');
    }

    return integerPart + decimalPart;
  };

  const parseFormattedAmount = (str) => {
    if (!str) return 0;
    let clean = String(str).replace(/\./g, '').replace(',', '.');
    return parseFloat(clean) || 0;
  };

  const getBankBalance = (bankId) => {
    const bank = bankAccounts.find(b => b.id === bankId);
    if (!bank) return 0;
    let bal = parseFloat(bank.initialBalance !== undefined ? bank.initialBalance : bank.balance) || 0;
    transactions.forEach(t => {
        if (t.type === 'ingreso' && t.bankId === bankId) {
            bal += parseFloat(t.amount);
        } else if (t.type === 'gasto') {
            const method = paymentMethods.find(m => m.id === t.methodId);
            if (method && method.bankId === bankId) {
                bal -= parseFloat(t.amount);
            }
        }
    });
    return bal;
  };

  const isTransactionInSelectedMonth = (dateString) => {
    const d = new Date(dateString);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    return `${yyyy}-${mm}` === selectedMonth;
  };

  const formatCurrency = (amount) => {
    const numericAmount = parseFloat(amount) || 0;
    const formatted = new Intl.NumberFormat('es-AR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericAmount);

    const symbols = { 'ARS': '$', 'USD': 'US$', 'EUR': '€' };
    return `${symbols[settings.currency] || '$'} ${formatted}`;
  };

  const totals = useMemo(() => {
    return transactions.filter(t => isTransactionInSelectedMonth(t.date)).reduce(
      (acc, curr) => {
        if (curr.type === 'ingreso') {
          acc.income += parseFloat(curr.amount);
        } else if (curr.type === 'gasto') {
          acc.expense += parseFloat(curr.amount);
          acc.categoryBreakdown[curr.category] = (acc.categoryBreakdown[curr.category] || 0) + parseFloat(curr.amount);
        }
        return acc;
      },
      { income: 0, expense: 0, categoryBreakdown: {} }
    );
  }, [transactions, selectedMonth]);

  const globalBalance = useMemo(() => {
    return totals.income - totals.expense;
  }, [totals]);

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  // --- Handlers de cuenta / sincronización ---
  const handleRegister = async (email, password) => {
    if (typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) throw { code: 'firebase-no-config' };
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const handleLogin = async (email, password) => {
    if (typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) throw { code: 'firebase-no-config' };
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  const handleLogout = async () => {
    if (typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) return;
    await firebase.auth().signOut();
  };

  const translateAuthError = (code) => {
    const map = {
      'auth/email-already-in-use': 'Ese email ya tiene una cuenta creada. Probá iniciar sesión.',
      'auth/invalid-email': 'El email no es válido.',
      'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
      'auth/user-not-found': 'No existe una cuenta con ese email.',
      'auth/wrong-password': 'Contraseña incorrecta.',
      'auth/invalid-credential': 'Email o contraseña incorrectos.',
      'auth/too-many-requests': 'Demasiados intentos. Esperá un momento y probá de nuevo.',
      'firebase-no-config': 'La sincronización todavía no está configurada en esta app (falta el archivo firebase-config.js).'
    };
    return map[code] || 'Ocurrió un error. Intentá de nuevo.';
  };

  // Gemini AI Assistant Handler
  // Llama a la API de Gemini reintentando automáticamente si el modelo está sobrecargado (503 / "alta demanda")
  const callGeminiWithRetry = async (apiUrl, payload, maxRetries = 3) => {
    let lastResult = null;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      const isOverloaded = result.error && (result.error.code === 503 || /high demand|overloaded|unavailable/i.test(result.error.message || ''));
      if (!isOverloaded || attempt === maxRetries) return result;
      lastResult = result;
      await new Promise(res => setTimeout(res, 2000 * (attempt + 1)));
    }
    return lastResult;
  };

  const handleSendAiMessage = async (userMsgRaw) => {
    const userMsg = (userMsgRaw || '').trim();
    if (!userMsg || aiLoading) return;

    setAiMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setAiLoading(true);

    try {
      const financialContext = `
      Datos del usuario:
      - Moneda: ${settings.currency}
      - Mes seleccionado: ${selectedMonth}
      - Ingresos del mes: ${totals.income}
      - Gastos del mes: ${totals.expense}
      - Balance del mes: ${globalBalance}
      - Fondo de emergencia: ${emergencyFund.current} (Meta: ${emergencyFund.target})
      - Metas de ahorro: ${JSON.stringify(savingsGoals)}
      - Últimos gastos/ingresos: ${JSON.stringify(transactions.slice(0, 10))}
      `;

      const systemPrompt = "Actúa como un asesor financiero personal amigable, experto y conciso en español. Analiza los datos financieros del usuario para darle consejos precisos de ahorro, optimización de gastos y planificación.";
      const userPrompt = `${financialContext}\n\nPregunta del usuario: ${userMsg}`;

      const apiKey = settings.geminiApiKey || "";
      if (!apiKey) {
        setAiMessages(prev => [...prev, { role: 'model', text: 'Para usar el asistente de IA, cargá tu clave de Gemini en Ajustes → Asistente de IA (Gemini).' }]);
        setAiLoading(false);
        return;
      }
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`;

      const payload = {
        contents: [{ parts: [{ text: userPrompt }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      };

      const result = await callGeminiWithRetry(apiUrl, payload);
      const candidate = result.candidates?.[0];
      if (candidate && candidate.content?.parts?.[0]?.text) {
        const reply = candidate.content.parts[0].text;
        setAiMessages(prev => [...prev, { role: 'model', text: reply }]);
      } else if (result.error?.message) {
        const isOverloaded = result.error.code === 503 || /high demand|overloaded|unavailable/i.test(result.error.message || '');
        setAiMessages(prev => [...prev, { role: 'model', text: isOverloaded ? 'El modelo de Gemini está con mucha demanda ahora mismo. Ya reintenté un par de veces automáticamente, pero seguía saturado — probá de nuevo en uno o dos minutos.' : `Error de Google Gemini: ${result.error.message}` }]);
      } else if (candidate?.finishReason === 'SAFETY') {
        setAiMessages(prev => [...prev, { role: 'model', text: 'La respuesta fue bloqueada por los filtros de seguridad de Gemini. Probá reformular la pregunta.' }]);
      } else {
        setAiMessages(prev => [...prev, { role: 'model', text: 'Lo siento, no pude procesar tu consulta en este momento.' }]);
      }
    } catch (err) {
      setAiMessages(prev => [...prev, { role: 'model', text: `Ocurrió un error al conectar con el asistente de IA: ${err.message || err}` }]);
    } finally {
      setAiLoading(false);
    }
  };

  // Gemini Smart Categorization & Receipt Scan Simulation
  const [isScanning, setIsScanning] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const handleSmartScan = async (promptText, setDesc, setAmt, setCat, setFeedback, setMethod, setDateModeFn) => {
    const notify = setFeedback || (() => {});
    if (!promptText || isScanning) return;
    setIsScanning(true);
    notify({ type: 'info', text: 'Consultando a Gemini...' });
    try {
      const systemPrompt = `Eres una IA de finanzas. Del mensaje del usuario, extraé: una descripción corta, el monto numérico (sin símbolos de moneda ni separadores de miles, usando punto decimal si hace falta), la categoría más apropiada (elegida EXACTAMENTE de esta lista de IDs válidos: ${categories.map(c => c.id).join(', ')}), el medio de pago si lo menciona (elegido EXACTAMENTE de esta lista de IDs válidos, o null si no se menciona ninguno: ${paymentMethods.map(m => `${m.id} (${m.name})`).join(', ')}), y cuándo ocurrió el gasto si lo menciona: "hoy" si dice hoy o no menciona nada, "ayer" si dice ayer, "hace2dias" si dice antes de ayer o hace dos días, o null si no queda claro. Respondé ÚNICAMENTE con un objeto JSON válido, sin texto adicional, sin explicaciones y sin bloques de código markdown, con exactamente esta forma: {"description": "...", "amount": 0, "category": "...", "method": "...", "when": "hoy"}`;
      const apiKey = settings.geminiApiKey || "";
      if (!apiKey) {
        notify({ type: 'error', text: 'Para usar el autocompletado con IA, cargá tu clave de Gemini en Ajustes → Asistente de IA (Gemini).' });
        setIsScanning(false);
        return;
      }
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${apiKey}`;
      const payload = {
        contents: [{ parts: [{ text: promptText }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] }
      };
      const result = await callGeminiWithRetry(apiUrl, payload);
      const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (rawText) {
        // Por si Gemini igual envuelve la respuesta en ```json ... ``` o agrega texto alrededor
        const jsonMatch = rawText.match(/\{[\s\S]*\}/);
        const cleanJson = jsonMatch ? jsonMatch[0] : rawText;
        let parsed = null;
        try {
          parsed = JSON.parse(cleanJson);
          // Por si Gemini lo devuelve envuelto en un array o dentro de otra clave
          if (Array.isArray(parsed)) parsed = parsed[0];
          if (parsed && !('description' in parsed) && !('amount' in parsed) && !('category' in parsed)) {
            const nestedKey = Object.keys(parsed).find(k => typeof parsed[k] === 'object' && parsed[k] !== null);
            if (nestedKey) parsed = parsed[nestedKey];
          }
        } catch (parseErr) {
          notify({ type: 'error', text: `La IA respondió pero no en el formato esperado. Respuesta: ${rawText.slice(0, 250)}` });
        }
        if (parsed) {
          const desc = parsed.description ?? parsed.descripcion ?? parsed.desc;
          const amt = parsed.amount ?? parsed.monto ?? parsed.amount_number;
          const cat = parsed.category ?? parsed.categoria ?? parsed.category_id;
          const method = parsed.method ?? parsed.metodo ?? parsed.payment_method;
          const when = parsed.when ?? parsed.fecha ?? parsed.date;

          let appliedSomething = false;
          if (desc) { setDesc(String(desc)); appliedSomething = true; }
          if (amt !== undefined && amt !== null && amt !== '') {
            const numericAmt = parseFloat(String(amt).replace(/[^0-9.,-]/g, '').replace(',', '.'));
            if (!isNaN(numericAmt) && numericAmt > 0) { setAmt(formatAmountInput(String(numericAmt))); appliedSomething = true; }
          }
          if (cat) {
            const matchedCat = categories.find(c => c.id === cat || c.name.toLowerCase() === String(cat).toLowerCase());
            if (matchedCat) { setCat(matchedCat.id); appliedSomething = true; }
          }
          if (method && method !== 'null' && setMethod) {
            const matchedMethod = paymentMethods.find(m => String(m.id) === String(method) || m.name.toLowerCase() === String(method).toLowerCase());
            if (matchedMethod) { setMethod(matchedMethod.id); appliedSomething = true; }
          }
          if (when && when !== 'null' && setDateModeFn) {
            if (['hoy', 'ayer', 'hace2dias'].includes(when)) { setDateModeFn(when); appliedSomething = true; }
          }

          if (appliedSomething) {
            notify({ type: 'success', text: '¡Listo! Se completaron los campos.' });
          } else {
            notify({ type: 'error', text: `Gemini respondió pero no reconocí los datos. Respuesta: ${JSON.stringify(parsed).slice(0, 350)}` });
          }
        }
      } else if (result.error?.message) {
        notify({ type: 'error', text: `Error de Google Gemini: ${result.error.message}` });
      } else {
        notify({ type: 'error', text: `No se recibió una respuesta utilizable de la IA. Respuesta cruda: ${JSON.stringify(result).slice(0, 300)}` });
      }
    } catch(e) {
      console.error(e);
      notify({ type: 'error', text: `Ocurrió un error al usar el autocompletado: ${e.message || e}` });
    } finally {
      setIsScanning(false);
    }
  };

  const startVoiceDictation = (setSmartText, setDesc, setAmt, setCat, setFeedback, setMethod, setDateModeFn) => {
    const notify = setFeedback || (() => {});
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      notify({ type: 'error', text: 'Este navegador no soporta el reconocimiento de voz por micrófono. Probá escribiendo el texto directamente.' });
      return;
    }
    if (!window.isSecureContext) {
      notify({ type: 'error', text: 'El micrófono solo funciona en conexiones seguras (https). Revisá que la URL empiece con https://.' });
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = 'es-AR';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    setIsListening(true);
    notify({ type: 'info', text: 'Escuchando... hablá ahora.' });

    recognition.onspeechend = () => {
      notify({ type: 'info', text: 'Procesando lo que dijiste...' });
    };
    recognition.onresult = (event) => {
      const speechResult = event.results?.[0]?.[0]?.transcript;
      setIsListening(false);
      if (!speechResult) {
        notify({ type: 'error', text: 'No se pudo transcribir el audio. Probá de nuevo o escribí el texto.' });
        return;
      }
      setSmartText(speechResult);
      notify({ type: 'info', text: `Se entendió: "${speechResult}". Analizando con Gemini...` });
      handleSmartScan(speechResult, setDesc, setAmt, setCat, setFeedback);
    };
    recognition.onnomatch = () => {
      setIsListening(false);
      notify({ type: 'error', text: 'No se entendió lo que dijiste. Probá de nuevo hablando claro.' });
    };
    recognition.onerror = (event) => {
      setIsListening(false);
      const errorMessages = {
        'not-allowed': 'No hay permiso de micrófono para este sitio. Andá a la configuración del navegador (ícono de candado junto a la URL) → Permisos → Micrófono → Permitir, y volvé a intentar.',
        'service-not-allowed': 'El navegador bloqueó el acceso al servicio de reconocimiento de voz.',
        'audio-capture': 'No se encontró ningún micrófono disponible en este dispositivo.',
        'no-speech': 'No se detectó ninguna voz. Probá de nuevo y hablá apenas se active.',
        'network': 'Se necesita conexión a internet para el reconocimiento de voz.',
        'aborted': null
      };
      const msg = errorMessages[event.error];
      if (msg) notify({ type: 'error', text: msg });
      else if (msg === undefined) notify({ type: 'error', text: `No se pudo usar el micrófono (${event.error}). Probá de nuevo.` });
    };
    recognition.onend = () => {
      setIsListening(false);
    };
    try {
      recognition.start();
    } catch (e) {
      setIsListening(false);
      notify({ type: 'error', text: 'No se pudo iniciar el micrófono. Probá de nuevo.' });
    }
  };

  const CardsManager = () => {
    const [isAdding, setIsAdding] = useState(false);
    const [newCardName, setNewCardName] = useState('');
    const [newCardType, setNewCardType] = useState('credit');
    
    const [cardFilterMode, setCardFilterMode] = useState('mes');
    const [cardMonth, setCardMonth] = useState(selectedMonth);
    const [cardDateFrom, setCardDateFrom] = useState(() => {
        const d = new Date();
        d.setDate(1);
        return d.toISOString().split('T')[0];
    });
    const [cardDateTo, setCardDateTo] = useState(() => {
        const d = new Date();
        return d.toISOString().split('T')[0];
    });

    const [cardDetailTab, setCardDetailTab] = useState('historial');
    const [isEditingLimits, setIsEditingLimits] = useState(false);
    const [cardLimitInput, setCardLimitInput] = useState('');
    const [cardClosingDay, setCardClosingDay] = useState('');
    const [cardDueDay, setCardDueDay] = useState('');

    useEffect(() => {
      if (selectedCardId !== null) {
        const card = paymentMethods.find(m => m.id === selectedCardId);
        if (card) {
          const hasLimits = card.limit || card.closingDay || card.dueDay;
          setIsEditingLimits(!hasLimits); 
          setCardLimitInput(card.limit ? formatAmountInput(card.limit.toString()) : '');
          
          const today = new Date();
          const yyyy = today.getFullYear();
          const mm = String(today.getMonth() + 1).padStart(2, '0');
          
          let cDay = card.closingDay || '';
          if (cDay && !String(cDay).includes('-')) cDay = `${yyyy}-${mm}-${String(cDay).padStart(2, '0')}`;
          setCardClosingDay(cDay);

          let dDay = card.dueDay || '';
          if (dDay && !String(dDay).includes('-')) dDay = `${yyyy}-${mm}-${String(dDay).padStart(2, '0')}`;
          setCardDueDay(dDay);
        }
      } else {
        setCardDetailTab('historial');
      }
    }, [selectedCardId, paymentMethods]);
    
    const typeColors = {
      credit: 'from-purple-500 to-indigo-600',
      debit: 'from-blue-400 to-blue-600',
      cash: 'from-green-400 to-emerald-600',
      wallet: 'from-sky-400 to-cyan-600'
    };

    const typeLabels = {
      credit: 'Crédito', debit: 'Débito', cash: 'Efectivo', wallet: 'Billetera Virtual'
    };

    const currentMonthExpenses = useMemo(() => {
      const expenses = {};
      transactions.forEach(t => {
        if (t.type === 'gasto' && isTransactionInSelectedMonth(t.date)) {
          expenses[t.methodId] = (expenses[t.methodId] || 0) + parseFloat(t.amount);
        }
      });
      return expenses;
    }, [transactions, selectedMonth]);

    const handleAddCard = (e) => {
      e.preventDefault();
      if(!newCardName) return;
      const newCard = {
        id: Date.now(),
        name: newCardName,
        type: newCardType,
        color: typeColors[newCardType] || 'from-gray-500 to-gray-700'
      };
      setPaymentMethods([...paymentMethods, newCard]);
      setIsAdding(false);
      setNewCardName('');
    };

    const handleDeleteCard = (e, id) => {
      e.stopPropagation();
      setPaymentMethods(paymentMethods.filter(m => m.id !== id));
      if (selectedCardId === id) setSelectedCardId(null);
    };

    const handleSaveLimits = (e) => {
      e.preventDefault();
      const numLimit = parseFormattedAmount(cardLimitInput);
      setPaymentMethods(paymentMethods.map(m =>
        m.id === selectedCardId ? {
          ...m,
          limit: numLimit,
          closingDay: cardClosingDay,
          dueDay: cardDueDay
        } : m
      ));
      setIsEditingLimits(false);
    };

    if (selectedCardId !== null) {
      const card = paymentMethods.find(m => m.id === selectedCardId);
      
      const cardTransactions = transactions.filter(t => {
          if (t.methodId !== selectedCardId) return false;
          if (cardFilterMode === 'mes') {
              const d = new Date(t.date);
              const yyyy = d.getFullYear();
              const mm = String(d.getMonth() + 1).padStart(2, '0');
              return `${yyyy}-${mm}` === cardMonth;
          } else if (cardFilterMode === 'periodo') {
              const tDate = new Date(t.date).getTime();
              const from = new Date(cardDateFrom + 'T00:00:00').getTime();
              const to = new Date(cardDateTo + 'T23:59:59').getTime();
              return tDate >= from && tDate <= to;
          }
          return true;
      });

      const cardInstallments = installmentTracks.filter(q => q.methodId === selectedCardId);

      const renderDateInfo = (dateStr) => {
          if (!dateStr) return { day: '-', full: 'N/A' };
          if (String(dateStr).includes('-')) {
              const [y, m, d] = String(dateStr).split('-');
              return { day: d, full: `${d}/${m}/${y}` };
          }
          return { day: dateStr, full: `Día ${dateStr}` };
      };
      
      const closingInfo = renderDateInfo(card.closingDay);
      const dueInfo = renderDateInfo(card.dueDay);

      return (
        <div className="p-4 pb-32 min-h-full animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="flex items-center gap-3 mb-4 mt-2">
            <button 
              onClick={() => setSelectedCardId(null)}
              className={`${isDarkMode ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} p-2 rounded-full transition-colors shadow-sm`}
            >
              <ArrowLeftIcon />
            </button>
            <div>
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{card ? card.name : 'Detalle de Tarjeta'}</h1>
              <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} capitalize`}>{card ? typeLabels[card.type] : ''}</p>
            </div>
          </div>

          <div className={`${isDarkMode ? 'bg-slate-800/80 text-slate-300' : 'bg-gray-200/70 text-gray-500'} p-1 rounded-2xl flex w-full mb-6`}>
            <button 
              onClick={() => setCardDetailTab('historial')}
              className={`flex-1 py-2 text-[10px] font-bold rounded-xl transition-all ${cardDetailTab === 'historial' ? (isDarkMode ? 'bg-slate-700 text-white shadow-sm' : 'bg-white text-gray-900 shadow-sm') : ''}`}
            >
              Historial
            </button>
            <button 
              onClick={() => setCardDetailTab('cuotas')}
              className={`flex-1 py-2 text-[10px] font-bold rounded-xl transition-all ${cardDetailTab === 'cuotas' ? (isDarkMode ? 'bg-slate-700 text-white shadow-sm' : 'bg-white text-gray-900 shadow-sm') : ''}`}
            >
              Cuotas
            </button>
            <button 
              onClick={() => setCardDetailTab('limites')}
              className={`flex-1 py-2 text-[10px] font-bold rounded-xl transition-all ${cardDetailTab === 'limites' ? (isDarkMode ? 'bg-slate-700 text-white shadow-sm' : 'bg-white text-gray-900 shadow-sm') : ''}`}
            >
              Límites y Cierres
            </button>
          </div>

          {cardDetailTab === 'historial' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-2xl p-4 shadow-sm border space-y-3`}>
                <p className={`text-xs font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider`}>Filtros</p>
                <div className="flex gap-2">
                    <select 
                        value={cardFilterMode}
                        onChange={(e) => setCardFilterMode(e.target.value)}
                        className={`${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-2 text-xs font-medium outline-none flex-1`}
                    >
                        <option value="mes">Mes Específico</option>
                        <option value="periodo">Rango de Fechas</option>
                        <option value="todos">Todo el tiempo</option>
                    </select>
                    {cardFilterMode === 'mes' && (
                        <input 
                            type="month" 
                            value={cardMonth}
                            onChange={(e) => setCardMonth(e.target.value)}
                            className={`${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-2 text-xs font-medium outline-none flex-1`}
                        />
                    )}
                </div>
                {cardFilterMode === 'periodo' && (
                    <div className="flex gap-2 animate-in fade-in duration-200">
                        <div className="flex-1">
                            <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Desde</label>
                            <input 
                                type="date" 
                                value={cardDateFrom}
                                onChange={(e) => setCardDateFrom(e.target.value)}
                                className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-2 text-xs font-medium outline-none`}
                            />
                        </div>
                        <div className="flex-1">
                            <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Hasta</label>
                            <input 
                                type="date" 
                                value={cardDateTo}
                                onChange={(e) => setCardDateTo(e.target.value)}
                                className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-2 text-xs font-medium outline-none`}
                            />
                        </div>
                    </div>
                )}
              </div>

              <div className="space-y-3">
                {cardTransactions.length === 0 ? (
                  <div className={`text-center ${isDarkMode ? 'text-slate-400 bg-slate-900 border-slate-800' : 'text-gray-500 bg-white border-gray-100'} mt-6 text-sm p-8 rounded-3xl border shadow-sm`}>
                    No hay movimientos registrados con los filtros seleccionados.
                  </div>
                ) : (
                  cardTransactions.map(t => {
                    const category = categories.find(c => c.id === t.category);
                    return (
                      <div key={t.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-2xl p-4 shadow-sm border flex justify-between items-center gap-2 group`}>
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${t.type === 'ingreso' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                            {t.type === 'ingreso' ? <TrendingUpIcon /> : <TrendingDownIcon />}
                          </div>
                          <div className="min-w-0">
                            <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-base truncate`}>{t.description}</p>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} whitespace-nowrap`}>
                                {new Date(t.date).toLocaleDateString('es-AR', { day: '2-digit', month: 'short' })}
                              </span>
                              <span className={`w-1 h-1 rounded-full shrink-0 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-300'}`}></span>
                              <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} capitalize truncate`}>{category ? category.name : t.category}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          <div className="flex flex-col items-end">
                            <span className={`font-bold whitespace-nowrap ${t.type === 'ingreso' ? 'text-green-500' : (isDarkMode ? 'text-white' : 'text-gray-900')}`}>
                              {t.type === 'ingreso' ? '+' : '-'}{formatCurrency(t.amount)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {cardDetailTab === 'cuotas' && (
            <div className="space-y-3 animate-in fade-in duration-300">
              {cardInstallments.length === 0 ? (
                <div className={`text-center ${isDarkMode ? 'text-slate-400 bg-slate-900 border-slate-800' : 'text-gray-500 bg-white border-gray-100'} mt-6 text-sm p-8 rounded-3xl border shadow-sm`}>
                  No hay cuotas asociadas o en seguimiento para esta tarjeta.
                </div>
              ) : (
                cardInstallments.map(q => {
                  const percent = Math.min(Math.round((q.current / (q.total || 1)) * 100), 100);
                  return (
                    <div key={q.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-2xl p-4 shadow-sm border space-y-3 border-l-4 border-l-purple-500`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-base`}>{q.name}</p>
                            <span className="text-[10px] bg-purple-500/10 text-purple-400 font-semibold px-2 py-0.5 rounded-md border border-purple-500/20">
                              {q.current}/{q.total} cuotas
                            </span>
                          </div>
                          <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mt-0.5`}>
                            Valor cuota mensual: <span className={`font-bold ${isDarkMode ? 'text-slate-200' : 'text-gray-800'}`}>{formatCurrency(q.amount)}</span>
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className={`flex justify-between text-[10px] font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mb-1`}>
                          <span>Progreso: {percent}%</span>
                          <span>{q.current === q.total ? '🎉 Finalizado' : `${q.total - q.current} cuotas restantes`}</span>
                        </div>
                        <div className={`w-full ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} h-2 rounded-full overflow-hidden`}>
                          <div className={`h-full rounded-full transition-all duration-500 ${q.current === q.total ? 'bg-green-500' : 'bg-purple-600'}`} style={{ width: `${percent}%` }}></div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {cardDetailTab === 'limites' && (
            <div className="space-y-4 animate-in fade-in duration-300">
              {!isEditingLimits ? (
                <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border relative overflow-hidden`}>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} text-lg`}>Límites y Cierres</h3>
                      <p className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mt-0.5`}>Estado del Mes Actual</p>
                    </div>
                    <button onClick={() => setIsEditingLimits(true)} className="text-blue-500 p-1.5 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-colors"><EditIcon /></button>
                  </div>
                  
                  {card.limit > 0 && (
                    <div className={`mb-6 ${isDarkMode ? 'bg-slate-800/60 border-slate-800' : 'bg-gray-50 border-gray-100'} p-4 rounded-2xl border`}>
                      <div className={`flex justify-between text-xs font-bold ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} mb-2`}>
                        <span>Límite Total</span>
                        <span>{formatCurrency(card.limit)}</span>
                      </div>
                      <div className={`w-full ${isDarkMode ? 'bg-slate-800' : 'bg-gray-200'} h-3 rounded-full overflow-hidden mb-2`}>
                        <div className={`h-full rounded-full transition-all duration-1000 ${((currentMonthExpenses[card.id] || 0) / card.limit) > 0.85 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ width: `${Math.min(((currentMonthExpenses[card.id] || 0) / card.limit) * 100, 100)}%` }}></div>
                      </div>
                      <div className={`flex justify-between text-[11px] font-medium ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                        <span>Consumido: {formatCurrency(currentMonthExpenses[card.id] || 0)}</span>
                        <span className="text-green-500 font-bold">Disponible: {formatCurrency(Math.max(0, card.limit - (currentMonthExpenses[card.id] || 0)))}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3">
                    <div className={`${isDarkMode ? 'bg-slate-800/60 border-slate-800 text-slate-200' : 'bg-white border-gray-50 text-gray-800'} border-2 p-3 rounded-xl flex items-center gap-3`}>
                      <div className="w-8 h-8 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 font-black text-xs">
                        {closingInfo.day}
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Cierre</p>
                        <p className={`font-semibold text-sm`}>{closingInfo.full}</p>
                      </div>
                    </div>
                    <div className={`${isDarkMode ? 'bg-slate-800/60 border-slate-800 text-slate-200' : 'bg-white border-gray-50 text-gray-800'} border-2 p-3 rounded-xl flex items-center gap-3`}>
                      <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 font-black text-xs">
                        {dueInfo.day}
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-bold uppercase">Vencimiento</p>
                        <p className={`font-semibold text-sm`}>{dueInfo.full}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSaveLimits} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border space-y-4`}>
                  <h3 className={`text-sm font-bold ${isDarkMode ? 'text-white border-slate-800' : 'text-gray-800 border-gray-100'} border-b pb-2`}>Configurar Tarjeta</h3>
                  
                  <div>
                    <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Límite Total de Crédito</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                      <input
                        type="text"
                        value={cardLimitInput}
                        onChange={e => setCardLimitInput(formatAmountInput(e.target.value))}
                        placeholder="Ej. 500000"
                        className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 pl-8 text-sm outline-none font-semibold`}
                        inputMode="decimal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Fecha de Cierre</label>
                      <input
                        type="date"
                        value={cardClosingDay}
                        onChange={e => setCardClosingDay(e.target.value)}
                        className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-2.5 text-xs outline-none font-semibold`}
                      />
                    </div>
                    <div>
                      <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Fecha de Vencimiento</label>
                      <input
                        type="date"
                        value={cardDueDay}
                        onChange={e => setCardDueDay(e.target.value)}
                        className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-2.5 text-xs outline-none font-semibold`}
                      />
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    { (card.limit || card.closingDay || card.dueDay) && (
                      <button type="button" onClick={() => setIsEditingLimits(false)} className={`flex-1 ${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} py-2.5 rounded-xl text-xs font-semibold transition-colors`}>Cancelar</button>
                    )}
                    <button type="submit" className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-blue-500/20 hover:bg-blue-700 transition-colors">Guardar Cambios</button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="p-4 pb-32 min-h-full animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="flex justify-between items-center mb-6 mt-2">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Mis Tarjetas</h1>
          <button 
            onClick={() => setIsAdding(!isAdding)}
            className="bg-blue-500/10 text-blue-500 p-2 rounded-full hover:bg-blue-500/20 transition-colors shadow-sm"
          >
            <PlusIcon active={false} />
          </button>
        </div>

        {isAdding && (
          <form onSubmit={handleAddCard} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border mb-6 animate-in zoom-in-95 duration-200`}>
            <h3 className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Nueva Tarjeta / Método</h3>
            <input 
              type="text" 
              placeholder="Nombre (ej. Visa Crédito)" 
              value={newCardName}
              onChange={(e) => setNewCardName(e.target.value)}
              className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100 text-gray-800'} rounded-xl p-3 mb-3 outline-none focus:border-blue-300 transition-colors`}
              required
            />
            <select 
              value={newCardType}
              onChange={(e) => setNewCardType(e.target.value)}
              className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100 text-gray-800'} rounded-xl p-3 mb-4 outline-none focus:border-blue-300 appearance-none transition-colors`}
            >
              <option value="credit">Tarjeta de Crédito</option>
              <option value="debit">Tarjeta de Débito</option>
              <option value="wallet">Billetera Virtual (Ej. MP)</option>
              <option value="cash">Efectivo</option>
            </select>
            <div className="flex gap-2">
              <button type="button" onClick={() => setIsAdding(false)} className={`flex-1 ${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} font-semibold py-3 rounded-xl transition-colors`}>Cancelar</button>
              <button type="submit" className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors active:scale-95">Guardar</button>
            </div>
          </form>
        )}

        <div className="space-y-4">
          {paymentMethods.length === 0 && (
            <div className={`text-center ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mt-10 text-sm`}>No tienes métodos de pago agregados.</div>
          )}
          {paymentMethods.map(method => (
            <div 
              key={method.id} 
              onClick={() => { setSelectedCardId(method.id); setCardDetailTab('historial'); }}
              className={`bg-gradient-to-br ${method.color} rounded-3xl p-5 text-white shadow-md relative overflow-hidden h-40 flex flex-col justify-between group cursor-pointer hover:shadow-lg transition-all transform active:scale-[0.98]`}
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
              
              <div className="flex justify-between items-start relative z-10">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase border border-white/10 backdrop-blur-sm shadow-sm">
                  {typeLabels[method.type] || 'Método'}
                </span>
                <button 
                  onClick={(e) => handleDeleteCard(e, method.id)}
                  className="text-white/70 hover:text-white bg-black/10 hover:bg-black/20 p-1.5 rounded-full transition-all"
                >
                  <TrashIcon />
                </button>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-1 opacity-90">{method.name}</h3>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-white/70 uppercase tracking-widest mb-0.5">Gastos este mes</p>
                    <p className="text-2xl font-bold tracking-tight">
                      {formatCurrency(currentMonthExpenses[method.id] || 0)}
                    </p>
                  </div>
                  <span className="text-xs bg-white/20 px-2.5 py-1 rounded-lg backdrop-blur-sm text-white/95 font-medium">Ver historial →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const Dashboard = () => {
    const today = new Date();
    const currentDay = today.getDate();
    
    const upcomingCommitments = commitments.filter(c => {
      const due = parseInt(c.dueDay || 1);
      return due >= currentDay && due <= currentDay + 5;
    });

    const [yyyy, mm] = selectedMonth.split('-');
    const monthName = new Date(yyyy, parseInt(mm) - 1, 1).toLocaleString('es-ES', { month: 'long', year: 'numeric' });

    const handlePrevMonth = () => {
      const d = new Date(yyyy, parseInt(mm) - 2, 1);
      setSelectedMonth(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
    };

    const handleNextMonth = () => {
      const d = new Date(yyyy, parseInt(mm), 1);
      setSelectedMonth(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`);
    };

    return (
      <div className="p-4 pb-32 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} tracking-tight`}>Mi Billetera</h1>
            <div className="flex items-center gap-2 mt-1">
              <button onClick={handlePrevMonth} className={`${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-gray-100 text-gray-400 hover:text-blue-600 hover:bg-gray-200'} rounded-full p-1 transition-colors`}>
                <ArrowLeftIcon />
              </button>
              <div className="relative flex items-center justify-center min-w-[110px]">
                <span className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-600'} capitalize font-semibold`}>{monthName}</span>
                <input 
                  type="month"
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full"
                />
              </div>
              <button onClick={handleNextMonth} className={`${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-gray-100 text-gray-400 hover:text-blue-600 hover:bg-gray-200'} rounded-full p-1 transition-colors rotate-180`}>
                <ArrowLeftIcon />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAiChatOpen(true)}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-2.5 rounded-full shadow-md flex items-center justify-center hover:scale-105 transition-all"
              title="Asistente IA Gemini"
            >
              <SparkleIcon />
            </button>
            <button 
              onClick={() => setActiveTab('profile')}
              className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center overflow-hidden border border-blue-500/20 shadow-sm transition-transform active:scale-95 cursor-pointer"
            >
               <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=e2e8f0" alt="Avatar" className="w-full h-full object-cover" />
            </button>
          </div>
        </div>

        {aiChatOpen && (
          <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'} rounded-3xl p-4 shadow-xl border mb-6 animate-in zoom-in-95 duration-200`}>
            <div className="flex justify-between items-center border-b pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="bg-blue-500/10 text-blue-500 p-2 rounded-xl"><SparkleIcon /></div>
                <div>
                  <h3 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Asistente Financiero IA</h3>
                  <p className="text-[10px] text-gray-400">Impulsado por Google Gemini</p>
                </div>
              </div>
              <button onClick={() => setAiChatOpen(false)} className="text-gray-400 hover:text-gray-600 text-sm font-bold px-2">✕</button>
            </div>

            <div className="max-h-60 overflow-y-auto space-y-3 mb-3 pr-1 text-xs">
              {aiMessages.map((msg, i) => (
                <div key={i} className={`p-3 rounded-2xl ${msg.role === 'user' ? 'bg-blue-600 text-white ml-8' : (isDarkMode ? 'bg-slate-800 text-slate-200' : 'bg-gray-100 text-gray-800')} mr-8`}>
                  <p className="leading-relaxed">{msg.text}</p>
                </div>
              ))}
              {aiLoading && (
                <div className={`p-3 rounded-2xl ${isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-gray-100 text-gray-500'} mr-8 animate-pulse`}>
                  Pensando respuesta financiera...
                </div>
              )}
            </div>

            <AiChatInputForm isDarkMode={isDarkMode} isLoading={aiLoading} onSend={handleSendAiMessage} />
          </div>
        )}

        {upcomingCommitments.length > 0 && (
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-4 shadow-sm flex gap-3 items-start animate-in zoom-in-95 duration-300">
            <div className="mt-0.5"><BellIcon /></div>
            <div>
              <h4 className="font-semibold text-orange-500 text-sm">Próximos Vencimientos</h4>
              {upcomingCommitments.map(c => (
                <p key={c.id} className="text-xs text-orange-400 mt-1 font-medium">
                  {c.name} ({formatCurrency(c.amount)}) - Vence el día {c.dueDay}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-lg shadow-blue-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
          <p className="text-blue-100 text-sm font-medium mb-1">Balance Total (Ingresos - Gastos)</p>
          <h2 className="text-3xl font-bold tracking-tight mb-6">{formatCurrency(globalBalance)}</h2>
          
          <div className="flex justify-between items-center border-t border-white/20 pt-4">
            <div>
              <p className="text-blue-100 text-xs flex items-center gap-1 mb-1">
                 <TrendingUpIcon /> Ingresos
              </p>
              <p className="font-semibold text-base">{formatCurrency(totals.income)}</p>
            </div>
            <div className="h-8 w-[1px] bg-white/20"></div>
            <div>
              <p className="text-blue-100 text-xs flex items-center gap-1 mb-1">
                 <TrendingDownIcon /> Gastos
              </p>
              <p className="font-semibold text-base">{formatCurrency(totals.expense)}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Cuentas Vinculadas</h3>
          <div className="flex overflow-x-auto gap-3 pb-2 -mx-4 px-4 snap-x snap-mandatory no-scrollbar">
            {bankAccounts.map(bank => {
              const balanceStr = formatCurrency(getBankBalance(bank.id));
              let textSizeClass = "text-lg";
              if (balanceStr.length > 16) textSizeClass = "text-[11px]";
              else if (balanceStr.length > 14) textSizeClass = "text-xs";
              else if (balanceStr.length > 12) textSizeClass = "text-sm";
              else if (balanceStr.length > 10) textSizeClass = "text-base";

              return (
                <div key={bank.id} className={`min-w-[160px] max-w-[160px] ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-2xl p-4 shadow-sm border flex-shrink-0 snap-start`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                      <BuildingIcon />
                    </div>
                    <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} truncate`}>{bank.bankName}</span>
                  </div>
                  <p className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-medium uppercase tracking-wider mb-0.5`}>{bank.accountType}</p>
                  <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} ${textSizeClass} truncate transition-all duration-300`}>{balanceStr}</p>
                </div>
              );
            })}
            <div className={`min-w-[160px] max-w-[160px] ${isDarkMode ? 'bg-slate-900/40 border-slate-800 hover:bg-slate-900' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-4 flex-shrink-0 cursor-pointer transition-colors snap-start`} onClick={() => {
               setActiveTab('settings');
               setTimeout(() => {
                  const el = document.getElementById('bancos-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
               }, 150);
            }}>
               <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-gray-200 text-gray-500'} flex items-center justify-center mb-2`}>
                  <PlusIcon active={false} />
               </div>
               <span className={`text-xs font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Vincular otra</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Presupuestos / Categorías</h3>
          <div className="space-y-3">
            {categories.filter(c => c.type === 'gasto').map(cat => {
              const spent = totals.categoryBreakdown[cat.id] || 0;
              const limit = cat.budget || 0;
              const percent = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;
              
              if (limit === 0 && spent === 0) return null;
              
              return (
                <div key={cat.id} className={`${isDarkMode ? 'bg-[#0b1120] border-slate-800/70' : 'bg-white border-gray-100'} p-3.5 rounded-2xl shadow-sm border`}>
                  <div className="flex justify-between items-center mb-2.5">
                    <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} capitalize`}>{cat.name}</span>
                    <span className={`text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                      {formatCurrency(spent)} {limit > 0 && <span className={`${isDarkMode ? 'text-slate-500' : 'text-gray-400'} font-normal`}>/ {formatCurrency(limit)}</span>}
                    </span>
                  </div>
                  {limit > 0 && (
                    <div className={`w-full ${isDarkMode ? 'bg-slate-800/60' : 'bg-gray-100'} h-2.5 rounded-full overflow-hidden`}>
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${percent >= 90 ? 'bg-red-500' : percent >= 75 ? 'bg-orange-400' : 'bg-blue-500'}`}
                        style={{
                          width: `${percent}%`,
                          boxShadow: isDarkMode ? `0 0 10px 1px ${percent >= 90 ? 'rgba(239,68,68,0.7)' : percent >= 75 ? 'rgba(251,146,60,0.7)' : 'rgba(59,130,246,0.7)'}` : 'none'
                        }}
                      ></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-end mb-4">
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Actividad Reciente</h3>
            <button onClick={() => { setSubTab('historial'); setActiveTab('history'); }} className="text-blue-500 text-sm font-medium">Ver todo</button>
          </div>
          <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800 divide-slate-800' : 'bg-white border-gray-100 divide-gray-50'} rounded-3xl shadow-sm border divide-y overflow-hidden`}>
            {transactions.filter(t => isTransactionInSelectedMonth(t.date)).slice(0, 3).map(t => (
              <div key={t.id} className="flex justify-between items-center gap-2 p-4">
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${t.type === 'ingreso' ? 'bg-green-500/10 text-green-500' : t.type === 'ahorro' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                    {t.type === 'ingreso' ? <TrendingUpIcon /> : t.type === 'ahorro' ? <TargetIcon /> : <TrendingDownIcon />}
                  </div>
                  <div className="min-w-0">
                    <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} truncate`}>{t.description}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} capitalize truncate`}>
                      {categories.find(c => c.id === t.category)?.name || t.category} {t.typeClassification ? `• ${typesList.find(ty => ty.id === t.typeClassification)?.name || 'Personalizado'}` : ''}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className={`font-bold whitespace-nowrap ${t.type === 'ingreso' ? 'text-green-500' : t.type === 'ahorro' ? 'text-emerald-500' : (isDarkMode ? 'text-white' : 'text-gray-800')}`}>
                    {t.type === 'ingreso' ? '+' : t.type === 'ahorro' ? '🎯 ' : '-'}{formatCurrency(t.amount)}
                  </span>
                  {t.originalCurrency && t.originalCurrency !== settings.currency && (
                    <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">
                      ({t.originalCurrency} {new Intl.NumberFormat('es-AR').format(t.originalAmount)})
                    </span>
                  )}
                </div>
              </div>
            ))}
            {transactions.filter(t => isTransactionInSelectedMonth(t.date)).length === 0 && (
              <div className={`p-6 text-center ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} text-sm`}>No hay movimientos este mes.</div>
            )}
          </div>
        </div>

        <div>
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Planificación Financiera</h3>
          <div 
            onClick={() => setActiveTab('goals')}
            className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-5 shadow-sm text-white flex items-center justify-between cursor-pointer hover:shadow-md transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                <TargetIcon />
              </div>
              <div>
                <p className="font-bold text-lg mb-0.5">Ahorros y Metas</p>
                <p className="text-emerald-100 text-xs font-medium">Fondo de emergencia y objetivos</p>
              </div>
            </div>
            <div className="bg-white/20 p-2 rounded-full rotate-90">
              <ArrowUpIcon />
            </div>
          </div>
        </div>
      </div>
    );
  };


  const HistoryAndHabitual = () => {
    const [filterPeriod, setFilterPeriod] = useState('todos');
    const [filterCategory, setFilterCategory] = useState('todos');
    const [filterType, setFilterType] = useState('todos');

    const [isAddingHabitual, setIsAddingHabitual] = useState(false);
    const [editingHabitualId, setEditingHabitualId] = useState(null);

    const [newHabName, setNewHabName] = useState('');
    const [newHabAmount, setNewHabAmount] = useState('');
    const [newHabInstallments, setNewHabInstallments] = useState('Mensual');
    const [newHabAuto, setNewHabAuto] = useState(false);
    const [newHabCategory, setNewHabCategory] = useState(categories[0]?.id || '');
    const [newHabMethod, setNewHabMethod] = useState(paymentMethods[0]?.id || '');
    
    const [habDateMode, setHabDateMode] = useState('hoy');
    const [habManualDate, setHabManualDate] = useState(() => new Date().toISOString().split('T')[0]);

    const [isAddingQuota, setIsAddingQuota] = useState(false);
    const [editingQuotaId, setEditingQuotaId] = useState(null);
    const [newQuotaName, setNewQuotaName] = useState('');
    const [newQuotaAmount, setNewQuotaAmount] = useState('');
    const [newQuotaCurrent, setNewQuotaCurrent] = useState('1');
    const [newQuotaTotal, setNewQuotaTotal] = useState('12');
    const [newQuotaMethod, setNewQuotaMethod] = useState(paymentMethods[0]?.id || '');
    
    const [quotaDateMode, setQuotaDateMode] = useState('hoy');
    const [quotaManualDate, setQuotaManualDate] = useState(() => new Date().toISOString().split('T')[0]);

    const handleHabAmountChange = (e) => {
      setNewHabAmount(formatAmountInput(e.target.value));
    };

    const handleQuotaAmountChange = (e) => {
      setNewQuotaAmount(formatAmountInput(e.target.value));
    };

    const handleOpenAddHabitual = () => {
      setEditingHabitualId(null);
      setNewHabName('');
      setNewHabAmount('');
      setNewHabInstallments('Mensual');
      setNewHabAuto(false);
      setNewHabCategory(categories[0]?.id || '');
      setNewHabMethod(paymentMethods[0]?.id || '');
      setHabDateMode('hoy');
      setHabManualDate(new Date().toISOString().split('T')[0]);
      setIsAddingHabitual(true);
    };

    const handleStartEditHabitual = (c) => {
      setEditingHabitualId(c.id);
      setNewHabName(c.name);
      setNewHabAmount(c.amount ? formatAmountInput(c.amount.toString()) : '');
      setNewHabInstallments(c.installments || 'Mensual');
      setNewHabAuto(c.auto || false);
      setNewHabCategory(c.category || categories[0]?.id);
      setNewHabMethod(c.methodId || paymentMethods[0]?.id);
      setHabDateMode('hoy');
      setIsAddingHabitual(true);
    };

    const handleSaveHabitual = (e) => {
      e.preventDefault();
      if (!newHabName || !newHabAmount) return;

      const amt = parseFormattedAmount(newHabAmount);
      const cat = newHabCategory || categories[0]?.id;
      const meth = newHabMethod || paymentMethods[0]?.id;
      
      let targetDate = new Date().toISOString();
      if (habDateMode === 'manual') {
        targetDate = new Date(habManualDate + 'T00:00:00').toISOString();
      }

      if (editingHabitualId) {
        setCommitments(commitments.map(item => item.id === editingHabitualId ? {
          ...item,
          name: newHabName,
          amount: amt,
          installments: newHabInstallments,
          auto: newHabAuto,
          category: cat,
          methodId: meth,
          dueDay: new Date(targetDate).getDate()
        } : item));
      } else {
        const commitment = {
          id: `com_${Date.now()}`,
          name: newHabName,
          amount: amt,
          installments: newHabInstallments,
          auto: newHabAuto,
          category: cat,
          methodId: meth,
          dueDay: new Date(targetDate).getDate()
        };
        setCommitments([...commitments, commitment]);

        const newTransaction = {
          id: Date.now(),
          type: 'gasto',
          amount: amt,
          description: newHabName,
          category: cat,
          typeClassification: 'mensual',
          methodId: meth,
          date: targetDate
        };
        setTransactions([newTransaction, ...transactions]);
      }

      setIsAddingHabitual(false);
      setEditingHabitualId(null);
      setSubTab('habituales');
    };

    const handleOpenAddQuota = () => {
      setEditingQuotaId(null);
      setNewQuotaName('');
      setNewQuotaAmount('');
      setNewQuotaCurrent('1');
      setNewQuotaTotal('12');
      setNewQuotaMethod(paymentMethods[0]?.id || '');
      setQuotaDateMode('hoy');
      setQuotaManualDate(new Date().toISOString().split('T')[0]);
      setIsAddingQuota(true);
    };

    const handleStartEditQuota = (q) => {
      setEditingQuotaId(q.id);
      setNewQuotaName(q.name);
      setNewQuotaAmount(q.amount ? formatAmountInput(q.amount.toString()) : '');
      setNewQuotaCurrent(q.current.toString());
      setNewQuotaTotal(q.total.toString());
      setNewQuotaMethod(q.methodId || paymentMethods[0]?.id);
      setQuotaDateMode('hoy');
      setIsAddingQuota(true);
    };

    const handleSaveQuota = (e) => {
      e.preventDefault();
      if (!newQuotaName || !newQuotaAmount) return;

      const amt = parseFormattedAmount(newQuotaAmount);
      const curr = parseInt(newQuotaCurrent, 10) || 1;
      const tot = parseInt(newQuotaTotal, 10) || 1;
      const meth = newQuotaMethod || paymentMethods[0]?.id;

      let targetDate = new Date().toISOString();
      if (quotaDateMode === 'manual') {
        targetDate = new Date(quotaManualDate + 'T00:00:00').toISOString();
      }

      if (editingQuotaId) {
        setInstallmentTracks(installmentTracks.map(q => q.id === editingQuotaId ? {
          ...q,
          name: newQuotaName,
          amount: amt,
          current: curr,
          total: tot,
          methodId: meth,
          startDate: targetDate,
          originalStartDate: q.originalStartDate || q.startDate || targetDate
        } : q));
      } else {
        const newQuota = {
          id: `quota_${Date.now()}`,
          name: newQuotaName,
          amount: amt,
          current: curr,
          total: tot,
          methodId: meth,
          startDate: targetDate,
          originalStartDate: targetDate
        };
        setInstallmentTracks([...installmentTracks, newQuota]);
      }

      setIsAddingQuota(false);
      setEditingQuotaId(null);
      setSubTab('cuotas');
    };

    const handleIncrementQuota = (id) => {
      setInstallmentTracks(installmentTracks.map(q => {
        if (q.id === id) {
          const nextCurr = Math.min(q.current + 1, q.total);
          return { ...q, current: nextCurr };
        }
        return q;
      }));
    };

    const triggerAutoPayment = (c) => {
      const newTransaction = {
        id: Date.now(),
        type: 'gasto',
        amount: c.amount,
        description: `${c.name} (Pago Habitual)`,
        category: c.category || categories[0]?.id,
        typeClassification: 'mensual',
        methodId: c.methodId || paymentMethods[0]?.id,
        date: new Date().toISOString()
      };
      setTransactions([newTransaction, ...transactions]);
    };

    const filteredTransactions = useMemo(() => {
      return transactions.filter(t => {
        if (filterPeriod === 'mes' && !isTransactionInSelectedMonth(t.date)) return false;
        if (filterCategory !== 'todos' && t.category !== filterCategory) return false;
        if (filterType !== 'todos' && t.type !== filterType) return false;
        return true;
      });
    }, [transactions, filterPeriod, filterCategory, filterType, selectedMonth]);

    return (
      <div className={`p-4 pb-32 min-h-full ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} animate-in fade-in slide-in-from-left-4 duration-300`}>
        <div className="flex justify-between items-center mb-4 mt-2">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Registros</h1>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-900 text-slate-300' : 'bg-gray-200/70 text-gray-500'} p-1 rounded-2xl flex w-full mb-6`}>
          <button 
            onClick={() => setSubTab('historial')}
            className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all ${subTab === 'historial' ? (isDarkMode ? 'bg-slate-800 text-white shadow-sm' : 'bg-white text-gray-900 shadow-sm') : ''}`}
          >
            Historial
          </button>
          <button 
            onClick={() => setSubTab('habituales')}
            className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all ${subTab === 'habituales' ? (isDarkMode ? 'bg-slate-800 text-white shadow-sm' : 'bg-white text-gray-900 shadow-sm') : ''}`}
          >
            Pagos Habituales
          </button>
          <button 
            onClick={() => setSubTab('cuotas')}
            className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all ${subTab === 'cuotas' ? (isDarkMode ? 'bg-slate-800 text-white shadow-sm' : 'bg-white text-gray-900 shadow-sm') : ''}`}
          >
            Seguimiento Cuotas
          </button>
        </div>

        {subTab === 'historial' && (
          <div className="space-y-4">
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-2xl p-4 shadow-sm border space-y-3`}>
              <p className={`text-xs font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider`}>Filtros de Búsqueda</p>
              <div className="grid grid-cols-3 gap-2">
                <select 
                  value={filterPeriod} 
                  onChange={e => setFilterPeriod(e.target.value)}
                  className={`${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-2 text-xs font-medium outline-none`}
                >
                  <option value="todos">Todo el tiempo</option>
                  <option value="mes">Mes Seleccionado</option>
                </select>

                <select 
                  value={filterCategory} 
                  onChange={e => setFilterCategory(e.target.value)}
                  className={`${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-2 text-xs font-medium outline-none capitalize`}
                >
                  <option value="todos">Categorías</option>
                  {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>

                <select 
                  value={filterType} 
                  onChange={e => setFilterType(e.target.value)}
                  className={`${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-2 text-xs font-medium outline-none`}
                >
                  <option value="todos">Tipo Mov.</option>
                  <option value="ingreso">Ingresos</option>
                  <option value="gasto">Gastos</option>
                  <option value="ahorro">Ahorros</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {filteredTransactions.length === 0 ? (
                <div className={`text-center ${isDarkMode ? 'text-slate-400 bg-slate-900 border-slate-800' : 'text-gray-500 bg-white border-gray-100'} mt-10 text-sm p-8 rounded-3xl border`}>No hay movimientos con estos filtros.</div>
              ) : (
                filteredTransactions.map(t => {
                  const method = paymentMethods.find(m => m.id === t.methodId);
                  const category = categories.find(c => c.id === t.category);
                  return (
                    <div key={t.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-2xl p-4 shadow-sm border flex justify-between items-center gap-2 group`}>
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${t.type === 'ingreso' ? 'bg-green-500/10 text-green-500' : t.type === 'ahorro' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                          {t.type === 'ingreso' ? <TrendingUpIcon /> : t.type === 'ahorro' ? <TargetIcon /> : <TrendingDownIcon />}
                        </div>
                        <div className="min-w-0">
                          <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-base truncate`}>{t.description}</p>
                          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                            <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} whitespace-nowrap`}>
                              {new Date(t.date).toLocaleDateString('es-AR', { day: '2-digit', month: 'short' })}
                            </span>
                            <span className={`w-1 h-1 rounded-full shrink-0 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-300'}`}></span>
                            <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} capitalize truncate`}>{category ? category.name : t.category}</span>
                            {t.typeClassification && (
                              <>
                                <span className={`w-1 h-1 rounded-full shrink-0 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-300'}`}></span>
                                <span className="text-xs text-purple-400 font-medium capitalize truncate">{typesList.find(ty => ty.id === t.typeClassification)?.name || 'Personalizado'}</span>
                              </>
                            )}
                          </div>
                          {method && (
                            <div className="mt-1.5 flex items-center gap-1">
                              <span className={`text-[10px] ${isDarkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-gray-100 text-gray-600 border-gray-200'} px-2 py-0.5 rounded-md font-semibold tracking-wide shadow-sm border`}>
                                {method.name}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <div className="flex flex-col items-end">
                          <span className={`font-bold whitespace-nowrap ${t.type === 'ingreso' ? 'text-green-500' : t.type === 'ahorro' ? 'text-emerald-500' : (isDarkMode ? 'text-white' : 'text-gray-900')}`}>
                            {t.type === 'ingreso' ? '+' : t.type === 'ahorro' ? '🎯 ' : '-'}{formatCurrency(t.amount)}
                          </span>
                          {t.originalCurrency && t.originalCurrency !== settings.currency && (
                            <span className="text-[10px] text-gray-400 font-medium mt-0.5 whitespace-nowrap">
                              ({t.originalCurrency} {new Intl.NumberFormat('es-AR').format(t.originalAmount)})
                            </span>
                          )}
                        </div>
                        <button 
                          onClick={() => deleteTransaction(t.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-md"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {subTab === 'habituales' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className={`text-xs font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider`}>Compromisos y Suscripciones</p>
              <button 
                onClick={handleOpenAddHabitual}
                className="bg-blue-500/10 text-blue-500 text-xs font-semibold px-3 py-1.5 rounded-xl hover:bg-blue-500/20 transition-colors"
              >
                + Nuevo Pago
              </button>
            </div>

            {isAddingHabitual && (
              <form onSubmit={handleSaveHabitual} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border space-y-3 animate-in zoom-in-95 duration-200`}>
                <h3 className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{editingHabitualId ? 'Modificar Pago Habitual' : 'Agregar Pago Habitual'}</h3>
                
                <input 
                  type="text" 
                  placeholder="Nombre (ej. Alquiler, Netflix)" 
                  value={newHabName}
                  onChange={e => setNewHabName(e.target.value)}
                  className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 text-sm outline-none`}
                  required
                />
                
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input 
                    type="text" 
                    placeholder="Monto" 
                    value={newHabAmount}
                    onChange={handleHabAmountChange}
                    className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 pl-8 text-sm outline-none font-semibold`}
                    required
                    inputMode="decimal"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Periodo / Cuotas</label>
                    <input 
                      type="text" 
                      placeholder="Ej. Mensual o 3/12" 
                      value={newHabInstallments}
                      onChange={e => setNewHabInstallments(e.target.value)}
                      className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 text-xs outline-none`}
                    />
                  </div>
                  <div>
                    <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Categoría</label>
                    <select 
                      value={newHabCategory} 
                      onChange={e => setNewHabCategory(e.target.value)}
                      className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 text-xs outline-none capitalize`}
                    >
                      {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Medio de Pago</label>
                  <select 
                    value={newHabMethod} 
                    onChange={e => setNewHabMethod(Number(e.target.value))}
                    className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 text-xs outline-none`}
                  >
                    {paymentMethods.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                  </select>
                </div>

                {!editingHabitualId && (
                  <div className={`${isDarkMode ? 'bg-slate-800/60 border-slate-800' : 'bg-gray-50 border-gray-200'} p-3 rounded-2xl border space-y-2`}>
                    <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block`}>Aplicar Movimiento:</label>
                    <div className="flex gap-2">
                      <button 
                        type="button"
                        onClick={() => setHabDateMode('hoy')}
                        className={`flex-1 py-2 text-xs font-semibold rounded-xl border ${habDateMode === 'hoy' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : (isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-gray-200 text-gray-600')}`}
                      >
                        Hoy (Añadir gasto ya)
                      </button>
                      <button 
                        type="button"
                        onClick={() => setHabDateMode('manual')}
                        className={`flex-1 py-2 text-xs font-semibold rounded-xl border ${habDateMode === 'manual' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : (isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-gray-200 text-gray-600')}`}
                      >
                        Elegir Fecha
                      </button>
                    </div>
                    {habDateMode === 'manual' && (
                      <input 
                        type="date"
                        value={habManualDate}
                        onChange={e => setHabManualDate(e.target.value)}
                        className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} border rounded-xl p-2.5 text-xs outline-none mt-1`}
                      />
                    )}
                  </div>
                )}

                <div className="flex items-center gap-2 pt-1">
                  <input 
                    type="checkbox" 
                    id="autoCheck"
                    checked={newHabAuto} 
                    onChange={e => setNewHabAuto(e.target.checked)}
                    className="w-4 h-4 accent-blue-600 rounded"
                  />
                  <label htmlFor="autoCheck" className={`text-xs ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} font-medium`}>Recordar / Habilitar cobro automático mensual</label>
                </div>

                <div className="flex gap-2 pt-2">
                  <button type="button" onClick={() => setIsAddingHabitual(false)} className={`flex-1 ${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} py-2.5 rounded-xl text-xs font-semibold`}>Cancelar</button>
                  <button type="submit" className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-blue-500/20">Guardar</button>
                </div>
              </form>
            )}

            <div className="space-y-3">
              {commitments.length === 0 ? (
                <div className={`text-center ${isDarkMode ? 'text-slate-400 bg-slate-900 border-slate-800' : 'text-gray-500 bg-white border-gray-100'} mt-10 text-sm p-8 rounded-3xl border`}>No tienes pagos habituales cargados.</div>
              ) : (
                commitments.map(c => (
                  <div key={c.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-2xl p-4 shadow-sm border border-l-4 border-l-orange-400 flex justify-between items-center`}>
                    <div>
                      <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-base`}>{c.name}</p>
                      <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mt-0.5`}>
                        {formatCurrency(c.amount)} • <span className="font-semibold text-purple-400">{c.installments || 'Mensual'}</span>
                      </p>
                      {c.auto && <span className="text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded-md font-semibold mt-1 inline-block border border-green-500/20">Auto-pago habilitado</span>}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button 
                        onClick={() => triggerAutoPayment(c)}
                        title="Registrar pago de este mes"
                        className="bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 px-2.5 py-2 rounded-xl text-xs font-bold transition-colors shadow-sm"
                      >
                        + Cargar Mes
                      </button>
                      <button 
                        onClick={() => handleStartEditHabitual(c)}
                        title="Modificar"
                        className="text-blue-500 hover:text-blue-400 p-1.5 transition-colors"
                      >
                        <EditIcon />
                      </button>
                      <button 
                        onClick={() => setCommitments(commitments.filter(item => item.id !== c.id))}
                        title="Eliminar"
                        className="text-gray-400 hover:text-red-500 p-1.5 transition-colors"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {subTab === 'cuotas' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <p className={`text-xs font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider`}>Seguimiento de Cuotas</p>
                <p className="text-[10px] text-gray-400">Control informativo (sin impacto en gastos)</p>
              </div>
              <button 
                onClick={handleOpenAddQuota}
                className="bg-purple-500/10 text-purple-400 text-xs font-semibold px-3 py-1.5 rounded-xl hover:bg-purple-500/20 transition-colors"
              >
                + Nueva Cuota
              </button>
            </div>

            {isAddingQuota && (
              <form onSubmit={handleSaveQuota} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border space-y-3 animate-in zoom-in-95 duration-200`}>
                <h3 className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{editingQuotaId ? 'Modificar Cuota' : 'Agregar Seguimiento de Cuota'}</h3>
                
                <input 
                  type="text" 
                  placeholder="Concepto (ej. TV Samsung, Zapatillas)" 
                  value={newQuotaName}
                  onChange={e => setNewQuotaName(e.target.value)}
                  className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 text-sm outline-none`}
                  required
                />
                
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                  <input 
                    type="text" 
                    placeholder="Monto de la cuota" 
                    value={newQuotaAmount}
                    onChange={handleQuotaAmountChange}
                    className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 pl-8 text-sm outline-none font-semibold`}
                    required
                    inputMode="decimal"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Cuota Actual</label>
                    <input 
                      type="number" 
                      min="0"
                      placeholder="Ej. 1" 
                      value={newQuotaCurrent}
                      onChange={e => setNewQuotaCurrent(e.target.value)}
                      className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 text-xs outline-none`}
                      required
                    />
                  </div>
                  <div>
                    <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Total de Cuotas</label>
                    <input 
                      type="number" 
                      min="1"
                      placeholder="Ej. 12" 
                      value={newQuotaTotal}
                      onChange={e => setNewQuotaTotal(e.target.value)}
                      className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 text-xs outline-none`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Medio de Pago / Tarjeta</label>
                  <select 
                    value={newQuotaMethod} 
                    onChange={e => setNewQuotaMethod(Number(e.target.value))}
                    className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 text-xs outline-none`}
                  >
                    {paymentMethods.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
                  </select>
                </div>

                {!editingQuotaId && (
                  <div className={`${isDarkMode ? 'bg-slate-800/60 border-slate-800' : 'bg-gray-50 border-gray-200'} p-3 rounded-2xl border space-y-2`}>
                    <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block`}>Fecha de Inicio / Aplicación:</label>
                    <div className="flex gap-2">
                      <button 
                        type="button"
                        onClick={() => setQuotaDateMode('hoy')}
                        className={`flex-1 py-2 text-xs font-semibold rounded-xl border ${quotaDateMode === 'hoy' ? 'bg-purple-500/10 border-purple-500/30 text-purple-400' : (isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-gray-200 text-gray-600')}`}
                      >
                        Hoy (Empezar a correr hoy)
                      </button>
                      <button 
                        type="button"
                        onClick={() => setQuotaDateMode('manual')}
                        className={`flex-1 py-2 text-xs font-semibold rounded-xl border ${quotaDateMode === 'manual' ? 'bg-purple-500/10 border-purple-500/30 text-purple-400' : (isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-300' : 'bg-white border-gray-200 text-gray-600')}`}
                      >
                        Elegir Fecha
                      </button>
                    </div>
                    {quotaDateMode === 'manual' && (
                      <input 
                        type="date"
                        value={quotaManualDate}
                        onChange={e => setQuotaManualDate(e.target.value)}
                        className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} border rounded-xl p-2.5 text-xs outline-none mt-1`}
                      />
                    )}
                  </div>
                )}

                <div className="flex gap-2 pt-2">
                  <button type="button" onClick={() => setIsAddingQuota(false)} className={`flex-1 ${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} py-2.5 rounded-xl text-xs font-semibold`}>Cancelar</button>
                  <button type="submit" className="flex-1 bg-purple-600 text-white py-2.5 rounded-xl text-xs font-semibold shadow-md shadow-purple-500/20">Guardar</button>
                </div>
              </form>
            )}

            <div className="space-y-3">
              {installmentTracks.length === 0 ? (
                <div className={`text-center ${isDarkMode ? 'text-slate-400 bg-slate-900 border-slate-800' : 'text-gray-500 bg-white border-gray-100'} mt-10 text-sm p-8 rounded-3xl border`}>
                  No tienes cuotas en seguimiento.
                </div>
              ) : (
                installmentTracks.map(q => {
                  const method = paymentMethods.find(m => m.id === q.methodId);
                  const percent = Math.min(Math.round((q.current / (q.total || 1)) * 100), 100);
                  const totalCalculated = q.amount * q.total;

                  return (
                    <div key={q.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-2xl p-4 shadow-sm border space-y-3 border-l-4 border-l-purple-500`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-base`}>{q.name}</p>
                            <span className="text-[10px] bg-purple-500/10 text-purple-400 font-semibold px-2 py-0.5 rounded-md border border-purple-500/20">
                              {q.current}/{q.total} cuotas
                            </span>
                          </div>
                          <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mt-0.5`}>
                            Valor cuota: <span className={`font-bold ${isDarkMode ? 'text-slate-200' : 'text-gray-800'}`}>{formatCurrency(q.amount)}</span>
                            <span className="text-gray-400"> (Total: {formatCurrency(totalCalculated)})</span>
                          </p>
                          {q.originalStartDate ? (
                            <p className="text-[10px] text-gray-400 mt-0.5">
                              📅 Inicio: {new Date(q.originalStartDate).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                            </p>
                          ) : q.startDate ? (
                            <p className="text-[10px] text-gray-400 mt-0.5">
                              📅 Ref: {new Date(q.startDate).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                            </p>
                          ) : null}
                          {method && (
                            <span className={`inline-block text-[10px] ${isDarkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-gray-100 text-gray-600 border-gray-200'} px-2 py-0.5 rounded-md font-medium mt-1 border`}>
                              💳 {method.name}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-1">
                          {q.current < q.total && (
                            <button 
                              onClick={() => handleIncrementQuota(q.id)}
                              title="Sumar 1 cuota paga"
                              className="bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 px-2.5 py-1.5 rounded-xl text-xs font-bold transition-colors shadow-sm"
                            >
                              +1 Cuota
                            </button>
                          )}
                          <button 
                            onClick={() => handleStartEditQuota(q)}
                            title="Modificar"
                            className="text-blue-500 hover:text-blue-400 p-1.5 transition-colors"
                          >
                            <EditIcon />
                          </button>
                          <button 
                            onClick={() => setInstallmentTracks(installmentTracks.filter(item => item.id !== q.id))}
                            title="Eliminar"
                            className="text-gray-400 hover:text-red-500 p-1.5 transition-colors"
                          >
                            <TrashIcon />
                          </button>
                        </div>
                      </div>

                      <div>
                        <div className={`flex justify-between text-[10px] font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mb-1`}>
                          <span>Progreso: {percent}%</span>
                          <span>{q.current === q.total ? '🎉 Finalizado' : `${q.total - q.current} cuotas restantes`}</span>
                        </div>
                        <div className={`w-full ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} h-2 rounded-full overflow-hidden`}>
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${q.current === q.total ? 'bg-green-500' : 'bg-purple-600'}`}
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const SavingsAndGoals = () => {
    const [localSubTab, setLocalSubTab] = useState('metas');
    
    const [isAddingGoal, setIsAddingGoal] = useState(false);
    const [newGoalName, setNewGoalName] = useState('');
    const [newGoalTarget, setNewGoalTarget] = useState('');
    const [newGoalCurrent, setNewGoalCurrent] = useState('');
    
    const [isEditingEmergency, setIsEditingEmergency] = useState(false);
    const [emTargetInput, setEmTargetInput] = useState('');
    const [emCurrentInput, setEmCurrentInput] = useState('');

    const handleSaveGoal = (e) => {
      e.preventDefault();
      const target = parseFormattedAmount(newGoalTarget);
      const current = parseFormattedAmount(newGoalCurrent) || 0;
      if (!newGoalName || target <= 0) return;
      
      setSavingsGoals([...savingsGoals, {
        id: `goal_${Date.now()}`,
        name: newGoalName,
        target,
        current
      }]);
      setIsAddingGoal(false);
      setNewGoalName('');
      setNewGoalTarget('');
      setNewGoalCurrent('');
    };

    const handleDeleteGoal = (id) => {
      setSavingsGoals(savingsGoals.filter(g => g.id !== id));
    };

    const handleAddAmountToGoal = (id, amount) => {
        setSavingsGoals(savingsGoals.map(g => 
            g.id === id ? { ...g, current: Math.min(g.current + amount, g.target) } : g
        ));
    };

    const handleSaveEmergency = (e) => {
      e.preventDefault();
      setEmergencyFund({
        target: parseFormattedAmount(emTargetInput) || 0,
        current: parseFormattedAmount(emCurrentInput) || 0
      });
      setIsEditingEmergency(false);
    };

    const openEditEmergency = () => {
        setEmTargetInput(emergencyFund.target ? formatAmountInput(emergencyFund.target.toString()) : '');
        setEmCurrentInput(emergencyFund.current ? formatAmountInput(emergencyFund.current.toString()) : '');
        setIsEditingEmergency(true);
    };

    return (
      <div className={`p-4 pb-32 min-h-full ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} animate-in fade-in slide-in-from-bottom-4 duration-300`}>
        <div className="flex items-center gap-3 mb-6 mt-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`${isDarkMode ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} p-2 rounded-full transition-colors shadow-sm`}
          >
            <ArrowLeftIcon />
          </button>
          <div>
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ahorros y Metas</h1>
            <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Planificación a futuro</p>
          </div>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-900 text-slate-300' : 'bg-gray-200/70 text-gray-500'} p-1 rounded-2xl flex w-full mb-6`}>
          <button 
            onClick={() => setLocalSubTab('metas')}
            className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all ${localSubTab === 'metas' ? (isDarkMode ? 'bg-slate-800 text-white shadow-sm' : 'bg-white text-gray-900 shadow-sm') : ''}`}
          >
            Metas de Ahorro
          </button>
          <button 
            onClick={() => setLocalSubTab('emergencia')}
            className={`flex-1 py-2 text-[11px] font-bold rounded-xl transition-all ${localSubTab === 'emergencia' ? (isDarkMode ? 'bg-slate-800 text-white shadow-sm' : 'bg-white text-gray-900 shadow-sm') : ''}`}
          >
            Fondo de Emergencia
          </button>
        </div>

        {localSubTab === 'metas' && (
            <div className="space-y-4 animate-in fade-in duration-300">
                <div className="flex justify-between items-center mb-2">
                    <p className={`text-xs font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider`}>Tus Objetivos</p>
                    <button 
                        onClick={() => setIsAddingGoal(!isAddingGoal)}
                        className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1.5 rounded-xl hover:bg-emerald-500/20 transition-colors"
                    >
                        {isAddingGoal ? 'Cancelar' : '+ Nueva Meta'}
                    </button>
                </div>

                {isAddingGoal && (
                    <form onSubmit={handleSaveGoal} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border space-y-3 animate-in zoom-in-95 duration-200`}>
                        <input type="text" placeholder="Ej. Viaje a Bariloche, Auto nuevo" value={newGoalName} onChange={e => setNewGoalName(e.target.value)} className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 text-sm outline-none font-medium`} required />
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Monto Objetivo</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                                    <input type="text" placeholder="0,00" value={newGoalTarget} onChange={e => setNewGoalTarget(formatAmountInput(e.target.value))} className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 pl-7 text-sm outline-none font-semibold`} required inputMode="decimal" />
                                </div>
                            </div>
                            <div>
                                <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Ahorrado actualmente</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">$</span>
                                    <input type="text" placeholder="0,00" value={newGoalCurrent} onChange={e => setNewGoalCurrent(formatAmountInput(e.target.value))} className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 pl-7 text-sm outline-none font-semibold`} inputMode="decimal" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="w-full bg-emerald-600 text-white py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-emerald-500/20 mt-2 hover:bg-emerald-700 transition-colors">Crear Meta</button>
                    </form>
                )}

                <div className="space-y-3">
                    {savingsGoals.length === 0 && !isAddingGoal && (
                        <div className={`text-center ${isDarkMode ? 'text-slate-400 bg-slate-900 border-slate-800' : 'text-gray-500 bg-white border-gray-100'} mt-6 text-sm p-8 rounded-3xl border shadow-sm`}>No tienes metas de ahorro definidas. ¡Crea una!</div>
                    )}
                    {savingsGoals.map(g => {
                        const percent = Math.min(Math.round((g.current / g.target) * 100), 100);
                        return (
                            <div key={g.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border border-l-4 border-l-emerald-500`}>
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} text-base`}>{g.name}</h3>
                                        <p className={`text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-500'} mt-0.5`}>{formatCurrency(g.current)} <span className={`font-normal ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>/ {formatCurrency(g.target)}</span></p>
                                    </div>
                                    <button onClick={() => handleDeleteGoal(g.id)} className="text-gray-400 hover:text-red-500 p-1"><TrashIcon /></button>
                                </div>
                                <div className={`mt-3 mb-1 flex justify-between text-[10px] font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                                    <span>Progreso: {percent}%</span>
                                    <span>{percent === 100 ? '¡Logrado! 🎉' : `Faltan ${formatCurrency(g.target - g.current)}`}</span>
                                </div>
                                <div className={`w-full ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} h-2.5 rounded-full overflow-hidden mb-3`}>
                                    <div className={`h-full rounded-full transition-all duration-1000 ${percent === 100 ? 'bg-emerald-500' : 'bg-teal-500'}`} style={{ width: `${percent}%` }}></div>
                                </div>
                                {percent < 100 && (
                                    <div className="flex gap-2">
                                        <button onClick={() => handleAddAmountToGoal(g.id, 5000)} className="flex-1 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 py-1.5 rounded-lg text-xs font-bold transition-colors">+ {formatCurrency(5000)}</button>
                                        <button onClick={() => handleAddAmountToGoal(g.id, 10000)} className="flex-1 bg-teal-500/10 hover:bg-teal-500/20 text-teal-400 py-1.5 rounded-lg text-xs font-bold transition-colors">+ {formatCurrency(10000)}</button>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        )}

        {localSubTab === 'emergencia' && (
            <div className="space-y-4 animate-in fade-in duration-300">
                <div className="bg-gradient-to-br from-slate-800 to-slate-950 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden border border-slate-800">
                    <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-4">
                            <ShieldIcon />
                            <h2 className="text-lg font-bold">Fondo de Emergencia</h2>
                        </div>
                        <p className="text-xs text-slate-300 mb-6 leading-relaxed">Un fondo de emergencia es un colchón financiero para cubrir gastos imprevistos. Se recomienda tener entre 3 y 6 meses de tus gastos fijos.</p>
                        
                        {!isEditingEmergency ? (
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 font-bold">Total Acumulado</p>
                                <h3 className="text-3xl font-black mb-1 text-emerald-400">{formatCurrency(emergencyFund.current)}</h3>
                                <p className="text-xs text-slate-300 mb-4 font-medium">Objetivo: {formatCurrency(emergencyFund.target)}</p>
                                
                                {emergencyFund.target > 0 && (
                                    <>
                                        <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden mb-2 border border-slate-800">
                                            <div className="bg-emerald-500 h-full rounded-full transition-all duration-1000" style={{ width: `${Math.min((emergencyFund.current / emergencyFund.target) * 100, 100)}%` }}></div>
                                        </div>
                                        <p className="text-[10px] text-right font-bold text-emerald-400">
                                            {Math.round((emergencyFund.current / emergencyFund.target) * 100)}% Completado
                                        </p>
                                    </>
                                )}
                                <button onClick={openEditEmergency} className="mt-4 w-full bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-xl text-sm font-semibold transition-colors backdrop-blur-sm">Actualizar Montos</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSaveEmergency} className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10 animate-in zoom-in-95 duration-200">
                                <div className="space-y-3 mb-4">
                                    <div>
                                        <label className="text-[10px] text-slate-300 font-bold block mb-1">Tu Objetivo (Ej. 3 meses de gastos)</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</span>
                                            <input type="text" value={emTargetInput} onChange={e => setEmTargetInput(formatAmountInput(e.target.value))} className="w-full bg-slate-900/80 border border-slate-700 rounded-xl p-2.5 pl-7 text-sm outline-none font-semibold text-white focus:border-emerald-400 transition-colors" required inputMode="decimal" placeholder="0,00" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[10px] text-slate-300 font-bold block mb-1">Saldo Actual en tu fondo</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">$</span>
                                            <input type="text" value={emCurrentInput} onChange={e => setEmCurrentInput(formatAmountInput(e.target.value))} className="w-full bg-slate-900/80 border border-slate-700 rounded-xl p-2.5 pl-7 text-sm outline-none font-semibold text-white focus:border-emerald-400 transition-colors" required inputMode="decimal" placeholder="0,00" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button type="button" onClick={() => setIsEditingEmergency(false)} className="flex-1 bg-slate-800 text-slate-300 py-2.5 rounded-xl text-xs font-bold hover:bg-slate-700 transition-colors">Cancelar</button>
                                    <button type="submit" className="flex-1 bg-emerald-500 text-white py-2.5 rounded-xl text-xs font-bold hover:bg-emerald-600 transition-colors">Guardar</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        )}
      </div>
    );
  };

  const ProfileDashboard = () => {
    const currentIncome = useMemo(() => {
        return transactions.filter(t => t.type === 'ingreso' && isTransactionInSelectedMonth(t.date)).reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
    }, [transactions, selectedMonth]);

    const currentExpense = useMemo(() => {
        return transactions.filter(t => t.type === 'gasto' && isTransactionInSelectedMonth(t.date)).reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
    }, [transactions, selectedMonth]);

    const savings = currentIncome - currentExpense;
    const savingsRate = currentIncome > 0 ? (savings / currentIncome) * 100 : 0;
    
    const maxDash = 125.6; 
    const dashArray = maxDash;
    const boundedSavingsRate = Math.min(Math.max(savingsRate, 0), 100);
    const dashOffset = maxDash - (boundedSavingsRate / 100) * maxDash;

    const cardExpensePercent = useMemo(() => {
      const currentMonthCardExpenses = transactions.filter(t => {
        if (t.type !== 'gasto' || !isTransactionInSelectedMonth(t.date)) return false;
        const method = paymentMethods.find(m => m.id === t.methodId);
        return method && (method.type === 'credit' || method.type === 'debit');
      }).reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
      
      return currentExpense > 0 ? Math.round((currentMonthCardExpenses / currentExpense) * 100) : 0;
    }, [transactions, paymentMethods, selectedMonth, currentExpense]);

    const categoryExpenses = useMemo(() => {
        const expenses = {};
        transactions.forEach(t => {
            if (t.type === 'gasto' && isTransactionInSelectedMonth(t.date)) {
                expenses[t.category] = (expenses[t.category] || 0) + parseFloat(t.amount);
            }
        });
        return Object.entries(expenses).map(([id, amount]) => ({
            id, 
            amount, 
            name: categories.find(c => c.id === id)?.name || id,
            percentage: currentExpense > 0 ? (amount / currentExpense) * 100 : 0
        })).sort((a, b) => b.amount - a.amount);
    }, [transactions, selectedMonth, currentExpense, categories]);
    
    const monthlyData = useMemo(() => {
       const data = [];
       for(let i=5; i>=0; i--) {
           const d = new Date();
           d.setMonth(d.getMonth() - i);
           const yyyy = d.getFullYear();
           const mm = String(d.getMonth() + 1).padStart(2, '0');
           const monthStr = `${yyyy}-${mm}`;
           const monthLabel = d.toLocaleString('es-ES', { month: 'short' });
           
           let inc = 0; let exp = 0;
           transactions.forEach(t => {
               const txDate = new Date(t.date);
               if (`${txDate.getFullYear()}-${String(txDate.getMonth() + 1).padStart(2, '0')}` === monthStr) {
                   if (t.type === 'ingreso') inc += parseFloat(t.amount);
                   if (t.type === 'gasto') exp += parseFloat(t.amount);
               }
           });
           data.push({ monthStr, monthLabel, inc, exp });
       }
       return data;
    }, [transactions]);
    
    const maxMonthlyAmount = Math.max(...monthlyData.map(d => Math.max(d.inc, d.exp, 1000)));

    return (
      <div className={`p-4 pb-32 min-h-full ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} animate-in fade-in slide-in-from-right-4 duration-300`}>
        <div className="flex items-center gap-3 mb-6 mt-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`${isDarkMode ? 'bg-slate-800 text-slate-200 hover:bg-slate-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'} p-2 rounded-full transition-colors shadow-sm`}
          >
            <ArrowLeftIcon />
          </button>
          <div>
            <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Dashboard Personal</h1>
            <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Resumen Financiero Avanzado</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-5 text-white shadow-md mb-6 relative overflow-hidden">
           <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 rounded-full bg-white opacity-10"></div>
           <div className="relative z-10 flex gap-3 items-start">
             <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
             </div>
             <div>
                <h3 className="font-bold text-sm mb-1">¡Un dato sobre vos!</h3>
                <p className="text-sm opacity-90 leading-snug">El <strong>{cardExpensePercent}%</strong> de tus gastos de este mes provienen de tarjetas.</p>
             </div>
           </div>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border mb-6 flex flex-col items-center`}>
            <h3 className={`text-xs font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider w-full text-left mb-4`}>Tasa de Ahorro (Mes Actual)</h3>
            <div className="relative w-48 h-24">
              <svg viewBox="0 0 100 50" className="w-full h-full drop-shadow-sm">
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke={isDarkMode ? '#334155' : '#f3f4f6'} strokeWidth="12" strokeLinecap="round" />
                <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke={savingsRate >= 20 ? "#34C759" : savingsRate > 0 ? "#F59E0B" : "#FF3B30"} strokeWidth="12" strokeLinecap="round" strokeDasharray={dashArray} strokeDashoffset={dashOffset} className="transition-all duration-1000" />
              </svg>
              <div className="absolute bottom-0 text-center w-full flex flex-col items-center">
                 <span className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{savingsRate.toFixed(1)}%</span>
              </div>
            </div>
            <div className={`w-full flex justify-between mt-4 text-xs font-semibold px-2 ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                <div className="text-center"><span className="block text-green-500 mb-0.5">Generado</span>{formatCurrency(currentIncome)}</div>
                <div className="text-center"><span className="block text-blue-500 mb-0.5">Ahorrado</span>{formatCurrency(Math.max(0, savings))}</div>
            </div>
        </div>
        
        <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border mb-6`}>
            <h3 className={`text-xs font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mb-4`}>Composición del Gasto</h3>
            <div className="space-y-3">
                {categoryExpenses.length === 0 ? (
                    <p className="text-center text-xs text-gray-400">No hay gastos este mes.</p>
                ) : categoryExpenses.map(c => (
                    <div key={c.id}>
                        <div className="flex justify-between text-xs font-medium mb-1">
                            <span className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'} capitalize`}>{c.name}</span>
                            <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{formatCurrency(c.amount)} ({c.percentage.toFixed(1)}%)</span>
                        </div>
                        <div className={`w-full ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} h-2 rounded-full overflow-hidden`}>
                            <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${c.percentage}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border mb-6`}>
            <h3 className={`text-xs font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mb-4`}>Evolución (6 Meses)</h3>
            <div className="flex items-end justify-between h-40 gap-2">
                {monthlyData.map((d, i) => {
                    const incHeight = Math.max((d.inc / maxMonthlyAmount) * 100, 2);
                    const expHeight = Math.max((d.exp / maxMonthlyAmount) * 100, 2);
                    return (
                        <div key={i} className="flex flex-col items-center flex-1 gap-1">
                            <div className="flex w-full gap-1 items-end h-full flex-1">
                                <div className="bg-green-400 rounded-t-sm flex-1 transition-all" style={{ height: `${incHeight}%` }}></div>
                                <div className="bg-red-400 rounded-t-sm flex-1 transition-all" style={{ height: `${expHeight}%` }}></div>
                            </div>
                            <span className="text-[10px] text-gray-500 capitalize">{d.monthLabel}</span>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center gap-4 mt-4 text-[10px] font-medium text-gray-500">
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Ingresos</div>
                <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-400"></span> Gastos</div>
            </div>
        </div>

      </div>
    );
  };

  const SettingsView = () => {
    const [isAddingCategory, setIsAddingCategory] = useState(false);
    const [editingCategoryId, setEditingCategoryId] = useState(null);
    const [editCatName, setEditCatName] = useState('');
    const [editCatType, setEditCatType] = useState('gasto');
    const [editCatBudget, setEditCatBudget] = useState('');

    const [newCatName, setNewCatName] = useState('');
    const [newCatType, setNewCatType] = useState('gasto');
    const [newCatBudget, setNewCatBudget] = useState('');

    const [isAddingType, setIsAddingType] = useState(false);
    const [newTypeName, setNewTypeName] = useState('');

    const [isLinkingBank, setIsLinkingBank] = useState(false);
    const [isSimulatingSync, setIsSimulatingSync] = useState(false);
    const [newBankName, setNewBankName] = useState('BBVA');
    const [newBankAccountType, setNewBankAccountType] = useState('Caja de Ahorro');
    const [newBankBalance, setNewBankBalance] = useState('');

    const [authMode, setAuthMode] = useState('login');
    const [authEmail, setAuthEmail] = useState('');
    const [authPassword, setAuthPassword] = useState('');
    const [authError, setAuthError] = useState('');
    const [authSubmitting, setAuthSubmitting] = useState(false);

    const handleAuthSubmit = async (e) => {
      e.preventDefault();
      setAuthError('');
      setAuthSubmitting(true);
      try {
        if (authMode === 'login') {
          await handleLogin(authEmail, authPassword);
        } else {
          await handleRegister(authEmail, authPassword);
        }
        setAuthPassword('');
      } catch (err) {
        setAuthError(translateAuthError(err.code));
      } finally {
        setAuthSubmitting(false);
      }
    };

    const handleAddCategory = (e) => {
      e.preventDefault();
      if (!newCatName) return;
      setCategories([...categories, {
        id: `cat_${Date.now()}`,
        name: newCatName,
        type: newCatType,
        budget: parseFloat(newCatBudget) || 0
      }]);
      setNewCatName('');
      setNewCatBudget('');
      setIsAddingCategory(false);
    };

    const handleDeleteCategory = (id) => {
      setCategories(categories.filter(c => c.id !== id));
    };

    const startEditingCategory = (category) => {
      setEditingCategoryId(category.id);
      setEditCatName(category.name);
      setEditCatType(category.type);
      setEditCatBudget(category.budget || '');
    };

    const handleSaveEditCategory = (e, id) => {
      e.preventDefault();
      if (!editCatName) return;
      setCategories(categories.map(c => 
        c.id === id ? { ...c, name: editCatName, type: editCatType, budget: parseFloat(editCatBudget) || 0 } : c
      ));
      setEditingCategoryId(null);
    };

    const handleAddType = (e) => {
      e.preventDefault();
      if (!newTypeName) return;
      setTypesList([...typesList, {
        id: `type_${Date.now()}`,
        name: newTypeName
      }]);
      setNewTypeName('');
      setIsAddingType(false);
    };

    const handleDeleteType = (id) => {
      setTypesList(typesList.filter(t => t.id !== id));
    };

    const handleLinkBank = (e) => {
      e.preventDefault();
      if (!newBankBalance) return;
      
      setIsSimulatingSync(true);
      
      setTimeout(() => {
        const balance = parseFormattedAmount(newBankBalance);
        setBankAccounts([...bankAccounts, {
          id: `bank_${Date.now()}`,
          bankName: newBankName,
          accountType: newBankAccountType,
          initialBalance: balance,
          balance: balance
        }]);
        setNewBankBalance('');
        setIsLinkingBank(false);
        setIsSimulatingSync(false);
      }, 1500);
    };

    const handleDeleteBank = (id) => {
      setBankAccounts(bankAccounts.filter(b => b.id !== id));
    };

    return (
      <div className={`p-4 pb-32 min-h-full ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} animate-in fade-in slide-in-from-right-4 duration-300`}>
        <div className="flex justify-between items-center mb-6 mt-2">
          <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ajustes</h1>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border mb-6`}>
          <h3 className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">Apariencia (Modo de Tema)</h3>
          <select 
            value={settings.theme || 'system'}
            onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
            className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 outline-none text-sm font-semibold`}
          >
            <option value="system">Automático (Según el Sistema)</option>
            <option value="light">Modo Claro</option>
            <option value="dark">Modo Oscuro</option>
          </select>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border mb-6`}>
          <h3 className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-4">Moneda Local (Base)</h3>
          <select 
            value={settings.currency}
            onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
            className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 outline-none text-sm font-semibold`}
          >
            <option value="ARS">Peso Argentino (ARS)</option>
            <option value="USD">Dólar Estadounidense (USD)</option>
            <option value="EUR">Euro (EUR)</option>
          </select>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border mb-6`}>
          <div className="flex items-center gap-2 mb-1">
            <div className="bg-blue-500/10 text-blue-500 p-1.5 rounded-lg"><CloudIcon /></div>
            <h3 className="text-xs font-bold text-blue-500 uppercase tracking-wider">Cuenta y Sincronización</h3>
          </div>
          <p className={`text-xs mb-4 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
            Iniciá sesión con la misma cuenta en tu celular y tu PC para ver los mismos datos en ambos, actualizados automáticamente.
          </p>

          {(typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) ? (
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-3 text-xs text-orange-400 font-medium">
              La sincronización no está configurada todavía en esta app (falta el archivo <code>firebase-config.js</code>).
            </div>
          ) : !authChecked ? (
            <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Comprobando sesión...</div>
          ) : authUser ? (
            <div className={`${isDarkMode ? 'bg-slate-800/60 border-slate-800' : 'bg-gray-50 border-gray-100'} border rounded-2xl p-4 flex items-center justify-between gap-3`}>
              <div className="min-w-0">
                <p className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} truncate`}>{authUser.email}</p>
                <p className={`text-[11px] font-semibold mt-0.5 flex items-center gap-1.5 ${syncStatus === 'synced' ? 'text-green-500' : syncStatus === 'error' ? 'text-red-500' : 'text-blue-500'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${syncStatus === 'synced' ? 'bg-green-500' : syncStatus === 'error' ? 'bg-red-500' : 'bg-blue-500 animate-pulse'}`}></span>
                  {syncStatus === 'synced' ? 'Sincronizado' : syncStatus === 'error' ? 'Error de sincronización' : 'Sincronizando...'}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className={`flex items-center gap-1.5 ${isDarkMode ? 'bg-slate-900 text-slate-300 hover:bg-slate-800' : 'bg-white text-gray-700 hover:bg-gray-100'} border ${isDarkMode ? 'border-slate-700' : 'border-gray-200'} px-3 py-2 rounded-xl text-xs font-bold transition-colors shrink-0`}
              >
                <LogOutIcon /> Salir
              </button>
            </div>
          ) : (
            <form onSubmit={handleAuthSubmit} className="space-y-3">
              <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} p-1 rounded-xl flex w-full`}>
                <button type="button" onClick={() => { setAuthMode('login'); setAuthError(''); }} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${authMode === 'login' ? (isDarkMode ? 'bg-slate-700 text-white shadow-sm' : 'bg-white text-gray-900 shadow-sm') : (isDarkMode ? 'text-slate-400' : 'text-gray-500')}`}>Iniciar Sesión</button>
                <button type="button" onClick={() => { setAuthMode('register'); setAuthError(''); }} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${authMode === 'register' ? (isDarkMode ? 'bg-slate-700 text-white shadow-sm' : 'bg-white text-gray-900 shadow-sm') : (isDarkMode ? 'text-slate-400' : 'text-gray-500')}`}>Crear Cuenta</button>
              </div>

              <input
                type="email"
                placeholder="Email"
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 outline-none text-sm font-medium`}
                required
              />
              <input
                type="password"
                placeholder="Contraseña (mínimo 6 caracteres)"
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 outline-none text-sm font-medium`}
                required
                minLength={6}
              />

              {authError && (
                <p className="text-xs text-red-500 font-medium bg-red-500/10 border border-red-500/20 rounded-xl p-2.5">{authError}</p>
              )}

              <button
                type="submit"
                disabled={authSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm shadow-md shadow-blue-500/20 transition-colors disabled:opacity-50"
              >
                {authSubmitting ? 'Un momento...' : authMode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta y Sincronizar'}
              </button>
            </form>
          )}
        </div>

        <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border mb-6`}>
          <h3 className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">Asistente de IA (Gemini)</h3>
          <p className={`text-xs mb-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
            Pegá tu clave gratuita de Gemini para usar el chat financiero y el autocompletado inteligente. Se guarda solo en este dispositivo al tocar afuera del campo. Conseguila en aistudio.google.com/apikey.
          </p>
          <DebouncedTextInput
            type="password"
            placeholder="Clave de la API de Gemini"
            value={settings.geminiApiKey || ''}
            onCommit={(val) => setSettings({ ...settings, geminiApiKey: val })}
            className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-slate-200' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 outline-none text-sm font-semibold`}
          />
        </div>

        <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border mb-6`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-bold text-blue-500 uppercase tracking-wider">Categorías</h3>
            <button 
              onClick={() => setIsAddingCategory(!isAddingCategory)}
              className="text-blue-500 font-semibold text-xs bg-blue-500/10 px-3 py-1.5 rounded-xl hover:bg-blue-500/20 transition-colors"
            >
              {isAddingCategory ? 'Cancelar' : '+ Añadir'}
            </button>
          </div>

          {isAddingCategory && (
            <form onSubmit={handleAddCategory} className={`mb-4 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-100'} p-4 rounded-2xl border animate-in zoom-in-95 duration-200`}>
              <input type="text" placeholder="Nombre" value={newCatName} onChange={e => setNewCatName(e.target.value)} className={`p-2.5 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} text-sm w-full mb-2 outline-none`} required />
              <div className="grid grid-cols-2 gap-2 mb-2">
                <select value={newCatType} onChange={e => setNewCatType(e.target.value)} className={`p-2.5 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} text-sm outline-none`}>
                  <option value="gasto">Gasto</option>
                  <option value="ingreso">Ingreso</option>
                </select>
                <input type="number" placeholder="Presupuesto" value={newCatBudget} onChange={e => setNewCatBudget(e.target.value)} className={`p-2.5 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} text-sm outline-none`} />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-xl text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-transform">Guardar</button>
            </form>
          )}

          <div className="space-y-2">
            {categories.map(c => (
              <div key={c.id} className={`flex flex-col p-3 ${isDarkMode ? 'bg-slate-800/60 border-slate-800' : 'bg-gray-50 border-gray-100'} rounded-xl border`}>
                {editingCategoryId === c.id ? (
                  <form onSubmit={(e) => handleSaveEditCategory(e, c.id)} className="flex gap-2">
                    <input type="text" value={editCatName} onChange={e => setEditCatName(e.target.value)} className={`p-2 rounded-lg border ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} text-sm w-full outline-none`} required />
                    <button type="submit" className="text-blue-400 bg-blue-500/10 p-2 rounded-lg text-xs font-bold">OK</button>
                  </form>
                ) : (
                  <div className="flex justify-between items-center">
                    <div>
                      <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} capitalize`}>{c.name}</p>
                      <p className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-medium capitalize`}>{c.type} {c.budget > 0 ? `• Tope: ${formatCurrency(c.budget)}` : ''}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => startEditingCategory(c)} className="text-blue-500 p-2 hover:bg-blue-500/10 rounded-lg"><EditIcon /></button>
                      <button onClick={() => handleDeleteCategory(c.id)} className="text-red-400 p-2 hover:bg-red-500/10 rounded-lg"><TrashIcon /></button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border mb-6`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-bold text-blue-500 uppercase tracking-wider">Tipos de Movimientos</h3>
            <button 
              onClick={() => setIsAddingType(!isAddingType)}
              className="text-blue-500 font-semibold text-xs bg-blue-500/10 px-3 py-1.5 rounded-xl hover:bg-blue-500/20 transition-colors"
            >
              {isAddingType ? 'Cancelar' : '+ Añadir'}
            </button>
          </div>

          {isAddingType && (
            <form onSubmit={handleAddType} className={`mb-4 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-100'} p-4 rounded-2xl border animate-in zoom-in-95 duration-200 flex gap-2`}>
              <input type="text" placeholder="Ej. Semestral" value={newTypeName} onChange={e => setNewTypeName(e.target.value)} className={`p-2.5 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} text-sm w-full outline-none`} required />
              <button type="submit" className="bg-blue-600 text-white font-semibold px-4 rounded-xl text-sm shadow-md shadow-blue-500/20">Guardar</button>
            </form>
          )}

          <div className="space-y-2">
            {typesList.map(t => (
              <div key={t.id} className={`flex justify-between items-center p-3 ${isDarkMode ? 'bg-slate-800/60 border-slate-800' : 'bg-gray-50 border-gray-100'} rounded-xl border`}>
                <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} capitalize`}>{t.name}</p>
                <button onClick={() => handleDeleteType(t.id)} className="text-red-400 p-2 hover:bg-red-500/10 rounded-lg"><TrashIcon /></button>
              </div>
            ))}
          </div>
        </div>

        <div id="bancos-section" className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border mb-6`}>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xs font-bold text-blue-500 uppercase tracking-wider">Cuentas Bancarias</h3>
              <p className="text-[10px] text-gray-400 mt-0.5">Gestión manual (Prototipo)</p>
            </div>
            <button 
              type="button"
              onClick={() => setIsLinkingBank(!isLinkingBank)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors shadow-sm ${isLinkingBank ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400'}`}
            >
              {isLinkingBank ? 'Cancelar' : '+ Vincular Banco'}
            </button>
          </div>

          {isLinkingBank && (
            <form onSubmit={handleLinkBank} className={`mb-4 ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-gray-50 border-gray-100'} p-4 rounded-2xl border animate-in zoom-in-95 duration-200`}>
              {isSimulatingSync ? (
                <div className="flex flex-col items-center justify-center py-6 space-y-3">
                  <div className="w-8 h-8 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                  <p className={`text-sm font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>Estableciendo conexión segura...</p>
                </div>
              ) : (
                <>
                  <p className={`text-xs font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-3`}>Conexión Bancaria</p>
                  
                  <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Entidad Bancaria</label>
                  <select value={newBankName} onChange={e => setNewBankName(e.target.value)} className={`p-2.5 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} text-sm w-full mb-3 outline-none`}>
                    <option value="Galicia">Banco Galicia</option>
                    <option value="Santander">Santander</option>
                    <option value="BBVA">BBVA</option>
                    <option value="Brubank">Brubank</option>
                    <option value="Mercado Pago">Mercado Pago (CVU)</option>
                    <option value="Macro">Banco Macro</option>
                    <option value="Nación">Banco Nación</option>
                  </select>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Tipo de Cuenta</label>
                      <select value={newBankAccountType} onChange={e => setNewBankAccountType(e.target.value)} className={`p-2.5 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} text-sm w-full outline-none`}>
                        <option value="Caja de Ahorro">Caja de Ahorro</option>
                        <option value="Cuenta Sueldo">Cuenta Sueldo</option>
                        <option value="Cuenta Corriente">Cuenta Corriente</option>
                      </select>
                    </div>
                    <div>
                      <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>Saldo Actual</label>
                      <input type="text" placeholder="Ej. 150000" value={newBankBalance} onChange={e => setNewBankBalance(formatAmountInput(e.target.value))} className={`p-2.5 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} text-sm w-full outline-none`} required inputMode="decimal" />
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-xl text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-transform">
                    Simular Conexión y Guardar
                  </button>
                  <p className="text-[9px] text-gray-400 mt-2 text-center leading-tight">
                    *Nota: En esta versión prototipo la sincronización es manual. En una app real de producción, aquí se usaría un proveedor de Open Banking como Prometeo o Belvo.
                  </p>
                </>
              )}
            </form>
          )}

          <div className="space-y-2">
            {bankAccounts.length === 0 && !isLinkingBank && (
              <p className="text-center text-xs text-gray-400 py-2">No hay bancos vinculados.</p>
            )}
            {bankAccounts.map(b => {
              const linkedCards = paymentMethods.filter(m => m.bankId === b.id);
              const unlinkedCards = paymentMethods.filter(m => m.bankId !== b.id && m.type !== 'cash');
              
              return (
              <div key={b.id} className={`flex flex-col p-3 ${isDarkMode ? 'bg-slate-800/60 border-slate-800' : 'bg-gray-50 border-gray-100'} rounded-xl border`}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                      <BuildingIcon />
                    </div>
                    <div>
                      <p className={`text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{b.bankName}</p>
                      <p className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-medium`}>{b.accountType} • {formatCurrency(getBankBalance(b.id))}</p>
                    </div>
                  </div>
                  <button onClick={() => handleDeleteBank(b.id)} className="text-red-400 p-2 hover:bg-red-500/10 rounded-lg"><TrashIcon /></button>
                </div>

                <div className={`mt-2 pt-2 border-t ${isDarkMode ? 'border-slate-800' : 'border-gray-200'}`}>
                    <p className={`text-[10px] font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mb-2`}>Tarjetas Vinculadas</p>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                        {linkedCards.length === 0 && <span className="text-[10px] text-gray-400">Ninguna tarjeta vinculada</span>}
                        {linkedCards.map(c => (
                            <span key={c.id} className={`text-[10px] ${isDarkMode ? 'bg-slate-900 border-slate-700 text-slate-300' : 'bg-white border-gray-200 text-gray-600'} px-2 py-1 rounded-md flex items-center gap-1 shadow-sm border`}>
                                💳 {c.name}
                                <button onClick={() => setPaymentMethods(paymentMethods.map(pm => pm.id === c.id ? {...pm, bankId: null} : pm))} className="text-gray-400 hover:text-red-500 ml-1 font-bold text-xs">×</button>
                            </span>
                        ))}
                    </div>
                    {unlinkedCards.length > 0 && (
                        <div className="flex gap-2 items-center mt-1">
                            <select 
                                id={`select_card_${b.id}`}
                                className={`text-[10px] p-1.5 rounded-lg border ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-700'} outline-none flex-1`}
                            >
                                <option value="">Vincular otra tarjeta...</option>
                                {unlinkedCards.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                            <button 
                                onClick={() => {
                                    const selectEl = document.getElementById(`select_card_${b.id}`);
                                    const cardId = Number(selectEl.value);
                                    if(cardId) {
                                        setPaymentMethods(paymentMethods.map(pm => pm.id === cardId ? {...pm, bankId: b.id} : pm));
                                        selectEl.value = '';
                                    }
                                }}
                                className={`px-2 py-1.5 rounded-lg text-[10px] font-bold ${isDarkMode ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'} transition-colors`}
                            >
                                Vincular
                            </button>
                        </div>
                    )}
                </div>
              </div>
            )})}
          </div>
        </div>

      </div>
    );
  };

  if (!isLoaded) return null;

  return (
    <div className={`h-[100dvh] flex justify-center font-sans overflow-hidden ${isDarkMode ? 'bg-slate-950' : 'bg-gray-200'}`}>
      <div className={`w-full max-w-md ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} h-full relative shadow-2xl flex flex-col`}>
        <div className={`w-full h-safe-top pt-8 ${isDarkMode ? 'bg-slate-950' : 'bg-gray-50'} shrink-0`}></div>

        <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'profile' && <ProfileDashboard />}
          {activeTab === 'goals' && <SavingsAndGoals />}
          {activeTab === 'cards' && <CardsManager />}
          {activeTab === 'add' && (
            <AddTransaction
              categories={categories}
              typesList={typesList}
              paymentMethods={paymentMethods}
              bankAccounts={bankAccounts}
              settings={settings}
              isDarkMode={isDarkMode}
              transactions={transactions}
              setTransactions={setTransactions}
              setEmergencyFund={setEmergencyFund}
              savingsGoals={savingsGoals}
              setSavingsGoals={setSavingsGoals}
              setActiveTab={setActiveTab}
              handleSmartScan={handleSmartScan}
              startVoiceDictation={startVoiceDictation}
              isScanning={isScanning}
              isListening={isListening}
            />
          )}
          {activeTab === 'history' && <HistoryAndHabitual />}
          {activeTab === 'settings' && <SettingsView />}
        </div>

        <div className={`absolute bottom-0 w-full ${isDarkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-gray-200'} backdrop-blur-md border-t pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.03)] z-50`}>
          <div className="flex justify-between items-center h-20 px-4 pb-4 pt-2">
            <button onClick={() => { setActiveTab('dashboard'); setSelectedCardId(null); }} className="flex flex-col items-center justify-center w-12 gap-1">
              <HomeIcon active={activeTab === 'dashboard' && selectedCardId === null} />
              <span className={`text-[10px] font-medium ${activeTab === 'dashboard' && selectedCardId === null ? 'text-blue-500' : (isDarkMode ? 'text-slate-400' : 'text-gray-500')}`}>Inicio</span>
            </button>

            <button onClick={() => { setActiveTab('cards'); setSelectedCardId(null); }} className="flex flex-col items-center justify-center w-12 gap-1">
              <CreditCardIcon active={activeTab === 'cards'} />
              <span className={`text-[10px] font-medium ${activeTab === 'cards' ? 'text-blue-500' : (isDarkMode ? 'text-slate-400' : 'text-gray-500')}`}>Tarjetas</span>
            </button>

            <button onClick={() => { setActiveTab('add'); setSelectedCardId(null); }} className="flex flex-col items-center justify-center -mt-8 relative w-16">
              <div className={`w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40 text-white transform transition-transform active:scale-95 border-4 ${isDarkMode ? 'border-slate-950' : 'border-gray-50'} absolute`}>
                <PlusIcon active={true} />
              </div>
            </button>

            <button onClick={() => { setActiveTab('history'); setSelectedCardId(null); }} className="flex flex-col items-center justify-center w-12 gap-1">
              <ListIcon active={activeTab === 'history'} />
              <span className={`text-[10px] font-medium ${activeTab === 'history' ? 'text-blue-500' : (isDarkMode ? 'text-slate-400' : 'text-gray-500')}`}>Historial</span>
            </button>

            <button onClick={() => { setActiveTab('settings'); setSelectedCardId(null); }} className="flex flex-col items-center justify-center w-12 gap-1">
              <SettingsIcon active={activeTab === 'settings'} />
              <span className={`text-[10px] font-medium ${activeTab === 'settings' ? 'text-blue-500' : (isDarkMode ? 'text-slate-400' : 'text-gray-500')}`}>Ajustes</span>
            </button>
          </div>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
      </div>
    </div>
  );
}

const rootEl = document.getElementById('root');
ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <ExpenseTrackerApp />
  </React.StrictMode>
);
