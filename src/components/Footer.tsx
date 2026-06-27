import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#040810] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}

          <div>
            <h2 className="text-3xl font-bold">
              MaAthMagic Business Services
            </h2>

            <p className="mt-5 text-[#8FA3B8] leading-8">
              Reliable offshore accounting support services from India for
              UK accounting firms.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <div className="flex flex-col gap-4 text-[#8FA3B8]">
              <a href="#about" className="hover:text-white transition">
                About Us
              </a>

              <a href="#services" className="hover:text-white transition">
                Services
              </a>

              <a href="#careers" className="hover:text-white transition">
                Careers
              </a>

              <a href="#contact" className="hover:text-white transition">
                Contact Us
              </a>
            </div>
          </div>

          {/* Follow Us */}

          <div>
            <h3 className="text-xl font-semibold mb-5">Follow Us</h3>

            <div className="space-y-4">
              <a
                href="#"
                className="
                  flex
                  items-center
                  gap-3
                  text-[#8FA3B8]
                  hover:text-white
                  transition
                "
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="#"
                className="
                  flex
                  items-center
                  gap-3
                  text-[#8FA3B8]
                  hover:text-white
                  transition
                "
              >
                <FaEnvelope />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-center text-[#5C6B7A] text-sm">
            © 2026 MaAthMagic Business Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;