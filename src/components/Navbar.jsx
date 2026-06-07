import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">

        <div className="bg-white/80 backdrop-blur-lg border border-[#D8CBB7] rounded-full shadow-sm px-8 py-4 flex justify-between items-center">

          {/* Logo */}

          <Link
            to="/"
            className="text-2xl md:text-3xl font-serif text-[#4A4035]"
          >
            SMK Wellness
          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-10">

            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="
                  text-[#4A4035]
                  font-medium
                  hover:text-[#6F7652]
                  transition-colors
                  duration-300
                "
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="
                bg-[#6F7652]
                text-white
                px-6
                py-3
                rounded-full
                hover:bg-[#5F6645]
                transition-all
                duration-300
                shadow-md
                hover:shadow-lg
              "
            >
              Book Consultation
            </Link>

          </div>

          {/* Mobile Toggle */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-3xl text-[#6F7652]"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>

        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="md:hidden mt-4 bg-white rounded-[30px] shadow-xl border border-[#E8DED1] overflow-hidden">

            <div className="flex flex-col p-6">

              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="
                    py-4
                    border-b
                    border-[#F0E7DB]
                    text-[#4A4035]
                    hover:text-[#6F7652]
                    transition
                  "
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="
                  mt-6
                  bg-[#6F7652]
                  text-white
                  text-center
                  py-4
                  rounded-full
                  hover:bg-[#5F6645]
                  transition
                "
              >
                Book Consultation
              </Link>

            </div>

          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;