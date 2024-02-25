import React from 'react';
import { NavLink } from 'react-router-dom';
import useComponent from './useComponent';


function Sardines({ switchToComponent }) {
  return (
    <div>

      <h1>YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU!</h1>
      {/* <button onClick={() => switchToComponent("vendingMachine")}>Go Back</button> */}
      <button><NavLink to="/">go back</NavLink></button>
    </div>
  );
}

export default Sardines;
