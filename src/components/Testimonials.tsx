
import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      location: "London, UK",
      text: "The most transformative week of my life. The combination of meditation and qi-gong in such a peaceful setting helped me find balance I never knew existed.",
      rating: 5
    },
    {
      name: "Marcus Weber",
      location: "Berlin, Germany", 
      text: "Alpine Serenity exceeded all expectations. The instructors are incredibly knowledgeable and the mountain setting is absolutely magical.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      location: "Barcelona, Spain",
      text: "I came feeling burnt out and left with renewed energy and clarity. The holistic approach to wellness here is truly exceptional.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Guest <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent font-medium">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our retreat has transformed lives and brought peace to many
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={20} />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
