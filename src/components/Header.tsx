
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">
            Alpine Serenity
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-purple-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
          </nav>

          <button className="hidden md:block bg-gradient-to-r from-purple-600 to-teal-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            Book Retreat
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#services" className="block text-gray-700 hover:text-purple-600 transition-colors">Services</a>
            <a href="#about" className="block text-gray-700 hover:text-purple-600 transition-colors">About</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-purple-600 transition-colors">Testimonials</a>
            <a href="#contact" className="block text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
            <button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white px-6 py-2 rounded-full">
              Book Retreat
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
