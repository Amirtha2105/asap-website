import { useState, useEffect, useRef } from "react";
import {
  FaPhoneAlt,
  FaProjectDiagram,
  FaUsers,
  FaGraduationCap,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const processSteps = [
  {
    icon: <FaPhoneAlt />,
    title: "Step 1 – Discovery Call",
    description:
      "Understanding your firm's requirements, workflows, and operational pain points.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Step 2 – Due Diligence",
    description:
      "Defining Process Mapping, SOPs, timelines, responsibilities, and reporting structures.",
  },
  {
    icon: <FaUsers />,
    title: "Step 3 – Team Allocation",
    description:
      "Assigning dedicated accounting resources based on your business requirements.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Step 4 – Transition & Training",
    description: "Knowledge transfer and onboarding support.",
  },
  {
    icon: <FaChartLine />,
    title: "Step 5 – Ongoing Delivery & Reporting",
    description:
      "Consistent execution with regular communication and performance tracking.",
  },
];

const Process = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Dynamically calculate viewports to support proper responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet
      } else {
        setItemsPerView(3); // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = processSteps.length - itemsPerView;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  // Auto-play effect loop engine
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 1000); // Transitions automatically every 1 second
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, itemsPerView]); // Re-runs layout computations securely when responsive boundaries shift

  return (
    <section id="process" className="relative overflow-hidden py-28 scroll-mt-24">
      {/* Ambient glow layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-0 left-1/4
            w-[480px] h-[480px]
            rounded-full
            bg-[radial-gradient(circle,rgba(33,99,166,0.2),transparent_70%)]
            blur-3xl
          "
        />
        <div
          className="
            absolute bottom-0 right-1/4
            w-[460px] h-[460px]
            rounded-full
            bg-[radial-gradient(circle,rgba(20,68,120,0.2),transparent_70%)]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Heading + Navigation Buttons Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="text-left max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Process
            </h2>
            <p className="mt-6 text-[#B7C4D4] text-lg leading-relaxed">
              Our onboarding and delivery process is designed to ensure
              smooth collaboration, transparency, and long-term success.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              onClick={() => { handlePrev(); setIsHovered(true); }}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] text-[#6FA8DC] hover:text-white hover:border-[#3E7CB1] hover:bg-white/5 flex items-center justify-center transition-all duration-200"
              aria-label="Previous step"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={() => { handleNext(); setIsHovered(true); }}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] text-[#6FA8DC] hover:text-white hover:border-[#3E7CB1] hover:bg-white/5 flex items-center justify-center transition-all duration-200"
              aria-label="Next step"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Carousel Window Track Wrap */}
        <div 
          className="relative overflow-visible"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {/* Continuous Connected Horizontal Timeline Line Background */}
          <div 
            className="absolute top-10 left-4 right-4 h-0.5 bg-white/10 hidden md:block pointer-events-none" 
            style={{ width: "calc(100% - 2rem)" }}
          />

          {/* Slider Mask */}
          <div className="overflow-hidden w-full -mx-4 px-4">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="px-4 shrink-0 transition-all duration-300"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="relative text-center group">
                    
                    {/* Floating Step Icon Node */}
                    <div
                      className="
                        mx-auto w-20 h-20 rounded-full bg-[#0B1F33] border-4 border-white/15
                        flex items-center justify-center text-[#6FA8DC] text-2xl shadow-md relative z-10
                        group-hover:border-[#3E7CB1] group-hover:scale-105 transition-all duration-300
                      "
                    >
                      {step.icon}
                    </div>

                    {/* Step Card Content */}
                    <div
                      className="
                        mt-8 bg-white/[0.04] backdrop-blur-sm rounded-3xl p-7 border border-white/10 min-h-[190px] flex flex-col justify-start
                        group-hover:border-[#3E7CB1]/40 group-hover:bg-white/[0.07] group-hover:shadow-[0_20px_50px_rgba(33,99,166,0.18)]
                        transition-all duration-300 text-left
                      "
                    >
                      <h3 className="font-semibold text-white text-lg tracking-wide">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-[#B7C4D4] text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Carousel Indicator Dots under the wrapper */}
        <div className="flex items-center justify-center gap-2.5 mt-12">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentIndex(idx); setIsHovered(true); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-[#3E7CB1]" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide page ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;