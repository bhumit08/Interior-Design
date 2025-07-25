import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const offers = [
  {
    title: "Modular Kitchen",
    image: assets.kitchen3,
    description: "Modern and functional kitchen spaces tailored to your lifestyle.",
    icon: "🍳",
    gradient: "from-yellow-400 to-red-500",
  },
  {
    title: "Luxury Living Room",
    image: assets.lroom1,
    description: "Elegant designs for your comfort and entertainment.",
    icon: "🛋️",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    title: "Cozy Bedroom",
    image: assets.bedroom,
    description: "Tranquil and personalized retreats with luxurious finishes.",
    icon: "🛏️",
    gradient: "from-pink-400 to-rose-600",
  },
  {
    title: "Premium Wardrobes",
    image: assets.ward,
    description: "Smart, space-saving wardrobes with sleek aesthetics.",
    icon: "👔",
    gradient: "from-emerald-500 to-green-700",
  },
  {
    title: "Bathroom Interiors",
    image: assets.bathroom,
    description: "Spa-like experiences in your personal space with elegant interiors.",
    icon: "🛁",
    gradient: "from-sky-500 to-cyan-700",
  },
  {
    title: "Home Automation",
    image: assets.home_auto,
    description: "Smart technology for a seamless and secure living experience.",
    icon: "🏠",
    gradient: "from-purple-500 to-fuchsia-700",
  },
];

const Ouroffer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0d1222] to-[#121926]
       py-20 px-6 relative overflow-hidden">
      {/* Animated Background Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-700 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-600 rounded-full opacity-10 blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl animate-pulse delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-yellow-200 to-yellow-500 bg-clip-text text-transparent mb-4 leading-tight">
            Our Premium
          </h2>
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 bg-clip-text text-transparent mb-6 leading-tight">
            Offerings
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Transform your living spaces with our expertly crafted interior solutions
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {offers.map((item, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 transition-all duration-500 hover:border-yellow-300 hover:bg-white/15">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl blur-sm`}></div>

                <div className="relative overflow-hidden h-48 md:h-56">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 text-4xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                    {item.icon}
                  </div>

                  {hoveredIndex === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-150"></div>
                      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping delay-300"></div>
                    </div>
                  )}
                </div>

                <div className="relative p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-500">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-500">
                    {item.description}
                  </p>
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-xl -z-10 transform scale-105`}></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full hover:from-yellow-400 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
            Explore All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ouroffer;
