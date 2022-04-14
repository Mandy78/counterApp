import React, { useState } from "react";
import Button from "./components/Button";
import Count from "./components/Count";
import "./App.css";


const App = () => {

  const [counterValue, setValue] = useState(0);



  return (
    <div className="container">
      <Button btnName="Increment" callback={() => { setValue(counterValue + 1) }} />
      <Count number={counterValue} />
      <Button btnName="Decrement" callback={() => { setValue(counterValue - 1) }} />
      <Button btnName="Reset" callback={() => { setValue(0) }} />


    </div>
  );
}

export default App;
