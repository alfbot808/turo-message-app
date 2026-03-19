"use client";

import { useState } from "react";
import { MessageTemplate, Car, Location, Stage, MessageVariables } from "./types";
import { messageTemplates, faqTemplates } from "./templates";

const faqCategories = [
  { id: "pickup", label: "📍 Pickup & Location", items: ["lockboxLocation", "airportParkingFees", "terminal1Warning"] },
  { id: "vehicle", label: "🚗 Vehicle Operation", items: ["teslaHowToStart", "teslaCharging", "sonataFuelType", "sonataHowToStart"] },
  { id: "trip", label: "🔄 Trip Changes", items: ["extendTrip", "addDriver"] },
  { id: "issues", label: "⚠️ Issues & Emergencies", items: ["flatTire", "lockedOut", "checkEngineLight"] },
  { id: "return", label: "🔙 Return & Checkout", items: ["returnFuelLevel", "returnLocationReminder", "lateReturn", "leftItemInCar", "ticketToll"] },
  { id: "policy", label: "📋 Policies", items: ["smoking", "cleaning", "petPolicy", "mileage"] },
];

const faqLabels: Record<string, string> = {
  lockboxLocation: "Where is the lockbox?",
  airportParkingFees: "Do I pay for parking?",
  terminal1Warning: "Which garage entrance?",
  teslaHowToStart: "How do I start the Tesla?",
  teslaCharging: "How do I charge the Tesla?",
  sonataFuelType: "What gas does the Sonata take?",
  sonataHowToStart: "How do I start the Sonata?",
  extendTrip: "Can I extend my trip?",
  addDriver: "Can someone else drive?",
  flatTire: "I have a flat tire",
  lockedOut: "I locked myself out",
  checkEngineLight: "Check engine light is on",
  returnFuelLevel: "What fuel/charge level to return?",
  returnLocationReminder: "Where do I return the car?",
  lateReturn: "I'm running late",
  leftItemInCar: "I left something in the car",
  ticketToll: "I got a ticket/toll",
  smoking: "Can I smoke in the car?",
  cleaning: "Do I need to clean the car?",
  petPolicy: "Are pets allowed?",
  mileage: "What about mileage limits?",
};

