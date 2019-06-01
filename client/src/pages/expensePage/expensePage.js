import * as React from "react";
import Navbar from "../../components/Navbar/navbar";
// import { Router } from 'react-router'
import ExpenseForm from "../../components/Expense-Form/expenseForm";

function expensePage() {
  return (
    // <!-- main -->
    <div>
      <Navbar />
      <ExpenseForm/>
    </div>
  );
}

export default expensePage;
