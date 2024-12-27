import "./NewCost.css";
import CostForm from "./CostForm";

const NewCost = (props) => {
  const saveCostDataHandler = (inputCostData) => {
    props.onAddCost(inputCostData);
  };
  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler} />
    </div>
  );
};

export default NewCost;
