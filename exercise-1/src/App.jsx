import React, { useState } from "react";
function App() {
  /* You will need to use a boolean state to manage the weather */
  const[IsRaining, setIsRaining] = useState(false);

  function onSunClick() {
    // Complete this code when we click on Sunny Time
    setIsRaining(false);
  }

  function onRainClick() {
    // Complete this code when we click on Sunny Time
    setIsRaining(true);
  }

  function getTitle() {
    // This function manage the H1 text, depending on the weather
    return IsRaining ? "Rain Time":"Sun time";
    
  }

  function getBackgroundColor() {
    // This function manage the main class value, depending on the weather
      return IsRaining ? "rainy":"sunny"
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
