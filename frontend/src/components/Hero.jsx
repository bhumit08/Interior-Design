import React, { useEffect, useState } from "react";
import axios from "axios";
import { ArrowRight, Sparkles } from "lucide-react";
import { assets } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [quote, setQuote] = useState("");
  const navigate = useNavigate();

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

          <p className="text-xl md:text-2xl text-white/70 mb-10 leading-relaxed">
            {quote}
          </p>

          {/* View Portfolio Button */}
          <div className="flex justify-start">
            <button
              onClick={() => navigate("/portfolio")}
              className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded hover:bg-yellow-400 hover:text-black transition"
            >
              View Portfolio
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

