import MainLayout from "../layouts/MainLayout";

function Services() {
  const services = [
    {
      title: "Holistic Wellness Consultation",
      description:
        "Personalized wellness guidance tailored to your lifestyle, goals, and wellbeing journey.",
    },
    {
      title: "Mindfulness & Meditation",
      description:
        "Cultivate inner peace, reduce stress, and improve mental clarity through mindful practices.",
    },
    {
      title: "Lifestyle Coaching",
      description:
        "Build sustainable habits that support long-term health and personal growth.",
    },
    {
      title: "Stress Management",
      description:
        "Learn practical techniques to manage daily stress and create emotional balance.",
    },
    {
      title: "Wellness Programs",
      description:
        "Structured programs designed to help you achieve holistic wellbeing and transformation.",
    },
    {
      title: "Personal Growth Sessions",
      description:
        "Develop confidence, resilience, and self-awareness through guided support.",
    },
  ];

  return (
    <MainLayout>

      {/* Hero Section */}

      <section className="pt-40 pb-24 bg-[#F8F4EE]">

        <div className="max-w-5xl mx-auto text-center px-6">

          <p className="uppercase tracking-[5px] text-[#6F7652] mb-4">
            Our Services
          </p>

          <h1 className="text-6xl md:text-7xl font-serif text-[#4A4035] leading-tight">
            Wellness Designed
            <br />
            Around You
          </h1>

          <p className="mt-8 text-lg text-[#6E6256] leading-relaxed max-w-3xl mx-auto">
            Every wellness journey is unique. Our services are designed to help
            you create balance, improve wellbeing, and reconnect with yourself
            through holistic practices.
          </p>

        </div>

      </section>

      {/* Services Grid */}

      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#F8F4EE] rounded-4xl p-8 hover:-translate-y-2 transition duration-300"
              >

                <div className="text-[#6F7652] text-5xl mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-serif text-[#4A4035] mb-4">
                  {service.title}
                </h3>

                <p className="text-[#6E6256] leading-relaxed">
                  {service.description}
                </p>

                <button className="mt-6 text-[#6F7652] font-medium">
                  Learn More →
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Process Section */}

      <section className="py-24 bg-[#F8F4EE]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#6F7652]">
              Our Process
            </p>

            <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
              How We Work
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="text-center">
              <div className="text-5xl text-[#6F7652] mb-4">01</div>

              <h3 className="text-2xl font-serif text-[#4A4035] mb-4">
                Discover
              </h3>

              <p className="text-[#6E6256]">
                Understand your goals, challenges, and current lifestyle.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl text-[#6F7652] mb-4">02</div>

              <h3 className="text-2xl font-serif text-[#4A4035] mb-4">
                Personalize
              </h3>

              <p className="text-[#6E6256]">
                Create a wellness approach tailored specifically for you.
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl text-[#6F7652] mb-4">03</div>

              <h3 className="text-2xl font-serif text-[#4A4035] mb-4">
                Transform
              </h3>

              <p className="text-[#6E6256]">
                Build sustainable habits that support lifelong wellbeing.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#6F7652]">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
              A Different Approach To Wellness
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center">
              <h3 className="text-[#6F7652] text-4xl mb-3">✓</h3>
              <p className="text-[#4A4035]">Personalized Care</p>
            </div>

            <div className="text-center">
              <h3 className="text-[#6F7652] text-4xl mb-3">✓</h3>
              <p className="text-[#4A4035]">Holistic Approach</p>
            </div>

            <div className="text-center">
              <h3 className="text-[#6F7652] text-4xl mb-3">✓</h3>
              <p className="text-[#4A4035]">Expert Guidance</p>
            </div>

            <div className="text-center">
              <h3 className="text-[#6F7652] text-4xl mb-3">✓</h3>
              <p className="text-[#4A4035]">Long-Term Results</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-[#6F7652]">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-serif text-white">
            Start Your Wellness Journey
          </h2>

          <p className="text-white/80 mt-6 text-lg">
            Discover personalized wellness solutions designed to help you
            achieve balance, clarity, and vitality.
          </p>

          <button className="mt-8 bg-[#F8F4EE] text-[#6F7652] px-8 py-4 rounded-full font-medium hover:scale-105 transition">
            Book a Consultation
          </button>

        </div>

      </section>

    </MainLayout>
  );
}

export default Services;