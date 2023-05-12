import React from "react";

import LandingPage from "./layout/Pages/LandingPage";
import Contact from "./layout/Pages/Contact.jsx";

import Header from "./layout/Sections/Header";
import Footer from "./layout/Sections/Footer";

import NoMatch from "./components/NoMatch";

import { Router, Route, Routes, HashRouter } from "react-router-dom";
function App() {
  return (
    <>
      <HashRouter>
        <div className="h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </>
  );
}

export default App;
