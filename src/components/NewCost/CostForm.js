import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [showForm, setShowForm] = useState(0);

  const nameChangedHandler = (event) => {
    setInputName(event.target.value);
  };

  const amountChangedHandler = (event) => {
    setInputAmount(event.target.value);
  };

  const dateChangedHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      id: Math.round(Math.random() * (1000 - 4) + 4),
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    props.onSaveCostData(costData);

    setInputName("");
    setInputAmount("");
    setInputDate("");
    setShowForm(0);
  };

  const showFormHandler = () => {
    if (showForm === 1) {
      setShowForm(0);
      return;
    }
    setShowForm(1);
  };
  if (showForm === 0) {
    return <button onClick={showFormHandler}>Добавить новый расход</button>;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" value={inputName} onChange={nameChangedHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-09-03"
            value={inputDate}
            onChange={dateChangedHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button type="button" onClick={showFormHandler}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
