import { motion } from "framer-motion";
import founderImg from "../assets/founder.png";
import { FaCheckCircle } from "react-icons/fa";

const expertiseList = [
  "Preparation and reporting of Profit & Loss and Balance Sheets",
  "Financial Accounting & Bookkeeping",
  "Management Information System (MIS) Reporting",
  "Finalization of Accounts",
  "GST, TDS & Statutory Compliance",
  "Payroll & Finance Operations",
  "Budgeting & Cash Flow Management",
  "Process Improvement & Internal Controls",
  "Liaising with Auditors and Regulatory Authorities",
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
        bg-gradient-to-br
        from-sky-200
        via-blue-100
        to-indigo-100
      "
    >
      {/* Dynamic Animated Mesh Gradient Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vibrant Cyan-Blue Mesh Orb (Top-Left) */}
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
            absolute -top-32 -left-32
            w-[700px] h-[700px]
            rounded-full
            bg-[radial-gradient(circle,rgba(2,132,199,0.45),transparent_70%)]
            blur-3xl
          "
        />

        {/* Rich Electric-Blue Mesh Orb (Bottom-Right) */}
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
            absolute -bottom-40 -right-20
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
        {/* Section 1: Corporate Overview */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 text-center lg:text-left drop-shadow-sm">
              About Us
            </h2>
            <p className="text-slate-800 text-lg leading-9 mb-6 font-medium">
              At <strong className="text-slate-950 font-bold">MaAthMagic Business Services</strong>, we believe that every business deserves access to professional Finance expertise without the cost of maintaining a large in-house Finance team.
            </p>
            <p className="text-slate-800 text-lg leading-9 font-medium">
              We deliver accurate accounting, financial reporting, payroll, taxation, GST compliance, budgeting, and management reporting solutions that help businesses operate efficiently and make informed financial decisions. We act as your virtual CFO and become an extension of your team by providing dependable Finance operations that grows with your business.
            </p>
          </div>

          <div
            className="
              lg:col-span-2
              bg-white/85
              backdrop-blur-md
              border
              border-sky-300/60
              shadow-[0_12px_32px_rgba(2,132,199,0.18)]
              rounded-3xl
              p-8
            "
          >
            <h4 className="text-xl font-bold text-slate-900 mb-3">
              Our Commitment
            </h4>
            <p className="text-slate-800 leading-7 text-sm font-medium">
              We are committed to delivering accurate, timely, and reliable accounting and Finance solutions. Our goal is to simplify your financial operations so you can focus on growing your business.
            </p>
          </div>
        </div>

        <hr className="border-sky-300/60 my-20" />

        {/* Section 2: Founder's Profile */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Professional Bio */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <span className="text-sky-700 font-bold text-sm uppercase tracking-wider block mb-2 drop-shadow-sm">
              Leadership Spotlight
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
              Divya Kalyan
            </h3>
            <p className="text-sky-800 font-semibold text-lg mb-6">
              Founder & Managing Director
            </p>

            <div className="space-y-4 text-slate-800 text-base leading-7 font-medium">
              <p>
                Divya Kalyan is the Founder and Managing Director of MaAthMagic Business Services. With over two decades of experience in Finance, Accounting, and Business Operations, she has partnered with businesses across diverse industries to strengthen financial processes, improve reporting, and ensure compliance.
              </p>
              <p>
                Her passion is to help businesses build efficient Finance functions that support informed decision-making and sustainable growth. She believes that timely financial information and well-managed processes are the foundation of every successful business.
              </p>
            </div>

            {/* Core Expertise Checklist */}
            <div className="mt-8">
              <h4 className="text-slate-900 font-bold text-lg mb-4">
                Core Expertise Includes:
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {expertiseList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-sky-600 mt-1 shrink-0" size={16} />
                    <span className="text-slate-800 text-sm leading-6 font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Image Framing */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Decorative background accent border effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 opacity-40 blur group-hover:opacity-70 transition duration-300" />

              <div className="relative bg-white/90 p-3 rounded-2xl border border-sky-300/80 shadow-[0_12px_32px_rgba(2,132,199,0.22)] backdrop-blur-md">
                <img
                  src={founderImg}
                  alt="Divya Kalyan - Founder"
                  className="w-full h-[460px] rounded-xl object-cover object-top filter contrast-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;