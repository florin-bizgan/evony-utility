import React, { StrictMode } from "react";
import { Footer, Navbar, Home, About, Tools, Contact } from "./component";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Navigation } from "./component/navbar/navbar.style";

const root = ReactDOM.createRoot(document.getElementById("here"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Navigation>
        <Link to={"/"}>Home.</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/tools"}>Tools</Link>
        <Link to={"/contact"}>Contact</Link>
      </Navigation>

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
  </StrictMode>
);
