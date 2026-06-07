import {
  FaArrowRight,
} from "react-icons/fa";

const advantages = [
  {
    title: "Industry-Focused Approach",
    desc: "We exclusively focus on accounting and finance support services.",
  },
  {
    title: "Dedicated Team Model",
    desc: "Our resources work as an extension of your internal operations.",
  },
  {
    title: "Process Driven Delivery",
    desc: "Standardized workflows and quality controls ensure consistency.",
  },
  {
    title: "Data Confidentiality",
    desc: "Secure handling of financial data with strong confidentiality practices.",
  },
  {
    title: "Scalability",
    desc: "Quickly scale your oAshore accounting support team based on business requirements.",
  },
  {
    title: "Cost Efficiency",
    desc: "Reduce operational costs while maintaining service quality.",
  },

];

const industries = [
  {
    title: "UK Accounting Firms",
    description:
      "Helping UK accounting practices scale efficiently through offshore bookkeeping and accounting support teams from India.",
    areas: [
      "Bookkeeping",
      "AP/AR Processing",
      "Payroll Support",
      "VAT Workings",
      "Month-End Accounting",
      "Dedicated Offshore Teams",
    ],
  },
  {
    title: "Indian Accounting Firms",
    description:
      "Supporting Indian CA firms and accounting practices with scalable finance operations support and process management services.",
    areas: [
      "Bookkeeping Support",
      "Accounting Process Outsourcing",
      "Reconciliations",
      "MIS Reporting Support",
      "Back-Office Finance Operations",
      "Resource Augmentation",
    ],
  },
  {
    title: "Startups & Scale-Ups",
    description:
      "Helping growing businesses streamline finance operations and focus on business expansion.",
    areas: [
      "Virtual Accounting Support",
      "Finance Operations Management",
      "Expense Tracking",
      "Accounts Payable & Receivable",
      "Monthly Financial Reporting",
      "Cash Flow Support",
    ],
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="whyus"
      className="py-28 bg-gradient-to-b
                        from-indigo-50
                        to-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* Section Heading */}

        <div className="text-center mb-20">
          <span className="uppercase tracking-[0.3em] text-blue-700 font-semibold">
            Why Choose Us
          </span>

         <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-800 max-w-4xl mx-auto leading-tight">
            Your Reliable Offshore Accounting Partner
        </h2>
        </div>

        {/* Main Title A */}

        <div className="mb-24">

          <h3 className="text-3xl font-bold text-slate-800 mb-12">
            What Sets Us Apart
          </h3>

          <h4 className="text-3xl font-bold text-slate-800 mb-5">
            Reliable Offshore Partner for UK Accounting Firms
         </h4>

          <div className="space-y-8">

            {advantages.map((item, index) => (
              <div
                key={index}
                className="
                  flex
                  gap-5
                  border-l-4
                  border-blue-200
                  pl-6
                  hover:border-blue-600
                  transition-all
                  duration-300
                "
              >
                <div className="mt-1 text-blue-700">
                  <FaArrowRight />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-slate-800">
                    {item.title}
                  </h4>
    
                  <p className="mt-2 text-slate-600 leading-7">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
    </div>
        {/* Main Title B */}

        <div className="mb-28">

  <h3 className="text-3xl font-bold text-slate-800 text-center">
    Industries We Support
  </h3>

  <p className="mt-5 text-center text-slate-600 text-lg max-w-3xl mx-auto">
    We support businesses of different sizes with reliable accounting,
    finance operations, and offshore resource solutions.
  </p>

  <div className="mt-14 space-y-8">

    {industries.map((industry, index) => (
      <div
        key={index}
        className="
          bg-white
          border
          border-slate-200
          rounded-3xl
          p-8
          hover:shadow-xl
          hover:border-blue-300
          transition-all
          duration-300
        "
      >
        <div className="text-center">

          <div className="max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold text-slate-800">
              {industry.title}
            </h4>

            <p className="mt-4 text-slate-600 leading-8">
              {industry.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {industry.areas.map((area, idx) => (
              <div
                key={idx}
                className="
                    bg-slate-50
                    border
                    border-slate-100
                    rounded-full
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-slate-700
                    hover:border-blue-300
                    hover:bg-blue-50
                    transition
                "
              >
                {area}
              </div>
            ))}
          </div>

        </div>
      </div>
    ))}

  </div>

</div>

        {/* Main Title C */}

        <div>

  <div className="text-center">

    <h3 className="text-3xl font-bold text-slate-800">
      Why Startups & Growing Businesses Choose Us
    </h3>

    <p className="mt-5 text-slate-600 text-lg">
      Built for businesses that need flexible and scalable finance support.
    </p>

  </div>

  <div className="mt-16 grid md:grid-cols-2 gap-8">

  {[
    {
      title: "Flexible Support Model",
      desc: "Scale accounting support based on your business growth.",
    },
    {
      title: "Cost-Effective Operations",
      desc: "Access experienced finance professionals without large in-house costs.",
    },
    {
      title: "Process Efficiency",
      desc: "Structured workflows and timely reporting support better decision-making.",
    },
    {
      title: "Focus on Growth",
      desc: "Spend less time managing finance operations and more time growing the business.",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="
        text-center
        bg-white
        border
        border-slate-200
        rounded-3xl
        p-8
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
      "
    >
      <div
        className="
          w-12
          h-12
          rounded-full
          bg-blue-100
          text-blue-700
          flex
          items-center
          justify-center
          mx-auto
          font-bold
        "
      >
        {index + 1}
      </div>

      <h4 className="mt-5 text-xl font-semibold text-slate-800">
        {item.title}
      </h4>

      <p className="mt-4 text-slate-600 leading-7">
        {item.desc}
      </p>
    </div>
  ))}

</div>

</div>
    </section>
  );
};

export default WhyChooseUs;