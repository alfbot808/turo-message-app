import { categories } from '../data/messages';

const colorMap = {
  green: {
    active: 'bg-green-600 text-white shadow-md',
    inactive: 'text-gray-700 hover:bg-green-50 hover:text-green-700',
    dot: 'bg-green-500',
  },
  blue: {
    active: 'bg-blue-600 text-white shadow-md',
    inactive: 'text-gray-700 hover:bg-blue-50 hover:text-blue-700',
    dot: 'bg-blue-500',
  },
  orange: {
    active: 'bg-orange-500 text-white shadow-md',
    inactive: 'text-gray-700 hover:bg-orange-50 hover:text-orange-600',
    dot: 'bg-orange-500',
  },
  purple: {
    active: 'bg-purple-600 text-white shadow-md',
    inactive: 'text-gray-700 hover:bg-purple-50 hover:text-purple-700',
    dot: 'bg-purple-500',
  },
  teal: {
    active: 'bg-teal-600 text-white shadow-md',
    inactive: 'text-gray-700 hover:bg-teal-50 hover:text-teal-700',
    dot: 'bg-teal-500',
  },
};

export default function Sidebar({ selectedCategory, onSelect }) {
  return (
    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0 bg-white border-b md:border-b-0 md:border-r border-gray-200">
      {/* Brand Header */}
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
            TT
          </div>
          <div>
            <h1 className="font-bold text-gray-900 text-sm leading-tight">
              Tropical Transports
            </h1>
            <p className="text-xs text-gray-500 leading-tight mt-0.5">
              Taylor & Madi · Turo Hosts
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <nav className="p-3">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">
          Message Categories
        </p>
        <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible pb-1 md:pb-0">
          {categories.map((cat) => {
            const colors = colorMap[cat.color] || colorMap.blue;
            const isActive = selectedCategory === cat.id;
            const msgCount = cat.messages.length + (cat.faqs?.length || 0);

            return (
              <button
                key={cat.id}
                onClick={() => onSelect(cat.id)}
                className={`category-btn flex items-center gap-3 px-3 py-2.5 rounded-xl text-left font-medium text-sm transition-all whitespace-nowrap md:whitespace-normal w-full flex-shrink-0 md:flex-shrink ${
                  isActive ? colors.active : colors.inactive
                }`}
              >
                <span className="text-base">{cat.icon}</span>
                <span className="flex-1 truncate">{cat.label}</span>
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  {msgCount}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="hidden md:block p-4 mt-auto border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center">
          Turo Message Templates
          <br />
          <span className="font-medium text-gray-500">Aloha from Hawaii 🌺</span>
        </p>
      </div>
    </aside>
  );
}
