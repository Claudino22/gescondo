import React from 'react';

export default function Button({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="px-4 py-2 rounded-2xl bg-primary text-white shadow transition hover:bg-primary-dark focus:outline focus:ring-2 focus:ring-primary"
      {...props}
    >
      {children}
    </button>
  );
}