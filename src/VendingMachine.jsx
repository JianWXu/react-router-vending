import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";

function VendingMachine() {
  return (
    <div>      
      <Router>
        <div>
          <NavLink exact to="/soda">
            Soda
          </NavLink>
          <NavLink exact to="/chips">
              Chips
          </NavLink>
          <NavLink exact to="/sardines">
              Sardines
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<h1>HELLO I AM A VENDING MACHINE, WHAT WOULD YOU LIKE TO EAT?</h1>} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/sardines" element={<Sardines />} />
        </Routes>
      </Router>
    </div>
  );
}

export default VendingMachine;
