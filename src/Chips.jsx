import { React, useState } from "react";
import ToggleMachine from "./Toggle";
import VendingMachine from "./VendingMachine";

function Chips() {
  const [count, setCount] = useState(0);
  const [showVendingMachine, setShowVendingMachine] = ToggleMachine()
  const handleButtonClick =() =>{
    setShowVendingMachine(prevState => ! prevState)
  }
 
  return (    
    
    <div>
    <h1>Bags Eaten: {count}</h1>      
      <button onClick={() => setCount(count => count + 1)}>NOM NOM NOM</button>
      {showVendingMachine && <VendingMachine /> }
      <button onClick={handleButtonClick}>Go Back</button>
       
    </div>
  );

  
}

export default Chips;
