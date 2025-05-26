
import React from 'react';
import { Waves, Heart, TreePine } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Waves className="text-teal-500" size={48} />,
      title: "Meditation",
      description: "Guided meditation sessions in serene mountain settings, helping you achieve deep mindfulness and inner calm.",
      features: ["Morning & Evening Sessions", "Guided Instruction", "Silent Retreats", "Breathwork"]
    },
    {
      icon: <Heart className="text-purple-500" size={48} />,
      title: "Qi-Gong",
      description: "Ancient Chinese practices combining gentle movements, breathing, and meditation for harmonious energy flow.",
      features: ["Traditional Forms", "Healing Movements", "Energy Cultivation", "Balance Training"]
    },
    {
      icon: <TreePine className="text-green-500" size={48} />,
      title: "Wellness",
      description: "Holistic wellness programs including nutrition, nature therapy, and rejuvenating spa treatments.",
      features: ["Organic Nutrition", "Nature Immersion", "Spa Treatments", "Wellness Coaching"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent font-medium">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience transformation through our carefully curated wellness practices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
