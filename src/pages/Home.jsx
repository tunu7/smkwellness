import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

function Home() {
  const services = [
    {
      title: "Ayurveda",
      description:
        "Ancient healing wisdom focused on restoring balance and wellbeing.",
      icon: "🌿",
    },
    {
      title: "Panchakarma",
      description:
        "Traditional Ayurvedic detoxification and rejuvenation therapies.",
      icon: "🍃",
    },
    {
      title: "Yoga",
      description:
        "Mindful movement and breath practices for holistic health.",
      icon: "🧘",
    },
    {
      title: "Sound Healing",
      description:
        "Healing experiences using sound vibrations and resonance.",
      icon: "🎶",
    },
    {
      title: "Wellness Workshops",
      description:
        "Community gatherings focused on healing, growth, and self-discovery.",
      icon: "🌺",
    },
    {
      title: "Holistic Consultations",
      description:
        "Personalized wellness guidance tailored to your unique journey.",
      icon: "✨",
    },
  ];

  return (
    <MainLayout>
      <Hero />

      {/* Meaning Section */}

      <section className="py-24 bg-[#F8F4EE]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[5px] text-[#6F7652]">
              The Meaning Behind Our Name
            </p>

            <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
              SWRSO MWLO KO
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-[#6E6256]">
              A name rooted in Nyishi heritage carrying the essence of peace,
              harmony, and a place where healing resides.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-4xl shadow-sm">
              <h3 className="text-3xl font-serif text-[#4A4035]">
                🕊️ SWRSO
              </h3>

              <p className="mt-4 text-[#6E6256]">
                Peace and tranquility. The stillness that allows us to reconnect
                with ourselves.
              </p>
            </div>

            <div className="bg-white p-8 rounded-4xl shadow-sm">
              <h3 className="text-3xl font-serif text-[#4A4035]">
                🌸 MWLO
              </h3>

              <p className="mt-4 text-[#6E6256]">
                Inner harmony and balance between mind, body, and spirit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-4xl shadow-sm">
              <h3 className="text-3xl font-serif text-[#4A4035]">
                🌿 KO
              </h3>

              <p className="mt-4 text-[#6E6256]">
                A place. A home. A sanctuary where healing can flourish.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Founder's Vision */}

      <section className="py-24 bg-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <p className="uppercase tracking-[5px] text-[#6F7652]">
            Founder's Vision
          </p>

          <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
            Returning To Peace Within
          </h2>

          <p className="mt-10 text-lg text-[#6E6256] leading-relaxed">
            SWRSO MWLO KO WELLNESS is more than a wellness centre. It is a
            movement of returning to stillness.
          </p>

          <p className="mt-6 text-lg text-[#6E6256] leading-relaxed">
            Through Ayurveda, Panchakarma, Yoga, Sound Healing, workshops, and
            mindful practices, we create experiences that nurture not only the
            body but also the spirit.
          </p>

          <p className="mt-6 text-lg text-[#6E6256] leading-relaxed">
            We believe true healing begins when we remember that peace is not
            found outside ourselves—it already lives within.
          </p>

        </div>

      </section>

      {/* Services */}

      <section className="py-24 bg-[#F8F4EE]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#6F7652]">
              Our Offerings
            </p>

            <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
              Ancient Wisdom For Modern Living
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-4xl shadow-sm hover:-translate-y-2 transition duration-300"
              >
                <div className="text-5xl mb-5">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-serif text-[#4A4035] mb-4">
                  {service.title}
                </h3>

                <p className="text-[#6E6256]">
                  {service.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Philosophy */}

      <section className="py-24 bg-white">

        <div className="max-w-4xl mx-auto text-center px-6">

          <p className="uppercase tracking-[5px] text-[#6F7652]">
            Our Philosophy
          </p>

          <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
            Peace Already Lives Within You
          </h2>

          <p className="mt-8 text-lg text-[#6E6256] leading-relaxed">
            Wellness is not about becoming someone new. It is about remembering
            who you truly are.
          </p>

          <p className="mt-6 text-lg text-[#6E6256] leading-relaxed">
            We believe healing begins when we reconnect with the peace we
            already carry within.
          </p>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-24 bg-[#F8F4EE]">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#6F7652]">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
              What Makes Us Different
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Heritage Inspired",
              "Ancient Wisdom",
              "Holistic Healing",
              "Personalized Care",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 text-center shadow-sm"
              >
                <h3 className="text-[#6F7652] text-4xl mb-4">
                  0{index + 1}
                </h3>

                <p className="text-[#4A4035]">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Workshops */}

      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto text-center px-6">

          <p className="uppercase tracking-[5px] text-[#6F7652]">
            Community Experiences
          </p>

          <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
            Workshops & Gatherings
          </h2>

          <p className="mt-8 text-lg text-[#6E6256] leading-relaxed">
            Until our wellness centre takes physical form, our vision comes
            alive through healing circles, workshops, yoga sessions, sound
            healing experiences, and wellness gatherings.
          </p>

        </div>

      </section>

      {/* CTA */}

      <section className="py-32 bg-[#6F7652]">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-serif text-white">
            Come Home To Yourself
          </h2>

          <p className="text-white/80 mt-6 text-lg">
            Experience a space where heritage, healing, and stillness come
            together.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-white text-[#6F7652] px-8 py-4 rounded-full font-medium hover:scale-105 transition"
          >
            Book A Consultation
          </Link>

        </div>

      </section>

    </MainLayout>
  );
}

export default Home;