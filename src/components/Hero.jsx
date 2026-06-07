import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen bg-[#F8F4EE] pt-36 relative overflow-hidden">

      {/* Background Blobs */}

      <div className="absolute top-20 left-0 w-96 h-96 bg-[#D8CBB7]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="absolute bottom-0 right-0 w-125 h-125 bg-[#E8DED1]/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[6px] text-[#8C846C] mb-6 text-sm">
              Wellness • Healing • Mindfulness
            </p>

            <h1 className="font-serif text-[#4A4035] leading-none text-5xl md:text-7xl lg:text-8xl">
              Where
              <br />
              Heritage
              <br />
              Meets Healing
            </h1>

            <p className="mt-8 text-lg text-[#6E6256] leading-relaxed max-w-xl">
              Discover a sanctuary where traditional wisdom,
              mindful living, and holistic healing come together
              to nurture a balanced and fulfilling life.
            </p>

            {/* CTA Buttons */}

            <div className="flex flex-wrap items-center gap-6 mt-10">

              <Link
                to="/contact"
                className="
                  bg-[#6F7652]
                  text-white
                  px-7
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

              <Link
                to="/about"
                className="
                  text-[#4A4035]
                  font-medium
                  hover:text-[#6F7652]
                  transition-colors
                "
              >
                Our Story →
              </Link>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h3 className="text-3xl font-serif text-[#4A4035]">
                  100+
                </h3>
                <p className="text-sm text-[#6E6256] mt-2">
                  Wellness Sessions
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-serif text-[#4A4035]">
                  50+
                </h3>
                <p className="text-sm text-[#6E6256] mt-2">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-serif text-[#4A4035]">
                  5+
                </h3>
                <p className="text-sm text-[#6E6256] mt-2">
                  Wellness Programs
                </p>
              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[40px] shadow-xl">

              <img
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200"
                alt="SMK Wellness"
                className="w-full h-162.5 lg:h-187.5 object-cover"
              />

            </div>

            {/* Floating Card */}

            <div
              className="
                absolute
                bottom-8
                left-8
                bg-[#F8F4EE]/95
                backdrop-blur-md
                p-6
                rounded-3xl
                shadow-lg
              "
            >

              <p className="text-xs tracking-[3px] uppercase text-[#8C846C]">
                Wellness Philosophy
              </p>

              <h3 className="text-2xl font-serif text-[#4A4035] mt-2">
                Small Choices.
                <br />
                Big Change.
              </h3>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;