import { useState } from 'react';

export default function FAQCard({ faq }) {
  const [copiedQ, setCopiedQ] = useState(false);
  const [copiedA, setCopiedA] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const copy = async (text, setter) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const el = document.createElement('textarea');
      el.value = text;
      el.style.position = 'fixed';
      el.style.opacity = '0';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  return (
    <div className="message-card bg-white rounded-xl border border-gray-200 border-l-4 border-l-teal-500 shadow-sm overflow-hidden">
      {/* FAQ Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-teal-50/40">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-teal-700">
            FAQ
          </span>
          <h3 className="font-semibold text-gray-800 text-sm">
            {faq.question}
          </h3>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-2 flex-shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
          aria-label={expanded ? 'Collapse' : 'Expand'}
        >
          <svg
            className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {expanded && (
        <div className="p-4 space-y-3">
          {/* Question row */}
          <div className="rounded-lg bg-gray-50 border border-gray-100 p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">
                  Guest Question
                </span>
                <p className="text-sm text-gray-700 font-medium">{faq.question}</p>
              </div>
              <button
                onClick={() => copy(faq.question, setCopiedQ)}
                className={`flex-shrink-0 flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  copiedQ
                    ? 'bg-green-500 text-white copy-success'
                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 active:scale-95'
                }`}
              >
                {copiedQ ? (
                  <>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Copied
                  </>
                ) : (
                  'Copy Q'
                )}
              </button>
            </div>
          </div>

          {/* Answer row */}
          <div className="rounded-lg bg-teal-50/50 border border-teal-100 p-3">
            <div className="flex items-start justify-between gap-3 mb-2">
              <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                Your Answer
              </span>
              <button
                onClick={() => copy(faq.answer, setCopiedA)}
                className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  copiedA
                    ? 'bg-green-500 text-white copy-success'
                    : 'bg-teal-600 hover:bg-teal-700 text-white active:scale-95'
                }`}
              >
                {copiedA ? (
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
                    Copy Answer
                  </>
                )}
              </button>
            </div>
            <p className="message-text text-sm text-gray-700 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
