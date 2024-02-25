import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";
import useVendingComponent from "./useComponent";

function VendingMachine({switchToComponent}) {


  return (
    <div>
      <div>
        <NavLink to="/soda">
          Soda
        </NavLink>
        <NavLink to="/chips">
          Chips
        </NavLink>
        <NavLink to="/sardines">
          Sardines
        </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<h1>HELLO I AM A VENDING MACHINE, WHAT WOULD YOU LIKE TO EAT?</h1>} />
        <Route path="/soda" element={<Soda switchToComponent={switchToComponent} />} />
        <Route path="/chips" element={<Chips switchToComponent={switchToComponent} />} />
        <Route path="/sardines" element={<Sardines switchToComponent={switchToComponent} />} />
      </Routes>
    </div>
  );
}

export default VendingMachine;
