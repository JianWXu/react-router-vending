import { React, useState } from "react";
import useComponent from "./useComponent";
import { Link, Route, NavLink } from "react-router-dom";

function Chips({switchToComponent}) {
  const [count, setCount] = useState(0);  
 
  return (    
   

    <div>
      <h1>Bags Eaten: {count}</h1>
      <button onClick={() => setCount(count => count + 1)}>NOM NOM NOM</button>
      {/* <button onClick={() => switchToComponent("vendingMachine")}>Go Back</button> */}
      
      <button><NavLink to="/">go back</NavLink></button>
       
    </div>
  );

  
}

export default Chips;


