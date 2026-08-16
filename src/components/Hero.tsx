import { motion } from "framer-motion";
import { CONSULTATION_FORM_URL } from "../constants/forms";

const services = [
  "Bookkeeping & Reconciliations",
  "Accounts Payable & Receivable",
  "Payroll Support",
  "Month-End Accounting Support",
  "Dedicated Accounting Teams",
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
        scroll-mt-24
        bg-gradient-to-br
        from-sky-200
        via-blue-100
        to-indigo-100
      "
    >
      {/* Dynamic Animated Mesh Gradient Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vibrant Cyan-Blue Mesh Orb (Top-Right) */}
        <motion.div
          animate={{
            opacity: [0.6, 0.85, 0.6],
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -top-32 -right-32
            w-[700px] h-[700px]
            rounded-full
            bg-[radial-gradient(circle,rgba(2,132,199,0.45),transparent_70%)]
            blur-3xl
          "
        />

        {/* Rich Electric-Blue Mesh Orb (Bottom-Left) */}
        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1.1, 0.9, 1.1],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="
            absolute -bottom-40 -left-20
            w-[650px] h-[650px]
            rounded-full
            bg-[radial-gradient(circle,rgba(37,99,235,0.38),transparent_70%)]
            blur-3xl
          "
        />

        {/* Center Accent Highlight Orb */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="
            absolute top-1/3 left-1/2 -translate-x-1/2
            w-[500px] h-[500px]
            rounded-full
            bg-[radial-gradient(circle,rgba(56,189,248,0.35),transparent_65%)]
            blur-2xl
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-center
            text-5xl
            md:text-7xl
            font-extrabold
            text-slate-900
            tracking-tight
            drop-shadow-sm
          "
        >
          MaAthMagic Business Services
        </motion.h1>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="
            mt-8
            text-center
            text-2xl
            md:text-5xl
            font-bold
            text-sky-700
            max-w-5xl
            mx-auto
            leading-tight
            drop-shadow-sm
          "
        >
          Your Trusted Outsourced 
          <br />
          Finance Department
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            mt-8
            text-center
            text-slate-800
            text-lg
            md:text-xl
            max-w-3xl
            mx-auto
            leading-relaxed
            font-medium
          "
        >
          MaAthMagic Business Services helps Startups, SMEs, and growing businesses simplify their Finance operations through reliable Bookkeeping, Accounting, Payroll, Compliance, and Virtual CFO services.
          <br />
          <br />
          <strong className="text-slate-950 font-bold"> 
            We manage your Finance function, so you can focus on growing your business. 
          </strong>
        </motion.p>

        {/* Services Heading */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="
            mt-24
            text-center
            text-3xl
            md:text-4xl
            font-bold
            text-slate-900
          "
        >
          Services Offering
        </motion.h3>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <motion.div
              key={service}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="
                bg-white/85
                backdrop-blur-md
                border
                border-sky-300/60
                shadow-[0_12px_32px_rgba(2,132,199,0.18)]
                rounded-2xl
                p-8
                text-center
                hover:border-sky-500
                hover:bg-white
                hover:shadow-[0_20px_45px_rgba(2,132,199,0.28)]
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <h4 className="font-bold text-slate-900 text-lg">
                {service}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-16">
          <a
            href={CONSULTATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-sky-600
              hover:bg-sky-700
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              shadow-[0_12px_28px_rgba(2,132,199,0.4)]
              transition
              duration-300
              hover:-translate-y-1
              text-center
            "
          >
            Start a Conversation
          </a>

          <a
            href="#services"
            className="
              bg-white/90
              border
              border-sky-400
              hover:border-sky-600
              hover:bg-white
              text-slate-900
              px-8
              py-4
              rounded-xl
              font-bold
              shadow-md
              transition
              duration-300
              text-center
            "
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;