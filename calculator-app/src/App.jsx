import React, { useState } from "react"
import './App.css'


function App() {

  const [input, setInput] = useState(0)


  return (
    <>
   <div className="container">

    <div className="calc">
      <h1 id="input">{input}</h1>
      <div>
      <button onClick={()=>handleButtonClick('C')}>C</button>
      <button onClick={()=>handleButtonClick('%')}>&lt;</button>
      <button onClick={()=>handleButtonClick('<')}>%</button>
      <button onClick={()=>handleButtonClick('/')}>/</button>
      </div>
      <div>
      <button onClick={()=>handleButtonClick('%')}>7</button>
      <button onClick={()=>handleButtonClick('%')}>8</button>
      <button onClick={()=>handleButtonClick('%')}>9</button>
      <button onClick={()=>handleButtonClick('%')}>*</button>
      </div>
      <div>
      <button onClick={()=>handleButtonClick('%')}>4</button>
      <button onClick={()=>handleButtonClick('%')}>5</button>
      <button onClick={()=>handleButtonClick('%')}>6</button>
      <button onClick={()=>handleButtonClick('%')}>-</button>
      </div>
      <div>
      <button onClick={()=>handleButtonClick('%')}>1</button>
      <button onClick={()=>handleButtonClick('%')}>2</button>
      <button onClick={()=>handleButtonClick('%')}>3</button>
      <button onClick={()=>handleButtonClick('%')}>+</button>
      </div>
      <div>
      <button onClick={()=>handleButtonClick('%')}>0</button>
      <button onClick={()=>handleButtonClick('%')}>00</button>
      <button onClick={()=>handleButtonClick('%')}>.</button>
      <button onClick={()=>handleButtonClick('%')}>=</button>
      </div>
    </div>
    </div>
   
    </>
  )
}

export default App
