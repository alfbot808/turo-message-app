import { useState, useEffect } from 'react';
import { vehicles } from './data/messages';
import './index.css';

// Color map for Tailwind safe classes
const colorMap = {
  blue: { bg: 'bg-blue-500', hoverBg: 'hover:bg-blue-600', light: 'bg-blue-50', border: 'border-blue-500', ring: 'ring-blue-500' },
  green: { bg: 'bg-emerald-500', hoverBg: 'hover:bg-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-500', ring: 'ring-emerald-500' },
  teal: { bg: 'bg-teal-500', hoverBg: 'hover:bg-teal-600', light: 'bg-teal-50', border: 'border-teal-500', ring: 'ring-teal-500' },
  orange: { bg: 'bg-amber-500', hoverBg: 'hover:bg-amber-600', light: 'bg-amber-50', border: 'border-amber-500', ring: 'ring-amber-500' },
};

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0].id);
  const [selectedLocation, setSelectedLocation] = useState('airport');
  const [selectedStage, setSelectedStage] = useState('booking');
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  
  const [guestName, setGuestName] = useState(() => localStorage.getItem('guestName') || '');
  const [lockboxCode, setLockboxCode] = useState(() => localStorage.getItem('lockboxCode') || '');

  useEffect(() => { localStorage.setItem('guestName', guestName); }, [guestName]);
  useEffect(() => { localStorage.setItem('lockboxCode', lockboxCode); }, [lockboxCode]);
  useEffect(() => { localStorage.setItem('darkMode', darkMode); }, [darkMode]);

  const vehicle = vehicles.find((v) => v.id === selectedVehicle);
  const location = vehicle?.locations.find((l) => l.id === selectedLocation);
  const vc = colorMap[vehicle?.color] || colorMap.blue;

  const stages = [
    { id: 'booking', label: 'Booking', icon: '✅', desc: 'Send when booked' },
    { id: 'pickup', label: 'Pickup', icon: '🔑', desc: 'Day of pickup' },
    { id: 'checkout', label: 'Checkout', icon: '🏁', desc: 'Return day' },
    { id: 'posttrip', label: 'Post-Trip', icon: '⭐', desc: 'After return' },
  ];

  const stageMessages = location?.messages.filter((msg) => {
    if (selectedStage === 'booking') return msg.id.includes('-book');
    if (selectedStage === 'pickup') return msg.id.includes('-pickup');
    if (selectedStage === 'checkout') return msg.id.includes('-checkout');
    if (selectedStage === 'posttrip') return msg.id.includes('-posttrip');
    return false;
  }) || [];

  const isTesla = vehicle?.type === 'electric';
  const showLockboxInput = selectedStage === 'pickup' && !isTesla;

  const processMessage = (content) => {
    let processed = content;
    if (guestName) {
      processed = processed.replace(/\[Guest Name\]/g, guestName);
    }
    if (lockboxCode) {
      processed = processed.replace(/\[CODE\]/g, lockboxCode);
      processed = processed.replace(/→ Code is sent in the parking instructions!/g, `→ Code: ${lockboxCode}`);
      processed = processed.replace(/→ Code for the lock box is: 0219/g, `→ Code for the lock box is: ${lockboxCode}`);
    }
    return processed;
  };

  return (
    <div className={`flex flex-col h-screen overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`flex-shrink-0 px-4 py-2.5 flex items-center justify-between ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gradient-to-r from-sky-600 to-cyan-500'} border-b shadow-sm`}>
        <div className="flex items-center gap-2">
          <span className="text-xl">🌺</span>
          <div>
            <h1 className={`font-bold text-base leading-tight ${darkMode ? 'text-white' : 'text-white'}`}>Hostly</h1>
            <p className={`text-xs leading-tight ${darkMode ? 'text-gray-400' : 'text-sky-100'}`}>Tropical Transports</p>
          </div>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-white/20 text-white hover:bg-white/30'}`}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Vehicle Tabs */}
      <div className={`border-b px-3 py-3 overflow-x-auto flex-shrink-0 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="flex gap-3 min-w-max">
          {vehicles.map((v) => {
            const vcTab = colorMap[v.color] || colorMap.blue;
            const isActive = selectedVehicle === v.id;
            return (
              <button
                key={v.id}
                onClick={() => { setSelectedVehicle(v.id); setSelectedLocation('airport'); }}
                className={`flex flex-col items-center gap-1.5 px-3 py-2 rounded-2xl transition-all min-w-[110px] ${
                  isActive
                    ? `${darkMode ? 'bg-gray-700' : 'bg-white'} ring-2 ${vcTab.ring} shadow-xl scale-105`
                    : `${darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-white/70 hover:bg-white'} hover:shadow-lg`
                }`}
              >
                <div className="w-24 h-14 rounded-xl overflow-hidden bg-gray-100 shadow-inner">
                  <img
                    src={v.image}
                    alt={v.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <div className={`font-bold text-xs ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{v.label}</div>
                  <div className={`text-[10px] font-mono ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{v.plate}</div>
                </div>
                {isActive && (
                  <div className={`w-6 h-1 rounded-full ${vcTab.bg}`} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Location Sub-tabs */}
      {vehicle && (
        <div className={`border-b px-3 py-2 flex-shrink-0 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
          <div className="flex gap-2">
            {vehicle.locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                  selectedLocation === loc.id
                    ? `${vc.bg} text-white shadow-md`
                    : `${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`
                }`}
              >
                <span className="text-lg">{loc.icon}</span>
                <span>{loc.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Trip Stage Tabs */}
      <div className={`border-b px-3 py-2 flex-shrink-0 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="grid grid-cols-4 gap-1.5">
          {stages.map((stage) => {
            const isActive = selectedStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStage(stage.id)}
                className={`flex flex-col items-center gap-0.5 px-1 py-2 rounded-xl transition-all ${
                  isActive
                    ? `${vc.light} ${vc.border} border-2 shadow-sm`
                    : `${darkMode ? 'bg-gray-700/50 text-gray-400 hover:bg-gray-700' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'} border-2 border-transparent`
                }`}
              >
                <span className="text-xl">{stage.icon}</span>
                <span className={`text-[10px] font-bold ${isActive ? vc.bg.replace('bg-', 'text-').replace('500', '700') : ''}`}>{stage.label}</span>
                <span className={`text-[8px] ${darkMode ? 'text-gray-500' : 'text-gray-400'} hidden sm:block`}>{stage.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Input Fields */}
      <div className={`border-b px-4 py-2.5 flex-shrink-0 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
        <div className="flex gap-3 max-w-lg mx-auto">
          <div className="flex-1">
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="👤 Guest name..."
              className={`w-full px-3 py-2 border-2 rounded-xl focus:outline-none text-sm transition-all ${
                darkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                  : 'bg-gray-50 border-gray-200 focus:border-blue-400'
              }`}
            />
          </div>
          {showLockboxInput && (
            <div className="w-32">
              <input
                type="text"
                value={lockboxCode}
                onChange={(e) => setLockboxCode(e.target.value)}
                placeholder="🔐 Lockbox"
                className={`w-full px-3 py-2 border-2 rounded-xl focus:outline-none text-sm font-mono transition-all ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500'
                    : 'bg-gray-50 border-gray-200 focus:border-emerald-400'
                }`}
              />
            </div>
          )}
        </div>
      </div>

      {/* Current Selection Indicator */}
      {vehicle && location && (
        <div className={`flex-shrink-0 px-4 py-2 ${darkMode ? 'bg-gray-800/50' : vc.light}`}>
          <div className="flex items-center gap-2 text-xs max-w-lg mx-auto">
            <span className={`font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{vehicle.colorName} {vehicle.label}</span>
            <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>•</span>
            <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{location.label}</span>
            <span className={darkMode ? 'text-gray-600' : 'text-gray-400'}>•</span>
            <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{stages.find(s => s.id === selectedStage)?.label}</span>
            {isTesla && <span className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">⚡ Remote Unlock</span>}
          </div>
        </div>
      )}

      {/* Messages List */}
      <main className={`flex-1 overflow-y-auto p-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-lg mx-auto space-y-3">
          {stageMessages.length > 0 ? (
            stageMessages.map((msg) => (
              <MessageCard
                key={msg.id}
                message={msg}
                color={vehicle.color}
                guestName={guestName}
                lockboxCode={lockboxCode}
                processMessage={processMessage}
                darkMode={darkMode}
                vc={vc}
              />
            ))
          ) : (
            <div className={`text-center py-12 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <div className="text-6xl mb-4">📝</div>
              <p className="text-lg font-semibold">No messages for this stage</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// Message Card Component
function MessageCard({ message, color, guestName, lockboxCode, processMessage, darkMode, vc }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const processedContent = processMessage(message.content);
  const previewLength = 120;
  const isLong = processedContent.length > previewLength;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(processedContent);
    } catch {
      const el = document.createElement('textarea');
      el.value = processedContent;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-2xl overflow-hidden shadow-md border-l-4 ${vc.border} ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'}`}>
      {/* Card Header */}
      <div className={`px-4 py-3 flex items-center justify-between ${darkMode ? 'bg-gray-750' : 'bg-gray-50'}`}>
        <div className="flex items-center gap-2 min-w-0">
          <div className={`w-1.5 h-1.5 rounded-full ${vc.bg} flex-shrink-0`} />
          <h3 className={`font-bold text-sm truncate ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{message.title}</h3>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setExpanded(!expanded)}
            className={`p-1.5 rounded-lg transition-all ${darkMode ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-600' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-200'}`}
          >
            <svg className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button
            onClick={copy}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-xs transition-all active:scale-95 ${
              copied
                ? 'bg-emerald-500 text-white shadow-lg'
                : `${vc.bg} text-white hover:shadow-lg ${vc.hoverBg}`
            }`}
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Done!
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Card Content */}
      {(expanded || !isLong) ? (
        <div className="p-4">
          <pre className={`whitespace-pre-wrap text-sm font-sans leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {processedContent}
          </pre>
        </div>
      ) : (
        <div className="p-4">
          <pre className={`whitespace-pre-wrap text-sm font-sans leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {processedContent.substring(0, previewLength)}...
          </pre>
          <button
            onClick={() => setExpanded(true)}
            className={`mt-2 text-xs font-semibold ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
          >
            Show more ↓
          </button>
        </div>
      )}
    </div>
  );
}
