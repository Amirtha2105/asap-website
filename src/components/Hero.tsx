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
      className="
        relative
        overflow-hidden
        min-h-screen
        flex
        items-center
        bg-gradient-to-br
        from-blue-100
        via-sky-50
        to-cyan-100
      "
    >
      {/* Blue Blob 1 */}

      <div
        className="
          absolute
          top-0
          left-0
          w-[600px]
          h-[600px]
          rounded-full
          bg-blue-500/40
          blur-[180px]
          animate-pulse
        "
      />

      {/* Blue Blob 2 */}

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[650px]
          h-[650px]
          rounded-full
          bg-sky-500/40
          blur-[200px]
          animate-pulse
        "
      />

      {/* Center Blob */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-blue-300/30
          blur-[220px]
          animate-pulse
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">

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
            text-blue-950
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
            font-semibold
            text-blue-900
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
            text-slate-700
            text-lg
            md:text-xl
            max-w-4xl
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
            mt-20
            text-center
            text-3xl
            md:text-4xl
            font-bold
            text-blue-950
          "
        >
          Our Services
        </motion.h3>

        {/* Service Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{ duration: 0.25 }}
              className="
                backdrop-blur-lg
                bg-white/80
                border
                border-blue-100
                rounded-2xl
                p-8
                text-center
                shadow-lg
                hover:shadow-[0_20px_60px_rgba(59,130,246,0.25)]
                hover:border-blue-300
                transition-all
                duration-300
                cursor-pointer
              "
            >
              <h4 className="font-semibold text-slate-700 text-lg">
                {service}
              </h4>
            </motion.div>
          ))}

        </div>

        {/* CTA Buttons */}

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-16">

          <button
            className="
              bg-blue-700
              hover:bg-blue-800
              text-white
              px-8
              py-4
              rounded-xl
              font-medium
              shadow-lg
              transition
            "
          >
            Book a Consultation
          </button>

          <button
            className="
              bg-white/80
              backdrop-blur-lg
              border
              border-blue-200
              hover:border-blue-500
              px-8
              py-4
              rounded-xl
              font-medium
              transition
            "
          >
            Explore Services
          </button>

        </div>

      </div>

    </section>
  );
};

export default Hero;