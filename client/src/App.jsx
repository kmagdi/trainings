import React, { useState, useEffect } from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Navigation } from "./components/navigation";
import {Home} from "./components/Home"
import {Footer} from "./components/Footer"
import { Agazatok } from "./components/Agazatok";



import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <div className="content">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/agazatok" element={<Agazatok />} />
        </Routes>
        </div>
       
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;
