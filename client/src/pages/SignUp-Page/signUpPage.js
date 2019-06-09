import * as React from "react";
import Navbar from "../../components/Navbar/navbar";
import RegisterUser from "../../components/registerUser/registerUser";
// import { Router } from 'react-router'

function SignUpPage() {
  return (
    // <!-- main -->
    <div>
      <Navbar />
      <RegisterUser/>
    </div>
  );
}

export default SignUpPage;
