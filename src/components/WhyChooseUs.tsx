import { FaArrowRight } from "react-icons/fa";

const advantages = [
  {
    title: "Expertise You Can Trust",
    desc: "Our professionals bring years of experience across industries and finance functions.",
  },
  {
    title: "Cost Efficiency",
    desc: "Reduce operational costs without compromising quality.",
  },
  {
    title: "Scalability",
    desc: "Flexible solutions that grow with your business requirements.",
  },
  {
    title: "Accuracy & Compliance",
    desc: "Robust controls and quality checks ensure reliable financial information.",
  },
  {
    title: "Technology Driven",
    desc: "We leverage modern accounting platforms and automation tools to improve efficiency and transparency.",
  },
];

const startupReasons = [
  {
    icon: "📈",
    title: "Flexible Support Model",
    desc: "Scale accounting support seamlessly as your business grows without increasing overhead.",
  },
  {
    icon: "💷",
    title: "Cost-Effective Operations",
    desc: "Access experienced finance professionals while significantly reducing in-house operational costs.",
  },
  {
    icon: "⚙️",
    title: "Process Efficiency",
    desc: "Structured workflows, timely reporting, and standardized processes improve productivity and decision-making.",
  },
  {
    icon: "🚀",
    title: "Focus on Growth",
    desc: "Leave day-to-day accounting operations to us while your team focuses on growing the business.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="whyus" className="relative overflow-hidden py-28 scroll-mt-24">
      {/* Ambient glow layer only — base gradient lives in the shared page wrapper */}
      <div className="absolute inset-0">
        <div
          className="
            absolute top-1/3 right-0
            w-[500px] h-[500px]
            rounded-full
            bg-[radial-gradient(circle,rgba(33,99,166,0.18),transparent_70%)]
            blur-3xl
          "
        />

        <div
          className="
            absolute bottom-0 -left-32
            w-[440px] h-[440px]
            rounded-full
            bg-[radial-gradient(circle,rgba(20,68,120,0.2),transparent_70%)]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section Heading */}

        <div className="text-center mb-20">
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
            Why Choose Us
          </h2>
          
        </div>

        {/* Main Title A */}

        <div className="mb-24">
          <h3 className="text-3xl font-bold text-white mb-12">
            What Sets Us Apart
          </h3>

          <p className="text-xl text-[#9FC1E0] mb-10">
            Reliable offshore partner for UK accounting firms
          </p>

          <div className="space-y-8">
            {advantages.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  gap-5
                  border-l-4
                  border-white/15
                  pl-6
                  hover:border-[#3E7CB1]
                  transition-all
                  duration-300
                "
              >
                <div className="mt-1 text-[#6FA8DC]">
                  <FaArrowRight />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-[#B7C4D4] leading-7">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Title B */}

        <div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Why Startups & Growing Businesses Choose Us
            </h3>
          </div>

          <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {startupReasons.map((item) => (
              <div
                key={item.title}
                className="
                  group
                  relative
                  bg-white/[0.04]
                  backdrop-blur-sm
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  overflow-hidden
                  hover:border-[#3E7CB1]/40
                  hover:bg-white/[0.07]
                  hover:shadow-[0_20px_50px_rgba(33,99,166,0.18)]
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-1
                    bg-gradient-to-r
                    from-[#2163A6]
                    to-[#6FA8DC]
                    scale-x-0
                    group-hover:scale-x-100
                    origin-left
                    transition-transform
                    duration-500
                  "
                />

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#2163A6]/20
                    flex
                    items-center
                    justify-center
                    text-3xl
                    mb-6
                  "
                >
                  {item.icon}
                </div>

                <h4 className="text-2xl font-bold text-white">
                  {item.title}
                </h4>

                <p className="mt-5 text-[#B7C4D4] leading-8">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;