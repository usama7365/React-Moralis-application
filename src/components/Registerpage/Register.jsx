import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../Registerpage/Register.css";
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
        <div className=" col-6 d-flex justify-content-center align-items-center">
          <img className=" h-15 w-40" src={backgroundimg1}></img>
        </div>
        <div className="col-md-5 ">
          <div className="login-section">
            <h1
              style={{ color: "black", fontweight: "bold", fontsize: "5.5rem" }}
            > Create Your Account</h1>
            <span style={{ color: "black", fontweight: "bold" }}>
              Don’t have an account yet?
            </span>
            <a href="">
              <span>Sign up</span>
            </a>
            <p>or</p>
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
              <input type="password" class=" fa fa-eye-slash form-control" id="pwd"  aria-hidden="true" ></input> 
            </div>
            <div class="form-group">
              <label for="pwd">Confirm Password:</label>
              <input type="password" class="form-control fa fa-eye-slash" id="pwd" ></input>
            </div>
            <input type="checkbox"></input>   I accept the Terms And Conditions and Privacy Policy
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
            </div>
            <br />
            <br />
            <a href="">
              <p>Fogot Your Password?</p>
            </a>
          </div>
        </div>
      </div>

    
    </>
  );
};
export default Login;
