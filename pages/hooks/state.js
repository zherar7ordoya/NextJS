/**
 * 📌 Hook de estado
 * Este ejemplo renderiza un contador. Cuando haces click en el botón, 
 * incrementa el valor:
 */

import React, { useState } from 'react';

export default function State() {
  // Declara una nueva variable de estado, que llamaremos "count".
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}