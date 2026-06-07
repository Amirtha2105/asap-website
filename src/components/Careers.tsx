import {
  FaBriefcase,
  FaGlobe,
  FaChartLine,
  FaCogs,
  FaGraduationCap,
  FaArrowRight,
} from "react-icons/fa";

const positions = [
  "Bookkeepers",
  "Accountants",
  "Finance Executives",
];

const benefits = [
  {
    icon: <FaGlobe />,
    title: "International Exposure",
  },
  {
    icon: <FaChartLine />,
    title: "Growth Opportunities",
  },
  {
    icon: <FaCogs />,
    title: "Process-Driven Environment",
  },
  {
    icon: <FaGraduationCap />,
    title: "Skill Development",
  },
  {
    icon: <FaBriefcase />,
    title: "Long-Term Career Progression",
  },
];

const Careers = () => {
  return (
    <section
      id="careers"
      className="py-28 bg-gradient-to-b
                          from-violet-50
                          to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.3em] text-blue-700 font-semibold">
            Careers
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-800">
            Join Our Team
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 text-lg leading-8">
            We are building a high-performance finance operations team
            supporting international accounting firms.
          </p>
        </div>

        {/* Main Section */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold text-slate-800">
              Why Work With Us?
            </h3>

            <p className="mt-5 text-slate-600 leading-8">
              Join a professional team where learning, collaboration,
              and career growth are at the heart of everything we do.
              We provide opportunities to work with international
              clients while building valuable accounting and finance
              expertise.
            </p>

            <div className="mt-10 space-y-5">

              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-4
                    bg-slate-50
                    border
                    border-slate-200
                    rounded-xl
                    p-4
                    hover:shadow-md
                    transition
                  "
                >
                  <div className="text-blue-700 text-xl">
                    {item.icon}
                  </div>

                  <span className="font-medium text-slate-700">
                    {item.title}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Right Side */}

          <div>

            <h3 className="text-3xl font-bold text-slate-800">
              We Are Looking For
            </h3>

            <div className="mt-8 space-y-5">

              {positions.map((position, index) => (
                <div
                  key={index}
                  className="
                    bg-slate-50
                    border
                    border-slate-200
                    rounded-2xl
                    p-6
                    hover:shadow-lg
                    hover:border-blue-300
                    transition-all
                    duration-300
                    flex
                    justify-between
                    items-center
                  "
                >
                  <span className="text-lg font-semibold text-slate-800">
                    {position}
                  </span>

                  <FaArrowRight className="text-blue-700" />
                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Application Form */}

        <div className="mt-24">

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200">

            <h3 className="text-3xl font-bold text-center text-slate-800">
              Apply Now
            </h3>

            <p className="text-center text-slate-600 mt-4">
              Interested in joining our team? Send us your details.
            </p>

            <form className="mt-10 grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="p-4 rounded-xl border border-slate-300 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="p-4 rounded-xl border border-slate-300 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="p-4 rounded-xl border border-slate-300 outline-none"
              />

              <input
                type="text"
                placeholder="Position Applying For"
                className="p-4 rounded-xl border border-slate-300 outline-none"
              />

              <textarea
                rows={5}
                placeholder="Tell us about yourself"
                className="md:col-span-2 p-4 rounded-xl border border-slate-300 outline-none"
              />

              <button
                type="submit"
                className="
                  md:col-span-2
                  bg-slate-800
                  hover:bg-slate-900
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  transition
                "
              >
                Submit Application
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Careers;