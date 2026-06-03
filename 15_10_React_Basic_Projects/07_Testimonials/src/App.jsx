import React from 'react'
import './App.css'
import { useState } from 'react'

const App = () => {

  const [currentIndex,setCurrentIndex]=useState(0)
  const testimonials = [
    {
      quote: "This product exceeded my expectations in every way. Clean, fast, and reliable.",
      author: "Emily Carter"
    },
    {
      quote: "An incredibly smooth experience from start to finish. I use it every day now.",
      author: "Michael Johnson"
    },
    {
      quote: "The attention to detail and performance really sets this apart from competitors.",
      author: "Sophia Williams"
    },
    {
      quote: "Simple to use, powerful under the hood, and beautifully designed.",
      author: "Daniel Thompson"
    },
      {
        quote: "One of the few tools that actually delivers on its promises.",
      author: "Olivia Martinez"
    }
  ];

//   const handlePrevClick = () => {
//     if (currentIndex === 0) {
//       setCurrentIndex(testimonials.length - 1);
//     } else {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

// const handleNextClick = () => {
//   if (currentIndex === testimonials.length - 1) {
//       setCurrentIndex(0);
//     } else {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

  const handlePrevClick=()=>{
    setCurrentIndex((currentIndex+testimonials.length-1)%testimonials.length)
  }

  const handleNextClick=()=>{
    setCurrentIndex((currentIndex+testimonials.length+1)%testimonials.length)
  }

  return (
    <div className='testimonials'>
      <div className="testimonials-quote"></div>
        {testimonials[currentIndex].quote}

        <div className="testimonials-author">
          -{testimonials[currentIndex].author}
        </div>

        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>

    </div>

    
  )
}

export default App
