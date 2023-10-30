import React, { memo, useContext, useState } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import { myContext } from "../App";
import { FaUser, FaUserNinja, FaRegEyeSlash, FaRegEye } from "react-icons/fa";

function SignInPage() {
  const navigate = useNavigate();
  const user = useContext(myContext);
  const [type, setType] = useState(true);

  const handleType = () => {
    setType(!type);
  };

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
        <form action="">
          <div className="signIn">
            <input
              type="text"
              placeholder="Enter Registered Mobile / Mail"
              onChange={(e) => handleUserName(e)}
            />
            <FaUser className="userIcon" />
            <input
              type={type ? "password" : "text"}
              placeholder="Enter password"
              onChange={(e) => handlePswd(e)}
            />
            {type ? (
              <FaRegEyeSlash className="signEye" onClick={handleType} />
            ) : (
              <FaRegEye className="signEye" onClick={handleType} />
            )}
            <button onClick={(e) => dashboard(e)}>Log in</button>
            <span>forgot password?</span>
          </div>
        </form>
      </div>
    </>
  );
}

export default memo(SignInPage);
