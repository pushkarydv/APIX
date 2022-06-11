import React, { useEffect } from "react";
import Nav from "../globals/Nav";
import Footer from "../globals/Footer";
import Hero from "./Hero";
import AOS from "aos";
import "aos/dist/aos.css";
function HomePage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Nav />
      <Hero />
      <Footer />
    </>
  );
}

export default HomePage;
