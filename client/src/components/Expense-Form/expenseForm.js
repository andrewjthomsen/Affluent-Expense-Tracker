// import React from "react";
// // import { TextInput } from "react-materialize";
// import Button from '@material-ui/core/Button';
// // AXIOS
// import axios from "axios";
// //import API from "../../routes/api/api";
// class ExpenseForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.onHandlePayee = this.onHandlePayee.bind(this);
//     this.onHandleAmount = this.onHandleAmount.bind(this);
//     this.onHandleCategory = this.onHandleCategory.bind(this);
//     this.onHandleComment = this.onHandleComment.bind(this);
//     // this.onHandleUser = this.onHandleUser.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       payee: "",
//       amount: "",
//       category: "",
//       comment: ""
//     };
//   }

//   onHandlePayee(e) {
//     console.log("this.state.payee", this.state.payee);
//     //e.preventDefault();
//     this.setState({
//       payee: e.target.value
//     });
//   }
//   onHandleAmount(e) {
//     //e.preventDefault();
//     this.setState({
//       amount: e.target.value
//     });
//   }
//   onHandleCategory(e) {
//     //e.preventDefault();
//     this.setState({
//       category: e.target.value
//     });
//   }
//   onHandleComment(e) {
//     //e.preventDefault();
//     this.setState({
//       comment: e.target.value
//     });
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     //console.log(`The values are ${this.state.payee}, ${this.state.amount}, and ${this.state.comment}`)
//     const obj = {
//       payee: this.state.payee,
//       amount: this.state.amount,
//       category: this.state.category,
//       comment: this.state.comment
//     };
//     console.log(obj);
//     axios
//       .post("http://localhost:5000/api/add", obj)
//       .then(res => console.log(res.data));

//     // API.addExpense(obj)
//     // .then(res => console.log(res.data));

//     this.setState({
//       payee: "",
//       amount: "",
//       category: "",
//       comment: ""
//     });
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.onSubmit}>
//           <input
//             type="text"
//             placeholder="payee"
//             id="payee"
//             value={this.state.payee}
//             onChange={this.onHandlePayee}
//           />
//           <input
//             type="text"
//             placeholder="amount"
//             id="amount"
//             value={this.state.amount}
//             onChange={this.onHandleAmount}
//           />
//           <select
//             id="category"
//             value={this.state.category}
//             onChange={this.onHandleCategory}
//           >
//             <option value="Books">Books</option>
//             <option value="Clothes">Clothes</option>
//             <option value="Electricity">Electricity</option>
//             <option value="Food">Food</option>
//             <option value="Fruit">Fruit</option>
//             <option value="Grocery">Grocery</option>
//             <option value="Internet">Internet</option>
//             <option value="Food">Food</option>
//             <option value="Traveling">Traveling</option>
//             <option value="Uncategorized">Uncategorized</option>
//           </select>
//           <textarea
//             name="comment"
//             form="usrform"
//             id="comment"
//             value={this.state.comment} onChange={this.onHandleComment}
//           />
//           <Button variant="contained" color="primary" type="submit">
//             Submit
//           </Button>
//         </form>
//       </div>
//     );
//   }
// }

// export default ExpenseForm;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import { Link } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {/* {['Home', 'Add Expense', 'View Balance', 'Drafts'].map((text, index) => ( */}
            <ListItem button key={"Home"}>
              <Link to="/">Home</Link>
              {/* <ListItemText primary={text} /> */}
            </ListItem>
          {/* ))} */}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}

export default PermanentDrawerLeft;