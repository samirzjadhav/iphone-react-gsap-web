import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWork from "./components/HowItWork";
import Footer from "./components/Footer";

import * as Sentry from "@sentry/react";

function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Features />
      <HowItWork />
      <Footer />
    </main>
  );
}

export default Sentry.withProfiler(App);
