import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../loginpage/login.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ReCAPTCHA from "react-google-recaptcha";
import backgroundimg from "../loginpage/background.svg";
import backgroundimg1 from "../loginpage/download.png";

export const Login = () => {
  const [verified, setVerifed] = useState(false);
  function onChange(value) {
  console.log("Captcha value:", value);
  setVerifed(true);
}
  return (
    <>
      <div className="row col-12">
        <img src={backgroundimg} className="login-backgroundimg" ></img>
        <div className=" col-6 d-flex justify-content-center align-items-center">
          <img className=" h-15 w-40" id="login-bgimg" src={backgroundimg1}></img>
        </div>
        <div className="col-md-5 ">
          <div className="login-section">
            <h1>
            
              Log in
            </h1>
            <span >
              Don’t have an account yet?
            </span>
            <a href="">
              <span>Sign up</span>
            </a>
            <span>or</span>
            <a
              class="btn btn-lg btn-google btn-block text-uppercase btn-light"
              href="#"
            >
              <img src="https://img.icons8.com/color/16/000000/google-logo.png"></img>
              Continue with Google
            </a>
            <div class="form-group">
              <label for="usr">Name:</label>
              <input type="text" class="form-control" id="usr"></input>
            </div>
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" id="pwd"></input>
            </div>
            <input type="checkbox"></input>Keep me logged in.
            <br />
            <br />
            <br />
            <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} />,
            <div className="d-grid gap-2">
              {" "}
              <button
                type="button"
                class="btn btn-primary btn-lg mt-3  "
                disabled={!verified}
              >
                Log in
              </button>
              <a href="">
              <p>Fogot Your Password?</p>
            </a>
            </div>
           
            
          </div>
        </div>
      </div>

    
    </>
  );
};
export default Login;
