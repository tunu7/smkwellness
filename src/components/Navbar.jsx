import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4">

          <div
            className="
              bg-white/80
              backdrop-blur-xl
              border
              border-[#D8CBB7]
              rounded-3xl
              md:rounded-full
              shadow-lg
              px-6
              md:px-8
              py-4
              flex
              justify-between
              items-center
            "
          >

            {/* Logo */}

            <Link
              to="/"
              className="flex flex-col"
            >

              <span className="text-xl md:text-2xl font-serif text-[#4A4035]">
                SWRSO MWLO KO
              </span>

              <span
                className="
                  text-[10px]
                  md:text-xs
                  uppercase
                  tracking-[3px]
                  text-[#8C846C]
                "
              >
                Wellness
              </span>

            </Link>

            {/* Desktop Navigation */}

            <div className="hidden md:flex items-center gap-10">

              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="
                    text-[#4A4035]
                    font-medium
                    hover:text-[#6F7652]
                    transition-all
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

            {/* Mobile Menu Button */}

            <button
              onClick={() => setOpen(!open)}
              className="
                md:hidden
                text-3xl
                text-[#6F7652]
                relative
                z-60
              "
            >
              {open ? <HiX /> : <HiOutlineMenuAlt3 />}
            </button>

          </div>

        </nav>

      </header>

      {/* Mobile Overlay Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed
              inset-0
              bg-[#F8F4EE]/95
              backdrop-blur-xl
              z-40
              md:hidden
            "
          >

            <div
              className="
                flex
                flex-col
                justify-center
                items-center
                h-full
                px-6
              "
            >

              <motion.div
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >

                <p
                  className="
                    uppercase
                    tracking-[5px]
                    text-[#8C846C]
                    text-xs
                    mb-4
                  "
                >
                  SWRSO MWLO KO WELLNESS
                </p>

                <h2
                  className="
                    text-3xl
                    font-serif
                    text-[#4A4035]
                    mb-10
                  "
                >
                  Menu
                </h2>

              </motion.div>

              <div className="flex flex-col items-center gap-8">

                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className="
                      text-3xl
                      font-serif
                      text-[#4A4035]
                      hover:text-[#6F7652]
                      transition-all
                      duration-300
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
                    px-8
                    py-4
                    rounded-full
                    hover:bg-[#5F6645]
                    transition-all
                    duration-300
                    shadow-md
                  "
                >
                  Book Consultation
                </Link>

              </div>

              {/* Bottom Branding */}

              <div
                className="
                  absolute
                  bottom-10
                  text-center
                "
              >

                <p
                  className="
                    text-[#8C846C]
                    text-xs
                    uppercase
                    tracking-[4px]
                  "
                >
                  The Space Where Peace Resides Within
                </p>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}

export default Navbar;