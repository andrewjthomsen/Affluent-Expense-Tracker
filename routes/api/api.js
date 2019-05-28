import axios from "axios";

export default {
  // Get all expenses
  getExpenses: function() {
    return axios.get("/api/expenses");
  },

  // Get a specific expense defined by "id"
  getExpense: function(id) {
    return axios.get("/api/expenses/" + id);
  },

  // Add new expense
  addExpense: function(expenseData) {
    // console.log(expenseData);
    return axios.post("/api/expenses", expenseData);
  },

  // Delete a specific expense defined by "id"
  deleteExpense: function(id) {
    return axios.delete("/api/expenses/" + id);
  }
};

