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
    title: "Scalability Talent Availability",
  }
];
const About = () => {
  return (
    <section
      id="about"
      className="
          py-28
          bg-gradient-to-b
          from-white
          to-sky-50
          "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            About Us
          </h2>
        </div>

        {/* Paragraph 1 */}

        <div className="max-w-5xl mx-auto mt-12">
          <p className="text-slate-600 text-lg leading-9 text-center">
            [Company Name] is an India-based Offshore accounting support company 
            providing reliable and scalable bookkeeping and finance operations services to 
            Accounting firms, Startups and Scale. 
          </p>
        </div>

        {/* Space */}

        <div className="h-10" />

        {/* Paragraph 2 */}

        <div className="max-w-5xl mx-auto">
          <p className="text-slate-600 text-lg leading-9 text-center">
            We specialize in supporting accounting practices with day-to-day finance 
            processes through dedicated offshore teams that operate as an extension of our 
            clients’ businesses. Our goal is to help firms improve efficiency, reduce 
            operational workload, and scale profitably without compromising on quality. 
            With strong experience in finance operations, process management, and 
            accounting support functions, we focus on delivering accuracy, consistency, and 
            timely execution across all engagements.
          </p>
        </div>

        {/* Why India */}

        <div className="mt-24 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800">
            Why India?
          </h3>

          <p className="mt-4 text-slate-500 max-w-3xl mx-auto">
            India has become one of the world’s leading destinations for finance and 
            accounting outsourcing due to: 
          </p>
        </div>

        {/* Feature Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="
                group
                bg-slate-50
                border
                border-slate-200
                rounded-2xl
                p-8
                hover:bg-white
                hover:shadow-xl
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
                  bg-blue-100
                  text-blue-700
                  flex
                  items-center
                  justify-center
                "
              >
                {item.icon}
              </div>

              <h4 className="mt-6 text-xl font-semibold text-slate-800">
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