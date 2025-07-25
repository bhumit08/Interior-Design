import React from "react";
import { Sofa, User, Handshake, CalendarCheck } from "lucide-react";

const features = [
  {
    icon: <Sofa className="w-10 h-10 text-indigo-900" />,
    title: "European standards",
    description:
      "Aertsen’s products reflect European standards in terms of quality, design, and durability.",
  },
  {
    icon: <User className="w-10 h-10 text-indigo-900" />,
    title: "Trained experts",
    description:
      "Right from design and concept to manufacturing – it's all done by professionals.",
  },
  {
    icon: <Handshake className="w-10 h-10 text-indigo-900" />,
    title: "Transparency",
    description:
      "From the paint & tiles to the foam in your cushions – we maintain transparency in everything.",
  },
  {
    icon: <CalendarCheck className="w-10 h-10 text-indigo-900" />,
    title: "Timely delivery",
    description:
      "Using the latest technology we have mastered design & delivery timelines.",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-lg text-indigo-800 font-medium">Upgrade Your Lifestyle With</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-indigo-950 mt-2">
          An Elegant Home Makeover
        </h2>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div key={idx} className="text-center px-6">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-indigo-950 mb-2">{feature.title}</h3>
            <p className="text-gray-500 text-sm mb-4">
              {feature.description.length > 90
                ? feature.description.slice(0, 90) + "..."
                : feature.description}
            </p>
            <button className="text-xs text-indigo-800 font-medium hover:underline">
              READ MORE
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
