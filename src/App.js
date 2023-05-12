import React from "react";

import LandingPage from "./layout/Pages/LandingPage";
import Contact from "./layout/Pages/Contact.jsx";

import Header from "./layout/Sections/Header";
import Footer from "./layout/Sections/Footer";

import NoMatch from "./components/NoMatch";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
