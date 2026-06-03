import { useState } from 'react'
import "./App.css"

const App = () => {

  const [inputValue,setInputValue]=useState("")

  const Clear=()=>{
    setInputValue("")
  }

  const display=(e)=>{
    setInputValue(inputValue+e)
  }

  const evaluate=()=>{
    setInputValue(eval(inputValue))
  }

  return (
    <div className="calculator">
      <input
        type="text"
        className="display"
        value={inputValue || "0"}
        readOnly
      />

      <span className="btn clear" onClick={Clear}>C</span>
      <span className="btn operator" onClick={() => display('/')}>÷</span>
      <span className="btn operator" onClick={() => display('*')}>×</span>
      <span className="btn operator" onClick={() => display('-')}>−</span>

      <span className="btn" onClick={() => display('7')}>7</span>
      <span className="btn" onClick={() => display('8')}>8</span>
      <span className="btn" onClick={() => display('9')}>9</span>
      <span className="btn operator" onClick={() => display('+')}>+</span>

      <span className="btn" onClick={() => display('4')}>4</span>
      <span className="btn" onClick={() => display('5')}>5</span>
      <span className="btn" onClick={() => display('6')}>6</span>
      <span className="btn equal" onClick={evaluate}>=</span>

      <span className="btn" onClick={() => display('1')}>1</span>
      <span className="btn" onClick={() => display('2')}>2</span>
      <span className="btn" onClick={() => display('3')}>3</span>
      <span className="btn empty"></span>

      <span className="btn zero" onClick={() => display('0')}>0</span>
      <span className="btn" onClick={() => display('.')}>.</span>
    </div>
  )

}

export default App
