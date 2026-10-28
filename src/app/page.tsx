"use client";

import { useState } from "react";
import { IntroLoader, CustomCursor, Spotlight } from "@/components/effects";
import { Navbar, Hero, Marquee, About } from "@/components/sections1";
import { Expertise, Projects } from "@/components/sections2";
import { Journey, Lab, Approach, Contact, Footer } from "@/components/sections3";

export default function HomePage() {
  const [started, setStarted] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#070809] text-[#f4f1e8]">
      <a
        href="#profile"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-[#d7ff3e] focus:px-5 focus:py-2.5 focus:font-bold focus:text-black"
      >
        Skip to content
      </a>
      {!started && <IntroLoader onDone={() => setStarted(true)} />}
      <CustomCursor />
      <Spotlight />
      <Navbar started={started} />
      <main>
        <Hero started={started} />
        <Marquee />
        <About />
        <Expertise />
        <Projects />
        <Journey />
        <Lab />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
