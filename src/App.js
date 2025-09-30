import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BrandsCarousel from "./components/BrandsCarousel";
import HowItWorks from "./components/HowItWorks";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./styles/Global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BrandsCarousel />
      <HowItWorks />
      <Section1 />
      <Section2 />
      <Plans />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
