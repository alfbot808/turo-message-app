# Turo Message Templates

**Tropical Transports** — Taylor & Madi's Turo Host Message Organizer

A React app for quickly copying guest message templates, organized by trip stage. Built for Hawaii-based Turo hosts.

## Features

- 5 categories: Booking Confirmed, Pickup Day, Checkout, Post-Trip, Trip Changes
- One-click copy to clipboard for each message template
- FAQ section with copyable Q&A pairs (e.g. HNL airport delivery)
- Mobile responsive sidebar layout
- Smooth copy confirmation feedback

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — Vercel Dashboard
1. Push repo to GitHub
2. Go to vercel.com → New Project → Import your repo
3. Vercel auto-detects Vite — click Deploy

The `vercel.json` is already configured for SPA routing.

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx       # Category navigation
│   ├── MessageList.jsx   # Message display panel
│   ├── MessageCard.jsx   # Individual template card
│   └── FAQCard.jsx       # FAQ card with Q+A copy buttons
├── data/
│   └── messages.js       # All message templates & FAQs
├── App.jsx               # Root layout
└── index.css             # Tailwind + global styles
```

## Adding / Editing Messages

All templates live in `src/data/messages.js`. Each category has a `messages` array, and the Trip Changes category also has a `faqs` array.

**Message shape:**
```js
{
  id: 'unique-id',
  title: 'Display Title',
  content: `Message text here...`,
}
```

**FAQ shape:**
```js
{
  id: 'unique-id',
  question: 'Guest question text',
  answer: `Your full answer here...`,
}
```

## Tech Stack

- React 19 + Vite
- Tailwind CSS v3
- No backend — fully static
