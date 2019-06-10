import React from "react";
// import { TextInput } from "react-materialize";
// AXIOS
import axios from "axios";
//import API from "../../routes/api/api";
class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleFirstName = this.onHandleFirstName.bind(this);
    this.onHandleLastName = this.onHandleLastName.bind(this);
    this.onHandleEmail = this.onHandleEmail.bind(this);
    this.onHandleUserName = this.onHandleUserName.bind(this);
    this.onHandlePassWord = this.onHandlePassWord.bind(this);
    // this.onHandleUser = this.onHandleUser.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      passWord: ""
    };
  }

  onHandleFirstName(e) {
    console.log("this.state.firstName", this.state.firstName);
    //e.preventDefault();
    this.setState({
      firstName: e.target.value
    });
  }
  onHandleLastName(e) {
    //e.preventDefault();
    this.setState({
      lastName: e.target.value
    });
  }
  onHandleEmail(e) {
    //e.preventDefault();
    this.setState({
      email: e.target.value
    });
  }
  onHandleUserName(e) {
    //e.preventDefault();
    this.setState({
      userName: e.target.value
    });
  }
  onHandlePassWord(e) {
    console.log("this.state.password", this.state.passWord);
    //e.preventDefault();
    this.setState({
      passWord: e.target.value
    });
  }
  // onSubmit(e) {
  //   e.preventDefault();
  //   //console.log(`The values are ${this.state.payee}, ${this.state.amount}, and ${this.state.comment}`)
  //   const obj = {
  //     firstName: this.state.fisrtName,
  //     lastName: this.state.lastName,
  //     email: this.state.email,
  //     userName: this.state.userName,
  //     passWord: this.state.passWord
  //   };
  //   console.log(obj);
  //   axios
  //     .post("http://localhost:5000/registerUser", obj)
  //     .then(res => console.log(res.data));

  //   // API.addExpense(obj)
  //   // .then(res => console.log(res.data));

  //   this.setState({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     userName: "",
  //     passWord: ""
  //   });
  // }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="first_name"
            id="first_name"
            value={this.state.firstName}
            onChange={this.onHandleFirstName}
          />
          <input
            type="text"
            placeholder="last_name"
            id="last_name"
            value={this.state.lastName}
            onChange={this.onHandleLastName}
          />
           <input
            type="text"
            placeholder="email"
            id="email"
            value={this.state.email}
            onChange={this.onHandleEmail}
          />
            <input
            type="text"
            placeholder="username"
            id="username"
            value={this.state.userName}
            onChange={this.onHandleUserName}
          />
            <input
            type="text"
            placeholder="password"
            id="password"
            value={this.state.passWord}
            onChange={this.onHandlePassWord}
          />
          <button type="submit" action="/registerUser" method="post" color="primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default RegisterUser;
