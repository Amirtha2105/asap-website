import { motion } from "framer-motion";
import { CAREERS_FORM_URL } from "../constants/forms";
import {
  FaUserTie,
  FaCalculator,
  FaArrowRight,
} from "react-icons/fa";

const positions = [
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
      {/* Light blue ambient glow layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-0 right-0
            w-[460px] h-[460px]
            rounded-full
            bg-[radial-gradient(circle,rgba(2,132,199,0.2),transparent_70%)]
            blur-3xl
          "
        />

        <div
          className="
            absolute bottom-1/4 -left-32
            w-[420px] h-[420px]
            rounded-full
            bg-[radial-gradient(circle,rgba(37,99,235,0.2),transparent_70%)]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Join Our Dynamic Team
          </h2>

          <p className="mt-6 text-lg text-slate-700 max-w-3xl mx-auto leading-8 font-medium">
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
              bg-white/85
              backdrop-blur-md
              rounded-3xl
              border
              border-sky-300/60
              p-10
              shadow-[0_12px_32px_rgba(2,132,199,0.12)]
              hover:shadow-[0_20px_45px_rgba(2,132,199,0.22)]
              hover:border-sky-500
              hover:bg-white
              transition-all
              duration-300
            "
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
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
                    bg-sky-50/80
                    border
                    border-sky-200/60
                    hover:bg-sky-100/60
                    hover:border-sky-300
                    transition-all
                    duration-300
                  "
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center text-xl shrink-0 border border-sky-200">
                    {item.icon}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900">
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
              bg-white/85
              backdrop-blur-md
              rounded-3xl
              border
              border-sky-300/60
              p-10
              shadow-[0_12px_32px_rgba(2,132,199,0.12)]
              hover:shadow-[0_20px_45px_rgba(2,132,199,0.22)]
              hover:border-sky-500
              hover:bg-white
              transition-all
              duration-300
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Why Work With Us?
              </h3>

              <div className="space-y-5">
                {benefits.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center text-sm shrink-0 border border-sky-200">
                      <FaArrowRight />
                    </div>

                    <p className="text-slate-700 text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={CAREERS_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-block
                self-start
                bg-sky-600
                hover:bg-sky-700
                text-white
                px-8
                py-4
                rounded-xl
                font-bold
                shadow-[0_12px_30px_rgba(2,132,199,0.3)]
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