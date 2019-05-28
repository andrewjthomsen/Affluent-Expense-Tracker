import React from 'react';
import './App.css';
import Balance from './components/Balance/balance';
import ExpenseForm from './components/Expense-Form/expenseForm';



function App() {
  return (
    <div className="App">
      <Balance></Balance>
      <ExpenseForm></ExpenseForm>
    </div>
  );
}

export default App;
