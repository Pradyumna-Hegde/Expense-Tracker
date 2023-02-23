import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "../../shared.css";
import "./ExpenseItems.css";

const ExpenseItems = (props) => {
  const { expenses } = props;

  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} expense={expense} />;
      })}
    </Card>
  );
};

export default ExpenseItems;
