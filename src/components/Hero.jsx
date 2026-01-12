import { useEffect, useState } from "react";
import Section from "./Section";

function Hero() {
  return (
    <div id="home" className="relative overflow-hidden text-white">
      {/* Grid with fixed aspect ratio ensures consistent height */}
      <div className="grid w-full">
        {/* Desktop banner */}
        <img
          src="/Untitled-3 banner 1.3.jpg"
          alt="Hero banner desktop"
          className="hidden md:block col-start-1 row-start-1 w-full h-auto object-cover object-center transition-opacity duration-700"
        />
        {/* Mobile banner */}
        <img
          src="/WhatsApp Image 2026-01-09 at 4.22.59 PM (1).jpg"
          alt="Hero banner mobile"
          className="block md:hidden col-start-1 row-start-1 w-full h-auto object-cover object-center transition-opacity duration-700"
        />

        {/* Title overlay */}
        <div className="col-start-1 row-start-1 z-[2] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 drop-shadow-lg">
           
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-2 drop-shadow-lg">
            
          </p>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 drop-shadow-lg">
            
          </p>
        </div>

        {/* full-section link */}
        <a
          href="#contact"
          aria-label="Go to contact section"
          className="col-start-1 row-start-1 z-[3] block w-full h-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
        />
      </div>
    </div>
  );
}

export default Hero;
