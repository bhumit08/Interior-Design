import React, { useState, useEffect } from "react";
import { ChevronRight, Play, Award, MapPin } from "lucide-react";

// Mock assets - replace with your actual assets
const assets = {
  lroom1: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
  kitchen5: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
  bedroom: "https://www.craftedbeds.co.uk/cdn/shop/articles/c6229643564835.57f4204983b16.jpg?v=1654414798",
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
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1c] via-[#0d1222] to-[#121926] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Cursor Glow */}
      <div
        className="fixed w-96 h-96 bg-gradient-radial from-purple-400/10 to-transparent rounded-full pointer-events-none z-10"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: "all 0.1s ease-out"
        }}
      ></div>

      <div className="relative z-20">
        {/* Hero Section */}
        <div className={`text-center py-20 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm mb-6">
            <Award className="w-4 h-4" />
            Award Winning Designs
          </div>
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-yellow-200 mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Discover extraordinary spaces that blend innovation with elegance.
          </p>
        </div>

        {/* Main Projects */}
        <div className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {mainProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-3xl bg-white/10 border border-white/20 backdrop-blur-md">
              <img src={project.image} alt={project.title} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-6 text-white">
                <div className="flex items-center gap-2 text-sm text-white/60 mb-1">
                  <MapPin className="w-4 h-4" /> {project.location} • {project.completion}
                </div>
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="px-6 py-12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-white/70">Delivered by <span className="text-yellow-400 font-semibold">Livspace</span></p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition duration-300">
                <div className="relative">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <span className="absolute top-4 right-4 bg-black/30 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">{project.style}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{project.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-white font-bold">{project.area}</p>
                      <p className="text-white/60 text-xs">Area</p>
                    </div>
                    <div className="text-center">
                      <p className="text-white font-bold">{project.duration}</p>
                      <p className="text-white/60 text-xs">Duration</p>
                    </div>
                  </div>
                  <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white flex justify-center items-center gap-2">
                    Explore Details <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