export default function Home() {
  const [car, setCar] = useState<Car>("tesla");
  const [location, setLocation] = useState<Location>("airport");
  const [stage, setStage] = useState<Stage>("booking");
  const [variables, setVariables] = useState<MessageVariables>({
    guestName: "",
    lockboxCode: "",
  });
  const [generatedMessage, setGeneratedMessage] = useState<string>("");
  const [copied, setCopied] = useState(false);

  // FAQ State
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>("pickup");
  const [selectedFaq, setSelectedFaq] = useState<string>("");
  const [faqMessage, setFaqMessage] = useState<string>("");
  const [faqCopied, setFaqCopied] = useState(false);

  const handleGenerate = () => {
    const template = messageTemplates[car][location][stage];
    let message = template;

    // Replace variables
    message = message.replace(/\[Guest Name\]/g, variables.guestName || "[Guest Name]");
    message = message.replace(/\[Lockbox Code\]/g, variables.lockboxCode || "[Lockbox Code]");

    setGeneratedMessage(message);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleFaqSelect = (faqKey: string) => {
    setSelectedFaq(faqKey);
    const message = faqTemplates[faqKey as keyof typeof faqTemplates] || "";
    setFaqMessage(message);
    setFaqCopied(false);
  };

  const handleFaqCopy = async () => {
    try {
      await navigator.clipboard.writeText(faqMessage);
      setFaqCopied(true);
      setTimeout(() => setFaqCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const needsLockboxCode = stage === "pickup";

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">🚗 Turo Message Generator</h1>
          <p className="text-gray-600">Never send the wrong info to guests again.</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 space-y-6">
          {/* Car Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Car
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setCar("tesla")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  car === "tesla"
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : "border-gray-200 hover:border-teal-300"
                }`}
              >
                <div className="font-semibold">Tesla Model Y</div>
                <div className="text-xs text-gray-500">Space Grey • 0T79</div>
              </button>
              <button
                onClick={() => setCar("hyundai")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  car === "hyundai"
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : "border-gray-200 hover:border-teal-300"
                }`}
              >
                <div className="font-semibold">Hyundai Sonata</div>
                <div className="text-xs text-gray-500">White • 097H</div>
              </button>
            </div>
          </div>

          {/* Location Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Location
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setLocation("airport")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  location === "airport"
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : "border-gray-200 hover:border-teal-300"
                }`}
              >
                <div className="font-semibold">✈️ Airport (HNL)</div>
                <div className="text-xs text-gray-500">Intl Garage, Level 7</div>
              </button>
              <button
                onClick={() => setLocation("kaneohe")}
                className={`p-4 rounded-xl border-2 transition-all ${
                  location === "kaneohe"
                    ? "border-teal-500 bg-teal-50 text-teal-700"
                    : "border-gray-200 hover:border-teal-300"
                }`}
              >
                <div className="font-semibold">🏠 Kaneohe</div>
                <div className="text-xs text-gray-500">45-315 Lilipuna Rd, Stall 19</div>
              </button>
            </div>
          </div>

          {/* Stage Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message Stage
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "booking", label: "📋 Booking Confirmed", desc: "Send immediately" },
                { id: "pickup", label: "🚘 Pickup Day", desc: "Send day of trip" },
                { id: "checkout", label: "🔑 Checkout", desc: "Send before return" },
                { id: "posttrip", label: "⭐ Post-Trip", desc: "Send after return" },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStage(s.id as Stage)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    stage === s.id
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-gray-200 hover:border-teal-300"
                  }`}
                >
                  <div className="font-semibold text-sm">{s.label}</div>
                  <div className="text-xs text-gray-500">{s.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Variables */}
          <div className="space-y-4 pt-4 border-t border-gray-200">
            <label className="block text-sm font-semibold text-gray-700">
              Guest Details
            </label>
            <input
              type="text"
              placeholder="Guest Name"
              value={variables.guestName}
              onChange={(e) =>
                setVariables({ ...variables, guestName: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
            {needsLockboxCode && (
              <input
                type="text"
                placeholder="Lockbox Code"
                value={variables.lockboxCode}
                onChange={(e) =>
                  setVariables({ ...variables, lockboxCode: e.target.value })
                }
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              />
            )}
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg"
          >
            ✨ Generate Message
          </button>
        </div>

        {/* Generated Message */}
        {generatedMessage && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Generated Message</h2>
              <button
                onClick={handleCopy}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  copied
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {copied ? "✅ Copied!" : "📋 Copy"}
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 whitespace-pre-wrap text-gray-700 text-sm leading-relaxed">
              {generatedMessage}
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">❓ Quick FAQ Responses</h2>
          <p className="text-gray-600 mb-4 text-sm">Copy-paste answers to common guest questions</p>

          {/* FAQ Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFaqCategory(cat.id);
                  setSelectedFaq("");
                  setFaqMessage("");
                }}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeFaqCategory === cat.id
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          {activeFaqCategory && (
            <div className="space-y-2 mb-4">
              {faqCategories
                .find((c) => c.id === activeFaqCategory)
                ?.items.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleFaqSelect(item)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      selectedFaq === item
                        ? "border-teal-500 bg-teal-50 text-teal-700"
                        : "border-gray-200 hover:border-teal-300 hover:bg-gray-50"
                    }`}
                  >
                    {faqLabels[item] || item}
                  </button>
                ))}
            </div>
          )}

          {/* FAQ Generated Message */}
          {faqMessage && (
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-800">Response</h3>
                <button
                  onClick={handleFaqCopy}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    faqCopied
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  {faqCopied ? "✅ Copied!" : "📋 Copy"}
                </button>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 whitespace-pre-wrap text-gray-700 text-sm leading-relaxed">
                {faqMessage}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-white/80 text-sm">
          Made for Taylor & Madi 🌺
        </div>
      </div>
    </main>
  );
}
