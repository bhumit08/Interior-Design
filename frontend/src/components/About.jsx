
import { Award, Users, Clock, Star } from "lucide-react";
import React from "react";

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      title: "Award Winning",
      description: "Recognized for excellence in interior design and customer satisfaction."
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      title: "Expert Team",
      description: "Certified designers with decades of combined experience and expertise."
    },
    {
      icon: <Clock className="w-6 h-6 text-yellow-400" />,
      title: "On-Time Delivery",
      description: "Committed to delivering projects on schedule without compromising quality."
    },
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: "Premium Quality",
      description: "Using only the finest materials and craftsmanship in every project."
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#fefcf9] text-gray-800 overflow-hidden mt-[-60px]">
      {/* Decorative Background Shape */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-yellow-200 rounded-full blur-2xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
          
              <br />
              Crafting Beautiful Spaces Since 2008
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At <strong className="text-yellow-600">ProInterior</strong>, we believe that great design should be both beautiful and functional.
              Our team of experienced designers works closely with each client to create spaces that
              not only look stunning but also enhance daily living.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Philosophy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Every space tells a story. We listen to yours and transform it into a living environment
                  that reflects your personality, meets your needs, and exceeds your expectations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Process</h3>
                <p className="text-gray-600 leading-relaxed">
                  From consultation to final install, we guide you through every step with communication, planning, and attention to detail.
                </p>
              </div>
            </div>

            <button className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-full hover:bg-yellow-600 transition">
              Meet Our Team
            </button>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg hover:border-yellow-300 transition-all duration-300 text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="bg-yellow-100 p-3 rounded-full">{item.icon}</div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 pt-16 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-yellow-500 mb-2">200+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-500 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-500 mb-2">50+</div>
            <div className="text-gray-600">Design Awards</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-500 mb-2">98%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

