import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight, Sparkles } from "lucide-react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/quote")
      .then((res) => setQuote(res.data?.text || ""))
      .catch((err) => console.error("Failed to fetch quote:", err));
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={assets.interior} alt="Luxurious interior design" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-medium tracking-wide">LUXURY INTERIOR DESIGN</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your <span className="block text-yellow-400">Living Space</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed">
            {quote}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">
              Start Your Project
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded hover:bg-yellow-400 hover:text-black transition">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



// import React from "react";
// import { ArrowRight, Sparkles } from "lucide-react";
// import { assets } from "../assets/frontend_assets/assets";

// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img 
//           src={assets.interior} 
//           alt="Luxurious interior design" 
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-6 py-20">
//         <div className="max-w-3xl">
//           {/* Tagline */}
//           <div className="flex items-center gap-2 mb-6">
//             <Sparkles className="w-5 h-5 text-yellow-400" />
//             <span className="text-yellow-400 font-medium tracking-wide">
//               LUXURY INTERIOR DESIGN
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
//             Transform Your
//             <span className="block text-yellow-400">Living Space</span>
//           </h1>

//           {/* Subtext */}
//           <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed">
//             Create sophisticated, functional, and beautiful interiors that reflect your unique style and enhance your lifestyle.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4">
//             <button className="group bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition">
//               Start Your Project
//               <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded hover:bg-yellow-400 hover:text-black transition">
//               View Portfolio
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 text-center">
//             <div>
//               <div className="text-3xl font-bold text-yellow-400 mb-1">200+</div>
//               <p className="text-white/60">Projects Completed</p>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-yellow-400 mb-1">15+</div>
//               <p className="text-white/60">Years Experience</p>
//             </div>
//             <div>
//               <div className="text-3xl font-bold text-yellow-400 mb-1">98%</div>
//               <p className="text-white/60">Client Satisfaction</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Blob */}
//       <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300/10 rounded-full blur-3xl"></div>
//     </section>
//   );
// };

// export default Hero;






// // src/components/HeroSection.jsx
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { assets } from "../assets/frontend_assets/assets";

// const slides = [
//   {
//     image: assets.interior,
//     title: "Make your home",
//     highlight: "A Reflection Of YOU",
//     subtext: "Designs that speak your soul.",
//   },
//   {
//     image: assets.bg3,
//     title: "Start your journey",
//     highlight: "With Beautiful Interiors",
//     subtext: "Transform spaces into emotions.",
//   },
//   {
//     image: assets.kitchen4,
//     title: "Elevate your lifestyle",
//     highlight: "With Timeless Designs",
//     subtext: "Luxury redefined for your everyday.",
//   },
// ];

// const HeroSection = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const { image, title, highlight, subtext } = slides[index];

//   return (
//     <div className="h-screen relative overflow-hidden">
//       {/* Background Image */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 1.05 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.95 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 bg-cover bg-center z-0"
//           style={{ backgroundImage: `url(${image})` }}
//         />
//       </AnimatePresence>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-0" />

//       {/* Hero Content */}
//       <div className="h-full flex items-center justify-center relative z-10 text-center px-4">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 1 }}
//           >
//             <p className="text-xl mb-2 text-[#D1D1D1] tracking-widest uppercase">
//               {title}
//             </p>
//             <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-[#E4C590] drop-shadow-lg">
//               {highlight}
//             </h1>
//             <p className="mb-6 text-lg text-[#F9F9F9] italic">{subtext}</p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="mt-4 px-6 py-3 border border-[#E4C590] text-[#E4C590] rounded hover:bg-[#E4C590] hover:text-black transition"
//             >
//               EXPLORE NOW
//             </motion.button>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;





// src/components/HeroSection.jsx
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Stylish high-res images
// const assets = {
//   interior: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=1080&fit=crop&dpr=2",
//   bg3: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&h=1080&fit=crop&dpr=2",
//   kitchen4: "https://images.unsplash.com/photo-1556909114-56850e2ad1f7?w=1920&h=1080&fit=crop&dpr=2",
// };

// const slides = [
//   {
//     image: assets.interior,
//     title: "Make your home",
//     highlight: "A Reflection Of YOU",
//     subtext: "Designs that speak your soul.",
//   },
//   {
//     image: assets.bg3,
//     title: "Start your journey",
//     highlight: "With Beautiful Interiors",
//     subtext: "Transform spaces into emotions.",
//   },
//   {
//     image: assets.kitchen4,
//     title: "Elevate your lifestyle",
//     highlight: "With Timeless Designs",
//     subtext: "Luxury redefined for your everyday.",
//   },
// ];

