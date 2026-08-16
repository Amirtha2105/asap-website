import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

type ServiceTier = {
  id: string;
  title: string;
  features: string[];
};

const serviceTiers: ServiceTier[] = [
  {
    id: "essential",
    title: "Essential Finance",
    features: [
      "Monthly accounting",
      "Bank reconciliation",
      "Monthly financial statements",
      "Email support",
    ],
  },
  {
    id: "growth",
    title: "Growth Finance",
    features: [
      "Everything in Essential Finance +",
      "GST & TDS compliance",
      "Payroll processing",
      "MIS reports",
      "Vendor/customer reconciliations",
      "Liaison with auditor",
    ],
  },
  {
    id: "strategic",
    title: "Strategic Finance",
    features: [
      "Everything in Growth Finance +",
      "Virtual CFO support",
      "Budgeting & forecasting",
      "Cash flow management",
      "Monthly management review meeting",
      "Business performance analysis",
    ],
  },
];

const outsourceBenefits = [
  "Reduce operational costs",
  "Access experienced Finance professionals",
  "Improve accuracy and compliance",
  "Receive timely financial reports",
  "Scale your Finance team as your business grows",
  "Focus on growing your business",
];

const Services = () => {
  return (
    <section
      id="services"
      className="
        relative
        overflow-hidden
        py-28
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
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[500px] h-[500px]
            rounded-full
            bg-[radial-gradient(circle,rgba(56,189,248,0.35),transparent_65%)]
            blur-2xl
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Our Services
          </h2>
        </div>

        {/* 3-Column Plan / Tier Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {serviceTiers.map((tier) => {
            const isGrowth = tier.id === "growth";

            return (
              <motion.div
                key={tier.id}
                whileHover={{
                  y: -8,
                  scale: isGrowth ? 1.03 : 1.02,
                }}
                transition={{ duration: 0.25 }}
                className={`
                  relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 backdrop-blur-md
                  ${
                    isGrowth
                      ? "bg-white border-sky-500 shadow-[0_20px_45px_rgba(2,132,199,0.28)] scale-[1.02] md:translate-y-[-4px]"
                      : "bg-white/85 border-sky-300/60 shadow-[0_12px_32px_rgba(2,132,199,0.18)] hover:bg-white hover:border-sky-500 hover:shadow-[0_20px_45px_rgba(2,132,199,0.28)]"
                  }
                `}
              >
                <div>
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 tracking-wide">
                    {tier.title}
                  </h3>

                  <div className="my-6 border-t border-sky-200" />

                  {/* Feature Checkmarks List */}
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => {
                      const isInherited = feature.includes("Everything in");
                      return (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheckCircle
                            size={16}
                            className={`shrink-0 mt-1 ${
                              isInherited ? "text-sky-700" : "text-sky-600"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              isInherited
                                ? "text-slate-950 font-bold"
                                : "text-slate-800 font-medium"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className={`
                      w-full py-3.5 rounded-xl font-bold transition-all duration-300 text-sm tracking-wide shadow-md
                      ${
                        isGrowth
                          ? "bg-sky-600 hover:bg-sky-700 text-white shadow-[0_12px_28px_rgba(2,132,199,0.4)] hover:-translate-y-0.5"
                          : "bg-white/90 hover:bg-white text-slate-900 border border-sky-400 hover:border-sky-600"
                      }
                    `}
                  >
                    Select Plan
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Separator Line */}
        <div className="my-24 border-t border-sky-300/60" />

        {/* Value Proposition: Why Outsource Section */}
        <div className="max-w-4xl mx-auto bg-white/85 border border-sky-300/60 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-[0_12px_32px_rgba(2,132,199,0.18)]">
          <div className="text-center md:text-left mb-8">
            <h3 className="text-3xl font-bold text-slate-900 tracking-wide">
              Why Outsource Your Finance Function?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outsourceBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/90 border border-sky-200/80 group hover:border-sky-500 hover:shadow-md transition-all duration-200"
              >
                {/* Numeric index marker */}
                <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 font-bold text-sm flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  {index + 1}
                </span>
                <span className="text-slate-800 text-sm font-semibold tracking-wide">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;