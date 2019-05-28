import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Style from "../../assets/jss/material-dashboard-react/views/dashboardStyle";
import avatar from "assets/img/faces/marc.jpg";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
// import Expense from "../../../../models/expense";
// AXIOS
import axios from "axios";
//import API from "../../routes/api/api";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
class AddExpense extends React.Component {
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
      // user: "",
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
  // onHandleUser(e) {
  //   //e.preventDefault();
  //   this.setState({
  //     user: e.target.value
  //   });
  // }

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
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <Card>
                <CardHeader color="primary">
                  <h4 className={Style.cardTitle}>Add an Expense</h4>
                  <p className={Style.cardCategoryWhite}>
                    Use this section to insert a new Expense
                  </p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Payee"
                        id="payee"
                        inputProps={{
                          value: this.state.payee,
                          onChange: this.onHandlePayee
                        }}
                        required
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Amount"
                        id="amount"
                        inputProps={{
                          value: this.state.amount,
                          onChange: this.onHandleAmount
                        }}
                        required
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <InputLabel htmlFor="age-helper">Category</InputLabel>
                      <Select
                        inputProps={{
                          value: this.state.category,
                          onChange: this.onHandleCategory
                        }}
                        input={<Input name="age" id="age-helper" />}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"books"}>Books</MenuItem>
                        <MenuItem value={"clothes"}>Clothes</MenuItem>
                        <MenuItem value={"electricity"}>Electricity</MenuItem>
                        <MenuItem value={"food"}>Food</MenuItem>
                        <MenuItem value={"fruit"}>Fruit</MenuItem>
                        <MenuItem value={"grocery"}>Grocery</MenuItem>
                        <MenuItem value={"internet"}>Internet</MenuItem>
                        <MenuItem value={"phone"}>Phone</MenuItem>
                        <MenuItem value={"traveling"}>Traveling</MenuItem>
                        <MenuItem value={"uncategorized"}>
                          Uncategorized
                        </MenuItem>
                        <MenuItem value={"vegetables"}>Vegetables</MenuItem>
                      </Select>
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText="comment"
                        id="comment"
                        inputProps={{
                          value: this.state.comment,
                          onChange: this.onHandleComment,
                          multiline: true,
                          rows: 5
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card profile>
                <CardAvatar profile>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={avatar} alt="..." />
                  </a>
                </CardAvatar>
              </Card>
            </GridItem>
          </GridContainer>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(AddExpense);
