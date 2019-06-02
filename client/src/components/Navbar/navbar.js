import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";
class Navbar extends React.Component {
	render() {
		return (
			<div>
				<ul className="nav">
					<li className="nav-item slam-left"><Link to="/">Home</Link></li>
					<li className="nav-item"><Link to="/expenses">Add Expense</Link></li>
					<li className="nav-item"><Link to="/balance">Balance</Link></li>
				</ul>
			</div>
			
		);
	}
}

export default Navbar;