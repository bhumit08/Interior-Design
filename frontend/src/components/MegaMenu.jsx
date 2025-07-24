import React from "react";
import bg1 from "../assets/frontend_assets/bg1.webp";
import bg2 from "../assets/frontend_assets/bg2.jpg";

const MegaMenu = () => {
  const items = [
    "Custom Works",
    "Service Works",
    "Loose Furniture",
    "Appliances",
    "Décor",
    "Home Automation",
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg text-black p-8 grid grid-cols-3 gap-6 z-40">
      {/* Left Column: Text List */}
      <div className="col-span-1 space-y-4">
        <h3 className="text-xl font-semibold border-l-4 border-pink-500 pl-3 italic text-gray-800">
          Modular Furniture
        </h3>
        <ul className="text-lg font-medium space-y-2">
          {items.map((item, i) => (
            <li
              key={i}
              className="hover:text-pink-600 transition-all cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column: Images */}
      <div className="col-span-2 flex justify-center gap-4">
        <img
          src={bg1}
          alt="Modern Kitchen"
          className="w-1/2 object-cover rounded-lg shadow-md"
        />
        <img
          src={bg2}
          alt="Luxury Interior"
          className="w-1/2 object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default MegaMenu;
