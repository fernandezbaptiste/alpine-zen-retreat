
import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Alpine Serenity
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Discover peace and wellness in the heart of the French Alps through meditation, qi-gong, and holistic practices.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Meditation Retreats</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Qi-Gong Classes</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Wellness Programs</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Spa Treatments</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-purple-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition-colors">Our Services</a></li>
              <li><a href="#testimonials" className="hover:text-purple-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Youtube size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Follow us for daily inspiration and wellness tips
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Alpine Serenity. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
