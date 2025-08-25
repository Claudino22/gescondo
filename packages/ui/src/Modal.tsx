import React from 'react';

export default function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 shadow-lg relative">
        <button className="absolute top-2 right-2" onClick={onClose} aria-label="Fechar">×</button>
        {children}
      </div>
    </div>
  );
}