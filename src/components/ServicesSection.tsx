import { useState } from "react";

import {
  FaBook,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaCalculator,
  FaUsers,
} from "react-icons/fa";

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
};

const services: Service[] = [
  {
    icon: <FaBook size={28} />,
    title: "Offshore Bookkeeping Services",
    description:
      "Accurate and timely bookkeeping support for accounting firms and their clients.",
    details: [
      "Sales and Purchase Entries",
      "Bank Reconciliations",
      "Ledger Maintenance",
      "Expense Processing",
      "Accounts Cleanup",
      "Month-end bookkeeping & Management Accounting",
    ],
  },
  {
    icon: <FaFileInvoiceDollar size={28} />,
    title: "Accounts Payable & Receivable Support",
    description:
      "Efficient AP and AR processing to improve financial control and reporting accuracy.",
    details: [
      "Invoice Processing",
      "Vendor Reconciliations",
      "Payment Tracking",
      "Customer Invoicing",
      "Receivables Follow-up",
      "Aging Reports",
    ],
  },
  {
    icon: <FaMoneyCheckAlt size={28} />,
    title: "CFO & Finance Transformation Services",
    description:
      "Helping accounting firms and their clients with strategic financial planning and transformation.",
    details: [
      "Budgeting and forecasting",
      "KPI dashboards and MIS reporting",
      "Process automation and optimization",
      "ERP implementation support",
    ],
  },
  {
    icon: <FaCalculator size={28} />,
    title: "Month-End Accounting Support",
    description:
      "Helping accounting firms manage period-end workloads efficiently.",
    details: [
      "Balance sheet reconciliations",
      "Accruals & prepayments support",
      "Reporting schedules",
      "Financial data preparation",
      "Month-end checklists",
    ],
  },
  {
    icon: <FaUsers size={28} />,
    title: "Dedicated Offshore Accounting Teams",
    description: "Build your own offshore finance support team in India.",
    details: [
      "Dedicated resources",
      "Flexible scaling",
      "Cost-effective delivery",
      "Process continuity",
      "Long-term support model",
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(
    null
  );

  return (
    <section
      id="services"
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
            absolute top-0 right-1/4
            w-[500px] h-[500px]
            rounded-full
            bg-[radial-gradient(circle,rgba(33,99,166,0.2),transparent_70%)]
            blur-3xl
          "
        />

        <div
          className="
            absolute bottom-1/4 -left-32
            w-[460px] h-[460px]
            rounded-full
            bg-[radial-gradient(circle,rgba(20,68,120,0.22),transparent_70%)]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <div className="text-center">

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="
                group
                bg-white/[0.04]
                backdrop-blur-sm
                p-8
                rounded-3xl
                border
                border-white/10
                hover:border-[#3E7CB1]/40
                hover:bg-white/[0.07]
                hover:shadow-[0_20px_50px_rgba(33,99,166,0.18)]
                hover:-translate-y-2
                transition-all
                duration-300
                flex
                flex-col
              "
            >
              {/* Icon */}

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
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
                {service.icon}
              </div>

              {/* Title */}

              <h3 className="mt-6 text-xl font-semibold text-white">
                {service.title}
              </h3>

              {/* Description */}

              <p className="mt-4 text-[#B7C4D4] leading-7 flex-grow">
                {service.description}
              </p>

              {/* Arrow */}
              <button
                onClick={() => setSelectedService(service)}
                className="
                  mt-6
                  self-start
                  text-[#6FA8DC]
                  font-semibold
                  hover:text-white
                  transition
                  duration-200
                "
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}

      {selectedService && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            px-4
            bg-black/70
            backdrop-blur-sm
          "
          onClick={() => setSelectedService(null)}
        >
          <div
            className="
              bg-[#0B1F33]
              border
              border-white/10
              max-w-xl w-full
              rounded-3xl
              p-8
              shadow-[0_30px_80px_rgba(0,0,0,0.5)]
            "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">
                {selectedService.title}
              </h3>

              <button
                onClick={() => setSelectedService(null)}
                className="text-2xl text-[#8FA3B8] hover:text-white transition"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <p className="text-[#B7C4D4] mb-6">
              {selectedService.description}
            </p>

            <h4 className="font-semibold text-white mb-3">
              Services Included
            </h4>

            <ul className="space-y-3">
              {selectedService.details.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#6FA8DC] mt-1">✓</span>
                  <span className="text-[#DCE8F3]">{item}</span>
                </li>
              ))}
            </ul>

            <button
              className="
                mt-8
                bg-[#2163A6]
                text-white
                px-6
                py-3
                rounded-xl
                font-semibold
                hover:bg-[#2E7BC4]
                transition
                duration-300
              "
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;