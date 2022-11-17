import React from "react";
import { createRoot } from "react-dom/client";
import {
  Utility,
  Footer,
  Navbar,
  Home,
  About,
  Tools,
  Contact,
} from "./component";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("here"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/tools' element={<Tools />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Footer color='shark'>
        <h1>©Florin Bizgan. All rights reserved </h1>
        <h3>2022</h3>
      </Footer>
    </BrowserRouter>
  </React.StrictMode>
);
