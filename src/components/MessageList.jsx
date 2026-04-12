import MessageCard from './MessageCard';
import FAQCard from './FAQCard';
import { getCategoryById } from '../data/messages';

export default function MessageList({ categoryId }) {
  if (!categoryId) {
    return (
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center text-4xl">
            💬
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Select a Category
          </h2>
          <p className="text-gray-500 text-sm">
            Choose a message category from the sidebar to view and copy templates for your Turo guests.
          </p>
        </div>
      </div>
    );
  }

  const category = getCategoryById(categoryId);
  if (!category) return null;

  const colorBgMap = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    teal: 'bg-teal-500',
  };

  const colorTextMap = {
    green: 'text-green-700',
    blue: 'text-blue-700',
    orange: 'text-orange-700',
    purple: 'text-purple-700',
    teal: 'text-teal-700',
  };

  return (
    <div className="flex-1 overflow-y-auto">
      {/* Category Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl ${colorBgMap[category.color]} flex items-center justify-center text-xl shadow-sm`}
          >
            {category.icon}
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-lg leading-tight">
              {category.label}
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">{category.description}</p>
          </div>
          <div className="ml-auto">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 ${colorTextMap[category.color]}`}
            >
              {category.messages.length + (category.faqs?.length || 0)} templates
            </span>
          </div>
        </div>
      </div>

      {/* Message Cards */}
      <div className="p-5 space-y-4">
        {category.messages.length > 0 && (
          <div className="space-y-3">
            {category.messages.map((message) => (
              <MessageCard
                key={message.id}
                message={message}
                color={category.color}
              />
            ))}
          </div>
        )}

        {/* FAQ Section */}
        {category.faqs && category.faqs.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 pt-2">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2">
                Frequently Asked Questions
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            {category.faqs.map((faq) => (
              <FAQCard key={faq.id} faq={faq} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
