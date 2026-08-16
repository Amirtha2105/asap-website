import { motion } from "framer-motion";
import { CONSULTATION_FORM_URL } from "../constants/forms";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaUserTie,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-28 scroll-mt-24">
      {/* Light blue ambient glow layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute top-0 left-1/3
            w-[480px] h-[480px]
            rounded-full
            bg-[radial-gradient(circle,rgba(2,132,199,0.2),transparent_70%)]
            blur-3xl
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            w-[440px] h-[440px]
            rounded-full
            bg-[radial-gradient(circle,rgba(37,99,235,0.2),transparent_70%)]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Contact Us
          </h2>

          <p className="mt-6 text-lg text-slate-700 max-w-4xl mx-auto leading-8 font-medium">
            Let's Simplify Your Finance Operations
            <br />
            Whether you're a startup or an established business, we're here to help you streamline your accounting, improve compliance, strengthen financial reporting, and gain better visibility into your business performance.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            whileHover={{ y: -5 }}
            className="
              bg-white/85
              backdrop-blur-md
              rounded-3xl
              border
              border-sky-300/60
              p-10
              shadow-[0_12px_32px_rgba(2,132,199,0.12)]
              hover:shadow-[0_20px_45px_rgba(2,132,199,0.22)]
              hover:border-sky-500
              hover:bg-white
              transition-all
              duration-300
            "
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 border border-sky-200">
                  <FaUserTie size={18} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Divya Kalyan</p>
                  <p className="text-slate-600">Founder / Managing Director</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 border border-sky-200">
                  <FaEnvelope size={18} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="text-slate-600">maathmagic85@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 border border-sky-200">
                  <FaPhoneAlt size={18} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <p className="text-slate-600">+91-9500071380</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 border border-sky-200">
                  <FaMapMarkerAlt size={18} />
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Location</p>
                  <p className="text-slate-600">Bangalore / Chennai</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Hours & CTA */}
          <motion.div
            whileHover={{ y: -5 }}
            className="
              bg-white/85
              backdrop-blur-md
              rounded-3xl
              border
              border-sky-300/60
              p-10
              shadow-[0_12px_32px_rgba(2,132,199,0.12)]
              hover:shadow-[0_20px_45px_rgba(2,132,199,0.22)]
              hover:border-sky-500
              hover:bg-white
              transition-all
              duration-300
              flex
              flex-col
            "
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Business Hours
            </h3>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 border border-sky-200">
                <FaClock size={18} />
              </div>

              <div>
                <p className="font-semibold text-slate-900">Monday – Friday</p>
                <p className="text-slate-600">9:00 AM – 6:00 PM IST</p>
              </div>
            </div>

            <div
              className="
                mt-14
                p-8
                rounded-2xl
                bg-gradient-to-br
                from-sky-600
                to-blue-700
                border
                border-sky-400/30
                text-white
                shadow-lg
                flex-grow
                flex
                flex-col
                justify-between
              "
            >
              <h4 className="text-2xl font-bold leading-snug">
                📞 Schedule a Free Discovery Call Today
              </h4>

              <a
                href={CONSULTATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-8
                  self-start
                  bg-white
                  text-sky-900
                  px-8
                  py-4
                  rounded-xl
                  font-bold
                  hover:bg-sky-50
                  hover:shadow-md
                  transition
                  duration-300
                "
              >
                Set Up a Strategy Call
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;