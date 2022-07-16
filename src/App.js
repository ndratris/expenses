import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expense = [
    {
      id: "a1",
      title: "Toilet Paper",
      amount: 27,
      date: new Date(2020, 7, 14),
    },
    {
      id: "a2",
      title: "Papeclip",
      amount: 2,
      date: new Date(2021, 5, 11),
    },
    {
      id: "a3",
      title: "Car Door",
      amount: 300,
      date: new Date(2022, 1, 21),
    },
    {
      id: "a4",
      title: "Tissue",
      amount: 2,
      date: new Date(2022, 6, 10),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
      <p>this is paragraf</p>
    </div>
  );
}

export default App;
