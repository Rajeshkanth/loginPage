import React, { memo } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsShieldCheck } from "react-icons/bs";

function RegisterAlert() {
  return (
    <>
      <div className="registerContainer">
        <div className="NA">
          <h1>New Account</h1>
          <AiOutlineClose className="close" onClick={} />
        </div>
        <h1>Successfully Registered !</h1>
      </div>
    </>
  );
}

export default memo(RegisterAlert);
