import { useState } from 'react';
import Sidebar from './components/Sidebar';
import MessageList from './components/MessageList';
import './index.css';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('booking-confirmed');

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden flex flex-col min-h-0">
        <MessageList categoryId={selectedCategory} />
      </main>
    </div>
  );
}
