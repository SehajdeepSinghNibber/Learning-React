import React, { useState } from "react";
import { accordionData } from "./utils/content.js";
import "./App.css"

const App = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1>Tech Stack FAQ</h1>

      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div
            className="accordion-title"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.title}</h3>
            <span>{activeIndex === index ? "-" : "+"}</span>
          </div>

          {activeIndex === index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
