import React, { useState } from "react";

const GenerateRandomNumber = () => {
  const [randomNumber, setRandomNumber] = useState(() => {
    const RandomNumber = 0;
    return RandomNumber;
  });

  const GenerateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random()*100));
  };

  return (
    <div>
      <h1>Random Number: {randomNumber}</h1>
      <button onClick={GenerateRandomNumber}>Generate Random Number</button>
    </div>
  );
};

export default GenerateRandomNumber;
