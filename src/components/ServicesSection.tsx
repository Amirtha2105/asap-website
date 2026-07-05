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

// Structural mapping mimicking image_2a91a1.png and image_2a9584.png
const pillarsData = {
  p2p: {
    id: "p2p",
    pillLabel: "P2P",
    subHeading: "Accounts Payable Support",
    previewPoints: [
      "Invoice processing",
      "Payment tracking",
      "Vendor reconciliations",
      "Aging reports",
      "AP Month end Close",
    ],
    boxTitle: "Accounts Payable",
    items: [
      { label: "Invoice Processing", desc: "Verify, record, and process supplier invoices accurately and efficiently." },
      { label: "Payment Tracking", desc: "Monitor payment schedules and ensure timely settlement of vendor invoices." },
      { label: "Vendor Reconciliations", desc: "Reconcile supplier statements with company records to identify and resolve discrepancies." },
      { label: "Aging Reports", desc: "Prepare and analyze accounts payable aging reports to effectively manage outstanding liabilities." },
      { label: "AP Month-End Close", desc: "Support month-end closing activities through accruals, reconciliations, and reporting to ensure accurate financial records." },
    ],
  },
  o2c: {
    id: "o2c",
    pillLabel: "O2C",
    subHeading: "Accounts Receivable Support",
    previewPoints: [
      "Sales Order",
      "Customer invoicing/Billing",
      "Credit Management",
      "Receivables follow-up",
      "Customer Reconciliation",
      "AR Month end closing",
    ],
    boxTitle: "Accounts Receivable",
    items: [
      { label: "Sales Order Processing", desc: "Create and manage customer sales orders accurately and efficiently." },
      { label: "Customer Invoicing/Billing", desc: "Generate timely and accurate invoices in line with contractual terms and business policies." },
      { label: "Credit Management", desc: "Assess customer creditworthiness and monitor credit limits to minimize financial risk." },
      { label: "Receivables Follow-up", desc: "Proactively follow up on outstanding invoices to accelerate collections and reduce overdue balances." },
      { label: "Customer Reconciliations", desc: "Reconcile customer accounts and resolve billing or payment discrepancies promptly." },
      { label: "AR Month-End Closing", desc: "Perform month-end receivable reconciliations and reporting to ensure financial accuracy." },
    ],
  },
  r2r: {
    id: "r2r",
    pillLabel: "R2R",
    subHeading: "Record to Report services",
    previewPoints: [
      "General Ledger Maintenance",
      "Fixed Asset",
      "Intercompany",
      "Month end closing Reporting",
      "Monthly Financials",
      "Management reports /MIS",
      "Cashflow",
    ],
    boxTitle: "General Ledger",
    items: [
      { label: "General Ledger Maintenance", desc: "Record, review, and maintain accurate financial transactions within the general ledger." },
      { label: "Fixed Asset Accounting", desc: "Manage asset capitalization, depreciation, transfers, disposals, and asset registers." },
      { label: "Intercompany Accounting", desc: "Process and reconcile intercompany transactions to ensure accurate group reporting." },
      { label: "Month-End Closing", desc: "Execute all month-end close activities, including journal entries, accruals, reconciliations, and financial validation." },
      { label: "Monthly Financial Reporting", desc: "Prepare Profit & Loss Statements, Balance Sheets, and Cash Flow Statements for management review." },
      { label: "Management Reports (MIS)", desc: "Deliver customized management information reports and dashboards to support strategic decision-making." },
      { label: "Cash Flow Management", desc: "Monitor cash inflows and outflows, prepare cash flow forecasts, and assist in maintaining healthy liquidity." },
      { label: "Variance Analysis", desc: "Analyze actual performance against budgets and forecasts, identify key variances, and provide actionable insights to improve business performance." },
    ],
  },
};

