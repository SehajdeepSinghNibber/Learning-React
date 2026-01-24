import React, { useState, useRef } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const toggleTimer = () => {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setCount(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setIsRunning(prev => !prev);
  };

  return (
    <>
      <h1>Timer: {count} seconds</h1>
      <button onClick={toggleTimer}>
        {isRunning ? 'Stop Timer' : 'Start Timer'}
      </button>
    </>
  );
};

export default App;
