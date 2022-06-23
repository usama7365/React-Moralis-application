import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../navbar/style.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";


import Homepage from "../homepage/Homepage";
import Pricepage from "../pricepage/Pricepage";
import Blogs from "../Blogs/Blogs";
import Login from "../loginpage/Login";
import Register from "../Registerpage/Register";
import Careerspage from "../Careerspage/Careers";
import div1img from "../navbar/navbarimages/div1img.svg"
import div2img from "../navbar/navbarimages/div2img.svg"
import div3img from "../navbar/navbarimages/div3img.svg"
import downloadimg from "../homepage/homepageimg/download.png"
import Img2logo from "../../imagess/Logo.png"

export const Navbar = () => {
  return (
    <>
      <Router>
        <nav
          id="main-nav"
          class="navbar navbar-expand-lg navbar-light bg-light"
        >
          <div class="container-fluid">
            <img id="logo" src={Img2logo} alt=""  to={"/*"} />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/Pricepage">
                    <a
                      id="hello1"
                      class="nav-link active"
                      aria-current="page"
                      href="/"
                    >
                      Products
                    </a>
                    {/* <div class="hello">

                      <div className="div1" >
                        <div className="ways"></div>
                        <img className="div1img" src={div1img}></img><h6 style={{float:"right",fontWeight:"bold"}}>Moralis Web3 SDK</h6><p style={{fontWeight:"600"}}>Build And Ship Cross-Chain Dapps</p>
                      <Link to="/" style={{textDecoration:"none"}} ><div className="column-1"> <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>IPFS Integration</div></Link>
                      <Link to="/" style={{textDecoration:"none"}}><div className="column-1"> <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>IPFS Integration</div></Link>
                      <Link to="/" style={{textDecoration:"none"}}> <div className="column-1"> <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>IPFS Integration</div></Link>
                      <Link to="/" style={{textDecoration:"none"}}><div className="column-1"> <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>IPFS Integration</div></Link>
                      <Link to="/" style={{textDecoration:"none"}}> <div className="column-1"> <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>IPFS Integration</div></Link>
                      </div>
                      <div className="div2">
                      <div className="column-2"></div>
                      <img className="div2img" src={div2img}></img><h6 style={{float:"right",fontWeight:"bold"}}>Moralis Web3 SDK</h6><p style={{fontWeight:"600"}}>Build And Ship Cross-Chain Dapps</p>
                      <Link to="/" style={{textDecoration:"none"}}><div className="column-2">
                      <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>
                        NFT API</div></Link>
                      <Link to="/" style={{textDecoration:"none"}}><div className="column-2">
                        <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>
                        NFT API</div></Link>
                      <Link to="/" style={{textDecoration:"none"}}><div className="column-2">
                        <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>
                        NFT API</div></Link>
                      <Link to="/" style={{textDecoration:"none"}}>   <div className="column-2">
                        <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>
                        NFT API</div></Link>
                      </div>
                      <div className="div3">
                      <img className="div3img" src={div3img}></img><h6 style={{float:"right",fontWeight:"bold"}}>Moralis Web3 SDK</h6><p style={{fontWeight:"600"}}>Build And Ship Cross-Chain Dapps</p>
                      <Link to="/"  style={{textDecoration:"none"}}><div className="column-3">
                        <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>
                        IPFS Integration</div></Link>
                      <Link to="/"  style={{textDecoration:"none"}}> <div className="column-3">
                        <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>
                        IPFS Integration</div></Link>
                      <Link to="/"  style={{textDecoration:"none"}}>   <div className="column-3">
                        <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>
                        IPFS Integration</div></Link>
                      <Link to="/"  style={{textDecoration:"none"}}>   <div className="column-3">
                        <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>
                        IPFS Integration</div></Link>
                      <Link to="/"  style={{textDecoration:"none"}}> <div className="column-3">
                        <i
                       style={{color:"black",fontSize:"20px",marginRight:"15px"}} class="fa fa-arrow-right"></i>
                        IPFS Integration</div></Link>
                      </div>
                    </div> */}
                  </Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="https://docs.moralis.io/introduction/readme">
                    Documentation
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Careers<sup className="apply">Apply</sup>
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="https://moralis.io/blog/">
                    Blogs
                  </a>
                </li>
              </ul>
              <form class="d-flex"  >
              <Link to="/Loginpage"> <button class="btn btn-outline-primary" type="submit">
                  Login
                </button></Link> 
              </form>
              <button 
                class="btn btn-outline-primary btn-lg"
                type="submit"
                style={{ margin: "0 60px" }}
              >
                Start For Free
              </button>
            </div>
          </div>
        </nav>
        <div className="full-width">
        <div className="wrap">
          <img className="downloadimg" src={downloadimg}></img>
          Moralis Closes $40M Series A - Backed By Coinbase, EQT Ventures,
          Fabric Ventures, Disperse Capital and more!         
           <img className="downloadimg" src={downloadimg}></img>
        </div> 
      </div>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Pricepage" element={<Pricepage />} />
          <Route path="/https://moralis.io/blog/" element={<Pricepage/>}/>
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Careerspage" element={<Careerspage/>}/>
        </Routes>
      </Router>
      {/* 1st logo */}
    </>
  );
};

export default Navbar;
