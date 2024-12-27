import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const changeYearHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(
    (filteredCost) =>
      filteredCost.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={changeYearHandler} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};

export default Costs;
