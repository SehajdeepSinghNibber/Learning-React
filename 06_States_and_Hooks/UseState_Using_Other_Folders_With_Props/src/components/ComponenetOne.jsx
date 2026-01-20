import React, { useState } from 'react';

const ComponentOne = () => {

  const [count, setCount] = useState(() => {
    const initialValue=10
    return initialValue
});

  const Increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default ComponentOne;
