import { FaCheckCircle } from "react-icons/fa";

type ServiceTier = {
  id: string;
  title: string;

  features: string[];
};

const serviceTiers: ServiceTier[] = [
  {
    id: "essential",
    title: "Essential Finance",
    features: [
      "Monthly bookkeeping",
      "Bank reconciliation",
      "Monthly financial statements",
      "Up to a fixed number of transactions",
      "Email support",
    ],
  },
  {
    id: "growth",
    title: "Growth Finance",
    features: [
      "Everything in Essential Finance +",
      "GST & TDS compliance",
      "Payroll processing",
      "MIS reports",
      "Vendor/customer reconciliations",
      "Liaison with auditor",
    ],
  },
  {
    id: "strategic",
    title: "Strategic Finance",
    features: [
      "Everything in Growth Finance +",
      "Virtual CFO support",
      "Budgeting & forecasting",
      "Cash flow management",
      "Monthly management review meeting",
      "Business performance analysis",
    ],
  },
];

const outsourceBenefits = [
  "Reduce operational costs",
  "Access experienced Finance professionals",
  "Improve accuracy and compliance",
  "Receive timely financial reports",
  "Scale your Finance team as your business grows",
  "Focus on growing your business",
];

const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden py-28 scroll-mt-24">
      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(33,99,166,0.15),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,rgba(20,68,120,0.18),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Main Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            Our Services
          </h2>
          <p className="mt-4 text-[#B7C4D4] max-w-2xl mx-auto text-base">
          
          </p>
        </div>

        {/* 3-Column Plan / Tier Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {serviceTiers.map((tier) => {
            const isGrowth = tier.id === "growth";
            
            return (
              <div
                key={tier.id}
                className={`
                  relative flex flex-col justify-between p-8 rounded-3xl border transition-all duration-300 backdrop-blur-sm
                  ${isGrowth 
                    ? "bg-[#2163A6]/10 border-[#3E7CB1] shadow-[0_20px_40px_rgba(33,99,166,0.2)] scale-[1.02] md:translate-y-[-4px]" 
                    : "bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]"}
                `}
              >
               

                <div>
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {tier.title}
                  </h3>
      
                  
                  <div className="my-6 border-t border-white/10" />

                  {/* Feature Checkmarks List */}
                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => {
                      // Highlight inherit lines differently if desired
                      const isInherited = feature.includes("Everything in");
                      return (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheckCircle 
                            size={16} 
                            className={`shrink-0 mt-1 ${isInherited ? "text-[#6FA8DC]" : "text-[#3E7CB1]"}`} 
                          />
                          <span className={`text-sm ${isInherited ? "text-white font-medium" : "text-[#DCE8F3]"}`}>
                            {feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-8 pt-4">
                  <button 
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className={`
                      w-full py-3 rounded-xl font-semibold transition-all duration-200 text-sm tracking-wide
                      ${isGrowth 
                        ? "bg-[#2163A6] hover:bg-[#2E7BC4] text-white shadow-md" 
                        : "bg-white/5 hover:bg-white/10 text-[#6FA8DC] hover:text-white border border-white/10"}
                    `}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Separator Line */}
        <div className="my-24 border-t border-white/5" />

        {/* Value Proposition: Why Outsource Section */}
        <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="text-center md:text-left mb-8">
            <h3 className="text-3xl font-bold text-white tracking-wide">
              Why Outsource Your Finance Function?
            </h3>
            <p className="text-sm text-[#8FA3B8] mt-2">
             
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {outsourceBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#0B1F33]/40 border border-white/5 group hover:border-[#3E7CB1]/30 transition-all duration-200"
              >
                {/* Numeric index marker */}
                <span className="w-8 h-8 rounded-lg bg-[#2163A6]/10 text-[#6FA8DC] font-bold text-sm flex items-center justify-center shrink-0 group-hover:bg-[#2163A6]/20 transition-colors">
                  {index + 1}
                </span>
                <span className="text-[#DCE8F3] text-sm font-medium tracking-wide">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;