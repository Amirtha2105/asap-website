import { motion } from "framer-motion";
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
    <>
      <Navbar />

      <div className="relative overflow-hidden bg-gradient-to-br from-sky-200 via-blue-100 to-indigo-100">
        {/* Page-Wide Animated Mesh Gradient Accent Orbs */}
        <div className="absolute inset-0 pointer-events-none -z-0">
          <motion.div
            animate={{
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.2, 1],
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute top-1/4 -right-40
              w-[800px] h-[800px]
              rounded-full
              bg-[radial-gradient(circle,rgba(2,132,199,0.35),transparent_70%)]
              blur-3xl
            "
          />

          <motion.div
            animate={{
              opacity: [0.4, 0.7, 0.4],
              scale: [1.1, 0.9, 1.1],
              x: [0, -35, 0],
              y: [0, 35, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="
              absolute top-2/3 -left-40
              w-[800px] h-[800px]
              rounded-full
              bg-[radial-gradient(circle,rgba(37,99,235,0.3),transparent_70%)]
              blur-3xl
            "
          />
        </div>

        <Hero />
        <About />

        {/* Vision & Mission Side-by-Side Section */}
        <section className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20">
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Vision />
            <Mission />
          </div>
        </section>

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