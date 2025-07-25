// // src/components/Services.jsx
// import React from "react";
// import { Home, Palette, Layout, Lightbulb, Sofa, ArrowRight } from "lucide-react";

// const Services = () => {
//   const services = [
//     {
//       icon: <Home className="w-8 h-8" />,
//       title: "Residential Design",
//       description:
//         "Complete home makeovers from concept to completion, creating spaces that perfectly reflect your lifestyle.",
//       features: [
//         "Space Planning",
//         "Color Consultation",
//         "Furniture Selection",
//         "Project Management",
//       ],
//     },
//     {
//       icon: <Layout className="w-8 h-8" />,
//       title: "Space Planning",
//       description:
//         "Optimize your space for functionality and flow, making every square foot work beautifully for you.",
//       features: [
//         "Layout Design",
//         "Traffic Flow",
//         "Storage Solutions",
//         "Room Functionality",
//       ],
//     },
//     {
//       icon: <Palette className="w-8 h-8" />,
//       title: "Color & Styling",
//       description:
//         "Expert color palettes and styling that create harmony and visual impact throughout your space.",
//       features: [
//         "Color Schemes",
//         "Material Selection",
//         "Styling Consultation",
//         "Accent Planning",
//       ],
//     },
//     {
//       icon: <Lightbulb className="w-8 h-8" />,
//       title: "Lighting Design",
//       description:
//         "Comprehensive lighting solutions that enhance ambiance and functionality in every room.",
//       features: [
//         "Ambient Lighting",
//         "Task Lighting",
//         "Accent Lighting",
//         "Smart Controls",
//       ],
//     },
//     {
//       icon: <Sofa className="w-8 h-8" />,
//       title: "Furniture Curation",
//       description:
//         "Carefully selected furniture pieces that combine style, comfort, and quality for lasting beauty.",
//       features: [
//         "Custom Pieces",
//         "Vintage Finds",
//         "Modern Classics",
//         "Comfort Focus",
//       ],
//     },
//     {
//       icon: <ArrowRight className="w-8 h-8" />,
//       title: "Full Renovation",
//       description:
//         "Complete transformation services from architectural changes to final styling touches.",
//       features: [
//         "Renovation Planning",
//         "Contractor Coordination",
//         "Timeline Management",
//         "Quality Control",
//       ],
//     },
//   ];

//   return (
//     <section id="services" className="py-20 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//             Our Design Services
//           </h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             From concept to completion, we offer comprehensive interior design
//             services tailored to create your perfect living space.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-500"
//             >
//               <div className="text-yellow-500 mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 mb-6">{service.description}</p>
//               <ul className="space-y-2 mb-6">
//                 {service.features.map((feature, idx) => (
//                   <li
//                     key={idx}
//                     className="flex items-center text-sm text-gray-500"
//                   >
//                     <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//               <button className="text-yellow-600 font-medium flex items-center hover:text-yellow-800 transition">
//                 Learn More
//                 <ArrowRight className="ml-2 w-4 h-4" />
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="text-center mt-16">
//           <button className="bg-yellow-500 text-white font-semibold px-8 py-4 rounded hover:bg-yellow-600 transition">
//             Schedule Consultation
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



import React from "react";
import { Home, Palette, Layout, Lightbulb, Sofa, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8 text-elegant-gold" />,
      title: "Residential Design",
      description:
        "Complete home makeovers from concept to completion, creating spaces that perfectly reflect your lifestyle.",
      features: [
        "Space Planning",
        "Color Consultation",
        "Furniture Selection",
        "Project Management",
      ],
    },
    {
      icon: <Layout className="w-8 h-8 text-elegant-gold" />,
      title: "Space Planning",
      description:
        "Optimize your space for functionality and flow, making every square foot work beautifully for you.",
      features: [
        "Layout Design",
        "Traffic Flow",
        "Storage Solutions",
        "Room Functionality",
      ],
    },
    {
      icon: <Palette className="w-8 h-8 text-elegant-gold" />,
      title: "Color & Styling",
      description:
        "Expert color palettes and styling that create harmony and visual impact throughout your space.",
      features: [
        "Color Schemes",
        "Material Selection",
        "Styling Consultation",
        "Accent Planning",
      ],
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-elegant-gold" />,
      title: "Lighting Design",
      description:
        "Comprehensive lighting solutions that enhance ambiance and functionality in every room.",
      features: [
        "Ambient Lighting",
        "Task Lighting",
        "Accent Lighting",
        "Smart Controls",
      ],
    },
    {
      icon: <Sofa className="w-8 h-8 text-elegant-gold" />,
      title: "Furniture Curation",
      description:
        "Carefully selected furniture pieces that combine style, comfort, and quality for lasting beauty.",
      features: [
        "Custom Pieces",
        "Vintage Finds",
        "Modern Classics",
        "Comfort Focus",
      ],
    },
    {
      icon: <ArrowRight className="w-8 h-8 text-elegant-gold" />,
      title: "Full Renovation",
      description:
        "Complete transformation services from architectural changes to final styling touches.",
      features: [
        "Renovation Planning",
        "Contractor Coordination",
        "Timeline Management",
        "Quality Control",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Design Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From concept to completion, we offer comprehensive interior design services tailored to elevate your living experience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 hover:border-yellow-400"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-[#fffaf0] rounded-full mb-5 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-yellow-600 transition">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="text-yellow-600 font-semibold flex items-center hover:text-yellow-800 transition">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-20">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-10 py-4 rounded-full transition">
            Schedule a Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
