import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#F8F4EE] border-t border-[#E5DDD0]">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-3xl font-serif text-[#4A4035]">
              SMK Wellness
            </h3>

            <p className="mt-5 text-[#6E6256] leading-relaxed">
              A sanctuary where heritage,
              mindfulness, and holistic healing
              come together to nurture your
              wellbeing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-[#4A4035] mb-5">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-[#6E6256] hover:text-[#6F7652]"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-[#6E6256] hover:text-[#6F7652]"
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-[#6E6256] hover:text-[#6F7652]"
              >
                Services
              </Link>

              <Link
                to="/contact"
                className="text-[#6E6256] hover:text-[#6F7652]"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-medium text-[#4A4035] mb-5">
              Wellness
            </h4>

            <div className="flex flex-col gap-3 text-[#6E6256]">
              <p>Holistic Healing</p>
              <p>Mindfulness Sessions</p>
              <p>Wellness Programs</p>
              <p>Personal Consultations</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium text-[#4A4035] mb-5">
              Connect
            </h4>

            <p className="text-[#6E6256]">
              Arunachal Pradesh, India
            </p>

            <p className="text-[#6E6256] mt-2">
              hello@smkwellness.com
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#6F7652] hover:-translate-y-1 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#6F7652] hover:-translate-y-1 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#6F7652] hover:-translate-y-1 transition"
              >
                <FaFacebookF />
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}

        <div className="h-px bg-[#E5DDD0] my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[#8B7D6B] text-sm">
            © 2026 SMK Wellness. All rights reserved.
          </p>

          <p className="text-[#8B7D6B] text-sm italic">
            Where Heritage Meets Healing
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;