'use client';

import { useState } from 'react';

interface CounterProps {
  name: string;
  mult: number;
  buttonColor: string;
}

export default function Counter({ name, mult, buttonColor }: CounterProps) {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + mult;
    if (newCount > 10) {
      setCount(0);
    } else {
      setCount(newCount);
    }
  };

  return (
    <div className="flex-1 max-w-[50%] bg-orange-500 p-8 rounded-xl shadow-lg text-center text-white">
      <h3 className="m-0 mb-4 text-2xl font-bold">{name}'s Counter</h3>
      <p className="my-4 text-xl">Count: {count}</p>
      <button 
        onClick={increment}
        className="border-0 py-4 px-6 text-lg font-bold rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md active:translate-y-0 min-w-20"
        style={{ backgroundColor: buttonColor }}
      >
        +{mult}
      </button>
    </div>
  );
}