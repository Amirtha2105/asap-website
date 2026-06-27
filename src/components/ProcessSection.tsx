import {
  FaPhoneAlt,
  FaProjectDiagram,
  FaUsers,
  FaGraduationCap,
  FaChartLine,
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
    title: "Step 2 – Process Mapping",
    description:
      "Defining SOPs, timelines, responsibilities, and reporting structures.",
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
  return (
    <section id="process" className="relative overflow-hidden py-28 scroll-mt-24">
      {/* Ambient glow layer only — base gradient lives in the shared page wrapper */}
      <div className="absolute inset-0">
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
        {/* Heading */}

        <div className="text-center mb-20">
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Our Process
          </h2>
          <p className="mt-6 text-[#B7C4D4] max-w-3xl mx-auto text-lg">
            Our onboarding and delivery process is designed to ensure
            smooth collaboration, transparency, and long-term success.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Desktop Line */}

          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step) => (
              <div key={step.title} className="relative text-center">
                {/* Icon Circle */}

                <div
                  className="
                    mx-auto
                    w-20
                    h-20
                    rounded-full
                    bg-[#0B1F33]
                    border-4
                    border-white/15
                    flex
                    items-center
                    justify-center
                    text-[#6FA8DC]
                    text-2xl
                    shadow-md
                    relative
                    z-10
                    hover:border-[#3E7CB1]
                    transition-all
                    duration-300
                  "
                >
                  {step.icon}
                </div>

                {/* Card */}

                <div
                  className="
                    mt-8
                    bg-white/[0.04]
                    backdrop-blur-sm
                    rounded-2xl
                    p-6
                    border
                    border-white/10
                    hover:border-[#3E7CB1]/40
                    hover:bg-white/[0.07]
                    hover:shadow-[0_20px_50px_rgba(33,99,166,0.18)]
                    transition-all
                    duration-300
                  "
                >
                  <h3 className="font-semibold text-white">{step.title}</h3>

                  <p className="mt-4 text-[#B7C4D4] text-sm leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;