import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1); 

  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        onClick={() => setCount(count > 1 ? count - 1 : 1)} 
        className="bg-red-500 text-white w-8 h-8 rounded-md hover:bg-red-600"
      >
        -
      </button>

      <span className="text-lg font-semibold">{count}</span>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500 text-white w-8 h-8 rounded-md hover:bg-green-600"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
