import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutImage from "../assets/about1.avif";
import missionImage from "../assets/wedding.jpg";
import member1Image from "../assets/member1.jpg";
import member2Image from "../assets/member2.jpg";
import member3Image from "../assets/member3.jpg";
import member4Image from "../assets/member4.jpg";
import member5Image from "../assets/member5.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        data-aos="fade-up"
        className="relative bg-gradient-to-br from-yellow-50 to-orange-50 py-24 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                  Story
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded with a vision of creating unforgettable experiences,
              Cinnamon Hotel has grown from a small guesthouse to a luxurious
              escape for guests worldwide. Our journey spans decades of
              dedication to exceptional hospitality.
            </p>
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">25+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">10k+</div>
                <div className="text-sm text-gray-500">Happy Guests</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-20 blur"></div>
            <img
              src={aboutImage}
              alt="Our Story"
              className="relative w-full h-96 object-cover rounded-3xl shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Vision */}
      <section data-aos="fade-up" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Transforming Visions into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                Reality
              </span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto"></div>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            From intimate garden weddings to grand corporate events, we
            specialize in bringing your dreams to life with seamless service,
            attention to detail, and beautiful venues that create lasting
            memories.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        data-aos="fade-up"
        className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-2xl opacity-20 blur"></div>
            <img
              src={missionImage}
              alt="Our Mission"
              className="relative w-full h-96 object-cover rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500"
            />
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                  Mission
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              To offer exceptional hospitality, premium services, and unique
              moments that guests cherish for a lifetime. We are committed to
              creating extraordinary experiences through personalized service
              and unwavering attention to detail.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div
                data-aos="fade-right"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600 text-sm">
                  Delivering the highest standards in every interaction.
                </p>
              </div>
              <div
                data-aos="fade-left"
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600 text-sm">
                  Continuously evolving to exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 px-6 md:px-12 bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="text-center space-y-8 mb-16" data-aos="fade-up">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        Meet Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
          Team
        </span>
      </h2>
      <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Our dedicated team is the heart of Cinnamon Hotel. Their passion,
        professionalism, and commitment to excellence ensure every stay
        is memorable and every event is flawless.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
      {[
        {
          img: member1Image,
          name: "Samantha Lee",
          role: "Event Manager",
          description:
            "Samantha orchestrates every detail to create unforgettable events with precision and care.",
        },
        {
          img: member2Image,
          name: "David Kumar",
          role: "Head Chef",
          description:
            "David crafts exquisite menus that delight guests and elevate every occasion.",
        },
        {
          img: member3Image,
          name: "Priya Nair",
          role: "Guest Relations",
          description:
            "Priya ensures every guest feels welcomed, valued, and pampered throughout their stay.",
        },
        {
          img: member4Image,
          name: "Carlos Mendes",
          role: "Facilities Supervisor",
          description:
            "Carlos maintains the hotel’s elegance and functionality with a sharp eye for detail.",
        },
        {
          img: member5Image,
          name: "Fatima Al-Hassan",
          role: "Marketing Specialist",
          description:
            "Fatima crafts compelling stories to showcase our unique services and brand.",
        },
      ].map(({ img, name, role, description }, i) => (
        <div
          key={i}
          data-aos="fade-up"
          className="group relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2"
        >
          <div className="relative mb-6">
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 blur group-hover:opacity-30 transition-opacity"></div>
            <img
              src={img}
              alt={name}
              className="relative w-24 h-24 object-cover rounded-full mx-auto shadow-xl"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
          <p className="text-orange-600 font-semibold mb-3">{role}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* What Our Clients Say */}
      <section
        data-aos="fade-up"
        className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-orange-50"
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
              Clients Say
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {["MT", "PK", "SW"].map((initials, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-gray-100"
            >
              <blockquote className="text-lg font-light mb-8 leading-relaxed text-center text-gray-700">
                “This is a client testimonial. Amazing service, beautiful venue,
                and an unforgettable experience.”
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {initials}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-lg text-gray-900">
                    Client Name
                  </div>
                  <div className="text-gray-500">Event Type</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8" data-aos="fade-up">
            <div className="col-span-2">
              <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Cinnamon Hotel
              </h3>
              <p className="text-gray-300 mb-4">
                Creating unforgettable experiences through exceptional hospitality,
                luxury accommodations, and personalized service in a breathtaking natural setting.
              </p>
              <div className="flex space-x-4">
                {["f", "t", "i"].map((s, i) => (
                  <div key={i}
                    className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <span className="text-sm font-bold">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "About", "Services", "Contact"].map((l, i) => (
                  <li key={i}><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {["Rooms & Suites", "Wedding Planning", "Spa & Wellness", "Dining"].map((s, i) => (
                  <li key={i}><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Cinnamon Hotel. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
