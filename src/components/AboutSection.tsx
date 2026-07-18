import founderImg from "../assets/founder.png"; // Updated extension to match your asset
import {
  FaCheckCircle,
} from "react-icons/fa";


const expertiseList = [
  "Preparation and reporting of Profit & Loss and Balance Sheets",
  "Financial Accounting & Bookkeeping",
  "Management Information System (MIS) Reporting",
  "Finalization of Accounts",
  "GST, TDS & Statutory Compliance",
  "Payroll & Finance Operations",
  "Budgeting & Cash Flow Management",
  "Process Improvement & Internal Controls",
  "Liaising with Auditors and Regulatory Authorities"
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 scroll-mt-24"
    >
      {/* Ambient glow layers */}
      <div className="absolute inset-0 pointer-events-none">
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
            absolute bottom-1/4 right-0
            w-[480px] h-[480px]
            rounded-full
            bg-[radial-gradient(circle,rgba(20,68,120,0.2),transparent_70%)]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section 1: Corporate Overview */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              About Us
            </h2>
            <p className="text-[#B7C4D4] text-lg leading-9 mb-6">
              At <strong>MaAthMagic Business Services</strong>, we believe that every business deserves access to professional Finance expertise without the cost of maintaining a large in-house Finance team.
            </p>
            <p className="text-[#B7C4D4] text-lg leading-9">
              <strong>Backed by over two decades of professional experience</strong>, we deliver accurate accounting, financial reporting, payroll, taxation, compliance, budgeting, and management reporting solutions that help businesses operate efficiently and make informed financial decisions. Whether you need bookkeeping support, payroll processing, GST compliance, management reporting, or Virtual CFO services, we become an extension of your team—providing dependable Finance operations that grow with your business.
            </p>
          </div>
          
          <div className="lg:col-span-2 bg-[#2163A6]/10 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
            <h4 className="text-xl font-semibold text-white mb-3">Our Commitment</h4>
            <p className="text-[#B7C4D4] leading-7 text-sm">
              We are committed to delivering accurate, timely, and reliable accounting and Finance solutions. Our goal is to simplify your financial operations so you can focus on growing your business.
            </p>
          </div>
        </div>

        <hr className="border-white/5 my-20" />

        {/* Section 2: Founder's Profile (Upgraded Design) */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Professional Bio */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <span className="text-[#6FA8DC] font-semibold text-sm uppercase tracking-wider block mb-2">
              Leadership Spotlight
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Divya Kalyan
            </h3>
            <p className="text-[#8FA3B8] font-medium text-lg mb-6">
              Founder & Managing Director
            </p>
            
            <div className="space-y-4 text-[#B7C4D4] text-base leading-7">
              <p>
                Divya Kalyan is the Founder and Managing Director of MaAthMagic Business Services. With over two decades of experience in Finance, accounting, and business operations, she has partnered with businesses across diverse industries to strengthen financial processes, improve reporting, and ensure compliance.
              </p>
              <p>
                Her passion is to help businesses build efficient Finance functions that support informed decision-making and sustainable growth. She believes that timely financial information and well-managed processes are the foundation of every successful business.
              </p>
            </div>

            {/* Core Expertise Checklist */}
            <div className="mt-8">
              <h4 className="text-white font-semibold text-lg mb-4">Core Expertise Includes:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {expertiseList.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FaCheckCircle className="text-[#6FA8DC] mt-1 shrink-0" size={16} />
                    <span className="text-[#B7C4D4] text-sm leading-6">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Image Framing */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Decorative background accent border effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#2163A6] to-[#6FA8DC] opacity-30 blur group-hover:opacity-50 transition duration-300" />
              
              <div className="relative bg-[#10141e] p-3 rounded-2xl border border-white/10">
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