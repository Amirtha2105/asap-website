import { useState, useEffect } from "react";
import {
  FaPhoneAlt,
  FaProjectDiagram,
  FaUsers,
  FaGraduationCap,
  FaChartLine,
} from "react-icons/fa";

const processSteps = [
  {
    stepNum: 1,
    icon: <FaPhoneAlt />,
    title: "Step 1 – Discovery Call",
    description:
      "We begin by understanding your business, current processes, challenges, and service requirements.",
  },
  {
    stepNum: 2,
    icon: <FaProjectDiagram />,
    title: "Step 2 – Business Assessment",
    description:
      "We review your existing accounting processes, systems, and documentation to assess your needs and identify the best approach.",
  },
  {
    stepNum: 3,
    icon: <FaUsers />,
    title: "Step 3 – Team Allocation",
    description:
      "Based on your requirements, we assign a dedicated team with the right expertise to support your business.",
  },
  {
    stepNum: 4,
    icon: <FaGraduationCap />,
    title: "Step 4 – Transition & Onboarding",
    description:
      "We ensure a smooth handover by setting up workflows, understanding your processes, and training our team on your business requirements.",
  },
  {
    stepNum: 5,
    icon: <FaChartLine />,
    title: "Step 5 – Ongoing Delivery & Reporting",
    description:
      "We deliver accounting and Finance services on time, provide regular reports, and continuously support your business with accurate and reliable financial information.",
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isRotating, setIsRotating] = useState(true);

  // Auto-advance active step content sequentially
  useEffect(() => {
    if (!isRotating) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isRotating]);

  return (
    <section id="process" className="relative overflow-hidden py-28 scroll-mt-24">
      {/* Dynamic inline styles for smooth infinite CSS rotation */}
      <style>{`
        @keyframes orbitRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-orbit {
          animation: orbitRotate 25s linear infinite;
        }
        .animate-counter-orbit {
          animation: counterRotate 25s linear infinite;
        }
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Light blue ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-[700px] h-[700px]
            rounded-full
            bg-[radial-gradient(circle,rgba(2,132,199,0.22),transparent_70%)]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our Process
          </h2>
          <p className="mt-6 text-slate-700 text-lg leading-relaxed font-medium">
            Our onboarding and delivery process is designed to ensure smooth collaboration, transparency, and long-term success.
          </p>
        </div>

        {/* Desktop Interactive Rotating Orbit Container */}
        <div
          className="hidden lg:flex flex-col items-center justify-center min-h-[560px] relative"
          onMouseEnter={() => setIsRotating(false)}
          onMouseLeave={() => setIsRotating(true)}
        >
          {/* Outer Decorative Rotating Ring */}
          <div
            className={`absolute w-[530px] h-[530px] rounded-full border border-sky-300/40 border-dashed animate-orbit ${
              !isRotating ? "paused" : ""
            }`}
          />

          {/* Main Orbital Path & Rotating Nodes */}
          <div className="relative w-[460px] h-[460px] flex items-center justify-center">
            {/* Center Fixed Glassmorphism Card */}
            <div className="w-[280px] h-[280px] rounded-full bg-white/90 backdrop-blur-md border border-sky-300 p-6 flex flex-col items-center justify-center text-center shadow-2xl z-20 transition-all duration-500">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-xl mb-3 shadow-inner">
                {processSteps[activeStep].icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {processSteps[activeStep].title}
              </h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed font-medium line-clamp-4">
                {processSteps[activeStep].description}
              </p>
            </div>

            {/* Rotating Ring Carrying Nodes */}
            <div
              className={`absolute inset-0 rounded-full border-2 border-sky-300/80 animate-orbit ${
                !isRotating ? "paused" : ""
              }`}
            >
              {processSteps.map((step, index) => {
                const angle = (index * (360 / processSteps.length) - 90) * (Math.PI / 180);
                const radius = 230; // Node orbit radius
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                const isActive = activeStep === index;

                return (
                  <div
                    key={step.title}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: `translate(${x - 32}px, ${y - 32}px)`,
                    }}
                    className="z-30"
                  >
                    {/* Counter-rotation wrapper keeps icons upright */}
                    <div
                      className={`animate-counter-orbit ${
                        !isRotating ? "paused" : ""
                      }`}
                    >
                      <button
                        onClick={() => setActiveStep(index)}
                        className={`
                          w-16 h-16 rounded-full flex flex-col items-center justify-center transition-all duration-300 cursor-pointer
                          ${
                            isActive
                              ? "bg-sky-600 text-white scale-125 shadow-lg shadow-sky-500/40 ring-4 ring-sky-200"
                              : "bg-white text-sky-700 border border-sky-300 hover:bg-sky-100 hover:scale-110 shadow-md"
                          }
                        `}
                        aria-label={step.title}
                      >
                        <span className="text-lg">{step.icon}</span>
                        <span className="text-[10px] font-bold mt-0.5">0{step.stepNum}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Sequential View */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.title}
              onClick={() => setActiveStep(idx)}
              className={`
                p-6 rounded-3xl backdrop-blur-md border transition-all duration-300 cursor-pointer
                ${
                  activeStep === idx
                    ? "bg-white border-sky-500 shadow-xl"
                    : "bg-white/80 border-sky-300/60 hover:bg-white"
                }
              `}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center text-xl shrink-0 font-bold">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-slate-700 text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;