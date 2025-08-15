import React, { useState, useEffect } from "react";
import { ChevronRight, Star, MapPin, Phone, Mail, Award, Users, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Example images/videos (adjust paths)
import introVideo from "../assets/intro.MP4";
import offerImage from "../assets/offer.jpg";
import pkg1 from "../assets/wedding.jpg";
import pkg2 from "../assets/services1.avif";
import pkg3 from "../assets/contact4.jpg";
import clientsImage from "../assets/clients.jpg";

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Jessica & Mark Thompson",
      location: "New York",
      text: "The Araliya Hotel made our wedding day absolutely magical. The garden venue was breathtaking, the food was exquisite, and the staff went above and beyond to ensure every detail was perfect.",
      rating: 5,
      image: clientsImage
    },
    {
      name: "David Richardson",
      location: "London",
      text: "A truly relaxing weekend getaway with first-class amenities. The spa treatments were incredible, and the rooms were luxurious. Will definitely be returning!",
      rating: 5,
      image: clientsImage
    },
    {
      name: "Sarah & James Wilson",
      location: "Sydney",
      text: "Our anniversary celebration at Araliya was unforgettable. The romantic setting, personalized service, and attention to detail exceeded all our expectations.",
      rating: 5,
      image: clientsImage
    }
  ];

  const services = [
    { icon: <Award className="w-8 h-8" />, title: "Luxury Accommodations", desc: "Premium rooms & suites with modern amenities" },
    { icon: <Users className="w-8 h-8" />, title: "Event Planning", desc: "Professional wedding & corporate event services" },
    { icon: <Camera className="w-8 h-8" />, title: "Photography", desc: "Professional photography for your special moments" },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>

        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay loop muted playsInline>
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-6" data-aos="fade-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Cinnamon Hotel
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Where luxury meets tranquility. Experience unparalleled elegance in our breathtaking resort,
            perfect for weddings, celebrations, and unforgettable getaways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#packages"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
            >
              Our Packages
            </a>

            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-sm text-center"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronRight className="w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* 2. What We Offer */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover a world of luxury amenities and personalized services designed to create
              extraordinary experiences for every guest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} data-aos="fade-right" data-aos-delay={index * 150}
                  className="flex items-start space-x-4 p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-orange-500 flex-shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl opacity-20 blur"></div>
              <img
                src={offerImage}
                alt="Hotel Services"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Packages */}
      <section id="packages" className="py-20 px-6 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Garden Wedding Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your dream wedding into reality in our enchanting garden venues.
              Choose from our carefully curated packages designed for your perfect day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[pkg1, pkg2, pkg3].map((img, i) => (
              <div key={i} className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="zoom-in" data-aos-delay={i * 200}>
                <div className="relative h-48 overflow-hidden">
                  <img src={img} alt={`Package ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Package {i + 1}</h3>
                  <p className="text-gray-600 mb-4">Custom package description...</p>
                  <button className="w-full bg-gray-100 hover:bg-orange-500 hover:text-white text-gray-700 font-semibold py-3 rounded-full transition-all duration-300">
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" data-aos="fade-up">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center space-x-2">
              <span>View All Wedding Packages</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" data-aos="fade-up">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((t, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 200}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg font-light mb-8 leading-relaxed text-center">
                  "{t.text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-yellow-400"
                  />
                  <div className="text-center">
                    <p className="font-semibold text-lg">{t.name}</p>
                    <p className="text-gray-300">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" data-aos="fade-up">
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center space-x-2">
              <span>Read More Reviews</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Location */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfectly situated in the heart of nature...
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-aos="fade-right">
              {[["Address", <MapPin className="w-6 h-6 text-orange-500" />, "123 Paradise Lane, SriLanka"],
                ["Phone", <Phone className="w-6 h-6 text-orange-500" />, "+ (94) 123-4567"],
                ["Email", <Mail className="w-6 h-6 text-orange-500" />, "info@cinnamonhotel.com"]].map(([title, icon, text], i) => (
                <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  {icon}
                  <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-gray-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-96 rounded-2xl overflow-hidden shadow-xl" data-aos="fade-left">
              <iframe
                title="Hotel Location"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?...YOUR_MAP_LINK..."
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
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
