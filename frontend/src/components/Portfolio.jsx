// src/components/Portfolio.jsx
import React from "react";
import { ExternalLink, Heart, Eye } from "lucide-react";
import { assets } from "../assets/frontend_assets/assets";

const Portfolio = () => {
  const projects = [
    {
      image: assets.bg2,
      title: "Modern Minimalist Bedroom",
      category: "Residential",
      description:
        "A serene bedroom design featuring warm neutrals, natural textures, and clean lines for ultimate relaxation.",
      tags: ["Minimalist", "Warm Tones", "Natural Materials"],
      stats: { views: "2.4k", likes: "189" },
    },
    {
      image: assets.kitchen3,
      title: "Elegant Contemporary Kitchen",
      category: "Kitchen Design",
      description:
        "Sophisticated kitchen with marble countertops, brass accents, and seamless storage solutions.",
      tags: ["Contemporary", "Marble", "Brass Accents"],
      stats: { views: "3.1k", likes: "245" },
    },
    {
      image: assets.bg4,
      title: "Sophisticated Dining Room",
      category: "Dining",
      description:
        "An intimate dining space with statement lighting, rich textures, and warm atmospheric elements.",
      tags: ["Statement Lighting", "Rich Textures", "Intimate"],
      stats: { views: "1.8k", likes: "156" },
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 mt-[-60px]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore our portfolio of beautifully designed spaces that showcase
            our commitment to creating functional, elegant, and personalized interiors.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1 text-sm">
                        <Eye className="w-4 h-4" />
                        {project.stats.views}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Heart className="w-4 h-4" />
                        {project.stats.likes}
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-white hover:text-yellow-400 transition"
                      title="View Project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Category Label */}
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-500 transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-yellow-500 text-white px-8 py-4 rounded-md hover:bg-yellow-600 transition font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
