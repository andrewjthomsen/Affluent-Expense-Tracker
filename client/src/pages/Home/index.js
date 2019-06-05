import * as React from "react";
import Navbar from "../../components/Navbar/navbar";
import SignIn from "../../components/SignIn/signIn";
// import { Router } from 'react-router'

function Home() {
  return (
    // <!-- main -->
    <div>
      <Navbar />
      <SignIn/>

    </div>
  );
}

export default Home;
