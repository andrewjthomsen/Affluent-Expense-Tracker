import React from "react";
import Table from "components/Table/Table.jsx";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import cardBodyStyle from "assets/jss/material-dashboard-react/components/cardBodyStyle.jsx";
// import tableData from "./tableData";
// BRING IN AXIOS
import axios from "axios";
class CardBody extends React.Component {
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
    const {
      classes,
      className,
      children,
      plain,
      profile,
      ...rest
    } = this.props;
    const cardBodyClasses = classNames({
      [classes.cardBody]: true,
      [classes.cardBodyPlain]: plain,
      [classes.cardBodyProfile]: profile,
      [className]: className !== undefined
    });
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
      <div className={cardBodyClasses} {...rest}>
        {children}
        <div>
          <Table
            tableHeaderColor="warning"
            tableHead={["Payee", "Amount", "Category", "Comment"]}
            tableData={tableData}
          />
        </div>
      </div>
    );
  }
}

CardBody.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool
};

export default withStyles(cardBodyStyle)(CardBody);
