import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaExchangeAlt,
} from "react-icons/fa";

const comparisons = [
  {
    category: "Financial Visibility & Reporting",
    icon: <FaChartLine />,
    traditional: {
      title: "Delayed Monthly Reports",
      desc: "Financial reports are delivered weeks late with basic balance sheets and little actionable operational insight.",
    },
    maathmagic: {
      title: "Real-Time Clear Insights",
      desc: "Structured, timely, and clear financial reports that empower proactive, data-driven business decisions.",
    },
  },
  {
    category: "Operational Efficiency & Speed",
    icon: <FaClock />,
    traditional: {
      title: "Manual & Slow Operations",
      desc: "Paperwork bottlenecks, manual data entry errors, and constant chasing for updates and status checks.",
    },
    maathmagic: {
      title: "Streamlined Process Flow",
      desc: "Standardized workflows, automated data tracking, and guaranteed on-time delivery every cycle.",
    },
  },
  {
    category: "Team & Expertise",
    icon: <FaUsers />,
    traditional: {
      title: "High Turnover & Overhead",
      desc: "Frequent staff turnover, inconsistent handovers, and high internal recruitment or training costs.",
    },
    maathmagic: {
      title: "Dedicated Expert Support",
      desc: "Assigned specialists tailored to your business domain, ensuring process continuity and high accuracy.",
    },
  },
  {
    category: "Compliance & Accuracy",
    icon: <FaShieldAlt />,
    traditional: {
      title: "Reactive & Error-Prone",
      desc: "Last-minute rush for tax filings, compliance risk, and potential late penalties or audit friction.",
    },
    maathmagic: {
      title: "Proactive Risk Management",
      desc: "Continuous audit readiness, thorough quality checks, and reliable compliance management.",
    },
  },
];

