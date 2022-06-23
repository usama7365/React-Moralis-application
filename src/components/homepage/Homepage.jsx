import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsArrowRightCircle, BsBoxArrowInUpRight } from "react-icons/bs";
// import { faCoffee } from '@fortawesome/fontawesome-free-solid';

import "font-awesome/css/font-awesome.min.css";
import CountUp from "react-countup";
import "../homepage/Homepage.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";

import { IconContext } from "react-icons";
import { FaFolder } from "react-icons/fa";
import img1 from "../homepage/homepageimg/1.png";
import img2 from "../homepage/homepageimg/2.png";
import img3 from "../homepage/homepageimg/3.png";
import img4 from "../homepage/homepageimg/4.png";
import img5 from "../homepage/homepageimg/5.png";
import img6 from "../homepage/homepageimg/first.gif";
import img7 from "../homepage/homepageimg/7.png";
import img8 from "../homepage/homepageimg/8.png";
// import img99 from "../homepage/homepageimg/9.png";
import img9 from "../homepage/homepageimg/img6.svg";
import img10 from "../homepage/homepageimg/thumbnail2.png";
import img11 from "../homepage/homepageimg/icon1.png";
import img12 from "../homepage/homepageimg/icon2.png";
export const homepage = () => {
  return (
    <>
      <div className="main">
        <div className="section-1">
          <div className="container py-5">
            <div className="col-lg-6">
              <h1 className="h1col">Empowered</h1>
              <h1 style={{ color: "#09c6f9" }}>
                {" "}
                Web3
                <br /> Development
              </h1>
              <p style={{ color: "#68738d", fontfamily: "sans-serif" }}>
                Moralis provides a single workflow for building high performance
                dapps. Fully compatible with your favorite web3 tools and
                services.
              </p>

              <button className="btn btn-dark btn-lg" href="#">
                Start for Free
              </button>

              <a href="">
                <span
                  style={{
                    color: "#00c3f8",
                    fontsize: "30px",
                    textdecoration: "none",
                    margin: "20px",
                  }}
                >
                  Questions? Talk to an expert{" "}
                  <BsArrowRightCircle className="styling" />
                </span>
              </a>
            </div>
            <div id="imagesss" className="col-lg-6">
              <img className="img-1" src={img1} />
              <img
                className="img2
              "
                alt="img2"
                src={img2}
              />
              <img src={img3} alt="img" className="img3" />
            </div>
          </div>
        </div>
        <img className="img4" src={img4} />

        <div className="number-section">
          <h2 style={{ fontsize: "30px" }}>
            Moralis saves developers time and
            <br /> money to ship scalable <br /> robust Dapps.
          </h2>

          <div id="letter-let">
            <p className="letter" style={{ color: "black" }}>
              <CountUp start={0} end={87} duration={5} prefix="%" />
              <br />
            </p>
            <p className="paraaa">Average Reduction In Time-To-Market</p>
            <p className="letter">
              {" "}
              <CountUp
                start={5}
                end={86.4}
                duration={5}
                prefix="$"
                decimal={0.4}
              />
            </p>

            <p className="paraaa">Average Reduction In Time-To-Market</p>

            <p className="paraaa">Total Engineering Costs Saved</p>
          </div>
        </div>
      </div>
      <div className="web-section">
        <p>THE WEB3 WORKFLOW</p>
        <span className="numbering">1</span>

        <h1 className="heading3">Authenticate Your users</h1>
        <p>
          Developers love Moralis as it saves up to 80% of the development time
          due to zero
          <br /> configuration features such as Moralis Identity.
        </p>
      </div>
      <div className="gif-section">
        <img className="img5" src={img5} />
        <div className="gif-text-section">
          <h1 className="heading4">Easy Authentication</h1>
          <p className="graphh">
            One line of code to authenticate users on any blockchain
            <br /> via any wallet. Moralis also supports web3 social login via
            <br /> Google, Twitter etc.
          </p>
          <h1 className="heading4">Flexible Identity Management</h1>
          <p className="graphh">
            Consolidate user addresses across multiple networks <br />
            and auth providers into a single
            <br /> user profile.
          </p>
          <h1 className="heading4">Effortless Session Management</h1>
          <p>
            Create, verify and invalidate user sessions. Moralis handles
            <br /> all the complex heavy lifting such as wallet signature
            <br /> verification, cookies etc.
          </p>
        </div>
      </div>
      <div className="historic">
        <div className="hrr">
          <hr />
        </div>

        <span className="numbering">2</span>
        <h1 className="heading3">
          Historic and Real-Time
          <br /> Transaction Monitoring
        </h1>
        <p className="ppp">
          Once the user is authenticated you need to monitor their transfers,
          trades, mints,
          <br /> burns and all other actions relevant to
          <br />
          your dapp. Moralis Monitoring was built to save you months of
          development.
        </p>
      </div>

      <div className="motion-img">
        <img className="img6" src={img6} />
      </div>

      <div className="Powerful ">
        <div className="line">
          <div className="hrr">
            <hr />
          </div>

          <span className="numbering">3</span>
          <h1 className="heading3">Powerful SDKs For Any Platform</h1>
          <p>
            Bring web3 to any platform simply by installing a small SDK. Moralis
            does all the
            <br /> platform specific groundwork while you can focus on your
            use-case.
          </p>
        </div>
      </div>

      <div className="gif-section">
        <img className="img7" src={img7} />
        <div className="gif-text-section">
          <h1>Web SDKs</h1>
          <p  >
            Bring web3 to your webpage by using vanillla<br/> Javascript or our
            dedicated React SDKs.
          </p>
          <h1>Game SDK</h1>
          <p >
            Build web3 games for any platform including web,<br/> mobile, Xbox and
            Playstation using Moralis Unity SDK.
          </p>
          <h1>Backend SDK</h1>
          <p>
            Connect your backend infrastructure to web3 and all<br/> Moralis features
            using our NodeJS SDK.
          </p>
        </div>
      </div>

      <div className="historic">
        <div className="hrr">
          <hr />
        </div>

        <span className="numbering">4</span>
        <h1 className="heading3">
          Cross-chain Web3 API
          <br /> Transaction Monitoring
        </h1>
        <p className="ppp">
          Get in-depth data about NFTs, tokens, user balances, transactions,
          <br />
          trades and much more!
        </p>
        <div className="main-img9">
          <img className="img9" src={img9} />
        </div>
      </div>

      <div className="motion-img">
        <a href="#" className="start">
          <BsArrowRightCircle className="styling" /> Start For Free
        </a>
      </div>
      {/* <img className="img99" src={img99} /> */}
      {/* <h1 className="heading5">
      Endless Integration with an <br/> Ecosystem of Plugins
      </h1>
      
      <p className="ppp">
      Morails supports many chanins and we are already powering many <br/> prominent web3 projects.
      </p> */}

      {/* The community section */}

      <div className="community-section">
        <div className="community-text">
          <p className="heading3">THE COMMUNITY</p>
          <p className="heading3">
            Learn Web3 Development
            <br />
            with Real Projects
          </p>
          <p style={{ fontweight: "Bolder" }}>
            Moralis supports many chains and we are already powering many <br />
            prominent web3 projects.
          </p>
          <div className="video-section">
            <ReactPlayer
              className="play"
              poster="../homepage/homepageimg/thumbnail.png"
              width="50%"
              height="550px"
              url="https://youtu.be/sAcEJcwPTOk"
            />
          </div>
          <div className="thumbnail-2">
            <img src={img10} className="img10" />
          </div>
          <button type="button" class="btn btn-light btn-lg" id="learnmore">
            Learn more
          </button>
          <div className="thumbnail-3">
            <h1>
              Join the community <br /> learn Web3 Development
            </h1>
            <p>
              From the beginning, Moralis has been a community centred project.
              Connect, learn and build together.
            </p>
            <div className="thumbnail-images">
              <div className="thumbnail-image-1">
                <img src={img11} className="img11" />
                <h1 style={{ color: "black" }}>Discord Community</h1>
                <p>
                  Join our DAO Discord Community, warmly
                  <br /> introduce yourself, and connect with other Dapp
                  <br />
                  builders!
                  <a href="">
                    Enrol Library
                    <BsBoxArrowInUpRight className="styling" />
                  </a>
                </p>
              </div>
              <div className="thumbnail-image-2">
                <img src={img12} className="img12" />
                <h1 style={{ color: "black" }}>Moralis Academy</h1>
                <p>
                  Our Academy will prepare you to quickly learn
                  <br /> the skills necessary to land a well paying job in
                  <br /> the fast-growing blockchain industry.
                  <a href="">
                    Enrol Now
                    <BsBoxArrowInUpRight className="styling" />
                  </a>
                </p>
              </div>
            </div>
            <div className="signup">
              <h1>
                Ready to <br />
                Start Building?
              </h1>
              <p>
                Get in-depth data about NFTs, tokens, user balances,
                transactions, trades and much more!
              </p>
              <button className="btn btn-outline-success btn-lg" href="#">
                Sign Up
              </button>
              <br />
              <br />
              <span>Already have an account?</span>
              <a href="">
                <span style={{ color: "blue" }}>Log in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default homepage;
