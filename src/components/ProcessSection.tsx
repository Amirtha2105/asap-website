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
    description:
      "Knowledge transfer, onboarding support, and seamless integration with your processes.",
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
    <section
      id="process"
      className="py-28 bg-gradient-to-b from-white to-violet-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.3em] text-blue-700 font-semibold">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-800">
            A Structured Approach To Offshore Support
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto text-lg">
            Our onboarding and delivery process is designed to ensure
            smooth collaboration, transparency, and long-term success.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Desktop Line */}

          <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-blue-100"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative text-center"
              >

                {/* Icon Circle */}

                <div
                  className="
                    mx-auto
                    w-20
                    h-20
                    rounded-full
                    bg-white
                    border-4
                    border-blue-200
                    flex
                    items-center
                    justify-center
                    text-blue-700
                    text-2xl
                    shadow-md
                    relative
                    z-10
                    hover:border-blue-600
                    transition-all
                  "
                >
                  {step.icon}
                </div>

                {/* Card */}

                <div
                  className="
                    mt-8
                    bg-white
                    rounded-2xl
                    p-6
                    shadow-sm
                    border
                    border-slate-200
                    hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]
                    transition-all
                    duration-300
                  "
                >
                  <h3 className="font-semibold text-slate-800">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-slate-600 text-sm leading-7">
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