import React, { useEffect } from "react";
import { Star, Award, Calendar, Users, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import services1Image from "../assets/services1.avif";
import services2Image from "../assets/services2.avif";
import services3Image from "../assets/services3.jpg";
import services4Image from "../assets/services4.jpg";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const services = [
    {
      icon: <Award className="w-8 h-8 text-amber-600" />,
      title: "Luxury Accommodation",
      description: "Premium rooms and suites with modern amenities"
    },
    {
      icon: <Users className="w-8 h-8 text-amber-600" />,
      title: "Fine Dining",
      description: "Exquisite culinary experiences with local and international cuisine"
    },
    {
      icon: <Star className="w-8 h-8 text-amber-600" />,
      title: "Spa & Wellness",
      description: "Rejuvenating treatments in a serene environment"
    },
    {
      icon: <Calendar className="w-8 h-8 text-amber-600" />,
      title: "Event Planning",
      description: "Comprehensive event management and coordination"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your vision, requirements, and budget to understand your perfect event."
    },
    {
      step: "02",
      title: "Custom Planning",
      description: "Our team creates a tailored package with detailed timelines and arrangements."
    },
    {
      step: "03",
      title: "Seamless Execution",
      description: "On-site management ensures every detail is perfectly executed on your special day."
    }
  ];

  const testimonials = [
    {
      name: "Samantha L.",
      role: "Bride",
      content: "Our dream wedding was made possible thanks to the incredible Araliya team! Every detail was perfect, from the stunning décor to the exceptional service.",
      rating: 5
    },
    {
      name: "Rajiv P.",
      role: "Corporate Client",
      content: "Top-notch service, attention to detail, and an unforgettable atmosphere. Our company event was a tremendous success.",
      rating: 5
    },
    {
      name: "Mihiri S.",
      role: "Event Organizer",
      content: "Professional, reliable, and creative. The team at Araliya Hotel exceeded all our expectations for our anniversary celebration.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Premium Services */}
      <section
        data-aos="fade-up"
        className="relative bg-gradient-to-br from-amber-50 via-white to-amber-50 py-24 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6" data-aos="fade-right">
              <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Premium Hospitality Services
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Our Premium
                <span className="text-amber-600 block">Services</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                At Cinnamon Hotel, we offer world-class services including luxury accommodation, 
                fine dining, spa treatments, garden venues, and customized event planning tailored 
                to create unforgettable experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Services
                </button>
                <button className="border border-gray-300 hover:border-amber-600 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl p-2">
                <img
                  src={services1Image}
                  alt="Luxury Hotel Wedding Setup"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creating Exceptional Events */}
      <section className="py-24 px-6 md:px-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1" data-aos="fade-right">
              <img
                src={services2Image}
                alt="Elegant Event Setup"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="space-y-6 order-1 lg:order-2" data-aos="fade-left">
              <div className="inline-flex items-center bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
                <Calendar className="w-4 h-4 mr-2" />
                Event Excellence
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Creating
                <span className="text-amber-400 block">Exceptional Events</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                From intimate weddings to grand corporate gatherings, our experienced team 
                ensures flawless coordination, beautiful décor, gourmet catering, and 
                unforgettable moments that exceed your expectations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {["Expert Planning", "Stunning Venues", "Gourmet Catering", "24/7 Support"].map(
                  (item, i) => (
                    <div key={i} className="flex items-center gap-3" data-aos="fade-up" data-aos-delay={i * 100}>
                      <CheckCircle className="w-6 h-6 text-amber-400" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Seamless Process */}
      <section
        className="py-24 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-amber-50"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Clock className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Seamless Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We make your experience stress-free from start to finish. Our proven process 
              includes detailed planning, personal consultations, tailored packages, and 
              attentive on-site management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12 relative">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-amber-200 transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6" data-aos="fade-up" data-aos-delay={400}>
            <img
              src={services3Image}
              alt="Event Planning Process"
              className="rounded-2xl shadow-2xl w-full md:w-[30%] object-cover"
            />
            <img
              src={services4Image}
              alt="Event Planning Process"
              className="rounded-2xl shadow-2xl w-full md:w-[30%] object-cover"
            />
            <img
              src={services2Image}
              alt="Event Planning Process"
              className="rounded-2xl shadow-2xl w-full md:w-[30%] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Client Experiences */}
      <section className="py-20 px-6 md:px-12 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4 mr-2" />
              Client Stories
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Client Experiences</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients say about their experiences with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center">
                  <div className="bg-amber-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay={600}>
            <img
              src={services4Image}
              alt="Happy Clients at Event"
              className="mx-auto rounded-2xl shadow-xl max-w-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* 6. Footer */}
<footer className="bg-gray-900 text-white py-12 px-6" data-aos="fade-up">
  <div className="max-w-6xl mx-auto">
    <div className="grid md:grid-cols-4 gap-8">
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
            <div
              key={i}
              className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
              aria-label={`Social icon ${s}`}
            >
              <span className="text-sm font-bold">{s}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          {["Home", "About", "Services", "Contact"].map((l, i) => (
            <li key={i}>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-xl font-semibold mb-4">Services</h4>
        <ul className="space-y-2">
          {["Rooms & Suites", "Wedding Planning", "Spa & Wellness", "Dining"].map((s, i) => (
            <li key={i}>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                {s}
              </a>
            </li>
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

    </div>
  );
}
