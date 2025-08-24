import React from 'react';

type Props = {
  title: string;
  value: number | string;
};

export default function ChartKPI({ title, value }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
      <span className="text-lg font-medium mb-2">{title}</span>
      <span className="text-3xl font-bold text-primary">{value}</span>
    </div>
  );
}