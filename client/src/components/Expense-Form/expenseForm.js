import React from "react";
// import { TextInput } from "react-materialize";
// AXIOS
import axios from "axios";
//import API from "../../routes/api/api";
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
    console.log("this.state.payee", this.state.payee);
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
          <input
            type="text"
            placeholder="payee"
            id="payee"
            value={this.state.payee}
            onChange={this.onHandlePayee}
          />
          <input
            type="text"
            placeholder="amount"
            id="amount"
            value={this.state.amount}
            onChange={this.onHandleAmount}
          />
          <select
            id="category"
            value={this.state.category}
            onChange={this.onHandleCategory}
          >
            <option value="Books">Books</option>
            <option value="Clothes">Clothes</option>
            <option value="Electricity">Electricity</option>
            <option value="Food">Food</option>
            <option value="Fruit">Fruit</option>
            <option value="Grocery">Grocery</option>
            <option value="Internet">Internet</option>
            <option value="Food">Food</option>
            <option value="Traveling">Traveling</option>
            <option value="Uncategorized">Uncategorized</option>
          </select>
          <textarea
            name="comment"
            form="usrform"
            id="comment"
            value={this.state.comment} onChange={this.onHandleComment}
          />
          <button type="submit" color="primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
