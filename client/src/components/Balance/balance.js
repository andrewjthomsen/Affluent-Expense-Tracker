import React from "react";
import axios from "axios";
class Balance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    };
  }

  async componentDidMount() {
    const result = await axios("http://localhost:5000/api/expenses");

    let data = result.data;
    console.log(data);
    data.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    // console.log(data);

    this.setState({ data: data });
  }

  render() {
    let tableData = [];
    for (var i = 0; i < this.state.data.length; ++i) {
      let expense = this.state.data[i];
      let row = [
        expense.payee,
        expense.amount,
        expense.category,
        expense.comment
      ];
      tableData.push(row);
    }
    return (
      <div className="balance">
        <div>
          <p>{tableData}</p>
        </div>
      </div>
    );
  }
}

export default Balance;
