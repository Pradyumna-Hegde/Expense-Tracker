import ExpenseItems from "./components/Expenses/ExpenseItems";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 10.94,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "New Tv (V-guard)",
      amount: 294.94,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 326.94,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 412.94,
      date: new Date(2021, 2, 28),
    },
  ];

  const handleAddExpenseData = (expenseData) => {
    console.log(`Rendering from App.js file` + expenseData);
  };

  return (
    <>
      <NewExpense onAddExpenseData={handleAddExpenseData} />
      <ExpenseItems expenses={expenses} />
    </>
  );
}

export default App;
