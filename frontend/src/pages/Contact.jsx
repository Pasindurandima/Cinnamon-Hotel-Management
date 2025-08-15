import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Star, Users, Award, Clock } from "lucide-react";

import contact1Image from "../assets/contact1.avif";
import contact2Image from "../assets/contact2.avif";
import contact3Image from "../assets/contact3.jpg";
import contact4Image from "../assets/contact4.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      {/* Hero Section - Contact Us */}
      <section
        className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20"
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Contact <span className="text-amber-400">Cinnamon Hotel</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience luxury and elegance for your special occasions. Our dedicated team is here to make your dreams come true.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-center space-x-3 bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                  <MapPin className="text-amber-400 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-sm text-gray-300">123 Paradise Road, Green Valley</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                  <Phone className="text-amber-400 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-sm text-gray-300">+1 (234) 567-890</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                  <Mail className="text-amber-400 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-sm text-gray-300">contact@cinnamonhotel.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                  <Clock className="text-amber-400 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-sm text-gray-300">24/7 Service Available</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-30">
                <img
                  src={contact1Image}
                  alt="Elegant Hotel Wedding Venue"
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-amber-600 text-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Award className="text-amber-200" size={20} />
                    <span className="font-semibold">5-Star Rated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to plan your perfect event? Fill out the form below and our event specialists will contact you within 24 hours.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    placeholder="Your Full Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                    placeholder="+1 (234) 567-890"
                  />
                </div>
                
                <div>
                  <label htmlFor="eventType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300"
                  >
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="conference">Conference</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-300 resize-none"
                  placeholder="Tell us about your event vision, preferred dates, number of guests, and any special requirements..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2 mx-auto"
                >
                  <Send size={20} />
                  <span className="font-semibold">Send Message</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say about their experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "Absolutely phenomenal service! The team at Araliya Hotel made our wedding day magical. Every detail was perfect, and the venue was breathtaking."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  S
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Sarah & Michael Johnson</p>
                  <p className="text-sm text-gray-500">Wedding Reception</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "Professional, responsive, and exceeded all expectations. Our corporate event was flawlessly executed. Highly recommend!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  A
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Anusha Perera</p>
                  <p className="text-sm text-gray-500">Corporate Event</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "From booking to execution, everything was seamless. The staff went above and beyond to make our anniversary celebration special."
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-700 to-orange-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  R
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Robert & Emily Chen</p>
                  <p className="text-sm text-gray-500">Anniversary Party</p>
                </div>
              </div>
            </div>
          </div>
          


          <div className="flex flex-wrap justify-center gap-10">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg w-full md:w-[300px]">
              <img
                src={contact2Image}
                alt="Happy clients celebrating"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
              <div className="mt-6 flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="flex items-center justify-center text-amber-600 mb-2">
                    <Users size={24} />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">500+</p>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-amber-600 mb-2">
                    <Award size={24} />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">4.9</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg w-full md:w-[300px]">
              <img
                src={contact3Image}
                alt="Happy clients celebrating"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
              <div className="mt-6 flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="flex items-center justify-center text-amber-600 mb-2">
                    <Users size={24} />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">500+</p>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-amber-600 mb-2">
                    <Award size={24} />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">4.9</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg w-full md:w-[300px]">
              <img
                src={contact4Image}
                alt="Happy clients celebrating"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
              <div className="mt-6 flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="flex items-center justify-center text-amber-600 mb-2">
                    <Users size={24} />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">500+</p>
                  <p className="text-sm text-gray-600">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-amber-600 mb-2">
                    <Award size={24} />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">4.9</p>
                  <p className="text-sm text-gray-600">Average Rating</p>
                </div>
              </div>
            </div>
          </div>




        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4">Cinnamon Hotel</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Creating unforgettable moments with luxury, elegance, and exceptional service. Your perfect event destination in the heart of Green Valley.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors cursor-pointer">
                  <span className="font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer">
                  <span className="font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-800 transition-colors cursor-pointer">
                  <span className="font-bold">i</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-amber-300 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-amber-300 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-300 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-amber-300 transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-amber-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span className="text-sm">123 Paradise Road, Green Valley</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span className="text-sm">+ (94) 567-890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span className="text-sm">contact@cinnamonhotel.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Cinnamon Hotel. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
