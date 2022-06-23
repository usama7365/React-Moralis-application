import React from "react";
// import ReactDom from "react-dom";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/footer/Footer";
// import Pricepage from "./components/pricepage/Pricepage";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <>
    <Navbar />
   <Footer /> 
     {/* <Homepage /> */}
      


    </>
  );
};
export default App;
