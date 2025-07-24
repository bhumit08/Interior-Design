// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { assets } from "../assets/frontend_assets/assets";

// const backgroundImages = [assets.interior, assets.bg4, assets.kitchen3];

// const HeroSection = () => {
//   const [bgIndex, setBgIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="h-screen relative overflow-hidden">
//       {/* Animated Background Image */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={bgIndex}
//           initial={{ opacity: 0, scale: 1.05, rotate: 2 }}
//           animate={{ opacity: 1, scale: 1, rotate: 0 }}
//           exit={{ opacity: 0, scale: 0.95, rotate: -2 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 bg-cover bg-center z-0"
//           style={{
//             backgroundImage: `url(${backgroundImages[bgIndex]})`,
//           }}
//         />
//       </AnimatePresence>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-0" />

//       {/* Navbar */}
//       <motion.div
//         initial={{ y: -40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="absolute top-0 left-0 w-full flex justify-between items-center p-6 backdrop-blur-md bg-black/30 z-10"
//       >
//         <div className="text-2xl font-bold tracking-wide text-white">Aertsen</div>
//         <div className="hidden md:flex space-x-6 text-sm text-white">
//           <a href="#" className="hover:underline">OUR OFFERINGS</a>
//           <a href="#" className="hover:underline">HOW IT WORKS</a>
//           <a href="#" className="hover:underline">AERTSEN DIARY</a>
//           <a href="#" className="hover:underline">EXPERT ADVICE</a>
//           <button className="border px-4 py-2 rounded hover:bg-white hover:text-black transition">
//             GET IN TOUCH
//           </button>
//         </div>
//       </motion.div>

//       {/* Hero Content */}
//       <div className="h-full flex items-center justify-center relative z-10 text-white text-center px-4">
//         <motion.div
//           initial={{ y: 40, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           <p className="text-xl mb-2">Make your home</p>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//             A Reflection Of <span className="text-yellow-400">YOU</span>
//           </h1>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-4 px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition"
//           >
//             START YOUR JOURNEY
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;


// src/components/HeroSection.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/frontend_assets/assets";

const slides = [
  {
    image: assets.interior,
    title: "Make your home",
    highlight: "A Reflection Of YOU",
    subtext: "Designs that speak your soul.",
  },
  {
    image: assets.bg3,
    title: "Start your journey",
    highlight: "With Beautiful Interiors",
    subtext: "Transform spaces into emotions.",
  },
  {
    image: assets.kitchen4,
    title: "Elevate your lifestyle",
    highlight: "With Timeless Designs",
    subtext: "Luxury redefined for your everyday.",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const { image, title, highlight, subtext } = slides[index];

  return (
    <div className="h-screen relative overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${image})` }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Navbar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-full flex justify-between items-center p-6 backdrop-blur-md bg-black/30 z-10"
      >
        <div className="text-2xl font-bold tracking-wide text-white">
          ProInterior
        </div>
        <div className="hidden md:flex space-x-6 text-sm text-white">
          <a href="#" className="hover:underline">OUR OFFERINGS</a>
          <a href="#" className="hover:underline">HOW IT WORKS</a>
          <a href="#" className="hover:underline">PORTFOLIO</a>
          <a href="#" className="hover:underline">EXPERT ADVICE</a>
          <button className="border px-4 py-2 rounded hover:bg-white hover:text-black transition">
            GET IN TOUCH
          </button>
        </div>
      </motion.div>

      {/* Hero Content */}
      {/* Hero Content */}
<div className="h-full flex items-center justify-center relative z-10 text-center px-4">
  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 1 }}
    >
      <p className="text-xl mb-2 text-[#D1D1D1] tracking-widest uppercase">
        {title}
      </p>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-[#E4C590] drop-shadow-lg">
        {highlight}
      </h1>
      <p className="mb-6 text-lg text-[#F9F9F9] italic">
        {subtext}
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-4 px-6 py-3 border border-[#E4C590] text-[#E4C590] rounded hover:bg-[#E4C590] hover:text-black transition"
      >
        EXPLORE NOW
      </motion.button>
    </motion.div>
  </AnimatePresence>
</div>

    </div>
  );
};

export default HeroSection;
