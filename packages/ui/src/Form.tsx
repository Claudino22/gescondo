import React from 'react';

export default function Form({ children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form className="space-y-4" {...props}>
      {children}
    </form>
  );
}