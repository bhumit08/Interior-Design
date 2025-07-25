import React, { useState } from "react";

// Mock assets - replace with your actual assets
const assets = {
  kitchen3: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  lroom1: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
  bedroom: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop",
  bg1: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  bg2: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
  bg3: "https://images.unsplash.com/photo-1558618666-fcd25c85c65c?w=600&h=400&fit=crop"
};

const offers = [
  {
    title: "Modular Kitchen",
    image: assets.kitchen3,
    description: "Modern and functional kitchen spaces tailored to your lifestyle.",
    icon: "🍳",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Luxury Living Room",
    image: assets.lroom1,
    description: "Elegant designs for your comfort and entertainment.",
    icon: "🛋️",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Cozy Bedroom",
    image: assets.bedroom,
    description: "Tranquil and personalized retreats with luxurious finishes.",
    icon: "🛏️",
    gradient: "from-pink-500 to-rose-500"
  },
  {
    title: "Premium Wardrobes",
    image: assets.bg1,
    description: "Smart, space-saving wardrobes with sleek aesthetics.",
    icon: "👔",
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Bathroom Interiors",
    image: assets.bg2,
    description: "Spa-like experiences in your personal space.",
    icon: "🛁",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    title: "Home Automation",
    image: assets.bg3,
    description: "Smart technology for a seamless and secure living experience.",
    icon: "🏠",
    gradient: "from-purple-500 to-indigo-500"
  },
];

const Ouroffer = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4 leading-tight">
              Our Premium
            </h2>
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6 leading-tight">
              Offerings
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Transform your living spaces with our expertly crafted interior solutions
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {offers.map((item, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 transition-all duration-500 hover:border-white/40 hover:bg-white/15">
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl blur-sm`}></div>
                
                {/* Image container */}
                <div className="relative overflow-hidden h-48 md:h-56">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 text-4xl transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                    {item.icon}
                  </div>
                  
                  {/* Floating particles effect */}
                  {hoveredIndex === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors duration-500">
                    {item.description}
                  </p>
                  
                  {/* Animated underline */}
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl pointer-events-none`}></div>
              </div>

              {/* External glow */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl blur-xl -z-10 transform scale-105`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
            Explore All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ouroffer;