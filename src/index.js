import React from "react";
import { Footer, Navbar, Home, About, Tools, Contact } from "./component";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("here"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/tools' element={<Tools />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer color='shark'>
      <h1>©Florin Bizgan. All rights reserved </h1>
      <h3>2022</h3>
    </Footer>
  </BrowserRouter>
);