type PillarKey = keyof typeof pillarsData;

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activePillar, setActivePillar] = useState<PillarKey>("p2p");

  return (
    <section id="services" className="relative overflow-hidden py-28 scroll-mt-24">
      {/* Glow Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(33,99,166,0.2),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-[460px] h-[460px] rounded-full bg-[radial-gradient(circle,rgba(20,68,120,0.22),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Our Services</h2>
        </div>

        {/* 5 Cards Grid Component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.title}
              className="lg:col-span-2 group bg-white/[0.04] backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-[#3E7CB1]/40 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_rgba(33,99,166,0.18)] hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2163A6]/20 text-[#6FA8DC] flex items-center justify-center group-hover:bg-[#2163A6]/30 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-[#B7C4D4] leading-7 flex-grow">{service.description}</p>
              <button onClick={() => setSelectedService(service)} className="mt-6 self-start text-[#6FA8DC] font-semibold hover:text-white transition duration-200">
                Learn More →
              </button>
            </div>
          ))}

          {services.slice(3, 5).map((service, index) => (
            <div
              key={service.title}
              className={`lg:col-span-3 ${index === 0 ? "lg:col-start-1" : ""} group bg-white/[0.04] backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-[#3E7CB1]/40 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_rgba(33,99,166,0.18)] hover:-translate-y-2 transition-all duration-300 flex flex-col`}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#2163A6]/20 text-[#6FA8DC] flex items-center justify-center group-hover:bg-[#2163A6]/30 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-[#B7C4D4] leading-7 flex-grow">{service.description}</p>
              <button onClick={() => setSelectedService(service)} className="mt-6 self-start text-[#6FA8DC] font-semibold hover:text-white transition duration-200">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="my-24 border-t border-white/5" />

        {/* ----------------- CYLINDER PILLARS SECTION (image_2a91a1.png) ----------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {(Object.keys(pillarsData) as PillarKey[]).map((key) => {
            const pillar = pillarsData[key];
            const isSelected = activePillar === key;

            return (
              <div
                key={key}
                onClick={() => setActivePillar(key)}
                className={`
                  cursor-pointer transition-all duration-300 rounded-[60px] pb-12 pt-6 px-6 flex flex-col items-center border text-center select-none
                  ${isSelected 
                    ? "bg-[#2163A6]/15 border-[#3E7CB1] shadow-[0_20px_40px_rgba(33,99,166,0.25)] scale-[1.02]" 
                    : "bg-white/[0.03] border-white/10 hover:border-white/20 hover:bg-white/[0.05]"}
                `}
              >
                {/* Circular Head with inner contrasting ring */}
                <div className={`
                  w-36 h-36 rounded-full flex items-center justify-center font-bold text-2xl tracking-wider transition-all duration-300 border-8 shadow-inner
                  ${isSelected 
                    ? "bg-[#0B1F33] text-[#6FA8DC] border-[#2163A6]" 
                    : "bg-[#142d4c]/40 text-white/90 border-white/5"}
                `}>
                  {pillar.pillLabel}
                </div>

                {/* Subtitle Label */}
                <h4 className="text-white font-semibold mt-8 text-base border-b border-white/20 pb-2 w-4/5">
                  {pillar.subHeading}
                </h4>

                {/* Vertical Bullet Points List Preview */}
                <ul className="mt-6 space-y-2 text-left w-4/5 text-sm text-[#B7C4D4]">
                  {pillar.previewPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#6FA8DC] shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* ----------------- EXPANDED CORRESPONDING FLIP BOX (image_2a9584.png) ----------------- */}
        <div 
          key={activePillar} 
          className="
            w-full bg-[#0B1F33]/80 border border-[#2163A6]/30 rounded-3xl overflow-hidden
            shadow-[0_25px_60px_rgba(0,0,0,0.4)] animate-[fadeIn_0.35s_ease-out]
          "
        >
          {/* Header Bar matching column header styling */}
          <div className="bg-[#2163A6] py-5 px-8 text-center shadow-md">
            <h3 className="text-2xl font-bold text-white tracking-wide">
              {pillarsData[activePillar].boxTitle}
            </h3>
          </div>

          {/* Deep-Dive Structured Workflow Items */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/[0.01]">
            {pillarsData[activePillar].items.map((item, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-200"
              >
                <span className="text-white font-bold block text-base tracking-wide">
                  {item.label}
                </span>
                <p className="text-[#8FA3B8] text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Existing Popup Modals */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#0B1F33] border border-white/10 max-w-xl w-full rounded-3xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
              <button
                onClick={() => setSelectedService(null)}
                className="text-2xl text-[#8FA3B8] hover:text-white transition"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <p className="text-[#B7C4D4] mb-6">{selectedService.description}</p>
            <h4 className="font-semibold text-white mb-3">Services Included</h4>
            <ul className="space-y-3">
              {selectedService.details.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#6FA8DC] mt-1">✓</span>
                  <span className="text-[#DCE8F3]">{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {
                setSelectedService(null);
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="mt-8 bg-[#2163A6] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2E7BC4] transition duration-300"
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