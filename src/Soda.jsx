import React from 'react';
import { NavLink } from 'react-router-dom';
import useComponent from './useComponent';


function Soda({ switchToComponent }) {
  return (
    <div>
      <h1>OMG SUGARRRRR</h1>
      {/* <button onClick={() => switchToComponent("vendingMachine")}>Go Back</button> */}
      <button><NavLink to="/">go back</NavLink></button>
    </div>
  );
}

export default Soda;
