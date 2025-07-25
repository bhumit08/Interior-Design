import React from "react";
import { Sofa, LampDesk, PackageCheck, ArrowRight } from "lucide-react";

const estimates = [
  {
    title: "Full Home Interior",
    description: "Know the estimate price for your full home interiors",
    icon: <Sofa className="w-10 h-10 text-red-400" />,
  },
  {
    title: "Kitchen",
    description: "Get an approximate costing for your kitchen interior.",
    icon: <LampDesk className="w-10 h-10 text-red-400" />,
  },
  {
    title: "Wardrobe",
    description: "Our estimate for your dream wardrobe",
    icon: <PackageCheck className="w-10 h-10 text-red-400" />,
  },
];

const EstimateSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Get the estimate for your Interior
        </h2>
        <p className="text-gray-500 mt-2">
          Calculate the approximate cost of doing up your home interiors
        </p>
      </div>

      {/* Estimate Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {estimates.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-sm mb-6">{item.description}</p>
            <button className="w-full flex items-center justify-center gap-2 bg-red-400 hover:bg-red-500 text-white font-semibold py-2 rounded-full transition">
              CALCULATE <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EstimateSection;
