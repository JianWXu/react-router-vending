import React from "react";
import ToggleMachine from "./Toggle";
import VendingMachine from "./VendingMachine";

function Sardines() {
  const [showVendingMachine, setShowVendingMachine] = ToggleMachine()
  const handleButtonClick =() =>{
    setShowVendingMachine(prevState => ! prevState)
  }
  return (    
    
    <div>
    <h1>YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU!</h1>
      {showVendingMachine && <VendingMachine /> }
      <button onClick={handleButtonClick}>Go Back</button>
       
    </div>
  );
  
}

export default Sardines;
