import * as React from "react";
// import { Router } from 'react-router'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      // <!-- main -->
      <div className="main-w3layouts wrapper">
        <h1>Sign In Form</h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form action="/submit" method="post">
              <input
                className="signin"
                type="text"
                name="Username"
                placeholder={"UserName"}
                required="true"
              />

              <input
                className="signin"
                type="password"
                name="password"
                placeholder={"Password"}
                required="true"
              />

              <div className="wthree-text">
                <label className="anim">
                  <input type="checkbox" className="checkbox" required="" />
                  <span>I Agree To The Terms Conditions</span>
                </label>
                <div className="clear"> </div>
              </div>
              <input type="submit" value="SIGNIN" />
            </form>
            <p>
              Don&#39;t Have An Account? <a href="/login"> Sign Up Now!</a>
            </p>
          </div>
        </div>

        <ul className="colorlib-bubbles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    );
  }
}

export default SignIn;
