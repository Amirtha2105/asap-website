import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/AboutSection";
import Services from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Process from "../components/ProcessSection";
import Careers from "../components/Careers";
import Contact from "../components/Contacts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Careers />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;