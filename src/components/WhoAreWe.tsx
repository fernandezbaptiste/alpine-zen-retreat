
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

const WhoAreWe = () => {
  const team = [
    {
      name: "Sophie Laurent",
      role: "Meditation Master & Founder",
      bio: "With over 15 years of meditation practice and training in Tibetan monasteries, Sophie brings ancient wisdom to modern wellness.",
      image: "/placeholder.svg",
      initials: "SL"
    },
    {
      name: "Chen Wei",
      role: "Qi-Gong Instructor",
      bio: "A certified Qi-Gong master from Beijing, Chen combines traditional Chinese practices with contemporary healing methods.",
      image: "/placeholder.svg", 
      initials: "CW"
    },
    {
      name: "Isabella Rossi",
      role: "Wellness Coordinator",
      bio: "Former wellness director at luxury spas across Europe, Isabella creates personalized retreat experiences for each guest.",
      image: "/placeholder.svg",
      initials: "IR"
    }
  ];

  return (
    <section id="who-are-we" className="py-20 bg-gradient-to-br from-purple-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Who <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent font-medium">Are We</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team of wellness experts committed to guiding your journey to inner peace
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="mb-6 flex justify-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-gradient-to-r from-purple-100 to-teal-100 text-purple-600 text-xl font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>
              
              <p className="text-purple-600 font-medium mb-4">
                {member.role}
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
