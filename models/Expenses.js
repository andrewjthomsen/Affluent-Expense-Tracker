const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Expense = new Schema({
  createdAt: {
    type: Date,
    required: true,
    default: new Date()
  },
  payee: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  comment: {
    type: String
  },
},{ 
    collection: 'expense'
});

module.exports = mongoose.model("Expense", Expense);