import React from 'react';

export default function NotificationBell() {
  return (
    <button
      aria-label="Notificações"
      className="relative p-2 rounded-full bg-white shadow focus:outline focus:ring-2 focus:ring-primary"
    >
      <svg width="24" height="24" fill="none" stroke="#2563eb" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V11a6 6 0 10-12 0v5l-2 2v1h16v-1l-2-2z"/>
      </svg>
      <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
    </button>
  );
}