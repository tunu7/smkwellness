import MainLayout from "../layouts/MainLayout";

function About() {
  return (
    <MainLayout>

      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-[#F8F4EE]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-[#6F7652] mb-4">
            About Us
          </p>

          <h1 className="text-6xl md:text-7xl font-serif text-[#4A4035] leading-tight">
            A Journey Towards
            <br />
            Holistic Wellbeing
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-[#6E6256] leading-relaxed">
            At SMK Wellness, we believe wellness is more than physical health.
            It is the harmony of mind, body, and spirit. Through personalized
            guidance, mindful living, and holistic healing practices, we help
            individuals reconnect with their most balanced and authentic selves.
          </p>

        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15"
              alt="Wellness"
              className="rounded-4xl shadow-lg w-full h-125 object-cover"
            />
          </div>

          <div>

            <p className="uppercase tracking-[5px] text-[#6F7652] mb-4">
              Our Story
            </p>

            <h2 className="text-5xl font-serif text-[#4A4035] mb-8">
              Where Heritage Meets Healing
            </h2>

            <p className="text-[#6E6256] leading-relaxed mb-6">
              SMK Wellness was created with a simple vision — to provide a safe
              and nurturing space where individuals can heal, grow, and thrive.
            </p>

            <p className="text-[#6E6256] leading-relaxed mb-6">
              Drawing inspiration from traditional wellness philosophies and
              integrating them with modern approaches, we guide people toward
              sustainable wellbeing rather than temporary solutions.
            </p>

            <p className="text-[#6E6256] leading-relaxed">
              Every wellness journey is unique, and our mission is to support
              each individual with care, compassion, and personalized attention.
            </p>

          </div>

        </div>
      </section>

      {/* Mission Vision */}
      <section className="py-24 bg-[#F8F4EE]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-4xl p-10 shadow-sm">
              <h3 className="text-3xl font-serif text-[#4A4035] mb-6">
                Our Mission
              </h3>

              <p className="text-[#6E6256] leading-relaxed">
                To empower individuals with holistic wellness practices that
                encourage physical vitality, emotional balance, and inner peace.
              </p>
            </div>

            <div className="bg-white rounded-4xl p-10 shadow-sm">
              <h3 className="text-3xl font-serif text-[#4A4035] mb-6">
                Our Vision
              </h3>

              <p className="text-[#6E6256] leading-relaxed">
                To create a world where wellness becomes a way of life and every
                individual has access to tools that support long-term health and
                happiness.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#6F7652]">
              Our Values
            </p>

            <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
              What Guides Us
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center">
              <h3 className="text-5xl text-[#6F7652] mb-4">01</h3>
              <h4 className="font-medium text-[#4A4035] mb-3">
                Compassion
              </h4>
              <p className="text-[#6E6256]">
                Caring deeply for every individual’s wellbeing.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl text-[#6F7652] mb-4">02</h3>
              <h4 className="font-medium text-[#4A4035] mb-3">
                Balance
              </h4>
              <p className="text-[#6E6256]">
                Creating harmony between mind, body, and soul.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl text-[#6F7652] mb-4">03</h3>
              <h4 className="font-medium text-[#4A4035] mb-3">
                Authenticity
              </h4>
              <p className="text-[#6E6256]">
                Staying true to traditional wellness principles.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl text-[#6F7652] mb-4">04</h3>
              <h4 className="font-medium text-[#4A4035] mb-3">
                Growth
              </h4>
              <p className="text-[#6E6256]">
                Encouraging lifelong wellness and self-discovery.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-[#6F7652]">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-serif text-white">
            Begin Your Wellness Journey
          </h2>

          <p className="text-white/80 mt-6 text-lg">
            Take the first step toward a healthier, more balanced life.
          </p>

          <button className="mt-8 bg-[#F8F4EE] text-[#6F7652] px-8 py-4 rounded-full font-medium hover:scale-105 transition">
            Book a Consultation
          </button>

        </div>

      </section>

    </MainLayout>
  );
}

export default About;