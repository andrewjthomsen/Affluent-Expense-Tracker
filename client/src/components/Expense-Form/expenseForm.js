import React from "react";
// AXIOS
import axios from "axios";
//import API from "../../routes/api/api";
// const expenseCategories = [
//   { label: "Books", value: "books" },
//   { label: "Clothes", value: "clothes" },
//   { label: "Electricity", value: "electricity" },
//   { label: "Food", value: "food" },
//   { label: "Fruit", value: "fruit" },
//   { label: "Grocery", value: "grocery" },
//   { label: "Internet", value: "internet" },
//   { label: "Phone", value: "internet" },
//   { label: "Traveling", value: "traveling" },
//   { label: "Uncategorized", value: "uncategorized" }
// ];
class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.onHandlePayee = this.onHandlePayee.bind(this);
    this.onHandleAmount = this.onHandleAmount.bind(this);
    this.onHandleCategory = this.onHandleCategory.bind(this);
    this.onHandleComment = this.onHandleComment.bind(this);
    // this.onHandleUser = this.onHandleUser.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      payee: "",
      amount: "",
      category: "",
      comment: ""
    };
  }

  onHandlePayee(e) {
    //e.preventDefault();
    this.setState({
      payee: e.target.value
    });
  }
  onHandleAmount(e) {
    //e.preventDefault();
    this.setState({
      amount: e.target.value
    });
  }
  onHandleCategory(e) {
    //e.preventDefault();
    this.setState({
      category: e.target.value
    });
  }
  onHandleComment(e) {
    //e.preventDefault();
    this.setState({
      comment: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    //console.log(`The values are ${this.state.payee}, ${this.state.amount}, and ${this.state.comment}`)
    const obj = {
      payee: this.state.payee,
      amount: this.state.amount,
      category: this.state.category,
      comment: this.state.comment
    };
    console.log(obj);
    axios
      .post("http://localhost:5000/api/add", obj)
      .then(res => console.log(res.data));

    // API.addExpense(obj)
    // .then(res => console.log(res.data));

    this.setState({
      payee: "",
      amount: "",
      category: "",
      comment: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <select>
            <option value="Books">Books</option>
          </select>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
