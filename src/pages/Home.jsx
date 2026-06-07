import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

function Home() {
  const services = [
    {
      title: "Ayurvedic Consultation",
      description:
        "Personalized wellness guidance rooted in traditional healing wisdom.",
    },
    {
      title: "Mindfulness & Healing",
      description:
        "Reconnect with yourself through mindful practices and inner healing.",
    },
    {
      title: "Wellness Programs",
      description:
        "Holistic programs designed to restore balance to body, mind, and spirit.",
    },
  ];

  return (
    <MainLayout>
      <Hero />

      {/* Founder Section */}
      <section className="py-24 bg-[#F8F4EE]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              alt="Founder"
              className="rounded-3xl shadow-lg"
            />
          </div>

          <div>
            <p className="uppercase tracking-[4px] text-[#6F7652] mb-3">
              Meet The Founder
            </p>

            <h2 className="text-5xl font-serif text-[#4A4035] mb-6">
              Where Heritage Meets Healing
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              SMK Wellness was born from a vision of combining traditional
              wisdom with modern wellness practices. We believe true healing
              happens when mind, body, and soul come into harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="uppercase tracking-[4px] text-[#6F7652] mb-4">
            Our Philosophy
          </p>

          <h2 className="text-5xl font-serif text-[#4A4035]">
            Small Choices. Big Change.
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed">
            Wellness is not a destination—it is a daily practice. Through
            mindful living, healing traditions, and intentional choices, we
            help you create sustainable habits that nurture long-term wellbeing.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-[#F8F4EE]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center uppercase tracking-[4px] text-[#6F7652]">
            Our Services
          </p>

          <h2 className="text-center text-5xl font-serif text-[#4A4035] mt-4">
            Holistic Wellness Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-5xl font-serif text-[#4A4035] mb-16">
            Why Choose SMK Wellness
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl text-[#6F7652] mb-3">01</h3>
              <p>Personalized Healing</p>
            </div>

            <div>
              <h3 className="text-4xl text-[#6F7652] mb-3">02</h3>
              <p>Traditional Wisdom</p>
            </div>

            <div>
              <h3 className="text-4xl text-[#6F7652] mb-3">03</h3>
              <p>Modern Wellness</p>
            </div>

            <div>
              <h3 className="text-4xl text-[#6F7652] mb-3">04</h3>
              <p>Community & Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F8F4EE]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[4px] text-[#6F7652]">
            Testimonials
          </p>

          <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
            What Our Clients Say
          </h2>

          <div className="mt-12 bg-white rounded-3xl p-10 shadow-sm">
            <p className="text-lg italic text-gray-600">
              "My journey with SMK Wellness helped me reconnect with myself.
              The experience was calming, healing, and transformative."
            </p>

            <h4 className="mt-6 font-semibold text-[#4A4035]">
              — Happy Client
            </h4>
          </div>
        </div>
      </section>

      {/* Instagram Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center uppercase tracking-[4px] text-[#6F7652]">
            Follow Our Journey
          </p>

          <h2 className="text-center text-5xl font-serif text-[#4A4035] mt-4">
            Wellness Moments
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="h-64 bg-[#D8CBB7] rounded-2xl"></div>
            <div className="h-64 bg-[#E6DDD0] rounded-2xl"></div>
            <div className="h-64 bg-[#CFC0A8] rounded-2xl"></div>
            <div className="h-64 bg-[#D8CBB7] rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#6F7652]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-serif text-white">
            Begin Your Wellness Journey
          </h2>

          <p className="text-white/80 mt-6 text-lg">
            Discover balance, healing, and mindful living through personalized
            wellness experiences.
          </p>

          <button className="mt-8 bg-white text-[#6F7652] px-8 py-4 rounded-full font-medium hover:scale-105 transition">
            Book a Consultation
          </button>
        </div>
      </section>
    </MainLayout>
  );
}

export default Home;