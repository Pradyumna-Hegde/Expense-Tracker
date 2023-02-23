import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../../shared.css";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { title, amount, date } = props.expense;

  const [Title, setTitle] = useState(title);

  const changeTitle = () => {
    setTitle("Title changed");
    console.log(Title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{Title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={changeTitle}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
