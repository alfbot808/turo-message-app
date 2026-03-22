"use client";

import { useState, useEffect } from "react";
import { MessageTemplate, Car, Location, Stage, MessageVariables, Trip, TripStatus } from "./types";
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

const carData: Record<Car, { name: string; plate: string; year: string; image: string }> = {
  tesla: { name: "Tesla Model Y", plate: "0T79", year: "2026", image: "/tesla-model-y.jpg" },
  hyundai: { name: "Hyundai Sonata", plate: "097H", year: "2026", image: "/hyundai-sonata.jpg" },
};

const statusLabels: Record<TripStatus, string> = {
  booked: "📋 Booked",
  picked_up: "🚘 Picked Up",
  returned: "🔑 Returned",
  reviewed: "⭐ Reviewed",
  completed: "✅ Completed",
};

const statusColors: Record<TripStatus, string> = {
  booked: "bg-blue-100 text-blue-700 border-blue-300",
  picked_up: "bg-yellow-100 text-yellow-700 border-yellow-300",
  returned: "bg-orange-100 text-orange-700 border-orange-300",
  reviewed: "bg-green-100 text-green-700 border-green-300",
  completed: "bg-gray-100 text-gray-700 border-gray-300",
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<"messages" | "trips">("messages");
  
  // Message Generator State
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

  // Trip Tracker State
  const [trips, setTrips] = useState<Trip[]>([]);
  const [showNewTrip, setShowNewTrip] = useState(false);
  const [newTrip, setNewTrip] = useState<Partial<Trip>>({
    car: "tesla",
    location: "airport",
    status: "booked",
    pickupTime: "12:00",
    returnTime: "12:00",
  });
  const [tripFilter, setTripFilter] = useState<TripStatus | "all">("all");

  // Load trips from localStorage on mount
  useEffect(() => {
    const savedTrips = localStorage.getItem("turo-trips");
    if (savedTrips) {
      try {
        setTrips(JSON.parse(savedTrips));
      } catch (e) {
        console.error("Failed to parse trips:", e);
      }
    }
  }, []);

  // Save trips to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("turo-trips", JSON.stringify(trips));
  }, [trips]);

  const handleGenerate = () => {
    const template = messageTemplates[car][location][stage];
    let message = template;

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

  const handleAddTrip = () => {
    if (!newTrip.guestName || !newTrip.startDate || !newTrip.endDate) return;
    
    const trip: Trip = {
      id: Date.now().toString(),
      guestName: newTrip.guestName,
      car: newTrip.car || "tesla",
      location: newTrip.location || "airport",
      startDate: newTrip.startDate,
      endDate: newTrip.endDate,
      status: "booked",
      notes: newTrip.notes,
      createdAt: new Date().toISOString(),
    };
    
    setTrips([trip, ...trips]);
    setShowNewTrip(false);
    setNewTrip({ car: "tesla", location: "airport", status: "booked", pickupTime: "12:00", returnTime: "12:00" });
  };

  const handleUpdateTripStatus = (tripId: string, newStatus: TripStatus) => {
    setTrips(trips.map(t => t.id === tripId ? { ...t, status: newStatus } : t));
  };

  const handleDeleteTrip = (tripId: string) => {
    if (confirm("Delete this trip?")) {
      setTrips(trips.filter(t => t.id !== tripId));
    }
  };

  // Helper: calculate hours until return
  const getHoursUntilReturn = (endDate: string, returnTime?: string) => {
    const now = new Date();
    const returnDate = new Date(endDate);
    if (returnTime) {
      const [hours, minutes] = returnTime.split(':').map(Number);
      returnDate.setHours(hours, minutes);
    }
    const diffMs = returnDate.getTime() - now.getTime();
    return Math.ceil(diffMs / (1000 * 60 * 60));
  };

  // Helper: generate checkout message for a trip
  const handleSendCheckout = (trip: Trip) => {
    const template = messageTemplates[trip.car][trip.location].checkout;
    let message = template;
    message = message.replace(/\[Guest Name\]/g, trip.guestName);
    message = message.replace(/\[Lockbox Code\]/g, "[Lockbox Code]");
    setGeneratedMessage(message);
    setCopied(false);
    setActiveTab("messages");
    setCar(trip.car);
    setLocation(trip.location);
    setStage("checkout");
    setVariables({ guestName: trip.guestName, lockboxCode: "" });
  };

  const getTripStats = () => {
    const active = trips.filter(t => t.status !== "completed").length;
    const pickedUp = trips.filter(t => t.status === "picked_up").length;
    const needsReview = trips.filter(t => t.status === "returned").length;
    return { active, pickedUp, needsReview };
  };

  const filteredTrips = tripFilter === "all" 
    ? trips.filter(t => t.status !== "completed")
    : trips.filter(t => t.status === tripFilter);

  const needsLockboxCode = stage === "pickup";
  const stats = getTripStats();

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-4 mb-6 flex justify-center items-center">
          <img src="/logo.jpg" alt="Hostly" className="h-48 w-auto" />
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl p-2 mb-6">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setActiveTab("messages")}
              className={`py-3 px-4 rounded-xl font-semibold transition-all ${
                activeTab === "messages"
                  ? "bg-cyan-400 text-black shadow-md"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              💬 Messages
            </button>
            <button
              onClick={() => setActiveTab("trips")}
              className={`py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                activeTab === "trips"
                  ? "bg-cyan-400 text-black shadow-md"
                  : "bg-gray-100 text-black hover:bg-gray-200"
              }`}
            >
              📊 Trip Tracker
              {stats.active > 0 && (
                <span className="bg-black text-white text-xs px-2 py-0.5 rounded-full">
                  {stats.active}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Messages Tab */}
        {activeTab === "messages" && (
          <>
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 mb-6 space-y-6">
              {/* Car Selection */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Select Car
                </label>
                <div className="space-y-3">
                  {(Object.keys(carData) as Car[]).map((carKey) => (
                    <button
                      key={carKey}
                      onClick={() => setCar(carKey)}
                      className={`p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                        car === carKey
                          ? "border-cyan-400 bg-cyan-50"
                          : "border-gray-200 hover:border-cyan-300 bg-white"
                      }`}
                    >
                      {/* Car Image */}
                      <img 
                        src={carData[carKey].image} 
                        alt={carData[carKey].name}
                        className="w-20 h-14 object-cover rounded-lg shadow-sm border border-gray-200"
                      />
                      
                      {/* Car Info */}
                      <div className="flex-1 text-left">
                        <div className={`font-semibold ${car === carKey ? "text-black" : "text-black"}`}>
                          {carData[carKey].year} {carData[carKey].name}
                        </div>
                        <div className={`text-sm font-medium ${car === carKey ? "text-black" : "text-black"}`}>
                          {carData[carKey].plate}
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <div className="text-gray-400">
                        ›
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Selection */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Select Location
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setLocation("airport")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      location === "airport"
                        ? "border-cyan-400 bg-cyan-50"
                        : "border-gray-200 hover:border-cyan-300 bg-white"
                    }`}
                  >
                    <div className="font-semibold text-black">✈️ Airport (HNL)</div>
                    <div className="text-xs text-black">Intl Garage, Level 7</div>
                  </button>
                  <button
                    onClick={() => setLocation("kaneohe")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      location === "kaneohe"
                        ? "border-cyan-400 bg-cyan-50"
                        : "border-gray-200 hover:border-cyan-300 bg-white"
                    }`}
                  >
                    <div className="font-semibold text-black">🏠 Kaneohe</div>
                    <div className="text-xs text-black">45-315 Lilipuna Rd, Stall 19</div>
                  </button>
                </div>
              </div>

              {/* Stage Selection */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2">
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
                          ? "border-cyan-400 bg-cyan-50"
                          : "border-gray-200 hover:border-cyan-300 bg-white"
                      }`}
                    >
                      <div className="font-semibold text-sm text-black">{s.label}</div>
                      <div className="text-xs text-black">{s.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Variables */}
              <div className="space-y-4 pt-4 border-t border-gray-200">
                <label className="block text-sm font-semibold text-black">
                  Guest Details
                </label>
                <input
                  type="text"
                  placeholder="Guest Name"
                  value={variables.guestName}
                  onChange={(e) =>
                    setVariables({ ...variables, guestName: e.target.value })
                  }
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-black"
                />
                {needsLockboxCode && (
                  <input
                    type="text"
                    placeholder="Lockbox Code"
                    value={variables.lockboxCode}
                    onChange={(e) =>
                      setVariables({ ...variables, lockboxCode: e.target.value })
                    }
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent outline-none text-black"
                  />
                )}
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerate}
                className="w-full bg-gray-400 hover:bg-gray-500 text-black font-bold py-4 rounded-xl transition-colors shadow-lg"
              >
                ✨ Generate Message
              </button>
            </div>

            {/* Generated Message */}
            {generatedMessage && (
              <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-black">Generated Message</h2>
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
              <h2 className="text-xl font-bold text-black mb-4">❓ Quick FAQ Responses</h2>
              <p className="text-black mb-4 text-sm">Copy-paste answers to common guest questions</p>

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
                        ? "bg-cyan-400 text-black"
                        : "bg-gray-100 hover:bg-gray-200 text-black"
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
                            ? "border-cyan-400 bg-cyan-50"
                            : "border-gray-200 hover:border-cyan-300 hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-black">{faqLabels[item] || item}</span>
                      </button>
                    ))}
                </div>
              )}

              {/* FAQ Generated Message */}
              {faqMessage && (
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-black">Response</h3>
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
          </>
        )}

        {/* Trip Tracker Tab */}
        {activeTab === "trips" && (
          <div className="space-y-6">
            {/* Stats Dashboard */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{stats.active}</div>
                <div className="text-xs text-gray-600">Active Trips</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-600">{stats.pickedUp}</div>
                <div className="text-xs text-gray-600">Out Now</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <div className="text-2xl font-bold text-orange-600">{stats.needsReview}</div>
                <div className="text-xs text-gray-600">Need Review</div>
              </div>
            </div>

            {/* Add New Trip Button */}
            <button
              onClick={() => setShowNewTrip(true)}
              className="w-full bg-gray-400 hover:bg-gray-500 text-black font-bold py-4 rounded-xl transition-colors shadow-lg"
            >
              ➕ Add New Trip
            </button>

            {/* New Trip Form */}
            {showNewTrip && (
              <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-black">New Trip</h3>
                  <button
                    onClick={() => setShowNewTrip(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <input
                  type="text"
                  placeholder="Guest Name"
                  value={newTrip.guestName || ""}
                  onChange={(e) => setNewTrip({ ...newTrip, guestName: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none text-black"
                />

                <div className="grid grid-cols-2 gap-3">
                  {(Object.keys(carData) as Car[]).map((carKey) => (
                    <button
                      key={carKey}
                      onClick={() => setNewTrip({ ...newTrip, car: carKey })}
                      className={`p-3 rounded-xl border-2 transition-all flex items-center gap-2 ${
                        newTrip.car === carKey
                          ? "border-cyan-400 bg-cyan-50"
                          : "border-gray-200 hover:border-cyan-300 bg-white"
                      }`}
                    >
                      <img 
                        src={carData[carKey].image} 
                        alt={carData[carKey].name}
                        className="w-12 h-9 object-cover rounded shadow-sm border border-gray-200"
                      />
                      <div className="text-left">
                        <div className={`font-semibold text-sm ${newTrip.car === carKey ? "text-black" : "text-black"}`}>
                          {carData[carKey].year} {carData[carKey].name.split(' ')[0]}
                        </div>
                        <div className={`text-xs font-medium ${newTrip.car === carKey ? "text-black" : "text-black"}`}>
                          {carData[carKey].plate}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setNewTrip({ ...newTrip, location: "airport" })}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      newTrip.location === "airport"
                        ? "border-cyan-400 bg-cyan-50"
                        : "border-gray-200 hover:border-cyan-300 bg-white"
                    }`}
                  >
                    <span className="text-black">Airport (HNL)</span>
                  </button>
                  <button
                    onClick={() => setNewTrip({ ...newTrip, location: "kaneohe" })}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      newTrip.location === "kaneohe"
                        ? "border-cyan-400 bg-cyan-50"
                        : "border-gray-200 hover:border-cyan-300 bg-white"
                    }`}
                  >
                    <span className="text-black">Kaneohe</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">Start Date</label>
                    <input
                      type="date"
                      value={newTrip.startDate || ""}
                      onChange={(e) => setNewTrip({ ...newTrip, startDate: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">End Date</label>
                    <input
                      type="date"
                      value={newTrip.endDate || ""}
                      onChange={(e) => setNewTrip({ ...newTrip, endDate: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none text-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">Pickup Time</label>
                    <input
                      type="time"
                      step="1800"
                      value={newTrip.pickupTime || ""}
                      onChange={(e) => setNewTrip({ ...newTrip, pickupTime: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none text-black"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-1">Return Time</label>
                    <input
                      type="time"
                      step="1800"
                      value={newTrip.returnTime || ""}
                      onChange={(e) => setNewTrip({ ...newTrip, returnTime: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none text-black"
                    />
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Notes (optional)"
                  value={newTrip.notes || ""}
                  onChange={(e) => setNewTrip({ ...newTrip, notes: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-400 outline-none text-black"
                />

                <button
                  onClick={handleAddTrip}
                  disabled={!newTrip.guestName || !newTrip.startDate || !newTrip.endDate}
                  className="w-full bg-gray-400 hover:bg-gray-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-black font-bold py-3 rounded-xl transition-colors"
                >
                  Add Trip
                </button>
              </div>
            )}

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Active" },
                { id: "booked", label: "📋 Booked" },
                { id: "picked_up", label: "🚘 Out" },
                { id: "returned", label: "🔑 Returned" },
                { id: "reviewed", label: "⭐ Reviewed" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setTripFilter(filter.id as TripStatus | "all")}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    tripFilter === filter.id
                      ? "bg-cyan-400 text-black"
                      : "bg-white hover:bg-gray-100 text-black shadow"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Trip List */}
            <div className="space-y-3">
              {filteredTrips.length === 0 ? (
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center text-black">
                  {tripFilter === "all" 
                    ? "No active trips. Add one above!"
                    : `No trips with status: ${statusLabels[tripFilter as TripStatus]}`}
                </div>
              ) : (
                filteredTrips.map((trip) => {
                  const hoursUntilReturn = getHoursUntilReturn(trip.endDate, trip.returnTime);
                  const showCheckoutWarning = trip.status === "picked_up" && hoursUntilReturn <= 24 && hoursUntilReturn > 0;
                  
                  return (
                  <div key={trip.id} className="bg-white rounded-2xl shadow-lg p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-black">{trip.guestName}</h3>
                        <p className="text-sm text-black">
                          {carData[trip.car].year} {carData[trip.car].name} • {carData[trip.car].plate}
                        </p>
                        <p className="text-sm text-black">
                          {new Date(trip.startDate).toLocaleDateString()} {trip.pickupTime && `at ${trip.pickupTime}`} → {" "}
                          {new Date(trip.endDate).toLocaleDateString()} {trip.returnTime && `at ${trip.returnTime}`}
                        </p>
                        {showCheckoutWarning && (
                          <div className="mt-2 px-3 py-2 bg-orange-100 border border-orange-300 rounded-lg flex items-center gap-2">
                            <span className="text-orange-600">⏰</span>
                            <span className="text-sm font-medium text-orange-700">
                              Checkout due in {hoursUntilReturn} hour{hoursUntilReturn !== 1 ? 's' : ''}
                            </span>
                          </div>
                        )}
                        {trip.notes && (
                          <p className="text-sm text-black mt-2 italic">{trip.notes}</p>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[trip.status]}`}>
                        {statusLabels[trip.status]}
                      </span>
                    </div>

                    {/* Status Actions */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-200">
                      {trip.status === "booked" && (
                        <button
                          onClick={() => handleUpdateTripStatus(trip.id, "picked_up")}
                          className="px-3 py-1.5 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 rounded-lg text-sm font-medium transition-colors"
                        >
                          Mark Picked Up
                        </button>
                      )}
                      {trip.status === "picked_up" && (
                        <>
                          <button
                            onClick={() => handleSendCheckout(trip)}
                            className="px-3 py-1.5 bg-cyan-100 hover:bg-cyan-200 text-cyan-700 rounded-lg text-sm font-medium transition-colors"
                          >
                            📋 Send Checkout
                          </button>
                          <button
                            onClick={() => handleUpdateTripStatus(trip.id, "returned")}
                            className="px-3 py-1.5 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg text-sm font-medium transition-colors"
                          >
                            Mark Returned
                          </button>
                        </>
                      )}
                      {trip.status === "returned" && (
                        <button
                          onClick={() => handleUpdateTripStatus(trip.id, "reviewed")}
                          className="px-3 py-1.5 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg text-sm font-medium transition-colors"
                        >
                          Mark Reviewed
                        </button>
                      )}
                      {trip.status === "reviewed" && (
                        <button
                          onClick={() => handleUpdateTripStatus(trip.id, "completed")}
                          className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
                        >
                          Complete
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteTrip(trip.id)}
                        className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg text-sm font-medium transition-colors ml-auto"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8 text-white/80 text-sm">
          Made for Taylor & Madi 🌺
        </div>
      </div>
    </main>
  );
}
