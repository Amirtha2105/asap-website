import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/AboutSection";
import Services from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/ProcessSection";
import Careers from "../components/Careers";
import Contact from "../components/Contacts";
import Footer from "../components/Footer";
import Vision from "../components/VisionSection";
import Mission from "../components/MissionSection";

function Home() {
  return (
    // This wrapper is the ONLY place the page background is defined.
    // It spans every section's combined height, so the gradient is one
    // continuous surface top to bottom — no seams, regardless of order.
    // NOTE: Navbar and Footer are deliberately OUTSIDE this wrapper —
    // see note below the code for why.
    <>
      <Navbar />

      <div className="relative bg-[#060B14]">
        {/* One continuous gradient across the whole page's scroll height */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#060B14] via-[#0B1F33] to-[#060B14]" />

        {/* One continuous ledger texture across the whole page's scroll height */}
        <div className="absolute inset-0 -z-10 opacity-[0.04] bg-ledger-texture" />

        <Hero />
        <About />
        <Mission />
        <Vision />
        <Services />
        <WhyChooseUs />
        <Process />
        <Careers />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default Home;