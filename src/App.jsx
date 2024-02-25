import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import useComponent from './useComponent';

function App() {
  const [currentComponent, switchToComponent] = useComponent("vendingMachine");

  return (
    <Router>
      {currentComponent === 'soda' && <Soda switchToComponent={switchToComponent} />}
      {currentComponent === 'chips' && <Chips switchToComponent={switchToComponent} />}
      {currentComponent === 'sardines' && <Sardines switchToComponent={switchToComponent} />}
      {currentComponent === 'vendingMachine' && <VendingMachine switchToComponent={switchToComponent} />}
    </Router>
  );
}

export default App;
