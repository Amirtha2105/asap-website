import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/logo.png";

const navItems = ["About", "Services", "Why Us", "Process", "Careers", "Contact"];

const toSlug = (label: string) => label.toLowerCase().replace(/\s+/g, "");

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 w-full z-50
        bg-[#004b93]/40
        backdrop-blur-xl
        border-b
        border-white/20
        shadow-lg
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-24">
          <a
            href="#hero"
            className="flex items-center"
            aria-label="MaAth Magic Business Services — back to top"
          >
            <img src={logo} alt="MaAth Magic Business Services" className="h-16 w-auto" />
          </a>

          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${toSlug(item)}`}
                className="text-white/90 font-medium hover:text-white transition duration-200 drop-shadow-sm"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 pt-2 flex flex-col gap-4 border-t border-white/20">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${toSlug(item)}`}
                onClick={() => setOpen(false)}
                className="text-white/90 font-medium hover:text-white transition duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;