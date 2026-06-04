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
    <section className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 flex items-center">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">

        {/* Company Name */}

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-5xl md:text-7xl font-bold text-slate-800"
        >
          [Company Name]
        </motion.h1>

        {/* Main Heading */}

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center text-2xl md:text-5xl font-semibold text-slate-700 max-w-5xl mx-auto leading-tight"
        >
          Reliable Offshore Accounting Support
          <br />
          for UK Accounting Firms
        </motion.h2>

        {/* Sub Heading */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-center text-slate-600 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
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
          className="mt-20 text-center text-3xl md:text-4xl font-bold text-slate-800"
        >
          Our Services
        </motion.h3>

        {/* Service Boxes */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{ duration: 0.2 }}
              className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-8
                shadow-sm
                hover:shadow-xl
                hover:border-blue-300
                cursor-pointer
                transition-all
                duration-300
                text-center
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
              bg-slate-800
              hover:bg-slate-900
              text-white
              px-8
              py-4
              rounded-xl
              font-medium
              transition
            "
          >
            Book a Consultation
          </button>

          <button
            className="
              border
              border-slate-300
              hover:border-slate-500
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