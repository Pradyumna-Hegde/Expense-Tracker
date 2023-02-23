import React from "react";
import ExpenseForm from "./ExpenseForm";
import "../../shared.css";
import "./NewExpense.css";

const NewExpense = (props) => {
  const handleNewExpenseData = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpenseData={handleNewExpenseData} />
    </div>
  );
};

export default NewExpense;
