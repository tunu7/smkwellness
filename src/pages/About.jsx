import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

function About() {
  return (
    <MainLayout>

      {/* Hero Section */}

      <section className="pt-40 pb-28 bg-[#F8F4EE]">

        <div className="max-w-5xl mx-auto text-center px-6">

          <p className="uppercase tracking-[6px] text-[#6F7652] mb-4">
            Our Story
          </p>

          <h1 className="text-6xl md:text-7xl font-serif text-[#4A4035] leading-tight">
            Where Heritage
            <br />
            Meets Healing
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-[#6E6256] leading-relaxed">
            SWRSO MWLO KO WELLNESS was born from a dream of creating a sanctuary
            where ancient wisdom, mindful living, and holistic healing come
            together to guide people back to peace within.
          </p>

        </div>

      </section>

      {/* Meaning Behind The Name */}

      <section className="py-24 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-[#6F7652]">
              The Meaning Behind Our Name
            </p>

            <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
              SWRSO MWLO KO
            </h2>

            <p className="max-w-3xl mx-auto mt-6 text-[#6E6256]">
              A name rooted in Nyishi heritage, carrying the essence of peace,
              harmony, and a place where healing resides.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-[#F8F4EE] p-8 rounded-4xl">
              <h3 className="text-3xl font-serif text-[#4A4035]">
                🕊️ SWRSO
              </h3>

              <p className="mt-4 text-[#6E6256] leading-relaxed">
                Peace. Tranquility. The gentle stillness that allows us to
                reconnect with ourselves and experience calm within.
              </p>
            </div>

            <div className="bg-[#F8F4EE] p-8 rounded-4xl">
              <h3 className="text-3xl font-serif text-[#4A4035]">
                🌸 MWLO
              </h3>

              <p className="mt-4 text-[#6E6256] leading-relaxed">
                Inner harmony and balance. A state where mind, body, and spirit
                move together as one.
              </p>
            </div>

            <div className="bg-[#F8F4EE] p-8 rounded-4xl">
              <h3 className="text-3xl font-serif text-[#4A4035]">
                🌿 KO
              </h3>

              <p className="mt-4 text-[#6E6256] leading-relaxed">
                A place. A home. A sanctuary where healing, growth, and peace
                can reside.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Heritage Story */}

      <section className="py-24 bg-[#F8F4EE]">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-[#6F7652]">
            Rooted In Heritage
          </p>

          <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
            A Whisper Of Our Roots
          </h2>

          <p className="mt-10 text-lg text-[#6E6256] leading-relaxed">
            Some names are not simply chosen. They are felt.
          </p>

          <p className="mt-6 text-lg text-[#6E6256] leading-relaxed">
            The name SWRSO MWLO KO emerged through conversations with elders,
            language speakers, and members of the Nyishi community who shared
            the beauty and depth of a language where words carry emotions rather
            than simple definitions.
          </p>

          <p className="mt-6 text-lg text-[#6E6256] leading-relaxed">
            Among many meaningful suggestions, one name stood out. It felt calm.
            It felt peaceful. It felt like home.
          </p>

        </div>

      </section>

      {/* Vision */}

      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-[#6F7652]">
            Our Vision
          </p>

          <h2 className="text-5xl font-serif text-[#4A4035] mt-4">
            Returning To Peace Within
          </h2>

          <p className="mt-10 text-lg text-[#6E6256] leading-relaxed">
            SWRSO MWLO KO WELLNESS is more than a wellness centre.
            It is a movement of returning to stillness.
          </p>

          <p className="mt-6 text-lg text-[#6E6256] leading-relaxed">
            Through Ayurveda, Panchakarma, Yoga, Sound Healing, workshops, and
            mindful practices, we create experiences that nurture not only the
            body but also the spirit.
          </p>

          <p className="mt-6 text-lg text-[#6E6256] leading-relaxed">
            We believe true healing begins when we remember that peace is not
            something we must find outside ourselves — it already lives within.
          </p>

        </div>

      </section>

      {/* Core Values */}

      <section className="py-24 bg-[#F8F4EE]">

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

            <div className="bg-white p-8 rounded-3xl text-center">
              <h3 className="text-[#6F7652] text-4xl mb-4">01</h3>
              <h4 className="font-medium text-[#4A4035] mb-3">
                Heritage
              </h4>
              <p className="text-[#6E6256]">
                Honouring ancestral wisdom and cultural roots.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center">
              <h3 className="text-[#6F7652] text-4xl mb-4">02</h3>
              <h4 className="font-medium text-[#4A4035] mb-3">
                Healing
              </h4>
              <p className="text-[#6E6256]">
                Nurturing wellbeing through holistic practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center">
              <h3 className="text-[#6F7652] text-4xl mb-4">03</h3>
              <h4 className="font-medium text-[#4A4035] mb-3">
                Harmony
              </h4>
              <p className="text-[#6E6256]">
                Creating balance between mind, body, and spirit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center">
              <h3 className="text-[#6F7652] text-4xl mb-4">04</h3>
              <h4 className="font-medium text-[#4A4035] mb-3">
                Community
              </h4>
              <p className="text-[#6E6256]">
                Growing together through shared experiences.
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
            className="inline-block mt-8 bg-white text-[#6F7652] px-8 py-4 rounded-full font-medium hover:scale-105 transition"
          >
            Book a Consultation
          </Link>

        </div>

      </section>

    </MainLayout>
  );
}

export default About;