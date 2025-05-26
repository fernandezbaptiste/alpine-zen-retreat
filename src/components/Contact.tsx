
import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Begin Your <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent font-medium">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discover inner peace? Contact us to learn more about our retreats and availability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-teal-100 rounded-full flex items-center justify-center">
                  <Mail className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">hello@alpineserenity.fr</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-teal-100 rounded-full flex items-center justify-center">
                  <Phone className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <p className="text-gray-600">+33 (0)4 50 12 34 56</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-teal-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">Chamonix Valley, French Alps</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-teal-100 rounded-full flex items-center justify-center">
                  <Calendar className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Retreats</p>
                  <p className="text-gray-600">Year-round programs available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Book Your Retreat</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors" />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors" />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Preferred Dates</label>
                <input type="text" placeholder="e.g., June 2024" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors" />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors" placeholder="Tell us about your wellness goals..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
