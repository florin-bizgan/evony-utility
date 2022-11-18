import React, { StrictMode } from "react";
import { Footer, Navbar, Home, About, Tools, Contact } from "./component";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("here"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      {/* <nav className='navbar'>
        <Link to='/'>
          <p>Home</p>
        </Link>
        <Link to='/about'>
          <p>About</p>
        </Link>
        <Link to='/tools'>
          <p>Tools</p>
        </Link>
        <Link to='/contact'>
          <p>Contact</p>
        </Link>
      </nav> */}
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
