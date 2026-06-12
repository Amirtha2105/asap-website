import {
  FaUserTie,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b
                        from-cyan-50
                        to-emerald-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="uppercase tracking-[0.3em] text-blue-700 font-semibold">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-800">
            Get In Touch
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <div>

            <p className="text-slate-600 text-lg leading-8">
              Looking for a reliable offshore accounting support partner? 
              We would be happy to discuss how our India-based accounting support team 
              can help your firm improve efficiency and scalability. 
            </p>

            {/* Contact Information */}

            <div className="mt-12">

              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">

                <div className="flex gap-4">
                  <FaUserTie className="text-blue-700 text-xl mt-1" />

                  <div>
                    <p className="font-semibold text-slate-800">
                      Founder / Managing Director
                    </p>

                    <p className="text-slate-600">
                      Divya Kalyan
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaEnvelope className="text-blue-700 text-xl mt-1" />

                  <div>
                    <p className="font-semibold text-slate-800">
                      Email
                    </p>

                    <p className="text-slate-600">
                      divya.vasan18@gmail.com 
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaPhoneAlt className="text-blue-700 text-xl mt-1" />

                  <div>
                    <p className="font-semibold text-slate-800">
                      Phone
                    </p>

                    <p className="text-slate-600">
                      +91-9500071380 
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaMapMarkerAlt className="text-blue-700 text-xl mt-1" />

                  <div>
                    <p className="font-semibold text-slate-800">
                      Location
                    </p>

                    <p className="text-slate-600">
                      India
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Business Hours */}

            <div className="mt-12">

              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Business Hours
              </h3>

              <div className="flex gap-4">

                <FaClock className="text-blue-700 text-xl mt-1" />

                <div>
                  <p className="font-semibold text-slate-800">
                    Monday - Friday
                  </p>

                  <p className="text-slate-600">
                    10:00 AM – 8:00 PM IST
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side CTA */}

          <div
            className="
              bg-white
              rounded-3xl
              p-10
              shadow-lg
              border
              border-slate-200
              flex
              flex-col
              justify-center
            "
          >

            <span className="text-blue-700 font-semibold uppercase tracking-widest">
              Let's Connect
            </span>

            <h3 className="mt-4 text-4xl font-bold text-slate-800 leading-tight">
              Schedule a Free
              Consultation Today
            </h3>

            <p className="mt-6 text-slate-600 leading-8">
              Speak with our team to explore how offshore accounting
              support can help your firm improve efficiency,
              reduce operational workload, and scale confidently.
            </p>

            <button
              className="
                mt-8
                bg-slate-800
                hover:bg-slate-900
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                transition
                w-fit
              "
            >
              Book Consultation
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;