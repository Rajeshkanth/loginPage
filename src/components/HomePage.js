import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import SVG from "./svg/svg";
import "./homepage.css";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function HomePage() {
  const navigate = useNavigate();
  const [bymail, setByMail] = useState(true);
  const [isContinue, setIsContinue] = useState(false);
  const [mail, setMail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [createPswd, setCreatePswd] = useState("");
  const [confirmPswd, setConfirmPswd] = useState("");
  const [type, setType] = useState(true);
  const [type2, setType2] = useState(true);
  const [SignUpDetails, setSignUpDetails] = useState([]);

  const handleInput = (input, e) => {
    switch (input) {
      case "mail":
        setMail(e.target.value);
        break;
      case "mobileNo":
        setMobileNo(e.target.value);
        break;
      case "createPswd":
        setCreatePswd(e.target.value);
        break;
      case "confirmPswd":
        setConfirmPswd(e.target.value);
        break;
    }
  };

  const handleType = (ty) => {
    switch (ty) {
      case "create":
        setType(!type);
        break;
      case "confirm":
        setType2(!type2);
    }
  };

  const continueBtn = (e) => {
    // e.preventDefault();
    if ((mail || mobileNo) && createPswd && confirmPswd) {
      let user = {
        CreatePswd: createPswd,
        ConfirmPswd: confirmPswd,
      };
      if (bymail !== true) {
        user.MobileNo = mobileNo;
      } else {
        user.Mail = mail;
      }
      setIsContinue(true);
      setSignUpDetails([...SignUpDetails, user]);
    }
    setMail("");
    setCreatePswd("");
    setConfirmPswd("");
    setMobileNo("");
    console.log(SignUpDetails);
  };

  const signup = () => {
    navigate("/signup");
  };

  const handlemail = () => {
    setByMail(true);
  };
  const handlenumber = () => {
    setByMail(false);
  };

  useEffect(() => {
    console.log(SignUpDetails);
  }, [SignUpDetails]);
  return (
    <>
      <div className="create-account-container">
        <div className="left">
          <div className="svg">
            <SVG />
            <p className="moonsoon">MOONSOON</p>
          </div>
          <div className="container">
            <h1 className="ca">Create Account</h1>
            <div className="ca-container">
              <p
                className={bymail ? "byEmail" : "byMail2"}
                onClick={handlemail}
              >
                by Email
              </p>
              <p
                className={bymail ? "byPhone" : "byPhone2"}
                onClick={handlenumber}
              >
                by Phone
              </p>
            </div>
            <form action="">
              {bymail ? (
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={mail}
                  onChange={(e) => handleInput("mail", e)}
                  required
                />
              ) : (
                <input
                  type="number"
                  placeholder="Enter mobile number"
                  value={mobileNo}
                  onChange={(e) => handleInput("mobileNo", e)}
                  required
                />
              )}
              <input
                type={type ? "password" : "text"}
                minLength={6}
                maxLength={10}
                placeholder="Create password"
                value={createPswd}
                onChange={(e) => handleInput("createPswd", e)}
                required
              />
              <FaRegEye className="eye" onClick={() => handleType("create")} />
              {/* {createPswd.length < 6 && createPswd !== "" ? (
                <h6 className="alert">minimum length 6 </h6>
              ) : null} */}
              <input
                type={type2 ? "password" : "text"}
                minLength={6}
                maxLength={10}
                placeholder="Confirm password"
                value={confirmPswd}
                onChange={(e) => handleInput("confirmPswd", e)}
                required
              />
              <FaRegEye className="eye" onClick={() => handleType("confirm")} />
              {createPswd != confirmPswd ? (
                <h6 className="alert">password doesn't match</h6>
              ) : null}
              <button className="continue" onClick={(e) => continueBtn(e)}>
                Continue
              </button>
            </form>

            <p className="by">By signing up, I have read and agree to</p>
            <p className="and">
              <span>Terms</span> and <span>Privacy Policy</span>
            </p>

            <p className="sign" onClick={signup}>
              old Moonsooner? <span>Sign in</span>
            </p>
            {isContinue ? (
              <div className="registerContainer">
                <div className="NA">
                  <h1>New Account</h1>
                  <AiOutlineClose
                    className="close"
                    onClick={() => setIsContinue(!isContinue)}
                  />
                </div>
                <h1>Successfully Registered !</h1>
              </div>
            ) : null}
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
}

export default HomePage;
