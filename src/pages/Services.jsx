import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      title: "Ayurveda",
      icon: "🌿",
      description:
        "Ancient healing wisdom focused on restoring balance and harmony through personalized lifestyle guidance and natural therapies.",
    },
    {
      title: "Panchakarma",
      icon: "🍃",
      description:
        "Traditional Ayurvedic detoxification and rejuvenation therapies designed to cleanse, restore, and revitalize the body.",
    },
    {
      title: "Yoga",
      icon: "🧘",
      description:
        "Mindful movement and breath practices that strengthen the body, calm the mind, and nurture inner awareness.",
    },
    {
      title: "Sound Healing",
      icon: "🎶",
      description:
        "Immersive healing experiences using sound vibrations to encourage deep relaxation, balance, and inner peace.",
    },
    {
      title: "Wellness Workshops",
      icon: "🌺",
      description:
        "Meaningful gatherings, workshops, and experiences focused on healing, self-discovery, and personal growth.",
    },
    {
      title: "Holistic Consultations",
      icon: "✨",
      description:
        "Personalized wellness guidance designed around your unique lifestyle, challenges, and wellbeing goals.",
    },
  ];

  return (
    <MainLayout>

      {/* Hero Section */}

      <section className="pt-40 pb-28 bg-[#F8F4EE]">

        <div className="max-w-5xl mx-auto text-center px-6">

          <p className="uppercase tracking-[6px] text-[#6F7652] mb-4">
            Our Offerings
          </p>

          <h1 className="text-6xl md:text-7xl font-serif text-[#4A4035] leading-tight">
            Healing Experiences
            <br />
            Rooted In Tradition
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-[#6E6256] leading-relaxed">
            At SWRSO MWLO KO WELLNESS, every offering is designed to guide you
            back to balance, harmony, and peace within. Combining ancient
            wisdom with mindful living, we create experiences that nurture both
            body and spirit.
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
                className="
                  bg-[#F8F4EE]
                  rounded-4xl
                  p-8
                  hover:-translate-y-2
                  transition-all
                  duration-300
                "
              >

                <div className="text-5xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-3xl font-serif text-[#4A4035] mb-4">
                  {service.title}
                </h3>

                <p className="text-[#6E6256] leading-relaxed">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Philosophy */}

      <section className="py-24 bg-[#F8F4EE]">

        <div className="max-w-4xl mx-auto text-center px-6">

          <p className="uppercase tracking-[5px] text-[#6F7652]">
            Our Philosophy
          </p>

          <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
            Healing Beyond The Physical
          </h2>

          <p className="mt-8 text-lg text-[#6E6256] leading-relaxed">
            We believe healing is more than treating the body. It is about
            remembering, reconnecting, and returning to wholeness.
          </p>

          <p className="mt-6 text-lg text-[#6E6256] leading-relaxed">
            Every offering at SWRSO MWLO KO WELLNESS is rooted in love,
            heritage, mindfulness, and the timeless rhythm of nature.
          </p>

        </div>

      </section>

      {/* How We Work */}

      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#6F7652]">
              Our Approach
            </p>

            <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
              Your Journey With Us
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="text-center">

              <div className="text-[#6F7652] text-5xl mb-4">
                01
              </div>

              <h3 className="text-2xl font-serif text-[#4A4035] mb-4">
                Discover
              </h3>

              <p className="text-[#6E6256]">
                Understand your unique needs, challenges, and aspirations.
              </p>

            </div>

            <div className="text-center">

              <div className="text-[#6F7652] text-5xl mb-4">
                02
              </div>

              <h3 className="text-2xl font-serif text-[#4A4035] mb-4">
                Heal
              </h3>

              <p className="text-[#6E6256]">
                Experience practices that restore balance and nurture wellbeing.
              </p>

            </div>

            <div className="text-center">

              <div className="text-[#6F7652] text-5xl mb-4">
                03
              </div>

              <h3 className="text-2xl font-serif text-[#4A4035] mb-4">
                Flourish
              </h3>

              <p className="text-[#6E6256]">
                Integrate mindful habits that support lifelong wellness.
              </p>

            </div>

          </div>

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

            <div className="bg-white p-8 rounded-4xl text-center">
              <h3 className="text-[#6F7652] text-4xl mb-4">01</h3>
              <p className="text-[#4A4035]">
                Nyishi Heritage
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center">
              <h3 className="text-[#6F7652] text-4xl mb-4">02</h3>
              <p className="text-[#4A4035]">
                Ancient Wisdom
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center">
              <h3 className="text-[#6F7652] text-4xl mb-4">03</h3>
              <p className="text-[#4A4035]">
                Holistic Healing
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center">
              <h3 className="text-[#6F7652] text-4xl mb-4">04</h3>
              <p className="text-[#4A4035]">
                Personalized Care
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-28 bg-[#6F7652]">

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
            className="
              inline-block
              mt-8
              bg-white
              text-[#6F7652]
              px-8
              py-4
              rounded-full
              font-medium
              hover:scale-105
              transition
            "
          >
            Book A Consultation
          </Link>

        </div>

      </section>

    </MainLayout>
  );
}

export default Services;