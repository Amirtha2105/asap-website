import { useState } from "react";

import {
  FaBook,
  FaFileInvoiceDollar,
  FaMoneyCheckAlt,
  FaCalculator,
  FaUsers,
} from "react-icons/fa";


const services = [
  {
    icon: <FaBook size={28} />,
    title: "Offshore Bookkeeping Services ",
    description:
      "Accurate and timely bookkeeping support for accounting firms and their clients.",
    details: [
      "Sales and Purchase Entries",
      "Bank Reconciliation",
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
      "Aging Reports"
    ],
  },
  {
    icon: <FaMoneyCheckAlt size={28} />,
    title: "VAT/GST & Compliance Support",
    description:
      "Support for GST & VAT-related accounting processes and working documentation.",
    details: [
      "VAT Workings Preparation",
      "Reconciliations Support",
      "Supporting Schedules",
      "Data compilation for submissions",
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
       "Reporting schedules ",  
       "Financial data preparation",  
       "Month-end checklists"  
    ],
  },
  {
    icon: <FaUsers size={28} />,
    title: "Dedicated Offshore Accounting Teams",
    description:
      "Build your own offshore finance support team in India.",
    details: [
      "Balance sheet reconciliations",
      "Accruals & prepayments support",
      "Reporting schedules",
      "Financial data preparation",
      "Month-end checklists"
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);
  return (
    <section
      id="services"
      className="py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center">
          <span className="text-blue-700 font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-800">
            Accounting Support Designed
            For UK Firms
          </h2>
        </div>

        {/* Services Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((service, index) => (
            <div
              key={index}
              className="
                group
                bg-white
                p-8
                rounded-3xl
                border
                border-slate-200
                hover:border-blue-300
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* Icon */}

              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-blue-100
                  text-blue-700
                  flex
                  items-center
                  justify-center
                "
              >
                {service.icon}
              </div>

              {/* Title */}

              <h3 className="mt-6 text-xl font-semibold text-slate-800">
                {service.title}
              </h3>

              {/* Description */}

              <p className="mt-4 text-slate-600 leading-7">
                {service.description}
              </p>

              {/* Arrow */}
              <button
                onClick={() => setSelectedService(service)}
                className="mt-6 text-blue-700 font-semibold hover:text-blue-900 transition"
              >
                Learn More →
              </button>

            </div>
          ))}

        </div>

      </div>
      {selectedService && (
  <div
    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
    onClick={() => setSelectedService(null)}
  >
    <div
      className="bg-white max-w-xl w-full rounded-3xl p-8 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-slate-800">
          {selectedService.title}
        </h3>

        <button
          onClick={() => setSelectedService(null)}
          className="text-2xl text-slate-500 hover:text-slate-800"
        >
          ×
        </button>
      </div>

      <p className="text-slate-600 mb-6">
        {selectedService.description}
      </p>

      <h4 className="font-semibold text-slate-800 mb-3">
        Services Included
      </h4>

      <ul className="space-y-3">
        {selectedService.details.map(
          (item: string, idx: number) => (
            <li
              key={idx}
              className="flex items-start gap-3"
            >
              <span className="text-green-600 mt-1">✓</span>
              <span>{item}</span>
            </li>
          )
        )}
      </ul>

      <button
        className="
          mt-8
          bg-blue-700
          text-white
          px-6
          py-3
          rounded-xl
          hover:bg-blue-800
          transition
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