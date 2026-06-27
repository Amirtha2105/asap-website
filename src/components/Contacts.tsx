import { motion } from "framer-motion";
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
      {/* Ambient glow layer only — base gradient lives in the shared page wrapper */}
      <div className="absolute inset-0">
        <div
          className="
            absolute top-0 left-1/3
            w-[480px] h-[480px]
            rounded-full
            bg-[radial-gradient(circle,rgba(33,99,166,0.2),transparent_70%)]
            blur-3xl
          "
        />

        <div
          className="
            absolute bottom-0 right-0
            w-[440px] h-[440px]
            rounded-full
            bg-[radial-gradient(circle,rgba(20,68,120,0.2),transparent_70%)]
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <div className="text-center">
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Contact Us
          </h2>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Get in Touch
          </h2>

          <p className="mt-6 text-lg text-[#B7C4D4] max-w-4xl mx-auto leading-8">
            Looking for a reliable offshore accounting support partner?
            <br />
            We would be happy to discuss how our India-based accounting
            support team can help your firm improve efficiency and
            scalability.
          </p>
        </div>

        {/* Main Grid */}

        <div className="mt-20 grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
              bg-white/[0.04]
              backdrop-blur-sm
              rounded-3xl
              border
              border-white/10
              p-10
            "
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#2163A6]/20 flex items-center justify-center text-[#6FA8DC]">
                  <FaUserTie />
                </div>

                <div>
                  <p className="font-semibold text-white">Divya Kalyan</p>
                  <p className="text-[#B7C4D4]">Founder / Managing Director</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#2163A6]/20 flex items-center justify-center text-[#6FA8DC]">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-[#B7C4D4]">divya.vasan18@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#2163A6]/20 flex items-center justify-center text-[#6FA8DC]">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p className="text-[#B7C4D4]">+91-9500071380</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#2163A6]/20 flex items-center justify-center text-[#6FA8DC]">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-[#B7C4D4]">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}

          <motion.div
            whileHover={{ y: -5 }}
            className="
              bg-white/[0.04]
              backdrop-blur-sm
              rounded-3xl
              border
              border-white/10
              p-10
              flex
              flex-col
            "
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Business Hours
            </h3>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#2163A6]/20 flex items-center justify-center text-[#6FA8DC]">
                <FaClock />
              </div>

              <div>
                <p className="font-semibold text-white">Monday – Friday</p>
                <p className="text-[#B7C4D4]">9:00 AM – 6:00 PM IST</p>
              </div>
            </div>

            <div
              className="
                mt-14
                p-8
                rounded-2xl
                bg-gradient-to-br
                from-[#2163A6]
                to-[#123A63]
                border
                border-white/10
                text-white
                flex-grow
                flex
                flex-col
                justify-between
              "
            >
              <h4 className="text-2xl font-bold">
                Schedule a Free Consultation Today
              </h4>

              <button
                className="
                  mt-8
                  self-start
                  bg-white
                  text-[#123A63]
                  px-8
                  py-4
                  rounded-xl
                  font-semibold
                  hover:bg-[#DCE8F3]
                  transition
                  duration-300
                "
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;