// const HeroSection = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const { image, title, highlight, subtext } = slides[index];

//   return (
//     <div className="h-screen w-full relative overflow-hidden font-['Poppins']">
//       {/* Background Image */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2 }}
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: `url(${image})` }}
//         />
//       </AnimatePresence>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-0" />

//       {/* Hero Content */}
//       <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             transition={{ duration: 1 }}
//             className="max-w-3xl"
//           >
//             <p className="text-lg md:text-xl text-[#FFD580] uppercase tracking-widest mb-3 font-medium">
//               {title}
//             </p>
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg mb-4">
//               {highlight}
//             </h1>
//             <p className="text-md md:text-lg text-gray-200 italic mb-8">
//               {subtext}
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.07 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-3 bg-[#FFD580] text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               EXPLORE NOW
//             </motion.button>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;





// import React, { useState, useEffect } from 'react';
// import { ArrowRight, Play, Star, Sparkles, Crown, Diamond } from 'lucide-react';

//   function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   const slides = [
//     {
//       image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//       title: "Timeless",
//       subtitle: "Luxury",
//       description: "Where architectural mastery meets unparalleled elegance"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//       title: "Exquisite",
//       subtitle: "Craftsmanship",
//       description: "Bespoke interiors tailored to perfection"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//       title: "Refined",
//       subtitle: "Sophistication",
//       description: "Creating spaces that transcend ordinary living"
//     }
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-black">
//       {/* Premium Background with Parallax */}
//       <div className="absolute inset-0">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 transition-all duration-2000 ${
//               index === currentSlide ? 'opacity-60 scale-105' : 'opacity-0 scale-100'
//             }`}
//             style={{
//               transform: `scale(${index === currentSlide ? 1.05 : 1}) translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
//             }}
//           >
//             <img
//               src={slide.image}
//               alt={`Luxury interior ${index + 1}`}
//               className="w-full h-full object-cover filter brightness-75"
//             />
//           </div>
//         ))}
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/30"></div>
//         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
//       </div>

//       {/* Luxury Floating Elements */}
//       <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-amber-300 rounded-full animate-pulse opacity-80"></div>
//       <div className="absolute top-1/3 right-1/6 w-1 h-1 bg-gold-400 rounded-full animate-ping opacity-60"></div>
//       <div className="absolute bottom-1/3 left-1/4 w-3 h-3 border border-amber-300 rounded-full animate-pulse opacity-40"></div>
//       <div 
//         className="absolute w-96 h-96 rounded-full opacity-5 pointer-events-none"
//         style={{
//           background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)',
//           left: mousePosition.x - 192,
//           top: mousePosition.y - 192,
//           transition: 'all 0.1s ease-out'
//         }}
//       ></div>

//       {/* Premium Main Content */}
//       <div className="relative z-10 flex items-center min-h-screen px-8 lg:px-16">
//         <div className="max-w-8xl mx-auto w-full">
//           <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
            
//             {/* Left Luxurious Content */}
//             <div className={`xl:col-span-7 text-white transition-all duration-2000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0'}`}>
              
//               <div className="mb-8">
//                 <div className="flex items-center space-x-4 mb-4">
//                   <div className="w-16 h-px bg-gradient-to-r from-amber-300 to-transparent"></div>
//                   <Sparkles className="w-5 h-5 text-amber-300" />
//                   <span className="text-amber-300 font-light tracking-[0.2em] text-sm">EST. MMXXIV</span>
//                 </div>
//               </div>
              
//               <h1 className="mb-8 leading-none">
//                 <div className="text-7xl lg:text-9xl font-thin mb-4 tracking-tight">
//                   <span className="text-white/20">{slides[currentSlide].title}</span>
//                 </div>
//                 <div className="text-6xl lg:text-8xl font-bold tracking-tight">
//                   <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200 bg-clip-text text-transparent">
//                     {slides[currentSlide].subtitle}
//                   </span>
//                 </div>
//               </h1>
              
//               <div className="mb-12 max-w-2xl">
//                 <p className="text-2xl text-white/80 font-light leading-relaxed mb-6">
//                   {slides[currentSlide].description}
//                 </p>
//                 <p className="text-lg text-white/60 font-light leading-relaxed">
//                   We orchestrate symphonies of space, light, and luxury. Each project is a testament to uncompromising quality and visionary design, crafted for the most discerning clientele.
//                 </p>
//               </div>
              
//               <div className="flex flex-col lg:flex-row gap-6 mb-16">
//                 <button className="group relative bg-gradient-to-r from-amber-400 to-amber-300 text-black px-12 py-5 font-bold tracking-wider hover:scale-105 transition-all duration-500 overflow-hidden">
//                   <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
//                   <span className="relative flex items-center">
//                     BEGIN YOUR JOURNEY
//                     <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
//                   </span>
//                 </button>
                
//                 <button className="group border border-white/30 text-white px-12 py-5 font-light tracking-wider hover:bg-white/5 hover:border-amber-300/50 transition-all duration-500 backdrop-blur-sm">
//                   <span className="flex items-center">
//                     <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-500" />
//                     EXPERIENCE OUR CRAFT
//                   </span>
//                 </button>
//               </div>
              
//               {/* Premium Stats */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
//                 <div className="text-center group">
//                   <div className="flex items-center justify-center mb-4">
//                     <Diamond className="w-8 h-8 text-amber-300 mr-3 group-hover:rotate-12 transition-transform duration-500" />
//                     <span className="text-4xl font-light text-white">25+</span>
//                   </div>
//                   <p className="text-white/60 font-light tracking-wide">INTERNATIONAL AWARDS</p>
//                 </div>
//                 <div className="text-center group">
//                   <div className="flex items-center justify-center mb-4">
//                     <Crown className="w-8 h-8 text-amber-300 mr-3 group-hover:scale-110 transition-transform duration-500" />
//                     <span className="text-4xl font-light text-white">150+</span>
//                   </div>
//                   <p className="text-white/60 font-light tracking-wide">ELITE RESIDENCES</p>
//                 </div>
//                 <div className="text-center group">
//                   <div className="flex items-center justify-center mb-4">
//                     <Star className="w-8 h-8 text-amber-300 mr-3 group-hover:rotate-180 transition-transform duration-700" />
//                     <span className="text-4xl font-light text-white">100%</span>
//                   </div>
//                   <p className="text-white/60 font-light tracking-wide">CLIENT SATISFACTION</p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Premium Showcase */}
//             <div className={`xl:col-span-5 transition-all duration-2000 delay-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}>
//               <div className="relative">
                
//                 {/* Floating Premium Cards */}
//                 <div className="space-y-8">
                  
//                   <div className="ml-auto w-80 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 p-8 hover:scale-105 hover:bg-white/10 transition-all duration-700 group">
//                     <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
//                       <span className="text-white font-bold text-2xl">🏛️</span>
//                     </div>
//                     <h3 className="text-white font-light text-xl mb-3 tracking-wide">ARCHITECTURAL MASTERY</h3>
//                     <p className="text-white/70 font-light leading-relaxed">Harmonizing structural innovation with timeless aesthetic principles.</p>
//                   </div>
                  
//                   <div className="w-80 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 p-8 hover:scale-105 hover:bg-white/10 transition-all duration-700 group">
//                     <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
//                       <span className="text-white font-bold text-2xl">💎</span>
//                     </div>
//                     <h3 className="text-white font-light text-xl mb-3 tracking-wide">CURATED COLLECTIONS</h3>
//                     <p className="text-white/70 font-light leading-relaxed">Exclusively sourced artifacts and bespoke furnishings from global artisans.</p>
//                   </div>
                  
//                   <div className="ml-auto w-80 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 p-8 hover:scale-105 hover:bg-white/10 transition-all duration-700 group">
//                     <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 mb-6 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
//                       <span className="text-white font-bold text-2xl">✨</span>
//                     </div>
//                     <h3 className="text-white font-light text-xl mb-3 tracking-wide">EXPERIENTIAL LUXURY</h3>
//                     <p className="text-white/70 font-light leading-relaxed">Crafting immersive environments that elevate every moment of daily life.</p>
//                   </div>
                  
//                 </div>
                
//                 {/* Elegant decorative elements */}
//                 <div className="absolute -top-16 -right-16 w-32 h-32 border border-amber-300/20 rounded-full animate-spin opacity-30" style={{animationDuration: '20s'}}></div>
//                 <div className="absolute -bottom-16 -left-16 w-24 h-24 border border-amber-300/10 rotate-45 animate-pulse"></div>
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </div>

//       {/* Elegant Slide Indicators */}
//       <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-6 z-10">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`relative transition-all duration-500 ${
//               index === currentSlide 
//                 ? 'w-12 h-1 bg-gradient-to-r from-amber-300 to-amber-500' 
//                 : 'w-8 h-1 bg-white/20 hover:bg-white/40'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Premium Scroll Indicator */}
//       <div className="absolute bottom-12 right-12 text-white/40 animate-bounce">
//         <div className="flex flex-col items-center font-light tracking-widest">
//           <span className="text-xs mb-3">EXPLORE</span>
//           <div className="w-px h-12 bg-gradient-to-b from-amber-300/60 to-transparent"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HeroSection