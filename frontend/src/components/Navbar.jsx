import React, { useState } from "react";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-black text-white relative z-50">
      <div className="text-2xl font-bold">ProInterior</div>
      <ul className="flex space-x-6 text-sm uppercase font-medium">
        <li
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={() => setShowMegaMenu(false)}
          className="relative"
        >
          <span className="cursor-pointer">OUR OFFERINGS</span>
          {showMegaMenu && <MegaMenu />}
        </li>
        <li><a href="#how-it-works">HOW IT WORKS</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#advice">EXPERT ADVICE</a></li>
        <li><a href="#contact" className="border px-4 py-1 rounded hover:bg-white hover:text-black">GET IN TOUCH</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
