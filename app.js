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

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const PlaneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.5 1c-.2.4-.1.9.3 1.2l5 3.5-3 3-2.5-.5c-.4-.1-.8.1-1 .5l-.5 1c-.2.4 0 .9.4 1.1l4.5 2.5 2.5 4.5c.3.4.8.6 1.1.4l1-.5c.4-.2.6-.6.5-1l-.5-2.5 3-3 3.5 5c.3.4.8.5 1.2.3l1-.5c.4-.2.6-.7.4-1.1Z"></path></svg>
);

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

const AddTransaction = ({ categories, typesList, paymentMethods, bankAccounts, settings, isDarkMode, transactions, setTransactions, setEmergencyFund, savingsGoals, setSavingsGoals, setActiveTab, handleSmartScan, startVoiceDictation, isScanning, isListening, authUser, trips, onAddTripTransaction, getAccountBalance }) => {
    const [type, setType] = useState('gasto');
    const [amountInput, setAmountInput] = useState('');
    const [description, setDescription] = useState('');
    const [smartInputText, setSmartInputText] = useState('');
    const [smartFeedback, setSmartFeedback] = useState(null); // { type: 'error'|'info', text: '...' } | null
    
    const availableCategories = categories.filter(c => c.type === (type === 'ahorro' ? 'gasto' : type));
    const [categoryId, setCategoryId] = useState(availableCategories.length > 0 ? availableCategories[0].id : '');
    const [typeClassification, setTypeClassification] = useState(typesList.length > 0 ? typesList[0].id : 'diario');
    const [methodId, setMethodId] = useState(paymentMethods.length > 0 ? paymentMethods[0].id : '');
    const [transferDestId, setTransferDestId] = useState(paymentMethods.length > 1 ? paymentMethods[1].id : '');
    const [destBankId, setDestBankId] = useState('');
    const [targetGoalId, setTargetGoalId] = useState('emergency');

    const availableTrips = trips || [];
    const [imputeTrip, setImputeTrip] = useState(false);
    const [tripTxType, setTripTxType] = useState('gasto'); // 'gasto' | 'aporte' — independiente del tipo de movimiento personal
    const [selectedTripId, setSelectedTripId] = useState(availableTrips[0]?.id || '');
    const selectedTrip = availableTrips.find(t => t.id === selectedTripId) || null;
    const tripCategoriesList = (selectedTrip && selectedTrip.categories) || [];
    const [tripCategoryId, setTripCategoryId] = useState(tripCategoriesList[0]?.id || '');

    useEffect(() => {
      if (availableTrips.length > 0 && !availableTrips.some(t => t.id === selectedTripId)) {
        setSelectedTripId(availableTrips[0].id);
      }
      if (availableTrips.length === 0 && imputeTrip) {
        setImputeTrip(false);
      }
      // eslint-disable-next-line
    }, [trips]);

    useEffect(() => {
      const cats = (selectedTrip && selectedTrip.categories) || [];
      if (!cats.some(c => c.id === tripCategoryId)) {
        setTripCategoryId(cats[0]?.id || '');
      }
      // eslint-disable-next-line
    }, [selectedTripId, selectedTrip]);
    
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

      if (type === 'transferencia') {
        if (!methodId || !transferDestId || methodId === transferDestId) return;
      }

      const rate = txCurrency === settings.currency ? 1 : getNumericExchangeRate();
      const finalAmount = originalAmount * rate;

      if (type === 'ahorro') {
        if (targetGoalId === 'emergency') {
          setEmergencyFund(prev => ({ ...prev, current: prev.current + finalAmount }));
        } else {
          setSavingsGoals(savingsGoals.map(g => g.id === targetGoalId ? { ...g, current: Math.min(g.current + finalAmount, g.target) } : g));
        }
      }

      const shouldImputeTrip = imputeTrip && selectedTrip && type !== 'ahorro' && type !== 'transferencia';
      const finalCategoryId = type === 'ahorro' ? 'ahorro' : type === 'transferencia' ? 'transferencia' : (shouldImputeTrip ? tripCategoryId : categoryId);

      const newTransaction = {
        id: Date.now(),
        type,
        amount: finalAmount,
        originalAmount: originalAmount,
        originalCurrency: txCurrency,
        exchangeRate: rate,
        description: type === 'ahorro' ? (targetGoalId === 'emergency' ? 'Aporte Fondo de Emergencia' : `Aporte Meta: ${savingsGoals.find(g => g.id === targetGoalId)?.name || ''}`) : (type === 'transferencia' ? (description.trim() || 'Transferencia entre cuentas') : description),
        category: finalCategoryId,
        typeClassification: type === 'ahorro' ? 'otro' : type === 'transferencia' ? 'transferencia' : typeClassification,
        methodId: (type === 'gasto' || type === 'ingreso' || type === 'transferencia') ? (methodId || null) : null,
        destMethodId: type === 'transferencia' ? (transferDestId || null) : null,
        bankId: null,
        date: getDateToSave(),
        tripId: shouldImputeTrip ? selectedTrip.id : null
      };

      setTransactions([newTransaction, ...transactions]);

      if (shouldImputeTrip && onAddTripTransaction) {
        onAddTripTransaction(selectedTrip.id, {
          type: tripTxType === 'aporte' ? 'aporte' : 'gasto',
          amount: finalAmount,
          description: description.trim() || (tripTxType === 'aporte' ? 'Aporte al fondo' : (tripCategoriesList.find(c => c.id === tripCategoryId)?.name || 'Movimiento')),
          category: tripCategoryId,
          date: newTransaction.date
        }).catch(() => {});
      }

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
              onClick={() => { setSmartFeedback(null); startVoiceDictation(setSmartInputText, setDescription, setAmountInput, setCategoryId, setSmartFeedback, setMethodId, setSelectedDateMode, type); }}
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
              onClick={() => { setSmartFeedback(null); handleSmartScan(smartInputText, setDescription, setAmountInput, setCategoryId, setSmartFeedback, setMethodId, setSelectedDateMode, type); }}
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
            <button 
              type="button" 
              onClick={() => setType('transferencia')}
              className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${type === 'transferencia' ? (isDarkMode ? 'bg-slate-800 text-sky-400 font-bold shadow-sm' : 'bg-white text-sky-600 font-bold shadow-sm') : ''}`}
            >
              ⇄ Transf.
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

          {authUser && availableTrips.length > 0 && type !== 'ahorro' && type !== 'transferencia' && (
            <div className={`rounded-2xl p-3.5 border transition-colors ${imputeTrip ? 'bg-amber-500/10 border-amber-500/30' : (isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100')}`}>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-lg shrink-0">✈️</span>
                  <div className="min-w-0">
                    <p className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Imputar al Viaje</p>
                    {imputeTrip && selectedTrip ? (
                      <p className="text-[11px] font-semibold text-amber-500 truncate">{selectedTrip.name}</p>
                    ) : (
                      <p className={`text-[11px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} truncate`}>Sumalo al historial compartido de un viaje</p>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setImputeTrip(!imputeTrip)}
                  className={`shrink-0 w-11 h-6 rounded-full transition-colors relative ${imputeTrip ? 'bg-amber-500' : (isDarkMode ? 'bg-slate-700' : 'bg-gray-300')}`}
                  aria-label="Imputar al viaje"
                >
                  <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all ${imputeTrip ? 'left-5' : 'left-0.5'}`}></span>
                </button>
              </div>
              {imputeTrip && (
                <div className="mt-3 pt-3 border-t border-amber-500/20 space-y-2">
                  <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} p-1 rounded-xl flex w-full gap-1`}>
                    <button type="button" onClick={() => setTripTxType('gasto')} className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${tripTxType === 'gasto' ? 'bg-red-500 text-white shadow-sm' : (isDarkMode ? 'text-slate-300' : 'text-gray-500')}`}>💸 Gasto</button>
                    <button type="button" onClick={() => setTripTxType('aporte')} className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${tripTxType === 'aporte' ? 'bg-green-500 text-white shadow-sm' : (isDarkMode ? 'text-slate-300' : 'text-gray-500')}`}>💰 Aporte al fondo</button>
                  </div>
                  {availableTrips.length > 1 && (
                    <select
                      value={selectedTripId}
                      onChange={(e) => setSelectedTripId(e.target.value)}
                      className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-2.5 text-xs font-bold outline-none`}
                    >
                      {availableTrips.map(t => (
                        <option key={t.id} value={t.id}>{t.name}</option>
                      ))}
                    </select>
                  )}
                  {tripTxType === 'gasto' && tripCategoriesList.length > 0 && (
                    <select
                      value={tripCategoryId}
                      onChange={(e) => setTripCategoryId(e.target.value)}
                      className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-2.5 text-xs font-bold uppercase outline-none`}
                    >
                      {tripCategoriesList.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="space-y-4">
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-2xl p-4 shadow-sm border space-y-4`}>
              {(type === 'ingreso' || type === 'gasto') && (
                <div>
                  <label className={`block text-[10px] font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mb-2`}>
                    {type === 'ingreso' ? 'Cuenta de Destino' : 'Cuenta de Origen / Medio de Pago'}
                  </label>
                  {paymentMethods.length === 0 ? (
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Todavía no agregaste ninguna cuenta o tarjeta.</p>
                  ) : (
                    <div className="flex gap-2.5 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-1 px-1 pb-1">
                      {paymentMethods.map(m => {
                        const isSelected = methodId === m.id;
                        const shortLabel = { credito: 'Crédito', cuenta: 'Cuenta', efectivo: 'Efectivo', inversion: 'Inversión' }[m.type] || 'Cuenta';
                        const bal = getAccountBalance ? getAccountBalance(m.id) : 0;
                        return (
                          <button
                            type="button"
                            key={m.id}
                            onClick={() => setMethodId(m.id)}
                            className={`relative shrink-0 snap-start w-36 h-[88px] rounded-2xl p-3 text-left bg-gradient-to-br ${m.color || 'from-gray-500 to-gray-700'} text-white shadow-md transition-all ${isSelected ? 'ring-2 ring-white/90 scale-[1.03]' : 'opacity-70'}`}
                          >
                            <div className="flex justify-between items-start">
                              <span className="text-[9px] font-black uppercase tracking-wider opacity-90">{shortLabel}</span>
                              {isSelected && (
                                <span className="w-4 h-4 rounded-full bg-white/90 text-emerald-600 flex items-center justify-center text-[10px] font-black">✓</span>
                              )}
                            </div>
                            <p className="text-xs font-bold leading-tight mt-3 line-clamp-2">{m.name}</p>
                            <p className="text-[9px] opacity-80 mt-0.5">
                              {m.type === 'credito' ? 'Deuda ' : 'Saldo '}
                              {new Intl.NumberFormat('es-AR', { notation: 'compact' }).format(bal)}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {type === 'transferencia' && (
                <div className="space-y-4">
                  <div>
                    <label className={`block text-[10px] font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mb-2`}>
                      Cuenta de Origen
                    </label>
                    {paymentMethods.length === 0 ? (
                      <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Todavía no agregaste ninguna cuenta o tarjeta.</p>
                    ) : (
                      <div className="flex gap-2.5 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-1 px-1 pb-1">
                        {paymentMethods.map(m => {
                          const isSelected = methodId === m.id;
                          const isBlocked = transferDestId === m.id;
                          const shortLabel = { credito: 'Crédito', cuenta: 'Cuenta', efectivo: 'Efectivo', inversion: 'Inversión' }[m.type] || 'Cuenta';
                          const bal = getAccountBalance ? getAccountBalance(m.id) : 0;
                          return (
                            <button
                              type="button"
                              key={m.id}
                              onClick={() => setMethodId(m.id)}
                              className={`relative shrink-0 snap-start w-36 h-[88px] rounded-2xl p-3 text-left bg-gradient-to-br ${m.color || 'from-gray-500 to-gray-700'} text-white shadow-md transition-all ${isBlocked ? 'ring-2 ring-red-500 opacity-50' : isSelected ? 'ring-2 ring-white/90 scale-[1.03]' : 'opacity-70'}`}
                            >
                              <div className="flex justify-between items-start">
                                <span className="text-[9px] font-black uppercase tracking-wider opacity-90">{shortLabel}</span>
                                {isSelected && !isBlocked && (
                                  <span className="w-4 h-4 rounded-full bg-white/90 text-emerald-600 flex items-center justify-center text-[10px] font-black">✓</span>
                                )}
                                {isBlocked && (
                                  <span className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] font-black">!</span>
                                )}
                              </div>
                              <p className="text-xs font-bold leading-tight mt-3 line-clamp-2">{m.name}</p>
                              <p className="text-[9px] opacity-80 mt-0.5">
                                {isBlocked ? 'Ya es el destino' : `${m.type === 'credito' ? 'Deuda ' : 'Saldo '}${new Intl.NumberFormat('es-AR', { notation: 'compact' }).format(bal)}`}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center">
                    <span className={`text-lg ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>⇣</span>
                  </div>

                  <div>
                    <label className={`block text-[10px] font-bold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mb-2`}>
                      Cuenta de Destino
                    </label>
                    {paymentMethods.length === 0 ? (
                      <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Todavía no agregaste ninguna cuenta o tarjeta.</p>
                    ) : (
                      <div className="flex gap-2.5 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-1 px-1 pb-1">
                        {paymentMethods.map(m => {
                          const isSelected = transferDestId === m.id;
                          const isBlocked = methodId === m.id;
                          const shortLabel = { credito: 'Crédito', cuenta: 'Cuenta', efectivo: 'Efectivo', inversion: 'Inversión' }[m.type] || 'Cuenta';
                          const bal = getAccountBalance ? getAccountBalance(m.id) : 0;
                          return (
                            <button
                              type="button"
                              key={m.id}
                              onClick={() => setTransferDestId(m.id)}
                              className={`relative shrink-0 snap-start w-36 h-[88px] rounded-2xl p-3 text-left bg-gradient-to-br ${m.color || 'from-gray-500 to-gray-700'} text-white shadow-md transition-all ${isBlocked ? 'ring-2 ring-red-500 opacity-50' : isSelected ? 'ring-2 ring-white/90 scale-[1.03]' : 'opacity-70'}`}
                            >
                              <div className="flex justify-between items-start">
                                <span className="text-[9px] font-black uppercase tracking-wider opacity-90">{shortLabel}</span>
                                {isSelected && !isBlocked && (
                                  <span className="w-4 h-4 rounded-full bg-white/90 text-emerald-600 flex items-center justify-center text-[10px] font-black">✓</span>
                                )}
                                {isBlocked && (
                                  <span className="w-4 h-4 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] font-black">!</span>
                                )}
                              </div>
                              <p className="text-xs font-bold leading-tight mt-3 line-clamp-2">{m.name}</p>
                              <p className="text-[9px] opacity-80 mt-0.5">
                                {isBlocked ? 'Ya es el origen' : (m.type === 'credito' ? `Deuda ${new Intl.NumberFormat('es-AR', { notation: 'compact' }).format(bal)}` : `Saldo ${new Intl.NumberFormat('es-AR', { notation: 'compact' }).format(bal)}`)}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {methodId && transferDestId && methodId === transferDestId && (
                    <p className="text-xs text-red-500 font-semibold bg-red-500/10 border border-red-500/20 rounded-xl p-2.5">
                      La cuenta de origen y la cuenta de destino deben ser diferentes.
                    </p>
                  )}
                </div>
              )}

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
              ) : type === 'transferencia' ? null : (
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
                  <label className={`block text-[10px] font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mb-1`}>Descripción</label>
                  <input 
                    type="text" 
                    placeholder="Agregá un detalle breve sobre este movimiento..." 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100 text-gray-800'} border rounded-xl p-3 outline-none focus:border-blue-300 transition-colors text-sm font-medium`}
                    required
                  />
                </div>
              )}
            </div>
          </div>

          <button 
            type="submit" 
            disabled={type === 'transferencia' && (!methodId || !transferDestId || methodId === transferDestId)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-2xl shadow-lg shadow-blue-500/30 transition-all active:scale-95 mt-4 disabled:opacity-40"
          >
            Guardar Movimiento
          </button>
        </form>
      </div>
    );
  };

const TripsView = ({ isDarkMode, settings, authUser, trips, tripsCheckDone, setActiveTab, onCreateTrip, onJoinTrip, onLeaveTrip, onDeleteTrip, onAddTripTransaction, onDeleteTripTransaction, onUpdateTrip, activeTripId, onToggleActiveTrip }) => {
  const [mode, setMode] = useState('list'); // 'list' | 'create' | 'edit' | 'detail'
  const [viewingTripId, setViewingTripId] = useState(null);

  const blankCats = () => [
    { id: `tc_0_${Date.now()}`, name: 'Alojamiento', budget: '' },
    { id: `tc_1_${Date.now()}`, name: 'Comida', budget: '' },
    { id: `tc_2_${Date.now()}`, name: 'Transporte', budget: '' },
    { id: `tc_3_${Date.now()}`, name: 'Excursiones', budget: '' }
  ];

  const [tripName, setTripName] = useState('');
  const [tripStart, setTripStart] = useState('');
  const [tripEnd, setTripEnd] = useState('');
  const [tripBudgetInput, setTripBudgetInput] = useState('');
  const [tripCatsList, setTripCatsList] = useState(blankCats());
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState('');

  const [editTripId, setEditTripId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editStart, setEditStart] = useState('');
  const [editEnd, setEditEnd] = useState('');
  const [editBudgetInput, setEditBudgetInput] = useState('');
  const [editCatsList, setEditCatsList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editError, setEditError] = useState('');

  const startEditingTrip = (t) => {
    setEditTripId(t.id);
    setEditName(t.name || '');
    setEditStart(t.startDate || '');
    setEditEnd(t.endDate || '');
    setEditBudgetInput(t.budget ? formatAmtInput(String(t.budget).replace('.', ',')) : '');
    setEditCatsList((t.categories || []).map(c => ({ id: c.id, name: c.name, budget: c.budget ? formatAmtInput(String(c.budget).replace('.', ',')) : '' })));
    setEditError('');
    setMode('edit');
  };

  const [joinCode, setJoinCode] = useState('');
  const [joining, setJoining] = useState(false);
  const [joinError, setJoinError] = useState('');

  const [txType, setTxType] = useState('gasto'); // 'gasto' | 'aporte'
  const [txAmountInput, setTxAmountInput] = useState('');
  const [txDescription, setTxDescription] = useState('');
  const [txCategoryId, setTxCategoryId] = useState('');
  const [txBusy, setTxBusy] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState('');

  const parseAmt = (str) => {
    if (!str) return 0;
    const clean = String(str).replace(/\./g, '').replace(',', '.');
    return parseFloat(clean) || 0;
  };

  const formatAmtInput = (val) => {
    if (!val) return '';
    let clean = val.replace(/[^0-9,]/g, '');
    const parts = clean.split(',');
    if (parts.length > 2) return val;
    let integerPart = parts[0];
    let decimalPart = parts[1] !== undefined ? ',' + parts[1].substring(0, 2) : '';
    if (integerPart) integerPart = parseInt(integerPart, 10).toLocaleString('es-AR');
    return integerPart + decimalPart;
  };

  const formatMoney = (amount) => {
    const numericAmount = parseFloat(amount) || 0;
    const formatted = new Intl.NumberFormat('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(numericAmount);
    const symbols = { 'ARS': '$', 'USD': 'US$', 'EUR': '€' };
    return `${symbols[settings.currency] || '$'} ${formatted}`;
  };

  const cardCls = isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100';
  const inputCls = isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100 text-gray-800';
  const labelCls = isDarkMode ? 'text-slate-400' : 'text-gray-500';

  if (!authUser) {
    return (
      <div className={`p-4 pb-32 min-h-full ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} animate-in fade-in duration-300`}>
        <h1 className={`text-2xl font-bold mb-4 mt-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>✈️ Modo Viaje</h1>
        <div className={`${cardCls} rounded-3xl p-6 shadow-sm border text-center`}>
          <p className={`text-sm ${labelCls} mb-4`}>Para crear o unirte a un viaje compartido necesitás iniciar sesión primero (así podés invitar a otras personas con sus propias cuentas).</p>
          <button onClick={() => setActiveTab('settings')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-5 rounded-xl text-sm shadow-md transition-colors">
            Ir a Ajustes → Cuenta
          </button>
        </div>
      </div>
    );
  }

  const trip = viewingTripId ? trips.find(t => t.id === viewingTripId) : null;

  // ---- Vista Detalle de un viaje ----
  if (mode === 'detail' && trip) {
    const tripTxs = (trip.transactions || []).slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    const totalSpent = tripTxs.filter(t => t.type === 'gasto').reduce((s, t) => s + parseFloat(t.amount || 0), 0);
    const totalAportado = tripTxs.filter(t => t.type === 'aporte').reduce((s, t) => s + parseFloat(t.amount || 0), 0);
    const disponible = totalAportado - totalSpent;
    const budget = parseFloat(trip.budget || 0);
    const usagePercent = budget > 0 ? Math.min((totalSpent / budget) * 100, 100) : 0;
    const tripCategories = trip.categories || [];
    const isOwner = trip.ownerUid === authUser.uid;

    const memberTotals = (trip.members || []).map(uid => {
      const email = (trip.memberEmails && trip.memberEmails[uid]) || '';
      const aportado = tripTxs.filter(t => t.type === 'aporte' && t.createdBy === uid).reduce((s, t) => s + parseFloat(t.amount || 0), 0);
      const gastado = tripTxs.filter(t => t.type === 'gasto' && t.createdBy === uid).reduce((s, t) => s + parseFloat(t.amount || 0), 0);
      return { uid, email, aportado, gastado };
    });

    const handleSubmitTx = async (e) => {
      e.preventDefault();
      const amt = parseAmt(txAmountInput);
      if (amt <= 0) return;
      setTxBusy(true);
      try {
        await onAddTripTransaction(trip.id, {
          type: txType === 'aporte' ? 'aporte' : 'gasto',
          amount: amt,
          description: txDescription.trim() || (txType === 'aporte' ? 'Aporte al fondo' : (tripCategories.find(c => c.id === txCategoryId)?.name || 'Gasto')),
          category: txCategoryId || (tripCategories[0]?.id || 'otros'),
          date: new Date().toISOString()
        });
        setTxAmountInput('');
        setTxDescription('');
      } catch (err) { /* noop */ }
      setTxBusy(false);
    };

    const handleCopyCode = () => {
      const text = trip.id;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          setCopyFeedback('¡Copiado!');
          setTimeout(() => setCopyFeedback(''), 1500);
        }).catch(() => setCopyFeedback(text));
      } else {
        setCopyFeedback(text);
      }
    };

    return (
      <div className={`p-4 pb-32 min-h-full ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} animate-in fade-in slide-in-from-right-4 duration-300`}>
        <div className="flex items-center gap-3 mb-4 mt-2">
          <button onClick={() => { setMode('list'); setViewingTripId(null); }} className={`${isDarkMode ? 'bg-slate-800 text-slate-200' : 'bg-gray-100 text-gray-800'} p-2 rounded-full shadow-sm`}>
            <ArrowLeftIcon />
          </button>
          <h1 className={`text-xl font-bold truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{trip.name}</h1>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-6 text-white shadow-lg mb-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
          <div className="flex items-center gap-2 mb-1">
            <PlaneIcon />
            <span className="text-xs font-black tracking-widest uppercase bg-black/20 px-2.5 py-0.5 rounded-full">Modo Viaje</span>
          </div>
          {(trip.startDate || trip.endDate) && (
            <p className="text-xs font-bold opacity-90 mt-1">{trip.startDate || '?'} al {trip.endDate || '?'}</p>
          )}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <p className="text-orange-100 text-xs">💰 Fondo disponible</p>
              <p className="text-2xl font-bold">{formatMoney(disponible)}</p>
            </div>
            <div>
              <p className="text-orange-100 text-xs">🎯 Presupuesto</p>
              <p className="text-2xl font-bold">{formatMoney(budget)}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-3 pt-3 border-t border-white/20">
            <div>
              <p className="text-orange-100 text-xs">💸 Total gastado</p>
              <p className="font-bold">{formatMoney(totalSpent)}</p>
            </div>
            <div>
              <p className="text-orange-100 text-xs">📊 % utilizado</p>
              <p className="font-bold">{usagePercent.toFixed(0)}%</p>
            </div>
          </div>
          {budget > 0 && (
            <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden mt-3">
              <div className={`h-full rounded-full ${usagePercent >= 90 ? 'bg-red-400' : 'bg-white'}`} style={{ width: `${usagePercent}%` }}></div>
            </div>
          )}
        </div>

        <div className={`${cardCls} rounded-2xl p-4 shadow-sm border mb-6`}>
          <div className="flex items-center gap-2 mb-2">
            <UsersIcon />
            <p className={`text-xs font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Participantes del viaje</p>
          </div>
          <p className={`text-xs mb-3 ${labelCls}`}>Invitá gente compartiendo este código. Cualquiera con una cuenta se puede sumar y cargar gastos.</p>
          <div className="flex items-center gap-2 mb-3">
            <span className={`font-mono font-black text-lg flex-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>{trip.id}</span>
            <button type="button" onClick={handleCopyCode} className={`${isDarkMode ? 'bg-slate-800 text-slate-200' : 'bg-gray-100 text-gray-800'} px-3 py-1.5 rounded-lg text-xs font-bold`}>
              {copyFeedback || 'Copiar'}
            </button>
          </div>
          <div className="space-y-2">
            {memberTotals.map(m => (
              <div key={m.uid} className={`flex justify-between items-center text-xs p-2 rounded-lg ${isDarkMode ? 'bg-slate-800/60' : 'bg-gray-50'}`}>
                <span className={`font-semibold truncate ${isDarkMode ? 'text-slate-200' : 'text-gray-700'}`}>
                  {m.uid === authUser.uid ? 'Vos' : (m.email ? m.email.split('@')[0] : 'Miembro')}
                </span>
                <span className="text-right">
                  <span className="text-green-500 font-bold">{formatMoney(m.aportado)}</span>
                  <span className={labelCls}> aportado</span>
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-3">
            <button
              type="button"
              disabled={leaving}
              onClick={async () => { setLeaving(true); await onLeaveTrip(trip.id); setLeaving(false); setMode('list'); setViewingTripId(null); }}
              className={`flex-1 ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-gray-100 text-gray-700'} py-2 rounded-xl text-xs font-bold`}
            >
              {leaving ? 'Un momento...' : 'Salir del viaje'}
            </button>
          </div>
        </div>

        <div className={`${cardCls} rounded-2xl p-4 shadow-sm border mb-6`}>
          <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${labelCls}`}>Cargar movimiento del viaje</p>
          <form onSubmit={handleSubmitTx} className="space-y-3">
            <div className={`${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} p-1 rounded-xl flex w-full gap-1`}>
              <button type="button" onClick={() => setTxType('gasto')} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${txType === 'gasto' ? 'bg-red-500 text-white shadow-sm' : labelCls}`}>💸 Gasto</button>
              <button type="button" onClick={() => setTxType('aporte')} className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${txType === 'aporte' ? 'bg-green-500 text-white shadow-sm' : labelCls}`}>💰 Aporte al fondo</button>
            </div>
            <input
              type="text"
              value={txAmountInput}
              onChange={e => setTxAmountInput(formatAmtInput(e.target.value))}
              placeholder="Monto (ej. 15.000)"
              inputMode="decimal"
              className={`w-full ${inputCls} border rounded-xl p-3 outline-none text-sm font-bold`}
              required
            />
            <input
              type="text"
              value={txDescription}
              onChange={e => setTxDescription(e.target.value)}
              placeholder={txType === 'aporte' ? 'Descripción (opcional)' : 'Descripción (ej. Cena, Hotel)'}
              className={`w-full ${inputCls} border rounded-xl p-3 outline-none text-sm`}
            />
            {txType === 'gasto' && (
              <select
                value={txCategoryId || (tripCategories[0]?.id || '')}
                onChange={e => setTxCategoryId(e.target.value)}
                className={`w-full ${inputCls} border rounded-xl p-3 outline-none text-sm capitalize`}
              >
                {tripCategories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            )}
            <button type="submit" disabled={txBusy} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-sm shadow-md transition-colors disabled:opacity-50">
              {txBusy ? 'Guardando...' : 'Guardar'}
            </button>
          </form>
        </div>

        <div>
          <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${labelCls}`}>Historial del viaje</h3>
          <div className="space-y-2">
            {tripTxs.length === 0 ? (
              <div className={`text-center ${labelCls} ${cardCls} text-sm p-6 rounded-2xl border`}>Todavía no hay movimientos en este viaje.</div>
            ) : (
              tripTxs.map(t => {
                const cat = tripCategories.find(c => c.id === t.category);
                return (
                  <div key={t.id} className={`${cardCls} rounded-2xl p-3.5 shadow-sm border flex justify-between items-center gap-2`}>
                    <div className="min-w-0 flex-1">
                      <p className={`font-semibold text-sm truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.description}</p>
                      <div className="flex items-center gap-1.5 flex-wrap mt-0.5">
                        <span className={`text-[11px] ${labelCls}`}>{new Date(t.date).toLocaleDateString('es-AR', { day: '2-digit', month: 'short' })}</span>
                        {t.type === 'gasto' && cat && <><span className={`w-1 h-1 rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-300'}`}></span><span className={`text-[11px] ${labelCls}`}>{cat.name}</span></>}
                        <span className={`w-1 h-1 rounded-full ${isDarkMode ? 'bg-slate-700' : 'bg-gray-300'}`}></span>
                        <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded-md font-semibold">
                          {t.createdBy === authUser.uid ? 'Vos' : (t.createdByEmail ? t.createdByEmail.split('@')[0] : 'Miembro')}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`font-bold text-sm ${t.type === 'aporte' ? 'text-green-500' : 'text-red-500'}`}>
                        {t.type === 'aporte' ? '+' : '-'}{formatMoney(t.amount)}
                      </span>
                      {(t.createdBy === authUser.uid || isOwner) && (
                        <button onClick={() => onDeleteTripTransaction(trip.id, t)} className="text-gray-400 hover:text-red-500 transition-colors">
                          <TrashIcon />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }

  // ---- Vista Crear Viaje ----
  if (mode === 'create') {
    const handleSubmitCreate = async (e) => {
      e.preventDefault();
      if (!tripName.trim()) return;
      setCreating(true); setCreateError('');
      try {
        const cats = tripCatsList.filter(c => c.name.trim()).map(c => ({ id: c.id, name: c.name.trim(), budget: parseAmt(c.budget) }));
        const code = await onCreateTrip({ name: tripName, startDate: tripStart, endDate: tripEnd, budget: parseAmt(tripBudgetInput), categories: cats });
        setTripName(''); setTripStart(''); setTripEnd(''); setTripBudgetInput(''); setTripCatsList(blankCats());
        setViewingTripId(code);
        setMode('detail');
      } catch (err) {
        setCreateError('No se pudo crear el viaje. Probá de nuevo.');
      }
      setCreating(false);
    };

    return (
      <div className={`p-4 pb-32 min-h-full ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} animate-in fade-in slide-in-from-right-4 duration-300`}>
        <div className="flex items-center gap-3 mb-6 mt-2">
          <button onClick={() => setMode('list')} className={`${isDarkMode ? 'bg-slate-800 text-slate-200' : 'bg-gray-100 text-gray-800'} p-2 rounded-full shadow-sm`}>
            <ArrowLeftIcon />
          </button>
          <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Nuevo Viaje</h1>
        </div>
        <form onSubmit={handleSubmitCreate} className={`${cardCls} rounded-3xl p-5 shadow-sm border space-y-4`}>
          <div>
            <label className={`block text-[10px] font-bold uppercase mb-1 ${labelCls}`}>Nombre del viaje</label>
            <input type="text" value={tripName} onChange={e => setTripName(e.target.value)} placeholder="Ej. Viaje a Brasil" className={`w-full ${inputCls} border rounded-xl p-3 outline-none text-sm font-bold`} required />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={`block text-[10px] font-bold uppercase mb-1 ${labelCls}`}>Fecha inicio</label>
              <input type="date" value={tripStart} onChange={e => setTripStart(e.target.value)} className={`w-full ${inputCls} border rounded-xl p-2.5 outline-none text-sm`} />
            </div>
            <div>
              <label className={`block text-[10px] font-bold uppercase mb-1 ${labelCls}`}>Fecha fin</label>
              <input type="date" value={tripEnd} onChange={e => setTripEnd(e.target.value)} className={`w-full ${inputCls} border rounded-xl p-2.5 outline-none text-sm`} />
            </div>
          </div>
          <div>
            <label className={`block text-[10px] font-bold uppercase mb-1 ${labelCls}`}>Presupuesto objetivo</label>
            <input type="text" inputMode="decimal" value={tripBudgetInput} onChange={e => setTripBudgetInput(formatAmtInput(e.target.value))} placeholder="Ej. 2.500.000" className={`w-full ${inputCls} border rounded-xl p-3 outline-none text-sm font-bold`} />
          </div>
          <div>
            <label className={`block text-[10px] font-bold uppercase mb-2 ${labelCls}`}>Categorías del viaje (con presupuesto opcional)</label>
            <div className="space-y-2">
              {tripCatsList.map((c, i) => (
                <div key={c.id} className="flex gap-2">
                  <input
                    type="text"
                    value={c.name}
                    onChange={e => setTripCatsList(tripCatsList.map((x, xi) => xi === i ? { ...x, name: e.target.value } : x))}
                    placeholder="Categoría"
                    className={`flex-1 ${inputCls} border rounded-xl p-2.5 outline-none text-sm`}
                  />
                  <input
                    type="text"
                    inputMode="decimal"
                    value={c.budget}
                    onChange={e => setTripCatsList(tripCatsList.map((x, xi) => xi === i ? { ...x, budget: formatAmtInput(e.target.value) } : x))}
                    placeholder="Presupuesto"
                    className={`w-28 ${inputCls} border rounded-xl p-2.5 outline-none text-sm`}
                  />
                  <button type="button" onClick={() => setTripCatsList(tripCatsList.filter((_, xi) => xi !== i))} className="text-gray-400 hover:text-red-500 px-1">
                    <TrashIcon />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setTripCatsList([...tripCatsList, { id: `tc_${tripCatsList.length}_${Date.now()}`, name: '', budget: '' }])}
                className={`w-full ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-gray-100 text-gray-600'} py-2 rounded-xl text-xs font-bold`}
              >
                + Agregar categoría
              </button>
            </div>
          </div>
          {createError && <p className="text-xs text-red-500 font-medium bg-red-500/10 border border-red-500/20 rounded-xl p-2">{createError}</p>}
          <button type="submit" disabled={creating} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-sm shadow-md transition-colors disabled:opacity-50">
            {creating ? 'Creando...' : 'Crear viaje'}
          </button>
        </form>
      </div>
    );
  }

  // ---- Vista Editar Viaje ----
  if (mode === 'edit') {
    const trip = trips.find(t => t.id === editTripId);
    if (!trip) { setMode('list'); return null; }

    const handleSubmitEdit = async (e) => {
      e.preventDefault();
      if (!editName.trim()) return;
      setEditing(true); setEditError('');
      try {
        const cats = editCatsList.filter(c => c.name.trim()).map(c => ({ id: c.id, name: c.name.trim(), budget: parseAmt(c.budget) }));
        await onUpdateTrip(trip.id, { name: editName.trim(), startDate: editStart, endDate: editEnd, budget: parseAmt(editBudgetInput), categories: cats });
        setMode('detail'); setViewingTripId(trip.id);
      } catch (err) {
        setEditError('No se pudieron guardar los cambios. Probá de nuevo.');
      }
      setEditing(false);
    };

    return (
      <div className={`p-4 pb-32 min-h-full ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} animate-in fade-in slide-in-from-right-4 duration-300`}>
        <div className="flex items-center gap-3 mb-6 mt-2">
          <button onClick={() => { setMode('list'); setViewingTripId(null); }} className={`${isDarkMode ? 'bg-slate-800 text-slate-200' : 'bg-gray-100 text-gray-800'} p-2 rounded-full shadow-sm`}>
            <ArrowLeftIcon />
          </button>
          <h1 className={`text-xl font-bold truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Editar Viaje</h1>
        </div>
        <form onSubmit={handleSubmitEdit} className={`${cardCls} rounded-3xl p-5 shadow-sm border space-y-4`}>
          <div>
            <label className={`block text-[10px] font-bold uppercase mb-1 ${labelCls}`}>Nombre del viaje</label>
            <input type="text" value={editName} onChange={e => setEditName(e.target.value)} className={`w-full ${inputCls} border rounded-xl p-3 outline-none text-sm font-bold`} required />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={`block text-[10px] font-bold uppercase mb-1 ${labelCls}`}>Fecha inicio</label>
              <input type="date" value={editStart} onChange={e => setEditStart(e.target.value)} className={`w-full ${inputCls} border rounded-xl p-2.5 outline-none text-sm`} />
            </div>
            <div>
              <label className={`block text-[10px] font-bold uppercase mb-1 ${labelCls}`}>Fecha fin</label>
              <input type="date" value={editEnd} onChange={e => setEditEnd(e.target.value)} className={`w-full ${inputCls} border rounded-xl p-2.5 outline-none text-sm`} />
            </div>
          </div>
          <div>
            <label className={`block text-[10px] font-bold uppercase mb-1 ${labelCls}`}>Presupuesto objetivo</label>
            <input type="text" inputMode="decimal" value={editBudgetInput} onChange={e => setEditBudgetInput(formatAmtInput(e.target.value))} placeholder="Ej. 2.500.000" className={`w-full ${inputCls} border rounded-xl p-3 outline-none text-sm font-bold`} />
          </div>
          <div>
            <label className={`block text-[10px] font-bold uppercase mb-2 ${labelCls}`}>Categorías del viaje (con presupuesto opcional)</label>
            <div className="space-y-2">
              {editCatsList.map((c, i) => (
                <div key={c.id} className="flex gap-2">
                  <input
                    type="text"
                    value={c.name}
                    onChange={e => setEditCatsList(editCatsList.map((x, xi) => xi === i ? { ...x, name: e.target.value } : x))}
                    placeholder="Categoría"
                    className={`flex-1 ${inputCls} border rounded-xl p-2.5 outline-none text-sm`}
                  />
                  <input
                    type="text"
                    inputMode="decimal"
                    value={c.budget}
                    onChange={e => setEditCatsList(editCatsList.map((x, xi) => xi === i ? { ...x, budget: formatAmtInput(e.target.value) } : x))}
                    placeholder="Presupuesto"
                    className={`w-28 ${inputCls} border rounded-xl p-2.5 outline-none text-sm`}
                  />
                  <button type="button" onClick={() => setEditCatsList(editCatsList.filter((_, xi) => xi !== i))} className="text-gray-400 hover:text-red-500 px-1">
                    <TrashIcon />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => setEditCatsList([...editCatsList, { id: `tc_${editCatsList.length}_${Date.now()}`, name: '', budget: '' }])}
                className={`w-full ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-gray-100 text-gray-600'} py-2 rounded-xl text-xs font-bold`}
              >
                + Agregar categoría
              </button>
            </div>
          </div>
          {editError && <p className="text-xs text-red-500 font-medium bg-red-500/10 border border-red-500/20 rounded-xl p-2">{editError}</p>}
          <button type="submit" disabled={editing} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl text-sm shadow-md transition-colors disabled:opacity-50">
            {editing ? 'Guardando...' : 'Guardar cambios'}
          </button>
        </form>
      </div>
    );
  }

  // ---- Vista Lista de Viajes ----
  return (
    <div className={`p-4 pb-32 min-h-full ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} animate-in fade-in slide-in-from-right-4 duration-300`}>
      <div className="flex justify-between items-center mb-2 mt-2">
        <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>✈️ Modo Viaje</h1>
        <button onClick={() => setMode('create')} className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-2 rounded-xl text-xs shadow-md transition-colors">
          + Crear Viaje
        </button>
      </div>
      <p className={`text-xs mb-5 ${labelCls}`}>Fondo, presupuesto e historial exclusivos por viaje. Invitá a otras cuentas para cargar gastos juntos.</p>

      <div className="space-y-3 mb-6">
        {!tripsCheckDone ? (
          <div className={`text-center ${labelCls} ${cardCls} text-sm p-6 rounded-2xl border`}>Cargando viajes...</div>
        ) : trips.length === 0 ? (
          <div className={`text-center ${labelCls} ${cardCls} text-sm p-8 rounded-3xl border`}>Todavía no creaste ni te uniste a ningún viaje.</div>
        ) : (
          trips.map(t => {
            const txs = t.transactions || [];
            const spent = txs.filter(tx => tx.type === 'gasto').reduce((s, tx) => s + parseFloat(tx.amount || 0), 0);
            const aportado = txs.filter(tx => tx.type === 'aporte').reduce((s, tx) => s + parseFloat(tx.amount || 0), 0);
            const disponible = aportado - spent;
            const budget = parseFloat(t.budget || 0);
            const pct = budget > 0 ? Math.min((spent / budget) * 100, 100) : 0;
            const isActive = activeTripId === t.id;
            const isOwnerOfThis = t.ownerUid === authUser.uid;
            return (
              <div key={t.id} className={`relative ${isDarkMode ? 'bg-slate-900 border-amber-600/30' : 'bg-white border-amber-200'} rounded-3xl p-5 shadow-sm border space-y-2 transition-all ${isActive ? 'ring-2 ring-amber-500' : ''}`}>
                <div className="flex justify-between items-start">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-base font-bold truncate ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{t.name}</h3>
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full shrink-0 ${isActive ? 'bg-green-500/15 text-green-500' : (isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-gray-100 text-gray-500')}`}>
                        {isActive ? 'Activo' : 'Inactivo'}
                      </span>
                    </div>
                    {(t.startDate || t.endDate) && <p className={`text-xs mt-0.5 ${labelCls}`}>📅 {t.startDate || '?'} al {t.endDate || '?'}</p>}
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full shrink-0 ${isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-gray-100 text-gray-600'}`}>
                    {(t.members || []).length} {(t.members || []).length === 1 ? 'persona' : 'personas'}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 py-1">
                  <div>
                    <p className={`text-[10px] uppercase font-bold ${labelCls}`}>💰 Balance disponible</p>
                    <p className={`text-sm font-bold ${disponible < 0 ? 'text-red-500' : (isDarkMode ? 'text-white' : 'text-gray-900')}`}>{formatMoney(disponible)}</p>
                  </div>
                  <div>
                    <p className={`text-[10px] uppercase font-bold ${labelCls}`}>🎯 Presupuesto objetivo</p>
                    <p className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{formatMoney(budget)}</p>
                  </div>
                </div>
                {budget > 0 && (
                  <div className={`w-full ${isDarkMode ? 'bg-slate-800' : 'bg-gray-100'} h-2 rounded-full overflow-hidden`}>
                    <div className={`h-full rounded-full ${pct >= 90 ? 'bg-red-500' : 'bg-amber-500'}`} style={{ width: `${pct}%` }}></div>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => onToggleActiveTrip(t.id)}
                    className={`text-[11px] font-bold px-3 py-1.5 rounded-full transition-colors ${isActive ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-green-500/10 text-green-500 border border-green-500/20'}`}
                  >
                    {isActive ? 'Desactivar' : 'Activar'}
                  </button>
                  <button
                    type="button"
                    onClick={() => { setViewingTripId(t.id); setMode('detail'); }}
                    className={`text-[11px] font-bold px-3 py-1.5 rounded-full ${isDarkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-100'}`}
                  >
                    Ver
                  </button>
                  {isOwnerOfThis && (
                    <button
                      type="button"
                      onClick={() => startEditingTrip(t)}
                      className={`p-1.5 rounded-full ${isDarkMode ? 'bg-slate-800 text-slate-400 hover:text-blue-400' : 'bg-gray-100 text-gray-500 hover:text-blue-600'} transition-colors`}
                      title="Editar viaje"
                    >
                      <EditIcon />
                    </button>
                  )}
                  {isOwnerOfThis && (
                    <button
                      type="button"
                      onClick={() => {
                        if (window.confirm(`¿Borrar el viaje "${t.name}" para todos los participantes? Esta acción no se puede deshacer.`)) {
                          onDeleteTrip(t.id);
                        }
                      }}
                      className={`p-1.5 rounded-full ${isDarkMode ? 'bg-slate-800 text-slate-400 hover:text-red-400' : 'bg-gray-100 text-gray-400 hover:text-red-500'} transition-colors`}
                      title="Borrar viaje"
                    >
                      <TrashIcon />
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className={`${cardCls} rounded-2xl p-4 shadow-sm border`}>
        <p className={`text-xs font-bold uppercase tracking-wider mb-2 ${labelCls}`}>¿Te invitaron a un viaje?</p>
        <form onSubmit={async (e) => {
          e.preventDefault();
          if (!joinCode.trim()) return;
          setJoining(true); setJoinError('');
          try {
            const code = await onJoinTrip(joinCode);
            setJoinCode('');
            setViewingTripId(code);
            setMode('detail');
          } catch (err) {
            setJoinError('Ese código no es válido o el viaje no existe.');
          }
          setJoining(false);
        }} className="flex gap-2">
          <input
            type="text"
            placeholder="Código de invitación"
            value={joinCode}
            onChange={e => setJoinCode(e.target.value)}
            className={`flex-1 ${inputCls} border rounded-xl p-2.5 text-xs outline-none font-mono uppercase`}
          />
          <button type="submit" disabled={joining || !joinCode.trim()} className={`${isDarkMode ? 'bg-slate-800 text-slate-200' : 'bg-gray-100 text-gray-800'} px-4 py-2.5 rounded-xl text-xs font-bold disabled:opacity-50`}>
            Unirme
          </button>
        </form>
        {joinError && <p className="text-xs text-red-500 font-medium mt-2">{joinError}</p>}
      </div>
    </div>
  );
};

function ExpenseTrackerApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [subTab, setSubTab] = useState('menu');
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

  // --- Modo Viaje (fondos compartidos por viaje, invitando a otras cuentas) ---
  const [tripIds, setTripIds] = useState([]); // viajes de los que soy miembro (propios o a los que me uní)
  const [tripsCheckDone, setTripsCheckDone] = useState(false);
  const [trips, setTrips] = useState([]); // documentos completos de cada viaje (metadata + transacciones del viaje)
  const tripUnsubscribersRef = useRef({});

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
        { id: 1, name: 'Efectivo', type: 'efectivo', color: 'from-green-400 to-emerald-600', initialBalance: 0 },
        { id: 2, name: 'Cuenta Sueldo', type: 'cuenta', color: 'from-blue-400 to-blue-600', initialBalance: 0 }
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

  // Detectar en qué viajes soy miembro (para suscribirme a cada uno)
  useEffect(() => {
    if (!authUser || typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) {
      setTripIds([]);
      setTripsCheckDone(true);
      return;
    }
    const db = firebase.firestore();
    const unsubscribe = db.collection('users').doc(authUser.uid).onSnapshot((snap) => {
      const data = snap.exists ? (snap.data() || {}) : {};
      setTripIds(data.tripIds || []);
      setTripsCheckDone(true);
    }, () => setTripsCheckDone(true));
    return () => unsubscribe();
  }, [authUser]);

  // Suscribirse en tiempo real a cada viaje del que soy miembro (se pueden tener varios a la vez)
  useEffect(() => {
    if (!authUser || typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length || !tripsCheckDone) return;
    const db = firebase.firestore();
    const current = tripUnsubscribersRef.current;

    // Dar de baja los viajes de los que ya no soy miembro
    Object.keys(current).forEach(id => {
      if (!tripIds.includes(id)) {
        current[id]();
        delete current[id];
        setTrips(prev => prev.filter(t => t.id !== id));
      }
    });

    // Suscribirse a los viajes nuevos
    tripIds.forEach(id => {
      if (current[id]) return;
      current[id] = db.collection('trips').doc(id).onSnapshot((snap) => {
        if (!snap.exists) {
          setTrips(prev => prev.filter(t => t.id !== id));
          return;
        }
        const data = snap.data() || {};
        setTrips(prev => {
          const withoutThis = prev.filter(t => t.id !== id);
          return [...withoutThis, { id, ...data }];
        });
      });
    });
  }, [authUser, tripIds, tripsCheckDone]);

  useEffect(() => {
    return () => {
      Object.values(tripUnsubscribersRef.current).forEach(unsub => unsub());
    };
  }, []);

  // Al iniciar sesión: escuchar cambios en la nube en tiempo real (Firestore) para mis datos personales
  useEffect(() => {
    if (!authUser || typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) return;
    const db = firebase.firestore();
    const docRef = db.collection('users').doc(authUser.uid);
    hasLoadedCloudOnce.current = false;
    setSyncStatus('syncing');

    const unsubscribe = docRef.onSnapshot((snap) => {
      if (snap.exists) {
        const data = snap.data() || {};
        isRemoteUpdate.current = true;
        if (data.transactions) setTransactions(data.transactions);

        // --- Migración al modelo unificado de cuentas (Efectivo / Cuenta / Crédito / Inversión) ---
        const normalizeType = (t) => {
          if (t === 'cash') return 'efectivo';
          if (t === 'debit' || t === 'wallet') return 'cuenta';
          if (t === 'credit') return 'credito';
          if (['efectivo', 'cuenta', 'credito', 'inversion'].includes(t)) return t;
          return 'cuenta';
        };
        let mergedMethods = (data.paymentMethods || []).map(m => ({ ...m, type: normalizeType(m.type) }));
        if (data.bankAccounts && data.bankAccounts.length > 0) {
          const existingIds = new Set(mergedMethods.map(m => m.id));
          const migratedBanks = data.bankAccounts.filter(b => !existingIds.has(b.id)).map(b => ({
            id: b.id,
            name: `${b.bankName || 'Cuenta'}${b.accountType ? ' - ' + b.accountType : ''}`,
            type: 'cuenta',
            initialBalance: parseFloat(b.initialBalance !== undefined ? b.initialBalance : b.balance) || 0,
            color: 'from-blue-400 to-blue-600'
          }));
          mergedMethods = [...mergedMethods, ...migratedBanks];
          setBankAccounts([]);
        } else if (data.bankAccounts) {
          setBankAccounts(data.bankAccounts);
        }
        if (data.paymentMethods || data.bankAccounts) setPaymentMethods(mergedMethods);
        // --- Fin migración ---

        if (data.settings) setSettings(data.settings);
        if (data.categories) setCategories(data.categories);
        if (data.typesList) setTypesList(data.typesList);
        if (data.commitments) setCommitments(data.commitments);
        if (data.installmentTracks) setInstallmentTracks(data.installmentTracks);
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

  // Saldo (o deuda, si es tarjeta de crédito) de una cuenta unificada (Tarjetas = Efectivo/Cuenta/Crédito/Inversión)
  const getAccountBalance = (accountId) => {
    const acc = paymentMethods.find(m => m.id === accountId);
    if (!acc) return 0;
    if (acc.type === 'credito') {
      let deuda = 0;
      transactions.forEach(t => {
        if (t.methodId === accountId) {
          if (t.type === 'gasto') deuda += parseFloat(t.amount || 0);
          else if (t.type === 'ingreso') deuda -= parseFloat(t.amount || 0);
          else if (t.type === 'transferencia') deuda += parseFloat(t.amount || 0); // adelanto en efectivo con la tarjeta
        } else if (t.type === 'transferencia' && t.destMethodId === accountId) {
          deuda -= parseFloat(t.amount || 0); // pago de tarjeta desde otra cuenta
        }
      });
      return deuda;
    }
    let bal = parseFloat(acc.initialBalance || 0);
    transactions.forEach(t => {
      if (t.type === 'ingreso' && (t.methodId === accountId || (!t.methodId && t.bankId === accountId))) {
        bal += parseFloat(t.amount || 0);
      } else if (t.type === 'gasto' && t.methodId === accountId) {
        bal -= parseFloat(t.amount || 0);
      } else if (t.type === 'transferencia') {
        if (t.methodId === accountId) bal -= parseFloat(t.amount || 0);
        if (t.destMethodId === accountId) bal += parseFloat(t.amount || 0);
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
      'firebase-no-config': 'La sincronización todavía no está configurada en esta app (falta el archivo firebase-config.js).',
      'invalid-code': 'Ese código no es válido o el viaje no existe. Revisalo e intentá de nuevo.'
    };
    return map[code] || 'Ocurrió un error. Intentá de nuevo.';
  };

  // --- Modo Viaje (fondo + gastos compartidos por viaje, con invitación a otras cuentas) ---
  const handleCreateTrip = async ({ name, startDate, endDate, budget, categories: tripCategories }) => {
    if (!authUser || typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) throw { code: 'firebase-no-config' };
    const db = firebase.firestore();
    const code = `${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(-2)}`.toUpperCase();
    await db.collection('trips').doc(code).set({
      name: (name || 'Mi Viaje').trim(),
      startDate: startDate || null,
      endDate: endDate || null,
      budget: parseFloat(budget) || 0,
      categories: tripCategories && tripCategories.length > 0 ? tripCategories : [
        { id: 'alojamiento', name: 'Alojamiento' },
        { id: 'comida', name: 'Comida' },
        { id: 'transporte', name: 'Transporte' },
        { id: 'excursiones', name: 'Excursiones' },
        { id: 'otros', name: 'Otros' }
      ],
      ownerUid: authUser.uid,
      members: [authUser.uid],
      memberEmails: { [authUser.uid]: authUser.email || '' },
      transactions: [],
      createdAt: Date.now(),
      updatedAt: Date.now()
    });
    await db.collection('users').doc(authUser.uid).set({
      tripIds: firebase.firestore.FieldValue.arrayUnion(code)
    }, { merge: true });
    return code;
  };

  const handleJoinTrip = async (codeInput) => {
    if (!authUser || typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) throw { code: 'firebase-no-config' };
    const db = firebase.firestore();
    const code = (codeInput || '').trim().toUpperCase();
    if (!code) throw { code: 'invalid-code' };
    const tripRef = db.collection('trips').doc(code);
    // No hacemos un get() previo: las reglas de Firestore solo dejan LEER el viaje a quien
    // ya es miembro, así que alguien uniéndose por primera vez no tiene permiso para leerlo
    // todavía (eso rompía el "unirme" con un falso "código inválido"). Vamos directo al
    // update, que sí está permitido para que un no-miembro se agregue a sí mismo.
    try {
      await tripRef.update({
        members: firebase.firestore.FieldValue.arrayUnion(authUser.uid),
        [`memberEmails.${authUser.uid}`]: authUser.email || '',
        updatedAt: Date.now()
      });
    } catch (e) {
      throw { code: 'invalid-code' };
    }
    await db.collection('users').doc(authUser.uid).set({
      tripIds: firebase.firestore.FieldValue.arrayUnion(code)
    }, { merge: true });
    return code;
  };

  const handleLeaveTrip = async (tripId) => {
    if (!authUser || typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length || !tripId) return;
    const db = firebase.firestore();
    await db.collection('users').doc(authUser.uid).set({
      tripIds: firebase.firestore.FieldValue.arrayRemove(tripId)
    }, { merge: true });
    try {
      await db.collection('trips').doc(tripId).update({
        members: firebase.firestore.FieldValue.arrayRemove(authUser.uid),
        updatedAt: Date.now()
      });
    } catch (e) { /* si falla no pasa nada grave */ }
  };

  const handleDeleteTrip = async (tripId) => {
    if (!authUser || typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length || !tripId) return;
    const db = firebase.firestore();
    const trip = trips.find(t => t.id === tripId);
    // Sacamos del viaje a todos los miembros (les borramos el puntero) y borramos el documento del viaje
    const members = (trip && trip.members) || [authUser.uid];
    await Promise.all(members.map(uid =>
      db.collection('users').doc(uid).set({
        tripIds: firebase.firestore.FieldValue.arrayRemove(tripId)
      }, { merge: true }).catch(() => {})
    ));
    await db.collection('trips').doc(tripId).delete();
  };

  const handleAddTripTransaction = async (tripId, tx) => {
    if (!authUser || typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length || !tripId) throw { code: 'firebase-no-config' };
    const db = firebase.firestore();
    const newTx = {
      id: `triptx_${Date.now()}`,
      type: tx.type,
      amount: parseFloat(tx.amount) || 0,
      description: tx.description || '',
      category: tx.category || 'otros',
      date: tx.date || new Date().toISOString(),
      createdBy: authUser.uid,
      createdByEmail: authUser.email || ''
    };
    await db.collection('trips').doc(tripId).update({
      transactions: firebase.firestore.FieldValue.arrayUnion(newTx),
      updatedAt: Date.now()
    });
  };

  const handleDeleteTripTransaction = async (tripId, txToDelete) => {
    if (!authUser || typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length || !tripId) return;
    const db = firebase.firestore();
    const trip = trips.find(t => t.id === tripId);
    if (!trip) return;
    const remaining = (trip.transactions || []).filter(t => t.id !== txToDelete.id);
    await db.collection('trips').doc(tripId).update({
      transactions: remaining,
      updatedAt: Date.now()
    });
  };

  const handleUpdateTrip = async (tripId, updates) => {
    if (!authUser || typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length || !tripId) return;
    const db = firebase.firestore();
    await db.collection('trips').doc(tripId).set({ ...updates, updatedAt: Date.now() }, { merge: true });
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

  const handleSmartScan = async (promptText, setDesc, setAmt, setCat, setFeedback, setMethod, setDateModeFn, currentType) => {
    const notify = setFeedback || (() => {});
    if (!promptText || isScanning) return;
    setIsScanning(true);
    notify({ type: 'info', text: 'Consultando a Gemini...' });
    try {
      const relevantCategories = categories.filter(c => c.type === (currentType === 'ahorro' ? 'gasto' : (currentType || 'gasto')));
      const categoriesForPrompt = relevantCategories.length > 0 ? relevantCategories : categories;
      const systemPrompt = `Eres una IA de finanzas. Del mensaje del usuario, extraé: una descripción corta, el monto numérico (sin símbolos de moneda ni separadores de miles, usando punto decimal si hace falta), la categoría más apropiada (elegida EXACTAMENTE de esta lista de IDs válidos, usando el nombre entre paréntesis solo como referencia para elegir bien, pero respondiendo siempre el ID: ${categoriesForPrompt.map(c => `${c.id} (${c.name})`).join(', ')}), el medio de pago si lo menciona (elegido EXACTAMENTE de esta lista de IDs válidos, o null si no se menciona ninguno: ${paymentMethods.map(m => `${m.id} (${m.name})`).join(', ')}), y cuándo ocurrió el gasto si lo menciona: "hoy" si dice hoy o no menciona nada, "ayer" si dice ayer, "hace2dias" si dice antes de ayer o hace dos días, o null si no queda claro. Respondé ÚNICAMENTE con un objeto JSON válido, sin texto adicional, sin explicaciones y sin bloques de código markdown, con exactamente esta forma: {"description": "...", "amount": 0, "category": "...", "method": "...", "when": "hoy"}`;
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
            // Solo se acepta una categoría que realmente pertenezca al tipo de movimiento actual (Gasto/Ingreso/Ahorro)
            const matchedCat = categoriesForPrompt.find(c => c.id === cat || c.name.toLowerCase() === String(cat).toLowerCase());
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

  const startVoiceDictation = (setSmartText, setDesc, setAmt, setCat, setFeedback, setMethod, setDateModeFn, currentType) => {
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
      handleSmartScan(speechResult, setDesc, setAmt, setCat, setFeedback, setMethod, setDateModeFn, currentType);
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
    const [newCardType, setNewCardType] = useState('credito');
    const [newCardBalance, setNewCardBalance] = useState('');
    
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
          const hasLimits = card.type === 'credito' ? (card.limit || card.closingDay || card.dueDay) : true;
          setIsEditingLimits(!hasLimits);
          setCardLimitInput(
            card.type === 'credito'
              ? (card.limit ? formatAmountInput(card.limit.toString()) : '')
              : (card.initialBalance ? formatAmountInput(card.initialBalance.toString()) : '')
          );
          
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
      credito: 'from-purple-500 to-indigo-600',
      cuenta: 'from-blue-400 to-blue-600',
      efectivo: 'from-green-400 to-emerald-600',
      inversion: 'from-amber-400 to-orange-600'
    };

    const typeLabels = {
      credito: 'Tarjeta de Crédito', cuenta: 'Cuenta Sueldo/Ahorro', efectivo: 'Efectivo', inversion: 'Ahorro / Inversión'
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
        color: typeColors[newCardType] || 'from-gray-500 to-gray-700',
        initialBalance: newCardType !== 'credito' ? (parseFormattedAmount(newCardBalance) || 0) : 0
      };
      setPaymentMethods([...paymentMethods, newCard]);
      setIsAdding(false);
      setNewCardName('');
      setNewCardBalance('');
    };

    const handleDeleteCard = (e, id) => {
      e.stopPropagation();
      setPaymentMethods(paymentMethods.filter(m => m.id !== id));
      if (selectedCardId === id) setSelectedCardId(null);
    };

    const handleSaveLimits = (e) => {
      e.preventDefault();
      const numVal = parseFormattedAmount(cardLimitInput);
      const card = paymentMethods.find(m => m.id === selectedCardId);
      setPaymentMethods(paymentMethods.map(m =>
        m.id === selectedCardId ? (
          card && card.type === 'credito' ? {
            ...m,
            limit: numVal,
            closingDay: cardClosingDay,
            dueDay: cardDueDay
          } : {
            ...m,
            initialBalance: numVal
          }
        ) : m
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
                      <h3 className={`font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} text-lg`}>{card.type === 'credito' ? 'Límites y Cierres' : 'Saldo de la Cuenta'}</h3>
                      <p className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mt-0.5`}>Estado del Mes Actual</p>
                    </div>
                    <button onClick={() => setIsEditingLimits(true)} className="text-blue-500 p-1.5 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-colors"><EditIcon /></button>
                  </div>

                  {card.type !== 'credito' && (
                    <div className={`mb-2 ${isDarkMode ? 'bg-slate-800/60 border-slate-800' : 'bg-gray-50 border-gray-100'} p-4 rounded-2xl border`}>
                      <p className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} uppercase tracking-wider mb-1`}>Saldo disponible</p>
                      <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{formatCurrency(getAccountBalance(card.id))}</p>
                    </div>
                  )}
                  
                  {card.type === 'credito' && card.limit > 0 && (
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

                  {card.type === 'credito' && (
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
                  )}
                </div>
              ) : (
                <form onSubmit={handleSaveLimits} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-3xl p-5 shadow-sm border space-y-4`}>
                  <h3 className={`text-sm font-bold ${isDarkMode ? 'text-white border-slate-800' : 'text-gray-800 border-gray-100'} border-b pb-2`}>Configurar Tarjeta</h3>
                  
                  <div>
                    <label className={`text-[10px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} font-bold block mb-1`}>{card.type === 'credito' ? 'Límite Total de Crédito' : 'Saldo Inicial'}</label>
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

                  {card.type === 'credito' && (
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
                  )}

                  <div className="flex gap-2 pt-2">
                    { (card.limit || card.closingDay || card.dueDay || card.initialBalance) && (
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
              className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100 text-gray-800'} rounded-xl p-3 mb-3 outline-none focus:border-blue-300 appearance-none transition-colors`}
            >
              <option value="credito">Tarjeta de Crédito</option>
              <option value="cuenta">Cuenta Sueldo/Ahorro (Banco o Billetera)</option>
              <option value="efectivo">Efectivo</option>
              <option value="inversion">Ahorro / Inversión</option>
            </select>
            {newCardType !== 'credito' && (
              <input 
                type="text" 
                inputMode="decimal"
                placeholder="Saldo inicial (ej. 50.000)" 
                value={newCardBalance}
                onChange={(e) => setNewCardBalance(formatAmountInput(e.target.value))}
                className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-100 text-gray-800'} rounded-xl p-3 mb-4 outline-none focus:border-blue-300 transition-colors`}
              />
            )}
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
                    <p className="text-[10px] text-white/70 uppercase tracking-widest mb-0.5">
                      {method.type === 'credito' ? 'Deuda acumulada' : 'Saldo disponible'}
                    </p>
                    <p className="text-2xl font-bold tracking-tight">
                      {formatCurrency(getAccountBalance(method.id))}
                    </p>
                    {method.type === 'credito' && method.limit > 0 && (
                      <p className="text-[10px] text-white/70 mt-0.5">de {formatCurrency(method.limit)} de límite</p>
                    )}
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

    const activeTrip = trips.find(t => t.id === settings.activeTripId) || null;
    const [quickTrip, setQuickTrip] = useState(null); // { type: 'gasto' | 'aporte' }
    const [quickAmount, setQuickAmount] = useState('');
    const [quickDesc, setQuickDesc] = useState('');
    const [quickCatId, setQuickCatId] = useState('');
    const [quickBusy, setQuickBusy] = useState(false);
    const parseQuickAmt = (str) => {
      if (!str) return 0;
      return parseFloat(String(str).replace(/\./g, '').replace(',', '.')) || 0;
    };
    const formatQuickAmt = (val) => {
      if (!val) return '';
      let clean = val.replace(/[^0-9,]/g, '');
      const parts = clean.split(',');
      if (parts.length > 2) return val;
      let integerPart = parts[0];
      let decimalPart = parts[1] !== undefined ? ',' + parts[1].substring(0, 2) : '';
      if (integerPart) integerPart = parseInt(integerPart, 10).toLocaleString('es-AR');
      return integerPart + decimalPart;
    };
    const openQuickTrip = (type) => {
      setQuickTrip({ type });
      setQuickAmount(''); setQuickDesc('');
      setQuickCatId((activeTrip && activeTrip.categories && activeTrip.categories[0]?.id) || '');
    };
    const submitQuickTrip = async (e) => {
      e.preventDefault();
      const amt = parseQuickAmt(quickAmount);
      if (amt <= 0 || !activeTrip) return;
      setQuickBusy(true);
      try {
        await handleAddTripTransaction(activeTrip.id, {
          type: quickTrip.type,
          amount: amt,
          description: quickDesc.trim() || (quickTrip.type === 'aporte' ? 'Aporte al fondo' : ((activeTrip.categories || []).find(c => c.id === quickCatId)?.name || 'Gasto')),
          category: quickCatId,
          date: new Date().toISOString()
        });
        setQuickTrip(null);
      } catch (err) { /* noop */ }
      setQuickBusy(false);
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

        {!activeTrip && (
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
        )}

        {activeTrip && (
          <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-5 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 min-w-0">
                <PlaneIcon />
                <span className="text-sm font-black truncate">{activeTrip.name}</span>
              </div>
              <button onClick={() => { setActiveTab('trips'); }} className="text-[10px] font-bold bg-black/20 px-2.5 py-1 rounded-full shrink-0">Ver viaje</button>
            </div>
            {(() => {
              const txs = activeTrip.transactions || [];
              const spent = txs.filter(tx => tx.type === 'gasto').reduce((s, tx) => s + parseFloat(tx.amount || 0), 0);
              const aportado = txs.filter(tx => tx.type === 'aporte').reduce((s, tx) => s + parseFloat(tx.amount || 0), 0);
              const disponible = aportado - spent;
              const budget = parseFloat(activeTrip.budget || 0);
              const pct = budget > 0 ? Math.min((spent / budget) * 100, 100) : 0;
              return (
                <>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div>
                      <p className="text-orange-100 text-[11px]">💰 Disponible</p>
                      <p className="text-lg font-bold">{formatCurrency(disponible)}</p>
                    </div>
                    <div>
                      <p className="text-orange-100 text-[11px]">🎯 Presupuesto</p>
                      <p className="text-lg font-bold">{formatCurrency(budget)}</p>
                    </div>
                  </div>
                  {budget > 0 && (
                    <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden mt-3">
                      <div className={`h-full rounded-full ${pct >= 90 ? 'bg-red-400' : 'bg-white'}`} style={{ width: `${pct}%` }}></div>
                    </div>
                  )}
                </>
              );
            })()}
            <div className="flex gap-2 mt-4">
              <button onClick={() => openQuickTrip('gasto')} className="flex-1 bg-white/15 hover:bg-white/25 backdrop-blur-sm font-bold py-2 rounded-xl text-xs transition-colors">💸 Agregar Gasto</button>
              <button onClick={() => openQuickTrip('aporte')} className="flex-1 bg-white/15 hover:bg-white/25 backdrop-blur-sm font-bold py-2 rounded-xl text-xs transition-colors">💰 Agregar Aporte</button>
            </div>
          </div>
        )}

        <div>
          <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} mb-4`}>Mis Cuentas y Tarjetas</h3>
          <div className="flex overflow-x-auto gap-3 pb-2 -mx-4 px-4 snap-x snap-mandatory no-scrollbar">
            {paymentMethods.map(m => {
              const balanceStr = formatCurrency(getAccountBalance(m.id));
              let textSizeClass = "text-lg";
              if (balanceStr.length > 16) textSizeClass = "text-[11px]";
              else if (balanceStr.length > 14) textSizeClass = "text-xs";
              else if (balanceStr.length > 12) textSizeClass = "text-sm";
              else if (balanceStr.length > 10) textSizeClass = "text-base";
              const typeLabel = { credito: 'Tarjeta de Crédito', cuenta: 'Cuenta Sueldo/Ahorro', efectivo: 'Efectivo', inversion: 'Ahorro / Inversión' }[m.type] || 'Cuenta';

              return (
                <div key={m.id} onClick={() => setActiveTab('cards')} className={`min-w-[160px] max-w-[160px] bg-gradient-to-br ${m.color || 'from-gray-500 to-gray-700'} rounded-2xl p-4 shadow-sm flex-shrink-0 snap-start cursor-pointer`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-bold text-white truncate">{m.name}</span>
                  </div>
                  <p className="text-[10px] text-white/70 font-medium uppercase tracking-wider mb-0.5">{m.type === 'credito' ? 'Deuda' : typeLabel}</p>
                  <p className={`font-bold text-white ${textSizeClass} truncate transition-all duration-300`}>{balanceStr}</p>
                </div>
              );
            })}
            <div className={`min-w-[160px] max-w-[160px] ${isDarkMode ? 'bg-slate-900/40 border-slate-800 hover:bg-slate-900' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} rounded-2xl border-2 border-dashed flex flex-col items-center justify-center p-4 flex-shrink-0 cursor-pointer transition-colors snap-start`} onClick={() => setActiveTab('cards')}>
               <div className={`w-8 h-8 rounded-full ${isDarkMode ? 'bg-slate-800 text-slate-400' : 'bg-gray-200 text-gray-500'} flex items-center justify-center mb-2`}>
                  <PlusIcon active={false} />
               </div>
               <span className={`text-xs font-semibold ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Agregar cuenta</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              {activeTrip ? `✈️ Gastos del viaje: ${activeTrip.name}` : 'Presupuestos / Categorías'}
            </h3>
            {activeTrip && (
              <button onClick={() => setSettings(s => ({ ...s, activeTripId: null }))} className="text-xs font-bold text-blue-500 shrink-0">
                Ver mis categorías
              </button>
            )}
          </div>
          <div className="space-y-3">
            {activeTrip ? (
              (activeTrip.categories || []).map(cat => {
                const spent = (activeTrip.transactions || []).filter(tx => tx.type === 'gasto' && tx.category === cat.id).reduce((s, tx) => s + parseFloat(tx.amount || 0), 0);
                const limit = parseFloat(cat.budget || 0);
                const percent = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;

                if (limit === 0 && spent === 0) return null;

                return (
                  <div key={cat.id} className={`${isDarkMode ? 'bg-amber-500/10 border-amber-500/20' : 'bg-amber-50 border-amber-100'} p-3.5 rounded-2xl shadow-sm border`}>
                    <div className="flex justify-between items-center mb-2.5">
                      <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} capitalize`}>{cat.name}</span>
                      <span className={`text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                        {formatCurrency(spent)} {limit > 0 && <span className={`${isDarkMode ? 'text-slate-500' : 'text-gray-400'} font-normal`}>/ {formatCurrency(limit)}</span>}
                      </span>
                    </div>
                    {limit > 0 && (
                      <div className={`w-full ${isDarkMode ? 'bg-slate-800/60' : 'bg-gray-100'} h-2.5 rounded-full overflow-hidden`}>
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${percent >= 90 ? 'bg-red-500' : percent >= 75 ? 'bg-orange-400' : 'bg-amber-500'}`}
                          style={{
                            width: `${percent}%`,
                            boxShadow: isDarkMode ? `0 0 10px 1px ${percent >= 90 ? 'rgba(239,68,68,0.7)' : percent >= 75 ? 'rgba(251,146,60,0.7)' : 'rgba(245,158,11,0.7)'}` : 'none'
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              categories.filter(c => c.type === 'gasto').map(cat => {
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
              })
            )}
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
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${t.type === 'ingreso' ? 'bg-green-500/10 text-green-500' : t.type === 'ahorro' ? 'bg-emerald-500/10 text-emerald-500' : t.type === 'transferencia' ? 'bg-sky-500/10 text-sky-500' : 'bg-red-500/10 text-red-500'}`}>
                    {t.type === 'ingreso' ? <TrendingUpIcon /> : t.type === 'ahorro' ? <TargetIcon /> : t.type === 'transferencia' ? <span className="font-bold text-base">⇄</span> : <TrendingDownIcon />}
                  </div>
                  <div className="min-w-0">
                    <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'} truncate`}>{t.description}</p>
                    <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} capitalize truncate`}>
                      {t.type === 'transferencia'
                        ? `${paymentMethods.find(m => m.id === t.methodId)?.name || '?'} → ${paymentMethods.find(m => m.id === t.destMethodId)?.name || '?'}`
                        : <>{categories.find(c => c.id === t.category)?.name || t.category} {t.typeClassification ? `• ${typesList.find(ty => ty.id === t.typeClassification)?.name || 'Personalizado'}` : ''}</>
                      }
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className={`font-bold whitespace-nowrap ${t.type === 'ingreso' ? 'text-green-500' : t.type === 'ahorro' ? 'text-emerald-500' : t.type === 'transferencia' ? 'text-sky-500' : (isDarkMode ? 'text-white' : 'text-gray-800')}`}>
                    {t.type === 'ingreso' ? '+' : t.type === 'ahorro' ? '🎯 ' : t.type === 'transferencia' ? '⇄ ' : '-'}{formatCurrency(t.amount)}
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

        {quickTrip && activeTrip && (
          <div className="fixed inset-0 bg-black/60 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => setQuickTrip(null)}>
            <div
              onClick={(e) => e.stopPropagation()}
              className={`w-full sm:max-w-sm ${isDarkMode ? 'bg-slate-900' : 'bg-white'} rounded-t-3xl sm:rounded-3xl p-5 shadow-xl animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-200`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {quickTrip.type === 'aporte' ? '💰 Aporte al fondo' : '💸 Nuevo gasto'} · <span className="text-amber-500">{activeTrip.name}</span>
                </h3>
                <button onClick={() => setQuickTrip(null)} className="text-gray-400 hover:text-gray-600 text-sm font-bold px-2">✕</button>
              </div>
              <form onSubmit={submitQuickTrip} className="space-y-3">
                <input
                  type="text"
                  value={quickAmount}
                  onChange={e => setQuickAmount(formatQuickAmt(e.target.value))}
                  placeholder="Monto (ej. 15.000)"
                  inputMode="decimal"
                  autoFocus
                  className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 outline-none text-sm font-bold`}
                  required
                />
                <input
                  type="text"
                  value={quickDesc}
                  onChange={e => setQuickDesc(e.target.value)}
                  placeholder={quickTrip.type === 'aporte' ? 'Descripción (opcional)' : 'Descripción (ej. Cena, Hotel)'}
                  className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 outline-none text-sm`}
                />
                {quickTrip.type === 'gasto' && (activeTrip.categories || []).length > 0 && (
                  <select
                    value={quickCatId}
                    onChange={e => setQuickCatId(e.target.value)}
                    className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-gray-50 border-gray-200 text-gray-800'} border rounded-xl p-3 outline-none text-sm capitalize`}
                  >
                    {(activeTrip.categories || []).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                )}
                <button type="submit" disabled={quickBusy} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl text-sm shadow-md transition-colors disabled:opacity-50">
                  {quickBusy ? 'Guardando...' : 'Guardar'}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  };


  const HistoryAndHabitual = () => {
    const [filterPeriod, setFilterPeriod] = useState('todos');
    const [filterCategory, setFilterCategory] = useState('todos');
    const [filterType, setFilterType] = useState('todos');

    const [isAddingCatReg, setIsAddingCatReg] = useState(false);
    const [editingCatRegId, setEditingCatRegId] = useState(null);
    const [editCatRegName, setEditCatRegName] = useState('');
    const [editCatRegType, setEditCatRegType] = useState('gasto');
    const [editCatRegBudget, setEditCatRegBudget] = useState('');
    const [newCatRegName, setNewCatRegName] = useState('');
    const [newCatRegType, setNewCatRegType] = useState('gasto');
    const [newCatRegBudget, setNewCatRegBudget] = useState('');

    const handleAddCategoryReg = (e) => {
      e.preventDefault();
      if (!newCatRegName) return;
      setCategories([...categories, {
        id: `cat_${Date.now()}`,
        name: newCatRegName,
        type: newCatRegType,
        budget: parseFloat(newCatRegBudget) || 0
      }]);
      setNewCatRegName(''); setNewCatRegBudget(''); setIsAddingCatReg(false);
    };

    const startEditingCatReg = (category) => {
      setEditingCatRegId(category.id);
      setEditCatRegName(category.name);
      setEditCatRegType(category.type);
      setEditCatRegBudget(category.budget || '');
    };

    const handleSaveEditCatReg = (e, id) => {
      e.preventDefault();
      if (!editCatRegName) return;
      setCategories(categories.map(c => c.id === id ? { ...c, name: editCatRegName, type: editCatRegType, budget: parseFloat(editCatRegBudget) || 0 } : c));
      setEditingCatRegId(null);
    };

    const handleDeleteCategoryReg = (id) => {
      setCategories(categories.filter(c => c.id !== id));
    };

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

    if (subTab === 'menu') {
      const menuItems = [
        { id: 'historial', label: 'Historial General', icon: <ListIcon active={true} />, color: 'text-blue-500 bg-blue-500/10' },
        { id: 'habituales', label: 'Pagos Habituales', icon: <TrendingUpIcon />, color: 'text-green-500 bg-green-500/10' },
        { id: 'cuotas', label: 'Seguimiento Cuotas', icon: <TargetIcon />, color: 'text-purple-500 bg-purple-500/10' },
        { id: 'presupuestos', label: 'Presupuestos', icon: <ShieldIcon />, color: 'text-teal-500 bg-teal-500/10' },
        { id: 'categorias', label: 'Categorías', icon: <SettingsIcon active={true} />, color: 'text-blue-500 bg-blue-500/10' },
        { id: 'viajes', label: 'Modo Viaje', icon: <PlaneIcon />, color: 'text-orange-500 bg-orange-500/10' }
      ];
      return (
        <div className={`p-4 pb-32 min-h-full ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} animate-in fade-in slide-in-from-left-4 duration-300`}>
          <div className="flex justify-between items-center mb-4 mt-2">
            <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Registro</h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => setSubTab(item.id)}
                className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} border rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center gap-3 text-center hover:shadow-md active:scale-[0.97] transition-all`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.color}`}>
                  {item.icon}
                </div>
                <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className={`p-4 pb-32 min-h-full ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'} animate-in fade-in slide-in-from-right-4 duration-300`}>
        <div className="flex items-center gap-3 mb-6 mt-2">
          <button onClick={() => setSubTab('menu')} className={`${isDarkMode ? 'bg-slate-800 text-slate-200' : 'bg-gray-100 text-gray-800'} p-2 rounded-full shadow-sm`}>
            <ArrowLeftIcon />
          </button>
          <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {{ historial: 'Historial General', habituales: 'Pagos Habituales', cuotas: 'Seguimiento Cuotas', presupuestos: 'Presupuestos', categorias: 'Categorías', viajes: 'Modo Viaje' }[subTab]}
          </h1>
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
                  <option value="transferencia">Transferencias</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              {filteredTransactions.length === 0 ? (
                <div className={`text-center ${isDarkMode ? 'text-slate-400 bg-slate-900 border-slate-800' : 'text-gray-500 bg-white border-gray-100'} mt-10 text-sm p-8 rounded-3xl border`}>No hay movimientos con estos filtros.</div>
              ) : (
                filteredTransactions.map(t => {
                  const method = paymentMethods.find(m => m.id === t.methodId);
                  const destMethod = t.type === 'transferencia' ? paymentMethods.find(m => m.id === t.destMethodId) : null;
                  const category = categories.find(c => c.id === t.category);
                  return (
                    <div key={t.id} className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-2xl p-4 shadow-sm border flex justify-between items-center gap-2 group`}>
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${t.type === 'ingreso' ? 'bg-green-500/10 text-green-500' : t.type === 'ahorro' ? 'bg-emerald-500/10 text-emerald-500' : t.type === 'transferencia' ? 'bg-sky-500/10 text-sky-500' : 'bg-red-500/10 text-red-500'}`}>
                          {t.type === 'ingreso' ? <TrendingUpIcon /> : t.type === 'ahorro' ? <TargetIcon /> : t.type === 'transferencia' ? <span className="font-bold text-lg">⇄</span> : <TrendingDownIcon />}
                        </div>
                        <div className="min-w-0">
                          <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} text-base truncate`}>{t.description}</p>
                          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                            <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} whitespace-nowrap`}>
                              {new Date(t.date).toLocaleDateString('es-AR', { day: '2-digit', month: 'short' })}
                            </span>
                            {t.type !== 'transferencia' && (
                              <>
                                <span className={`w-1 h-1 rounded-full shrink-0 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-300'}`}></span>
                                <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} capitalize truncate`}>{category ? category.name : t.category}</span>
                              </>
                            )}
                            {t.typeClassification && t.type !== 'transferencia' && (
                              <>
                                <span className={`w-1 h-1 rounded-full shrink-0 ${isDarkMode ? 'bg-slate-700' : 'bg-gray-300'}`}></span>
                                <span className="text-xs text-purple-400 font-medium capitalize truncate">{typesList.find(ty => ty.id === t.typeClassification)?.name || 'Personalizado'}</span>
                              </>
                            )}
                          </div>
                          {t.type === 'transferencia' ? (
                            <div className="mt-1.5 flex items-center gap-1 flex-wrap">
                              <span className={`text-[10px] ${isDarkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-gray-100 text-gray-600 border-gray-200'} px-2 py-0.5 rounded-md font-semibold tracking-wide shadow-sm border`}>
                                {method?.name || '?'} → {destMethod?.name || '?'}
                              </span>
                            </div>
                          ) : method && (
                            <div className="mt-1.5 flex items-center gap-1 flex-wrap">
                              <span className={`text-[10px] ${isDarkMode ? 'bg-slate-800 text-slate-300 border-slate-700' : 'bg-gray-100 text-gray-600 border-gray-200'} px-2 py-0.5 rounded-md font-semibold tracking-wide shadow-sm border`}>
                                {method.name}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <div className="flex flex-col items-end">
                          <span className={`font-bold whitespace-nowrap ${t.type === 'ingreso' ? 'text-green-500' : t.type === 'ahorro' ? 'text-emerald-500' : t.type === 'transferencia' ? 'text-sky-500' : (isDarkMode ? 'text-white' : 'text-gray-900')}`}>
                            {t.type === 'ingreso' ? '+' : t.type === 'ahorro' ? '🎯 ' : t.type === 'transferencia' ? '⇄ ' : '-'}{formatCurrency(t.amount)}
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

        {subTab === 'presupuestos' && (
          <div className="space-y-3">
            <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} mb-1`}>Progreso del mes actual por categoría. Para cambiar un presupuesto, andá a la pestaña "Categorías".</p>
            {categories.filter(c => c.type === 'gasto' && (c.budget || 0) > 0).length === 0 ? (
              <div className={`text-center ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} ${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} text-sm p-8 rounded-3xl border`}>Todavía no le pusiste presupuesto a ninguna categoría.</div>
            ) : (
              categories.filter(c => c.type === 'gasto' && (c.budget || 0) > 0).map(cat => {
                const spent = totals.categoryBreakdown[cat.id] || 0;
                const limit = cat.budget || 0;
                const percent = limit > 0 ? Math.min((spent / limit) * 100, 100) : 0;
                return (
                  <div key={cat.id} className={`${isDarkMode ? 'bg-[#0b1120] border-slate-800/70' : 'bg-white border-gray-100'} p-3.5 rounded-2xl shadow-sm border`}>
                    <div className="flex justify-between items-center mb-2.5">
                      <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'} capitalize`}>{cat.name}</span>
                      <span className={`text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
                        {formatCurrency(spent)} <span className={`${isDarkMode ? 'text-slate-500' : 'text-gray-400'} font-normal`}>/ {formatCurrency(limit)}</span>
                      </span>
                    </div>
                    <div className={`w-full ${isDarkMode ? 'bg-slate-800/60' : 'bg-gray-100'} h-2.5 rounded-full overflow-hidden`}>
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${percent >= 90 ? 'bg-red-500' : percent >= 75 ? 'bg-orange-400' : 'bg-blue-500'}`}
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {subTab === 'categorias' && (
          <div className="space-y-4">
            <div className={`${isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} rounded-2xl p-4 shadow-sm border`}>
              <div className="flex justify-between items-center mb-3">
                <p className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Categorías y Presupuestos</p>
                <button onClick={() => setIsAddingCatReg(!isAddingCatReg)} className="text-blue-500 text-xs font-bold">
                  {isAddingCatReg ? 'Cancelar' : '+ Añadir'}
                </button>
              </div>
              {isAddingCatReg && (
                <form onSubmit={handleAddCategoryReg} className={`p-3 mb-3 rounded-xl border ${isDarkMode ? 'bg-slate-800/60 border-slate-800' : 'bg-gray-50 border-gray-100'} space-y-2`}>
                  <input type="text" placeholder="Nombre" value={newCatRegName} onChange={e => setNewCatRegName(e.target.value)} className={`p-2.5 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} text-sm w-full outline-none`} required />
                  <div className="flex gap-2">
                    <select value={newCatRegType} onChange={e => setNewCatRegType(e.target.value)} className={`flex-1 p-2.5 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} text-sm outline-none`}>
                      <option value="gasto">Gasto</option>
                      <option value="ingreso">Ingreso</option>
                    </select>
                    <input type="text" inputMode="decimal" placeholder="Presupuesto (opcional)" value={newCatRegBudget} onChange={e => setNewCatRegBudget(e.target.value)} className={`flex-1 p-2.5 rounded-xl border ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} text-sm outline-none`} />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs">Guardar categoría</button>
                </form>
              )}
              <div className="space-y-2">
                {categories.map(c => (
                  <div key={c.id} className={`p-3 rounded-xl border ${isDarkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-gray-50 border-gray-100'}`}>
                    {editingCatRegId === c.id ? (
                      <form onSubmit={(e) => handleSaveEditCatReg(e, c.id)} className="space-y-2">
                        <input type="text" value={editCatRegName} onChange={e => setEditCatRegName(e.target.value)} className={`p-2 rounded-lg border w-full text-sm ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} outline-none`} required />
                        <div className="flex gap-2">
                          <select value={editCatRegType} onChange={e => setEditCatRegType(e.target.value)} className={`flex-1 p-2 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} outline-none`}>
                            <option value="gasto">Gasto</option>
                            <option value="ingreso">Ingreso</option>
                          </select>
                          <input type="text" inputMode="decimal" placeholder="Presupuesto" value={editCatRegBudget} onChange={e => setEditCatRegBudget(e.target.value)} className={`flex-1 p-2 rounded-lg border text-sm ${isDarkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-gray-200 text-gray-800'} outline-none`} />
                        </div>
                        <div className="flex gap-2">
                          <button type="submit" className="flex-1 bg-blue-600 text-white font-bold py-1.5 rounded-lg text-xs">Guardar</button>
                          <button type="button" onClick={() => setEditingCatRegId(null)} className={`flex-1 ${isDarkMode ? 'bg-slate-700 text-slate-200' : 'bg-gray-200 text-gray-700'} font-bold py-1.5 rounded-lg text-xs`}>Cancelar</button>
                        </div>
                      </form>
                    ) : (
                      <div className="flex justify-between items-center">
                        <div className="min-w-0">
                          <p className={`text-sm font-bold truncate ${isDarkMode ? 'text-white' : 'text-gray-800'} capitalize`}>{c.name}</p>
                          <p className={`text-[11px] ${isDarkMode ? 'text-slate-400' : 'text-gray-500'} capitalize`}>{c.type} {c.budget > 0 ? `• Presupuesto: ${formatCurrency(c.budget)}` : ''}</p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <button onClick={() => startEditingCatReg(c)} className="text-blue-500 p-2 hover:bg-blue-500/10 rounded-lg"><EditIcon /></button>
                          <button onClick={() => handleDeleteCategoryReg(c.id)} className="text-gray-400 hover:text-red-500 p-2 hover:bg-red-500/10 rounded-lg"><TrashIcon /></button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {subTab === 'viajes' && (
          <div className="-mx-4 -mt-2">
            <TripsView
              isDarkMode={isDarkMode}
              settings={settings}
              authUser={authUser}
              trips={trips}
              tripsCheckDone={tripsCheckDone}
              setActiveTab={setActiveTab}
              onCreateTrip={handleCreateTrip}
              onJoinTrip={handleJoinTrip}
              onLeaveTrip={handleLeaveTrip}
              onDeleteTrip={handleDeleteTrip}
              onAddTripTransaction={handleAddTripTransaction}
              onDeleteTripTransaction={handleDeleteTripTransaction}
              onUpdateTrip={handleUpdateTrip}
              activeTripId={settings.activeTripId || null}
              onToggleActiveTrip={(tripId) => setSettings(s => ({ ...s, activeTripId: s.activeTripId === tripId ? null : tripId }))}
            />
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
        return method && (method.type === 'credito' || method.type === 'cuenta');
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
            <>
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
            </>
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
              authUser={authUser}
              trips={trips}
              onAddTripTransaction={handleAddTripTransaction}
              getAccountBalance={getAccountBalance}
            />
          )}
          {activeTab === 'history' && <HistoryAndHabitual />}
          {activeTab === 'trips' && (
            <TripsView
              isDarkMode={isDarkMode}
              settings={settings}
              authUser={authUser}
              trips={trips}
              tripsCheckDone={tripsCheckDone}
              setActiveTab={setActiveTab}
              onCreateTrip={handleCreateTrip}
              onJoinTrip={handleJoinTrip}
              onLeaveTrip={handleLeaveTrip}
              onDeleteTrip={handleDeleteTrip}
              onAddTripTransaction={handleAddTripTransaction}
              onDeleteTripTransaction={handleDeleteTripTransaction}
              onUpdateTrip={handleUpdateTrip}
              activeTripId={settings.activeTripId || null}
              onToggleActiveTrip={(tripId) => setSettings(s => ({ ...s, activeTripId: s.activeTripId === tripId ? null : tripId }))}
            />
          )}
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
              <span className={`text-[10px] font-medium ${activeTab === 'history' ? 'text-blue-500' : (isDarkMode ? 'text-slate-400' : 'text-gray-500')}`}>Registro</span>
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
