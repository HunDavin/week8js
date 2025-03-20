import React from "react";
import { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [ValueA,setValueA] = useState(0);
  const [ValueB,setValueB] = useState(0);
  const [Sum,setSum] = useState(0);


  /* You will need some function to handle the key pressed and button events */
  function onA(e){
    setValueA(Number(e.target.value));

  }
  function onB(e){
    setValueB(Number(e.target.value));

  }


  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onKeyUp={onA} />

      <label>B =</label>
      <input onKeyUp={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={isNaN(Sum)? "A and B Shall be number": Sum} style={{color:isNaN(Sum)? "red":""}} disabled />
      <button onClick={()=>setSum(ValueA+ValueB)}>Compute</button>
    </main>
  );
}

export default App;
