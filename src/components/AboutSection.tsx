import founderImg from "../assets/founder.png"; // Updated extension to match your asset
import {
  FaCheckCircle,
} from "react-icons/fa";


const expertiseList = [
  "Preparation and reporting of Profit & Loss and Balance Sheets",
  "Management reporting (MIS)",
  "Finalization of accounts",
  "Handling complex compliance-related responsibilities",
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
              MaAthMagic Business Services is an India-based offshore
              accounting support company providing reliable and scalable
              bookkeeping and finance operations services to accounting
              firms, startups, and scaleups.
            </p>
            <p className="text-[#B7C4D4] text-lg leading-9">
              We specialize in supporting accounting practices with
              day-to-day finance processes through dedicated offshore teams
              that operate as an extension of our clients' businesses.
              Our goal is to help firms improve efficiency, reduce
              operational workload, and scale profitably without
              compromising on quality.
            </p>
          </div>
          
          <div className="lg:col-span-2 bg-[#2163A6]/10 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
            <h4 className="text-xl font-semibold text-white mb-3">Our Commitment</h4>
            <p className="text-[#B7C4D4] leading-7 text-sm">
              With strong experience in finance operations, process management, and accounting support functions, we focus on delivering accuracy, consistency, and timely execution across all global client engagements.
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
                I am a highly motivated and results-driven Finance Professional with over <strong>20+ years of experience</strong> in Finance and Accounts operations across diverse industries and sectors.
              </p>
              <p>
                Throughout my career, I have collaborated closely with senior management teams to address complex financial challenges and drive business performance improvements. With a forward-looking approach, I stay aligned with emerging trends and developments in the accounting domain.
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