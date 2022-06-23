import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

import "../Careerspage/Careers.css";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "../Careerspage/1.jpeg";
import img2 from "../Careerspage/2.png";
import careersimg3 from "../Careerspage/3.png";
import careersimg4 from "../Careerspage/4.png";
import careersimg5 from "../Careerspage/5.png";
import careersimg6 from "../Careerspage/6.png";
import careersimg7 from "../Careerspage/7.png";
import careersimg11 from "../Careerspage/11.png";
import careersimg12 from "../Careerspage/carosal.jpeg";
import careersimg13 from "../Careerspage/carosal2.png";
import careersimg14 from "../Careerspage/carosal3.png";
import careersimg21 from "../Careerspage/21.jpeg";
import careersimg22 from "../Careerspage/22.jpeg";
export const Careers = () => {
  const [heart, setHeartRed] = useState({
    state: false,
    number: "0",
  });


const  burgerToggle= ()=> {
    let linksEl = document.querySelector(".narrowLinkss");
    if (linksEl.style.display === "none") {
      linksEl.style.display = "block";
    } else {
      linksEl.style.display = "none";
    }
  }

  return (
    <>
   <nav>
        <div className="navWide">
          
        <div className="wideDiv">
          <i className="fa fa-bars fa-2x" onClick={burgerToggle}></i>
          <div className="narrowLinkss">
            <div className="career-noo">hdishidhasbdjasbdbasuidhabdudbdhuih</div>
          </div>
        </div>
        </div>

      </nav>




      <div className="career-main-page">
        <div className="career-web">
          <span>Start your Web3 Career</span>
          <span>
            <button class="btn btn-info btn-lg ">Connect</button>
            <button class="btn btn-info btn-lg ">Job Opening</button>
          </span>
          <div className="scroll-conatainer">
            <scroll-page href="">
              <i className="fa fa-angle-down"></i>
            </scroll-page>
          </div>
        </div>

        <div className="career-unique">
          <h1>A Unique Career</h1>
          <p>
            Moralis is changing the way blockchain developers work by <br />
            providing them with the most efficient and groundbreaking <br />
            software. <br />
            Working at Moralis means working in a fast, dedicated, <br />
            and innovative environment. You will also have the opportunity
            <br /> to work with the best projects in the Blockchain industry.
            Our goal is <br />
            that Moralis becomes the main platform for building, running and
            maintaining <br /> dapps and that in a few years you’ll be able to
            say: “I was part of building that,
            <br /> I was part of the Moralis Tale.” Do you think you got what it
            takes? Let us know👇
          </p>
        </div>

        <div>
          <div className="careers-container">
            <h1>Current Job Opening</h1>
            <p>
              <a href="">QA Engineer - payments</a>
            </p>
            <p>
              ENGINEERING · FULLY REMOTE
              <i class="fa fa-wifi" style={{ fontsize: "25px" }}></i>
            </p>
            <hr />

            <p>
              <a href="">QA Engineer - payments</a>
            </p>
            <p>
              ENGINEERING · FULLY REMOTE
              <i class="fa fa-wifi" style={{ fontsize: "25px" }}></i>
            </p>
            <hr />

            <p>
              <a href="">QA Engineer - payments</a>
            </p>
            <p>
              ENGINEERING · FULLY REMOTE
              <i class="fa fa-wifi" style={{ fontsize: "25px" }}></i>
            </p>
            <hr />

            <p>
              <a href="">QA Engineer - payments</a>
            </p>
            <p>
              ENGINEERING · FULLY REMOTE
              <i class="fa fa-wifi" style={{ fontsize: "25px" }}></i>
            </p>
            <hr />

            <p>
              <a href="">QA Engineer - payments</a>
            </p>
            <p>
              ENGINEERING · FULLY REMOTE
              <i class="fa fa-wifi" style={{ fontsize: "25px" }}></i>
            </p>
            <hr />
            <button class="btn btn-info">
              All Jobs Opening<i class="fas fa-angle-right	"></i>
            </button>
          </div>
          <h1>Departments</h1>
        </div>
        <div className="careers-secton container">
          <div className="careers-img">
            <img src={careersimg3} />
            <p>Finance</p>
            <img src={careersimg4} />
            <p>Finance</p>
            <img src={careersimg4} />
            <p>Finance</p>
          </div>
          <div className="careers-img">
            <img src={careersimg5} />
            <p>Finance</p>
            <img src={careersimg6} />
            <p>Finance</p>
            <img src={careersimg7} />
            <p>Finance</p>
          </div>
          <div className="careers-img">
            <img src={careersimg5} />
            <p>Finance</p>
            <img src={careersimg6} />
            <p>Finance</p>
            <img src={careersimg7} />
            <p>Finance</p>
          </div>
        </div>

        <div class="careers-2 row">
          <div class="col-md-6">
            <img src={careersimg11} />
          </div>

          <div class="col-md-6">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100 h-80"
                    src={careersimg12}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 h-80"
                    src={careersimg13}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block  w-100 h-80"
                    src={careersimg14}
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev h-100"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="Moralis-Values container">
            <h1>Moralis Values</h1>
            <p>
              Moralis has 6 main values. They can
              <br /> be abbreviated as CREDIT.
            </p>
            <p>🤝 Collaboration</p>
            <p>📈 Results</p>
            <p>⏱️ Efficiency</p>
            <p>🗺️ Diversity</p>
            <p>👣 Iteration</p>
            <p>👀 Transparency</p>
            <p>
              You can read more about <br />
              them here in our handbook.
            </p>
            <h1>What’s it like to work at Moralis?</h1>
          </div>
          <div class="career2-img row container">
            <div class="col-md-6">
              <img src={careersimg21} className="caree1rsimg2" />
              <p>
                I never came across an organization whose
                <br /> team I appreciate as much, as in Moralis.
                <br /> They say love your work and not the
                <br />
                company. But trust me, in Moralis, it’s <br />
                inevitable to be fond of both.
              </p>
              <h2>Joanna</h2>
              <p>Content Specialist</p>
            </div>
            <div class="col-md-6">
              <img src={careersimg22} className="caree1rsimg22" />
              <p>
                I can't tell you what it is like to 'work' at <br />{" "}
                MoralisWeb3, every day I login from my home <br />
                office and get to spend an entire day building <br /> the future
                with a group of like minded and exceptionally <br />
                inspirational friends. This is no <br />t work, this is our
                calling, if you feel like that <br /> about web3... then come
                join the party!
              </p>
              <h2>Bill</h2>
              <p>Frontend Engineer</p>
            </div>
            <div className="career-Web3-Technology">
              <h1>About Moralis Web3 Technology</h1>
              <p>
                Moralis is the ultimate Web3 Development platform.
                <br /> Our mission is to enable anyone to build dApps and to
                contribute
                <br /> to the open, decentralized economy.
              </p>
              <h3>Coworkers 90+</h3>
            </div>
            <div className="career-navbar">
              <a href="#">
                <span>Start</span>
              </a>
              <a href="#">
                <span>Departments</span>
              </a>
              <a href="#">
                <span>Jobs</span>
              </a>
              <a href="#">
                {" "}
                <span>Data & privacy</span>
              </a>
              <a href="#">
                {" "}
                <span>Manage cookies</span>
              </a>
            </div>
            <p>moralis.io</p>
            <hr />
            <div className="career-employe-login">
              <span>Employee login</span>
              <span>Candiate login</span>
            </div>
            <div className="career-box">
              <h1>Already working at Moralis Web3 Technology?</h1>
              <h2>Let’s recruit together and find your next colleague.</h2>
              <div class="input-group col-md-6 ">
                <input
                  class="form-control bg-light border-end-0 border rounded-pill"
                  type="text"
                  value="search"
                  id="example-search-input"
                />
                <span class="input-group-append">
                  <button
                    class="btn btn-outline-secondary bg-info border-start-0 border rounded-pill ms-n3"
                    type="button"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
