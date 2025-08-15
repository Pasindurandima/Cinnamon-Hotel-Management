import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, User, UserPlus } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
                  Cinnamon
                </h2>
                <span className="text-xs text-gray-500 -mt-1">HOTEL</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                <li>
                  <Link
                    to="/"
                    className={`relative py-2 px-1 font-medium transition-all duration-300 ${
                      isActive("/")
                        ? "text-orange-600"
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    Home
                    {isActive("/") && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`relative py-2 px-1 font-medium transition-all duration-300 ${
                      isActive("/about")
                        ? "text-orange-600"
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    About
                    {isActive("/about") && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className={`relative py-2 px-1 font-medium transition-all duration-300 ${
                      isActive("/services")
                        ? "text-orange-600"
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    Services
                    {isActive("/services") && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                    )}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`relative py-2 px-1 font-medium transition-all duration-300 ${
                      isActive("/contact")
                        ? "text-orange-600"
                        : "text-gray-700 hover:text-orange-600"
                    }`}
                  >
                    Contact
                    {isActive("/contact") && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
                    )}
                  </Link>
                </li>
              </ul>

              {/* Auth Buttons */}
              <div className="flex items-center space-x-3 ml-6 border-l border-gray-200 pl-6">
                <Link
                  to="/login"
                  className="flex items-center space-x-2 text-gray-700 hover:text-orange-600 font-medium transition-colors duration-300"
                >
                  <User className="w-4 h-4" />
                  <span>Login</span>
                </Link>
                
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 py-4 shadow-lg">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    isActive("/")
                      ? "bg-gradient-to-r from-yellow-50 to-orange-50 text-orange-600 border-l-4 border-orange-500"
                      : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    isActive("/about")
                      ? "bg-gradient-to-r from-yellow-50 to-orange-50 text-orange-600 border-l-4 border-orange-500"
                      : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    isActive("/services")
                      ? "bg-gradient-to-r from-yellow-50 to-orange-50 text-orange-600 border-l-4 border-orange-500"
                      : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    isActive("/contact")
                      ? "bg-gradient-to-r from-yellow-50 to-orange-50 text-orange-600 border-l-4 border-orange-500"
                      : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Mobile Auth Section */}
            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
              <Link
                to="/login"
                className="flex items-center justify-center space-x-2 w-full text-gray-700 hover:text-orange-600 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                <User className="w-4 h-4" />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300"
              >
                <UserPlus className="w-4 h-4" />
                <span>Register</span>
              </Link>
              <Link
                to="/booking"
                className="flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Contact Info */}
            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>info@araliyahotel.com</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden under fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}