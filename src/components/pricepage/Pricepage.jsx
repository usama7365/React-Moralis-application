import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "../pricepage/style.css";
import Navbar from "../navbar/Navbar"
import Footer from '../footer/Footer';

export default function Pricepage() {
  
  return (
    <div>
      {/* <Navbar/> */}
        
      <br />
      <div className="text-section">
        <span className="plan">PLANS BUILT FOR EVERYONE</span>
        <h1 className="developer">DEVELOPER FOCUSED</h1>
        <span className="get">
          Get the power, customization you need to power your
          <br /> blockchain projects.
        </span>
      </div>
      <br /> <br />
      {/* Menu bar */}
      <div className="menu-bar">
        <div className="menu-one">
          <h2 >Starter</h2>
          <p className="menu-one-p">
            For developers that are just <br /> getting started with blockchain
          </p>
          <button type="button" className="btn btn-primary btn-lg btn-radius">
            Start For Free
          </button>
          <br />
          <br />
          <br />
          <p className="free">Free</p>

          <span className="plus">to get started</span>

          <div className="spantag">
            <p>&#10003;</p>
            <p>Unlimited users</p>
            <span>&#10003;</span>
            <p>Unlimited plugins</p>
            <span>&#10003;</span>
            <p>Community Support</p>
            <span>&#10003;</span>
            <p>IPFS Gateway</p>
          </div>
        </div>

        <div className="menu-two">
          <h2>Pro</h2>

          <p className="menu-one-p">
            For professionals working in
            <br /> blockchain and crypto
          </p>
          <button type="button" className="btn btn-primary btn-lg btn-radius">
            Get Started
          </button>
          <br />
          <br />
          <br />
          <p className="free">49</p>
          <span className="plus">Everything in Starter, plus:</span>
          <div className="spantag">
            <p>&#10003;</p>
            <p>Unlimited users</p>
            <span>&#10003;</span>
            <p>Unlimited plugins</p>
            <span>&#10003;</span>
            <p>Community Support</p>
            <span>&#10003;</span>
            <p>IPFS Gateway</p>
          </div>
          <div>
            <a href="#">
              <p>
                More about the <strong>Pro Plan</strong>
                <i className="fa fa-arrow-circle-right"></i>
              </p>
            </a>
          </div>
        </div>
        <div className="menu-three">
          <h2>Enterprize</h2>

          <p className="menu-one-p">
            Contact us to find the right
            <br /> solution for your team
          </p>
          <button type="button" className="btn btn-primary btn-lg btn-radius">
            Contact Us
          </button>
          <br />
          <br />
          <br />
          <p className="free">Contact Us</p>
          <span className="plus">Everything in Starter, plus:</span>
          <div className="spantag">
            <p>&#10003;</p>
            <p>Unlimited users</p>
            <span>&#10003;</span>
            <p>Unlimited plugins</p>
            <span>&#10003;</span>
            <p>Community Support</p>
            <span>&#10003;</span>
            <p>IPFS Gateway</p>
            <div>
              <a href="#">
                <p>
                  More about the <strong>Enterprise Plan</strong>
                  <i className="fa fa-arrow-circle-right"></i>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* compare section */}
      <div className="compare-section">
        <a href="#">
          <p>
            Explore more about <strong>Moralis</strong>
          </p>
        </a>
        <br />
        <br />
        <p className="comapre">COMPARE OUR PLANS</p>
        <p className="find">
          Find out what works best
          <br /> for you and your team
        </p>
      </div>
      {/* full features section */}
      <div className="full-features">
        <div className="sefeatures">
          <h1>Full Features List</h1>
        </div>

        <div className="secfeatures">
          <h2>Starter</h2>
          <p>Free get to started</p>
          <button type="button" className="btn btn-white btn-lg btn-radius">
            Get Started
          </button>
        </div>

        <div className="secfeatures">
          <h2>Pro</h2>
          <p>Free get to started</p>
          <button type="button" className="btn btn-success btn-lg btn-radius">
            Get Started
          </button>
        </div>

        <div className="secfeatures">
          <h2>Enterprize</h2>
          <p>Free get to started</p>
          <button type="button" className="btn btn-primary btn-lg btn-radius">
            Get Started
          </button>
        </div>
      </div>
      <h3 className="full-width-two">
        <div className="morails">Moralis Servers</div>
      </h3>
      {/* servers plans */}
      <div className="main-server">
        <div
          style={{ marginLeft: "20%" }}
          class="accordion accordion-flush w-50 col-3 "
          id="accordionFlushExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Servers Included
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                he number of moralis servers included in your account.
              </div>
            </div>
          </div>
        </div>
        <div className="numbering">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>

        <div
          style={{ marginLeft: "20%" }}
          class="accordion accordion-flush w-50 col-3 "
          id="accordionFlushExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Servers Included
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                he number of moralis servers included in your account.
              </div>
            </div>
          </div>
        </div>
        <div className="numbering">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>

        <div
          style={{ marginLeft: "20%" }}
          class="accordion accordion-flush w-50 col-3 "
          id="accordionFlushExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Servers Included
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                he number of moralis servers included in your account.
              </div>
            </div>
          </div>
        </div>

        <div className="numbering">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>

        <div
          style={{ marginLeft: "20%" }}
          class="accordion accordion-flush w-50 col-3 "
          id="accordionFlushExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Servers Included
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                he number of moralis servers included in your account.
              </div>
            </div>
          </div>
        </div>
        <div className="numbering">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>

        <div
          style={{ marginLeft: "20%" }}
          class="accordion accordion-flush w-50 col-3 "
          id="accordionFlushExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Servers Included
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                he number of moralis servers included in your account.
              </div>
            </div>
          </div>
        </div>
        <div className="numbering">
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
      </div>
      <h3 className="full-width-two">
        <div className="morails">Moralis Servers</div>
      </h3>
      <div
        style={{ marginLeft: "20%" }}
        class="accordion accordion-flush w-50 col-3 "
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Servers Included
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              he number of moralis servers included in your account.
            </div>
          </div>
        </div>
      </div>
      <div className="numbering">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div
        style={{ marginLeft: "20%" }}
        class="accordion accordion-flush w-50 col-3 "
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Servers Included
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              he number of moralis servers included in your account.
            </div>
          </div>
        </div>
      </div>
      <div className="numbering">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div
        style={{ marginLeft: "20%" }}
        class="accordion accordion-flush w-50 col-3 "
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Servers Included
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              he number of moralis servers included in your account.
            </div>
          </div>
        </div>
      </div>
      <div className="numbering">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div
        style={{ marginLeft: "20%" }}
        class="accordion accordion-flush w-50 col-3 "
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Servers Included
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              he number of moralis servers included in your account.
            </div>
          </div>
        </div>
      </div>
      <div className="numbering">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <h3 className="full-width-two">
        <div className="morails">Moralis Servers</div>
      </h3>
      <div
        style={{ marginLeft: "20%" }}
        class="accordion accordion-flush w-50 col-3 "
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Servers Included
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              he number of moralis servers included in your account.
            </div>
          </div>
        </div>
      </div>
      <div className="numbering">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      {/* pics bar */}
      <div className="main-picsbar">
        <p>
          *Some requests that are computationally heavy are counted as several
          normal requests. See all request weights here.
        </p>
     
      </div>
      <div className="main-img">
        <img src="/images/background.png" alt=""></img>
      </div>
      <div className="bgimg">
        <div className="icon-section">
          <p>
            WORKING WITH THE BEST IN BLOCKCHAIN
          </p>
          <img src="/images/2.png" alt=""></img>
          <img src="/images/2.png" alt=""></img>
          <img src="/images/3.png" alt=""></img>
          <img src="/images/4.png" alt=""></img>
          <img src="/images/5.png" alt=""></img>
          <img src="/images/3.png" alt=""></img>
          <img src="/images/7.png" alt=""></img>
          <img src="/images/5.png" alt=""></img>

        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <Footer/> */}
    </div>
  )
}
