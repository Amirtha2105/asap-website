import { motion } from "framer-motion";
import { CAREERS_FORM_URL } from "../constants/forms";
import {
  FaUserTie,
  FaCalculator,
  FaFileInvoiceDollar,
  FaArrowRight,
} from "react-icons/fa";

const positions = [
  {
    icon: <FaFileInvoiceDollar />,
    title: "Bookkeepers",
  },
  {
    icon: <FaCalculator />,
    title: "Accountants",
  },
  {
    icon: <FaUserTie />,
    title: "Finance Executives",
  },
];

const benefits = [
  "Growth Opportunities",
  "Process-Driven Work Environment",
  "Skill Development",
];

const Careers = () => {
  return (
    <section id="careers" className="relative overflow-hidden py-28 scroll-mt-24">
      {/* Ambient glow layer only — base gradient lives in the shared page wrapper */}
      <div className="absolute inset-0">
        <div
          className="
            absolute top-0 right-0
            w-[460px] h-[460px]
            rounded-full
            bg-[radial-gradient(circle,rgba(33,99,166,0.2),transparent_70%)]
            blur-3xl
          "
        />

        <div
          className="
            absolute bottom-1/4 -left-32
            w-[420px] h-[420px]
            rounded-full
            bg-[radial-gradient(circle,rgba(20,68,120,0.2),transparent_70%)]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <div className="text-center">
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Careers
          </h2>

          <p className="mt-6 text-lg text-[#B7C4D4] max-w-3xl mx-auto leading-8">
            We are building a high-performance finance operations team
            supporting international accounting firms.
          </p>
        </div>

        {/* Main Grid */}

        <div className="mt-20 grid lg:grid-cols-2 gap-10">
          {/* Open Positions */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
              bg-white/[0.04]
              backdrop-blur-sm
              rounded-3xl
              border
              border-white/10
              p-10
            "
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              We Are Looking For
            </h3>

            <div className="space-y-6">
              {positions.map((item) => (
                <div
                  key={item.title}
                  className="
                    flex
                    items-center
                    gap-5
                    p-5
                    rounded-2xl
                    bg-white/[0.04]
                    hover:bg-white/[0.08]
                    transition-colors
                    duration-300
                  "
                >
                  <div className="text-[#6FA8DC] text-2xl">{item.icon}</div>

                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Work With Us */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
              bg-white/[0.04]
              backdrop-blur-sm
              rounded-3xl
              border
              border-white/10
              p-10
            "
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Why Work With Us?
            </h3>

            <div className="space-y-5">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <FaArrowRight className="text-[#6FA8DC] mt-1" />

                  <p className="text-[#B7C4D4] text-lg">{item}</p>
                </div>
              ))}
            </div>

            <a
              href={CAREERS_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-block
                bg-[#2163A6]
                hover:bg-[#2E7BC4]
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                shadow-[0_12px_30px_rgba(33,99,166,0.3)]
                transition
                duration-300
                hover:-translate-y-1
              "
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Careers;