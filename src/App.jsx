
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Blueprint from "./components/Blueprint";
import WhatIsPurbi from "./components/WhatIsPurbi";
import CoreFocusAreas from "./components/CoreFocusAreas";
import WhyPurbi from "./components/WhyPurbi";
import CoreDomains from "./components/CoreDomains";
import WhoWeServe from "./components/WhoWeServe";
import CallToAction from "./components/CallToAction";
import InstitutionalAlignment from "./components/InstitutionalAlignment";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Blueprint />
                <WhatIsPurbi />
                <CoreFocusAreas />
                <WhyPurbi />
                <CoreDomains />
                <WhoWeServe />
                <CallToAction />
                <InstitutionalAlignment />
                <Partners />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
