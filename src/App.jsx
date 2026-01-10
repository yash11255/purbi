import NavBar from "./components/NavBar";
import { Analytics } from "@vercel/analytics/react";
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
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <NavBar />
      <Hero />
      <Blueprint />
      <WhatIsPurbi />
      <CoreFocusAreas />
      <WhyPurbi />
      <CoreDomains />
      <WhoWeServe />
      <CallToAction />
      <InstitutionalAlignment />
      <ContactForm />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
