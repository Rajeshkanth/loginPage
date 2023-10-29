import React from "react";
import "./signin.css";

function SignInPage() {
  return (
    <>
      <div className="sign-container">
        <form action="" className="signIn">
          <input type="text" placeholder="Enter Registered Mobile / Mail" />
          <input type="password" placeholder="Enter password" />
          <button>Log in</button>
        </form>
      </div>
    </>
  );
}

export default SignInPage;
