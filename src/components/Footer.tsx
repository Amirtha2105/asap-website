import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 border-t border-sky-900/50 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-sky-500/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              MaAthMagic <span className="text-sky-400">Business Services</span>
            </h2>

            <p className="mt-5 text-slate-400 leading-relaxed font-medium">
              Making Finance Simple. Empowering Business Growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5">Quick Links</h3>

            <div className="flex flex-col gap-3.5 text-slate-400 font-medium">
              <a href="#about" className="hover:text-sky-400 transition-colors duration-200">
                About Us
              </a>

              <a href="#services" className="hover:text-sky-400 transition-colors duration-200">
                Services
              </a>

              <a href="#careers" className="hover:text-sky-400 transition-colors duration-200">
                Careers
              </a>

              <a href="#contact" className="hover:text-sky-400 transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold text-white mb-5">Follow Us</h3>

            <div className="space-y-4">
              <a
                href="#"
                className="
                  flex
                  items-center
                  gap-3
                  text-slate-400
                  hover:text-sky-400
                  transition-colors
                  duration-200
                  font-medium
                "
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400">
                  <FaLinkedin size={16} />
                </div>
                LinkedIn
              </a>

              <a
                href="mailto:maathmagic85@gmail.com"
                className="
                  flex
                  items-center
                  gap-3
                  text-slate-400
                  hover:text-sky-400
                  transition-colors
                  duration-200
                  font-medium
                "
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400">
                  <FaEnvelope size={16} />
                </div>
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-center text-slate-500 text-sm font-medium">
            © 2026 MaAthMagic Business Services. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;