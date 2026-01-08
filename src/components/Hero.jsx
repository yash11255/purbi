import { useEffect, useState } from "react";
import Section from "./Section";

const banners = ["/banner2.jpg"];

function Hero() {
  return (
    <div id="home" className="relative overflow-hidden text-white">
      {/* Grid with fixed aspect ratio ensures consistent height */}
      <div className="grid w-full">
        {banners.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Hero banner"
            className="col-start-1 row-start-1 w-full h-auto object-cover object-center transition-opacity duration-700"
          />
        ))}
        {/* overlay */}
        <div className="col-start-1 row-start-1 w-full h-full bg-black/25 z-[1]" />

        {/* full-section link */}
        <a
          href="#about"
          aria-label="Learn more about PURBI"
          className="col-start-1 row-start-1 z-[2] block w-full h-full cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
        />
      </div>
    </div>
  );
}

export default Hero;
