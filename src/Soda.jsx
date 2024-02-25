import {React, useState} from "react";
import VendingMachine from "./VendingMachine";
import ToggleMachine from "./Toggle";

function Soda() {
  
  const [showVendingMachine, setShowVendingMachine] = ToggleMachine()
 
  const handleButtonClick = () => {
    setShowVendingMachine(prevState => !prevState);
  };

  return (
    <div>
      <h1>OMG SUGARRRRR</h1>
      {showVendingMachine && <VendingMachine /> }
      <button onClick={handleButtonClick}>Go Back</button>
       
    </div>
  );
}

export default Soda;
