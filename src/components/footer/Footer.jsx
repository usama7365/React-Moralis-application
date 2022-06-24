import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaReddit,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "../footer/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Img2logo from "../../imagess/Logo.png"

export const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <div className="column-one">
          <div className="footer-logo">
            <img src={Img2logo} alt="" />
          </div>
          <br />
          <br />
          <p>Want The Latest News About Moralis?</p>
          <h3>
            Get access to monthly development updates, exciting new <br />{" "}
            projects, and much, much more.
          </h3>
          <input
          className="inp"
          
            type="text"
            name="name"
            placeholder="Enter Email address"
          ></input>
          <br />
          <br />

          <p>
            {" "}
            <input type="checkbox"></input>
            by subscribing you agree to the Terms of Use and Privacy Policy
          </p>
          <button type="button" style={{display:"unset"}} className="btn btn-primary ">
            Subcribe
          </button>
        </div>
        <div className="column-two">
          <h3>RESOURCES</h3>
          <a href="">
            <p>Documentation</p>
          </a>
          <a href="">
            <p>Pricing</p>
          </a>
          <a href="">
            <p>Moralis Research</p>
          </a>
          <a href="">
            <p>Moralis Projects<sup className="sup">hot</sup></p>
            
          </a>
          <a href="">
            {" "}
            <p>Roadmap</p>
          </a>
          <a href="">
            <p>Careers</p>
          </a>
          <a href="">
            <p>Morails Merch Store<sup className="sup">hot</sup></p>
          </a>
          <a href="">
            <p>Enviromental Policy</p>
          </a>
          <a href="">
            <p>Responsible Disclosure</p>
          </a>
          <a href="">
            <p>Morails Academy<sup className="sup">hot</sup></p>
          </a>
        
          <a href="">
            <p>Brand Resources </p>
          </a>
          <a href="">
            <p>Privacy Policy</p>
          </a>
          <a href="">
            <p>The tems of Use</p>
          </a>
          <a href="">
            <p>Find Investors<sup className="sup">hot</sup></p>
          </a>
        </div>
        <div className="column-three">
          <h3>SOCIALS</h3>
          <a href="">
            <li>
              <FaGithub />
              Github
            </li>
          </a>
          <a href="">
            {" "}
            <li>
              <FaYoutube />
              Youtube
            </li>
          </a>
          <a href="">
            <li>
              <FaLinkedin />
              Linkedin
            </li>
          </a>
          <a href="">
            {" "}
            <li>
              <FaTwitter />
              Twitter
            </li>
          </a>
          <a href="" className="classs">
            <li>
              <FaReddit />
              Reddit
            </li>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
