
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 to-teal-100/20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-light text-gray-800 mb-6 leading-tight">
            Find Your
            <span className="block bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent font-medium">
              Inner Peace
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Discover tranquility in the breathtaking French Alps through meditation, 
            qi-gong, and holistic wellness practices
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Begin Your Journey
            </button>
            <button className="border-2 border-purple-300 text-purple-600 px-8 py-4 rounded-full text-lg font-medium hover:bg-purple-50 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Mountain Image Placeholder */}
          <div className="relative mx-auto max-w-3xl">
            <div className="aspect-video bg-gradient-to-br from-purple-200 to-teal-200 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-6xl mb-4">🏔️</div>
                <p className="text-lg">Stunning Alpine Views</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-purple-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
