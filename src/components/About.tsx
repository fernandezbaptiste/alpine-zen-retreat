
import React from 'react';
import { Mountain, Sun, Leaf } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Nestled in the 
              <span className="block bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent font-medium">
                French Alps
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our retreat center is located in the heart of the French Alps, surrounded by pristine nature 
              and breathtaking mountain vistas. This sacred space has been carefully designed to promote 
              healing, reflection, and spiritual growth.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mountain className="text-purple-500 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Alpine Sanctuary</h4>
                  <p className="text-gray-600">Elevated at 1,200 meters, offering pure mountain air and stunning panoramic views</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Sun className="text-teal-500 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Year-Round Serenity</h4>
                  <p className="text-gray-600">300+ days of sunshine annually, perfect for outdoor meditation and qi-gong practice</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Leaf className="text-green-500 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Eco-Conscious Haven</h4>
                  <p className="text-gray-600">Sustainable practices and organic gardens provide fresh, nourishing meals</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-200 via-white to-teal-200 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center text-gray-600">
                <div className="text-8xl mb-4">🧘‍♀️</div>
                <p className="text-xl">Peace & Tranquility</p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-teal-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
