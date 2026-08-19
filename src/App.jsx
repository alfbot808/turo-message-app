import { useState } from 'react';
import { vehicles } from './data/messages';
import './index.css';

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0].id);
  const [selectedLocation, setSelectedLocation] = useState('airport');

  const vehicle = vehicles.find((v) => v.id === selectedVehicle);
  const location = vehicle?.locations.find((l) => l.id === selectedLocation);

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden">
      {/* Vehicle Tabs (Top) */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 overflow-x-auto">
        <div className="flex gap-2">
          {vehicles.map((v) => (
            <button
              key={v.id}
              onClick={() => {
                setSelectedVehicle(v.id);
                setSelectedLocation('airport');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap transition-all ${
                selectedVehicle === v.id
                  ? `bg-${v.color}-500 text-white shadow-md`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{v.icon}</span>
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* Location Sub-tabs */}
      {vehicle && (
        <div className="bg-white border-b border-gray-200 px-4 py-2">
          <div className="flex gap-2">
            {vehicle.locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all ${
                  selectedLocation === loc.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{loc.icon}</span>
                {loc.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages List */}
      <main className="flex-1 overflow-y-auto p-4">
        {location ? (
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-900">
                {vehicle.colorName} {vehicle.label} — {location.label}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Plate: {vehicle.plate} • {vehicle.type === 'electric' ? '⚡ Electric' : vehicle.type === 'hybrid' ? '⛽ Hybrid' : '⛽ Gas'}
              </p>
            </div>

            {location.messages.map((msg) => (
              <MessageCard key={msg.id} message={msg} color={vehicle.color} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Select a vehicle and location
          </div>
        )}
      </main>
    </div>
  );
}

// Simple Message Card component (inline for now)
function MessageCard({ message, color }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(message.content);
    } catch {
      const el = document.createElement('textarea');
      el.value = message.content;
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
    <div className={`bg-white rounded-xl border border-gray-200 border-l-4 border-l-${color}-500 shadow-sm overflow-hidden`}>
      <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-semibold text-gray-800">{message.title}</h3>
        <button
          onClick={copy}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            copied
              ? 'bg-green-500 text-white'
              : `bg-${color}-500 hover:bg-${color}-600 text-white`
          }`}
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="p-4">
        <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans leading-relaxed">
          {message.content}
        </pre>
      </div>
    </div>
  );
}
