import MainLayout from "../layouts/MainLayout";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <MainLayout>

      {/* Hero */}

      <section className="pt-40 pb-24 bg-[#F8F4EE]">

        <div className="max-w-5xl mx-auto text-center px-6">

          <p className="uppercase tracking-[5px] text-[#6F7652] mb-4">
            Contact Us
          </p>

          <h1 className="text-6xl md:text-7xl font-serif text-[#4A4035]">
            Let's Begin Your
            <br />
            Wellness Journey
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-[#6E6256] leading-relaxed">
            Whether you're exploring our services or ready to start your
            wellness journey, we're here to guide and support you.
          </p>

        </div>

      </section>

      {/* Contact Cards */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-[#F8F4EE] p-8 rounded-[28px] text-center">
              <FaEnvelope className="mx-auto text-3xl text-[#6F7652]" />
              <h3 className="mt-5 text-xl font-medium text-[#4A4035]">
                Email
              </h3>
              <p className="mt-2 text-[#6E6256]">
                hello@smkwellness.com
              </p>
            </div>

            <div className="bg-[#F8F4EE] p-8 rounded-[28px] text-center">
              <FaPhoneAlt className="mx-auto text-3xl text-[#6F7652]" />
              <h3 className="mt-5 text-xl font-medium text-[#4A4035]">
                Phone
              </h3>
              <p className="mt-2 text-[#6E6256]">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="bg-[#F8F4EE] p-8 rounded-[28px] text-center">
              <FaMapMarkerAlt className="mx-auto text-3xl text-[#6F7652]" />
              <h3 className="mt-5 text-xl font-medium text-[#4A4035]">
                Location
              </h3>
              <p className="mt-2 text-[#6E6256]">
                Arunachal Pradesh
              </p>
            </div>

            <div className="bg-[#F8F4EE] p-8 rounded-[28px] text-center">
              <FaInstagram className="mx-auto text-3xl text-[#6F7652]" />
              <h3 className="mt-5 text-xl font-medium text-[#4A4035]">
                Instagram
              </h3>
              <p className="mt-2 text-[#6E6256]">
                @smkwellness.co
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Contact Form */}

      <section className="py-24 bg-[#F8F4EE]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16">

            <div>

              <p className="uppercase tracking-[5px] text-[#6F7652]">
                Get In Touch
              </p>

              <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
                We'd Love To Hear From You
              </h2>

              <p className="mt-6 text-[#6E6256] leading-relaxed">
                Fill out the form and our team will get back to you as soon as
                possible. Whether you have questions, want to book a session,
                or need guidance, we're here for you.
              </p>

            </div>

            <form className="bg-white p-10 rounded-4xl shadow-sm">

  <div className="grid md:grid-cols-2 gap-6">

    <input
      type="text"
      placeholder="Full Name"
      className="w-full p-4 rounded-xl border border-[#D8CBB7]"
    />

    <input
      type="email"
      placeholder="Email Address"
      className="w-full p-4 rounded-xl border border-[#D8CBB7]"
    />

    <input
      type="tel"
      placeholder="Phone Number"
      className="w-full p-4 rounded-xl border border-[#D8CBB7]"
    />

    <input
      type="number"
      placeholder="Age"
      className="w-full p-4 rounded-xl border border-[#D8CBB7]"
    />

  </div>

  <input
    type="text"
    placeholder="City"
    className="w-full mt-6 p-4 rounded-xl border border-[#D8CBB7]"
  />

  {/* Wellness Goal */}

  <div className="mt-8">

    <label className="block mb-3 text-[#4A4035] font-medium">
      Primary Wellness Goal
    </label>

    <select
      className="w-full p-4 rounded-xl border border-[#D8CBB7]"
    >
      <option>Select Goal</option>
      <option>Stress Management</option>
      <option>Weight Management</option>
      <option>Mindfulness</option>
      <option>Better Sleep</option>
      <option>Lifestyle Improvement</option>
      <option>General Wellness</option>
    </select>

  </div>

  {/* Challenges */}

  <div className="mt-8">

    <label className="block mb-4 text-[#4A4035] font-medium">
      Current Challenges
    </label>

    <div className="grid grid-cols-2 gap-4">

      <label>
        <input type="checkbox" /> Stress
      </label>

      <label>
        <input type="checkbox" /> Poor Sleep
      </label>

      <label>
        <input type="checkbox" /> Low Energy
      </label>

      <label>
        <input type="checkbox" /> Weight Issues
      </label>

      <label>
        <input type="checkbox" /> Anxiety
      </label>

      <label>
        <input type="checkbox" /> Work-Life Balance
      </label>

    </div>

  </div>

  {/* Consultation Type */}

  <div className="mt-8">

    <label className="block mb-4 text-[#4A4035] font-medium">
      Preferred Consultation
    </label>

    <div className="flex gap-6">

      <label>
        <input type="radio" name="consultation" /> Online
      </label>

      <label>
        <input type="radio" name="consultation" /> Offline
      </label>

      <label>
        <input type="radio" name="consultation" /> Either
      </label>

    </div>

  </div>

  {/* Time */}

  <div className="mt-8">

    <label className="block mb-3 text-[#4A4035] font-medium">
      Preferred Time
    </label>

    <select
      className="w-full p-4 rounded-xl border border-[#D8CBB7]"
    >
      <option>Select Time</option>
      <option>Morning</option>
      <option>Afternoon</option>
      <option>Evening</option>
    </select>

  </div>

  {/* Notes */}

  <textarea
    rows="6"
    placeholder="Tell us about your wellness goals..."
    className="w-full mt-8 p-4 rounded-xl border border-[#D8CBB7]"
  />

  <button
    type="submit"
    className="w-full mt-8 bg-[#6F7652] text-white py-4 rounded-full"
  >
    Request Consultation
  </button>

</form>

          </div>

        </div>

      </section>

      {/* Location */}

      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">

            <p className="uppercase tracking-[5px] text-[#6F7652]">
              Visit Us
            </p>

            <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
              Our Wellness Space
            </h2>

          </div>

          <div className="h-112.5 bg-[#F8F4EE] rounded-112.5 flex items-center justify-center">

            <p className="text-[#6E6256]">
              Google Map Integration Here
            </p>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="py-24 bg-[#F8F4EE]">

        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#6F7652]">
              Frequently Asked Questions
            </p>

            <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
              Common Questions
            </h2>

          </div>

          <div className="space-y-6">

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-medium text-[#4A4035]">
                How do I book a consultation?
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-medium text-[#4A4035]">
                Are sessions available online?
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl">
              <h3 className="font-medium text-[#4A4035]">
                Do you offer personalized wellness plans?
              </h3>
            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
}

export default Contact;