const WhyChooseUs = () => {
  const [viewMode, setViewMode] = useState<"side-by-side" | "interactive">("interactive");
  const [activeSide, setActiveSide] = useState<"traditional" | "maathmagic">("maathmagic");

  return (
    <section id="why-us" className="relative overflow-hidden py-28 scroll-mt-24">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-1/4 left-1/2 -translate-x-1/2
            w-[700px] h-[700px]
            rounded-full
            bg-[radial-gradient(circle,rgba(2,132,199,0.18),transparent_70%)]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* ============================================================== */}
        {/* EXISTING WHY US CONTENT & HEADER (UNTOUCHED LOGIC & CONTENT)   */}
        {/* ============================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Why Choose Us
          </h2>
          <p className="mt-6 text-slate-700 text-lg leading-relaxed font-medium">
            We combine domain expertise, structured processes, and modern technology to deliver seamless finance operations for your business.
          </p>
        </div>

        {/* Existing Why Us Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <div className="p-8 rounded-3xl bg-white/85 backdrop-blur-md border border-sky-300/60 shadow-[0_12px_32px_rgba(2,132,199,0.12)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.22)] hover:border-sky-500 hover:bg-white transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-xl mb-6 font-bold border border-sky-200">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Tailored Solutions</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Customized finance and accounting frameworks designed specifically around your operational model and growth goals.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/85 backdrop-blur-md border border-sky-300/60 shadow-[0_12px_32px_rgba(2,132,199,0.12)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.22)] hover:border-sky-500 hover:bg-white transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-xl mb-6 font-bold border border-sky-200">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">End-to-End Delivery</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              From daily bookkeeping to high-level financial reporting and compliance management, we handle the full spectrum.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/85 backdrop-blur-md border border-sky-300/60 shadow-[0_12px_32px_rgba(2,132,199,0.12)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.22)] hover:border-sky-500 hover:bg-white transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-xl mb-6 font-bold border border-sky-200">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Scalable Team</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Scale your financial operations up or down seamlessly without the friction of hiring, onboarding, or training.
            </p>
          </div>
        </div>


        {/* ============================================================== */}
        {/* NEW FEATURE: INTERACTIVE "TRADITIONAL VS. MAATHMAGIC" TOGGLE    */}
        {/* ============================================================== */}
        <div className="my-20">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl border border-sky-300/80 p-8 md:p-12 shadow-[0_16px_40px_rgba(2,132,199,0.15)]">
            
            {/* Header & Toggle Control */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-8 border-b border-sky-200/80">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600 bg-sky-100 px-3 py-1 rounded-full border border-sky-200">
                  The Impact Comparison
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">
                  Traditional Accounting vs. MaAthMagic
                </h3>
              </div>

              {/* Toggle Controls */}
              <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shrink-0">
                <button
                  onClick={() => {
                    setViewMode("interactive");
                    setActiveSide("traditional");
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    viewMode === "interactive" && activeSide === "traditional"
                      ? "bg-rose-500 text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <FaTimesCircle /> Traditional
                </button>

                <button
                  onClick={() => {
                    setViewMode("interactive");
                    setActiveSide("maathmagic");
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    viewMode === "interactive" && activeSide === "maathmagic"
                      ? "bg-sky-600 text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <FaCheckCircle /> With MaAthMagic
                </button>

                <button
                  onClick={() => setViewMode("side-by-side")}
                  className={`hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    viewMode === "side-by-side"
                      ? "bg-slate-900 text-white shadow-md"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <FaExchangeAlt /> Compare All
                </button>
              </div>
            </div>

            {/* INTERACTIVE SINGLE VIEW (SLIDER/TOGGLE MODE) */}
            {viewMode === "interactive" && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSide}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {comparisons.map((item) => {
                    const data = activeSide === "traditional" ? item.traditional : item.maathmagic;
                    const isPositive = activeSide === "maathmagic";

                    return (
                      <div
                        key={item.category}
                        className={`p-6 rounded-2xl border transition-all duration-300 ${
                          isPositive
                            ? "bg-gradient-to-br from-sky-50 to-blue-50/60 border-sky-300/80 shadow-md"
                            : "bg-slate-50 border-rose-200/80 shadow-sm"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${
                              isPositive
                                ? "bg-sky-600 text-white shadow-sm"
                                : "bg-rose-100 text-rose-600 border border-rose-200"
                            }`}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              {item.category}
                            </p>
                            <h4
                              className={`text-lg font-bold flex items-center gap-2 ${
                                isPositive ? "text-sky-950" : "text-slate-900"
                              }`}
                            >
                              {isPositive ? (
                                <FaCheckCircle className="text-sky-600 text-sm" />
                              ) : (
                                <FaTimesCircle className="text-rose-500 text-sm" />
                              )}
                              {data.title}
                            </h4>
                          </div>
                        </div>

                        <p className="text-sm text-slate-600 leading-relaxed font-medium pl-13">
                          {data.desc}
                        </p>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            )}

            {/* SIDE-BY-SIDE FULL COMPARISON TABLE MODE */}
            {viewMode === "side-by-side" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {comparisons.map((item) => (
                  <div
                    key={item.category}
                    className="grid lg:grid-cols-12 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 items-center"
                  >
                    <div className="lg:col-span-3 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 text-base">
                        {item.icon}
                      </div>
                      <span className="font-bold text-slate-900 text-sm">
                        {item.category}
                      </span>
                    </div>

                    <div className="lg:col-span-4 p-4 rounded-xl bg-rose-50/70 border border-rose-200/60">
                      <p className="font-bold text-xs text-rose-700 flex items-center gap-1.5 mb-1">
                        <FaTimesCircle /> {item.traditional.title}
                      </p>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {item.traditional.desc}
                      </p>
                    </div>

                    <div className="lg:col-span-5 p-4 rounded-xl bg-sky-100/70 border border-sky-300/80 shadow-sm">
                      <p className="font-bold text-xs text-sky-800 flex items-center gap-1.5 mb-1">
                        <FaCheckCircle className="text-sky-600" /> {item.maathmagic.title}
                      </p>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed">
                        {item.maathmagic.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Subtext CTA */}
            <div className="mt-8 pt-6 border-t border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <p className="text-xs text-slate-600 font-semibold">
                Ready to transition from traditional overhead to predictable finance operations?
              </p>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-bold shadow-md shadow-sky-600/20 transition-all shrink-0"
              >
                Schedule Strategy Call
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;