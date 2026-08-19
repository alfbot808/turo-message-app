import { useState, useEffect } from 'react';
import { vehicles } from './data/messages';
import './index.css';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0].id);
  const [selectedLocation, setSelectedLocation] = useState('airport');
  const [selectedStage, setSelectedStage] = useState('booking');
  
  // User inputs (persist in localStorage)
  const [guestName, setGuestName] = useState(() => localStorage.getItem('guestName') || '');
  const [lockboxCode, setLockboxCode] = useState(() => localStorage.getItem('lockboxCode') || '');

  // Save to localStorage when inputs change
  useEffect(() => {
    localStorage.setItem('guestName', guestName);
  }, [guestName]);

  useEffect(() => {
    localStorage.setItem('lockboxCode', lockboxCode);
  }, [lockboxCode]);

  const vehicle = vehicles.find((v) => v.id === selectedVehicle);
  const location = vehicle?.locations.find((l) => l.id === selectedLocation);

  const stages = [
    { id: 'booking', label: 'Booking', icon: '✅' },
    { id: 'pickup', label: 'Pickup', icon: '🔑' },
    { id: 'checkout', label: 'Checkout', icon: '🏁' },
    { id: 'posttrip', label: 'Post-Trip', icon: '⭐' },
  ];

  // Get messages for current stage
  const stageMessages = location?.messages.filter((msg) => {
    if (selectedStage === 'booking') return msg.id.includes('-book');
    if (selectedStage === 'pickup') return msg.id.includes('-pickup');
    if (selectedStage === 'checkout') return msg.id.includes('-checkout');
    if (selectedStage === 'posttrip') return msg.id.includes('-posttrip');
    return false;
  }) || [];

  // Replace placeholders in message
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
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      {/* Vehicle Tabs (Top - Scrollable) */}
      <div className="bg-white border-b border-gray-200 px-3 py-2 overflow-x-auto flex-shrink-0">
        <div className="flex gap-2 min-w-max">
          {vehicles.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setSelectedVehicle(v.id);
                setSelectedLocation('airport');
              }}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold text-sm transition-all shadow-sm ${
                selectedVehicle === v.id
                  ? `bg-${v.color}-500 text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="text-2xl">{v.icon}</span>
              <div className="text-left">
                <div className="font-bold">{v.label}</div>
                <div className="text-xs opacity-80">{v.plate}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Location Sub-tabs */}
      {vehicle && (
        <div className="bg-white border-b border-gray-200 px-3 py-2 flex-shrink-0">
          <div className="flex gap-2">
            {vehicle.locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  selectedLocation === loc.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{loc.icon}</span>
                <span className="hidden sm:inline">{loc.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Trip Stage Tabs */}
      <div className="bg-white border-b border-gray-200 px-3 py-2 flex-shrink-0">
        <div className="flex gap-1">
          {stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage.id)}
              className={`flex-1 flex flex-col items-center gap-1 px-2 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedStage === stage.id
                  ? 'bg-purple-100 text-purple-700 border-2 border-purple-300'
                  : 'bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100'
              }`}
            >
              <span className="text-lg">{stage.icon}</span>
              <span>{stage.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex-shrink-0">
        <div className="max-w-md mx-auto space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              👤 Guest Name
            </label>
            <input
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Enter guest name..."
              className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm"
            />
          </div>
          {selectedStage === 'pickup' && (
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                🔐 Lockbox Code (for this trip)
              </label>
              <input
                type="text"
                value={lockboxCode}
                onChange={(e) => setLockboxCode(e.target.value)}
                placeholder="Enter lockbox code..."
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none text-sm font-mono"
              />
            </div>
          )}
        </div>
      </div>

      {/* Messages List */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-2xl mx-auto space-y-4">
          {stageMessages.length > 0 ? (
            stageMessages.map((msg) => (
              <MessageCard
                key={msg.id}
                message={msg}
                color={vehicle.color}
                guestName={guestName}
                lockboxCode={lockboxCode}
                processMessage={processMessage}
              />
            ))
          ) : (
            <div className="text-center py-12 text-gray-400">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-lg font-semibold">No messages for this stage</p>
              <p className="text-sm mt-2">Try selecting a different trip stage</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// Message Card Component
function MessageCard({ message, color, guestName, lockboxCode, processMessage }) {
  const [copied, setCopied] = useState(false);

  const processedContent = processMessage(message.content);

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
    <div className={`bg-white rounded-2xl border-2 border-gray-200 border-l-${color}-500 border-l-4 shadow-sm overflow-hidden`}>
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-bold text-gray-800">{message.title}</h3>
        <button
          onClick={copy}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm transition-all ${
            copied
              ? 'bg-green-500 text-white'
              : `bg-${color}-500 hover:bg-${color}-600 text-white`
          }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="p-4">
        <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
          {processedContent}
        </pre>
        {(!guestName || (!lockboxCode && message.id.includes('-pickup'))) && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-orange-600 font-semibold">
              ⚠️ Tip: Fill in the guest name{message.id.includes('-pickup') ? ' and lockbox code' : ''} above to auto-populate this message
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
