import * as React from "react";
import Navbar from "../../components/Navbar/navbar";
import RegisterUser from "../../components/RegisterUser/registerUser";
// import { Router } from 'react-router'

function SignIn() {
  return (
    // <!-- main -->
    <div>
      <Navbar />
      <RegisterUser/>
    </div>
  );
}

export default SignIn;
