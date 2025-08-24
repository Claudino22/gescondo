import React from 'react';

type Props = {
  data?: Array<{ [key: string]: any }>;
  columns?: Array<{ key: string; label: string }>;
};

export default function DataTable({ data = [], columns = [] }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl shadow bg-white">
      <table className="min-w-full">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key} className="px-4 py-2 text-left font-semibold">{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-t">
              {columns.map(col => (
                <td key={col.key} className="px-4 py-2">{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}