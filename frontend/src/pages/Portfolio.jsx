// // src/pages/Portfolio.jsx
// import React from "react";
// import { assets } from "../assets/frontend_assets/assets";

// const mainProjects = [
//   {
//     title: "Modern Living Room",
//     image: assets.lroom1,
//     category: "Living Room",
//   },
//   {
//     title: "Elegant Kitchen",
//     image: assets.kitchen5,
//     category: "Kitchen",
//   },
//   {
//     title: "Luxury Bedroom",
//     image: assets.bedroom,
//     category: "Bedroom",
//   },
// ];

// const featuredProjects = [
//   {
//     title: "Stylish Mumbai Apartment",
//     image: assets.appartment,
//     description: "A 3BHK home with Scandinavian elegance and functionality.",
//   },
//   {
//     title: "Luxury Pune Villa",
//     image: assets.lvilla,
//     description: "A villa that blends luxury with minimalism and open space.",
//   },
//   {
//     title: "Chic Bangalore Studio",
//     image: assets.chic,
//     description: "Smart use of space, storage, and natural lighting in a studio.",
//   },
// ];

// const Portfolio = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 py-16 px-6">
//       {/* Main Portfolio Grid */}
//       <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
//         Our Portfolio
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {mainProjects.map((project, index) => (
//           <div
//             key={index}
//             className="relative overflow-hidden rounded-lg shadow-lg group"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
//               <h3 className="text-xl font-bold">{project.title}</h3>
//               <p className="text-sm mt-1">{project.category}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Featured Projects Section */}
//       <h2 className="text-3xl font-semibold text-gray-800 text-center mt-20 mb-10">
//         Featured Projects: Delivered by <span className="text-yellow-600">Livspace</span>
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
//         {featuredProjects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
//               <p className="text-sm text-gray-600 mt-2">{project.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


import React, { useState, useEffect } from "react";
import { ChevronRight, Play, Award, MapPin } from "lucide-react";

// Mock assets - replace with your actual assets
const assets = {
  lroom1: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
  kitchen5: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
  bedroom: "https://images.unsplash.com/photo-1540518614846-7eded47004b1?w=800&h=600&fit=crop",
  appartment: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=800&h=600&fit=crop",
  lvilla: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop",
  chic: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop"
};

const mainProjects = [
  {
    title: "Modern Living Room",
    image: assets.lroom1,
    category: "Living Room",
    completion: "2024",
    location: "Mumbai"
  },
  {
    title: "Elegant Kitchen",
    image: assets.kitchen5,
    category: "Kitchen",
    completion: "2024",
    location: "Delhi"
  },
  {
    title: "Luxury Bedroom",
    image: assets.bedroom,
    category: "Bedroom",
    completion: "2023",
    location: "Bangalore"
  },
];

const featuredProjects = [
  {
    title: "Stylish Mumbai Apartment",
    image: assets.appartment,
    description: "A 3BHK home with Scandinavian elegance and functionality.",
    area: "1,200 sq ft",
    duration: "45 days",
    style: "Scandinavian"
  },
  {
    title: "Luxury Pune Villa",
    image: assets.lvilla,
    description: "A villa that blends luxury with minimalism and open space.",
    area: "3,500 sq ft",
    duration: "90 days",
    style: "Minimalist"
  },
  {
    title: "Chic Bangalore Studio",
    image: assets.chic,
    description: "Smart use of space, storage, and natural lighting in a studio.",
    area: "450 sq ft",
    duration: "20 days",
    style: "Modern"
  },
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Interactive Cursor Glow */}
      <div 
        className="fixed w-96 h-96 bg-gradient-radial from-purple-400/10 to-transparent rounded-full pointer-events-none z-10"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: 'all 0.1s ease-out'
        }}
      ></div>

      <div className="relative z-20">
        {/* Hero Section */}
        <div className={`text-center py-20 px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm mb-6 border border-white/20">
            <Award className="w-4 h-4" />
            Award Winning Designs
          </div>
          <h1 className="text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-yellow-200 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover extraordinary spaces that blend innovation with elegance, 
            crafted to inspire and transform your living experience.
          </p>
        </div>

        {/* Main Projects Grid */}
        <div className="px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mainProjects.map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveProject(index)}
              >
                {/* Glassmorphism Card */}
                <div className="relative h-96 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 text-xs text-white/70 mb-2">
                      <MapPin className="w-3 h-3" />
                      {project.location} • {project.completion}
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm">{project.category}</p>
                    
                    {/* Hover Action */}
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm hover:bg-white/30 transition-colors">
                        <Play className="w-4 h-4" />
                        View Project
                      </button>
                    </div>
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-purple-400 group-hover:to-yellow-400 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="px-6 pb-20">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h2 className="text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="flex items-center justify-center gap-3 text-white/70">
              <span className="text-lg">Delivered by</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Livspace
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${(index + 3) * 200}ms` }}
              >
                {/* Card with Advanced Glassmorphism */}
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-t-3xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
                        {project.style}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">{project.description}</p>
                    
                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-white">{project.area}</div>
                        <div className="text-xs text-white/60">Area</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-white">{project.duration}</div>
                        <div className="text-xs text-white/60">Duration</div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25">
                      Explore Details
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className={`text-center py-16 px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Space?</h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Our design experts are ready to bring your vision to life.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Portfolio;