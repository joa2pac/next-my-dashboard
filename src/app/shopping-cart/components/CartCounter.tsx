"use client";

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const onReset = () => {
    setCount(value);
  };

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] mr-2"
          onClick={increment}
        >
          + 1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] mr-2"
          onClick={onReset}
        >
          Reset
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100] mr-2"
          onClick={decrement}
        >
          - 1
        </button>
      </div>
    </>
  );
};
