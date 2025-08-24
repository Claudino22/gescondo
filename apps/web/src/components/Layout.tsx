import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white p-4 rounded-b-2xl shadow-lg">
        <h1 className="text-xl font-bold">GESCONDO</h1>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}