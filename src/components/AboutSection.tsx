import {
  FaUserTie,
  FaClock,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaUserTie size={24} />,
    title: "Highly Skilled Finance Professionals",
  },
  {
    icon: <FaClock size={24} />,
    title: "Strong English Communication",
  },
  {
    icon: <FaChartLine size={24} />,
    title: "Cost Effective Delivery Models",
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: "Mature Outsourcing Ecosystem",
  },
  {
    icon: <FaShieldAlt size={24} />,
    title: "Scalable Talent Availability",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        py-28
        scroll-mt-24
      "
    >
      {/* Ambient glow layer only — base gradient now lives in the shared page wrapper */}
      <div className="absolute inset-0">
        <div
          className="
            absolute top-1/4 -left-40
            w-[520px] h-[520px]
            rounded-full
            bg-[radial-gradient(circle,rgba(33,99,166,0.22),transparent_70%)]
            blur-3xl
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            w-[480px] h-[480px]
            rounded-full
            bg-[radial-gradient(circle,rgba(20,68,120,0.2),transparent_70%)]
            blur-3xl
          "
        />

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Us
          </h2>
        </div>

        {/* Paragraph 1 */}

        <div className="max-w-5xl mx-auto mt-12">
          <p className="text-[#B7C4D4] text-lg leading-9 text-center">
            MaAthMagic Business Services is an India-based offshore
            accounting support company providing reliable and scalable
            bookkeeping and finance operations services to accounting
            firms, startups, and scaleups.
          </p>
        </div>

        {/* Space */}

        <div className="h-10" />

        {/* Paragraph 2 */}

        <div className="max-w-5xl mx-auto">
          <p className="text-[#B7C4D4] text-lg leading-9 text-center">
            We specialize in supporting accounting practices with
            day-to-day finance processes through dedicated offshore teams
            that operate as an extension of our clients&rsquo; businesses.
            Our goal is to help firms improve efficiency, reduce
            operational workload, and scale profitably without
            compromising on quality. With strong experience in finance
            operations, process management, and accounting support
            functions, we focus on delivering accuracy, consistency, and
            timely execution across all engagements.
          </p>
        </div>

        {/* Why India */}

        <div className="mt-24 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Why India?
          </h3>

          <p className="mt-4 text-[#8FA3B8] max-w-3xl mx-auto">
            India has become one of the world&rsquo;s leading destinations
            for finance and accounting outsourcing due to:
          </p>
        </div>

        {/* Feature Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="
                group
                bg-white/[0.04]
                backdrop-blur-sm
                border
                border-white/10
                rounded-2xl
                p-8
                hover:bg-white/[0.07]
                hover:border-[#3E7CB1]/40
                hover:shadow-[0_20px_50px_rgba(33,99,166,0.18)]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-xl
                  bg-[#2163A6]/20
                  text-[#6FA8DC]
                  flex
                  items-center
                  justify-center
                  group-hover:bg-[#2163A6]/30
                  transition-colors
                  duration-300
                "
              >
                {item.icon}
              </div>

              <h4 className="mt-6 text-xl font-semibold text-white">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;