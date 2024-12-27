import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "1",
    date: new Date(2022, 2, 12),
    description: "AirPods",
    amount: 99.99,
  },
  {
    id: "2",
    date: new Date(2023, 10, 25),
    description: "MacBook",
    amount: 999.99,
  },
  {
    id: "3",
    date: new Date(2021, 7, 11),
    description: "IPhone",
    amount: 499.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
