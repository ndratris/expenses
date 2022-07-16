import logo from "./logo.svg";
import "./App.css";
import ExpenseData from "./components/ExpenseData";
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
  return <ExpenseData item={expense} />;
}

export default App;
