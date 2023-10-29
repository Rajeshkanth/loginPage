import React, { memo, useContext, useState } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { myContext } from "../App";

function SignInPage() {
  const navigate = useNavigate();
  const user = useContext(myContext);

  const [mobile, setMobile] = useState("");
  const [pswd, setPswd] = useState("");

  const handleUserName = (e) => {
    setMobile(e.target.value);
  };
  const handlePswd = (e) => {
    setPswd(e.target.value);
  };

  const dashboard = (e) => {
    e.preventDefault();
    for (let i = 0; i < user.SignUpDetails.length; i++) {
      if (
        (user.SignUpDetails[i].Mail === mobile ||
          user.SignUpDetails[i].Mobile === mobile) &&
        user.SignUpDetails[i].ConfirmPswd === pswd
      ) {
        navigate("/dashboard");
      }
    }
  };

  return (
    <>
      <div className="sign-container">
        <form action="" className="signIn">
          <input
            type="text"
            placeholder="Enter Registered Mobile / Mail"
            onChange={(e) => handleUserName(e)}
          />
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => handlePswd(e)}
          />
          <button onClick={(e) => dashboard(e)}>Log in</button>
        </form>
      </div>
    </>
  );
}

export default memo(SignInPage);
