import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative z-50 shadow-md">
      {/* Logo: Make it clickable */}
      <Link to="/" className="text-3xl font-extrabold tracking-wide italic text-yellow-400">
        ProInterior
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-8 text-sm uppercase font-semibold items-center">
        <li>
          <Link
            to="/ouroffer"
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Our Offerings
          </Link>
        </li>
        <li>
          <Link
            to="/how-it-works"
            className="hover:text-yellow-400 transition-all duration-300"
          >
            How It Works
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/advice"
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Expert Advice
          </Link>
        </li>
        <li>
          <Link
            to="/getintouch"
            className="border border-yellow-400 px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition-all duration-300"
          >
            Get In Touch
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
