import { motion } from "framer-motion";

const services = [
  "Bookkeeping & Reconciliations",
  "Accounts Payable & Receivable",
  "Payroll Support",
  "VAT Working Papers",
  "Month-End Accounting Support",
  "Dedicated Offshore Accounting Teams",
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
      "
    >
      {/* Ambient glow layer only — base gradient now lives in the shared page wrapper */}
      <div className="absolute inset-0">
        {/* Slow-drifting navy glow, top right */}
        <motion.div
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute -top-40 -right-40
            w-[640px] h-[640px]
            rounded-full
            bg-[radial-gradient(circle,rgba(33,99,166,0.35),transparent_70%)]
            blur-3xl
          "
        />

        {/* Slow-drifting navy glow, bottom left, offset timing */}
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1.1, 0.95, 1.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="
            absolute -bottom-48 -left-32
            w-[560px] h-[560px]
            rounded-full
            bg-[radial-gradient(circle,rgba(20,68,120,0.3),transparent_70%)]
            blur-3xl
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
            font-bold
            text-white
            tracking-tight
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
            text-[#9FC1E0]
            max-w-5xl
            mx-auto
            leading-tight
          "
        >
          Reliable Offshore Accounting Support
          <br />
          for UK Accounting Firms
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            mt-8
            text-center
            text-[#B7C4D4]
            text-lg
            md:text-xl
            max-w-3xl
            mx-auto
            leading-relaxed
          "
        >
          Helping UK accounting practices scale efficiently
          through dedicated bookkeeping and finance support
          teams from India.
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
            text-white
          "
        >
          Our Services
        </motion.h3>

        {/* Service Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <motion.div
              key={service}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{ duration: 0.25 }}
              className="
                bg-white/[0.04]
                backdrop-blur-sm
                border
                border-white/10
                shadow-[0_10px_35px_rgba(0,0,0,0.3)]
                rounded-2xl
                p-8
                text-center
                text-white
                hover:border-[#3E7CB1]/50
                hover:bg-white/[0.07]
                hover:shadow-[0_18px_45px_rgba(33,99,166,0.18)]
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <h4 className="font-semibold text-[#DCE8F3] text-lg">
                {service}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-16">
          <button
            className="
              bg-[#2163A6]
              hover:bg-[#2E7BC4]
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              shadow-[0_12px_30px_rgba(33,99,166,0.35)]
              transition
              duration-300
              hover:-translate-y-1
            "
          >
            Book a Consultation
          </button>

          <a
            href="#services"
            className="
              bg-transparent
              border
              border-white/20
              hover:border-[#3E7CB1]
              hover:bg-white/[0.05]
              text-white
              px-8
              py-4
              rounded-xl
              font-medium
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