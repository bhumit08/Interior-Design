// src/components/Gallery.jsx
import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const images = [
  { src: assets.living_room, caption: "Modern Living Room" },
  { src: assets.e_bedroom, caption: "Elegant Bedroom" },
  { src: assets.l_kitchen, caption: "Luxury Kitchen" },
  { src: assets.m_workspace, caption: "Minimalist Workspace" },
  { src: assets.dining, caption: "Warm Dining Area" },
  { src: assets.wall_design, caption: "Creative Wall Design" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-gray-600 text-lg">
            Explore a variety of completed interior spaces with elegant styles and stunning aesthetics.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-4">
                <p className="text-white font-semibold text-sm">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
