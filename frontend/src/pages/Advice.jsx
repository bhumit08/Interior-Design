// import React, { useState, useEffect } from "react";
// import { 
//   Lightbulb, 
//   TrendingUp, 
//   Palette, 
//   Home, 
//   Star, 
//   Quote,
//   ChevronRight,
//   Play,
//   Users,
//   Award,
//   Clock,
//   Bookmark,
//   ArrowRight
// } from "lucide-react";

// const expertProfiles = [
//   {
//     name: "Priya Sharma",
//     role: "Senior Interior Designer",
//     expertise: "Modern & Contemporary",
//     image: "https://images.unsplash.com/photo-1494790108755-2616b612b977?w=200&h=200&fit=crop&crop=face",
//     experience: "12+ Years",
//     projects: "500+",
//     rating: 4.9,
//     specialty: "Luxury Homes"
//   },
//   {
//     name: "Rahul Mehta",
//     role: "Space Planning Expert",
//     expertise: "Small Space Solutions",
//     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
//     experience: "15+ Years",
//     projects: "750+",
//     rating: 4.8,
//     specialty: "Studio Apartments"
//   },
//   {
//     name: "Anita Gupta",
//     role: "Color & Texture Specialist",
//     expertise: "Vastu & Feng Shui",
//     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
//     experience: "10+ Years",
//     projects: "400+",
//     rating: 4.9,
//     specialty: "Traditional Homes"
//   }
// ];

// const adviceCategories = [
//   {
//     icon: Home,
//     title: "Space Planning",
//     count: "25 Tips",
//     color: "from-blue-500 to-cyan-500",
//     description: "Maximize your space efficiently"
//   },
//   {
//     icon: Palette,
//     title: "Color Schemes",
//     count: "18 Ideas",
//     color: "from-purple-500 to-pink-500",
//     description: "Perfect color combinations"
//   },
//   {
//     icon: Lightbulb,
//     title: "Lighting Design",
//     count: "22 Guides",
//     color: "from-yellow-500 to-orange-500",
//     description: "Illuminate your spaces beautifully"
//   },
//   {
//     icon: TrendingUp,
//     title: "Latest Trends",
//     count: "15 Updates",
//     color: "from-green-500 to-emerald-500",
//     description: "Stay ahead with design trends"
//   }
// ];

// const featuredAdvice = [
//   {
//     category: "Space Planning",
//     title: "5 Ways to Make Small Rooms Look Bigger",
//     description: "Transform cramped spaces into airy, open areas with these proven design techniques that create the illusion of space.",
//     image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
//     readTime: "5 min read",
//     expert: "Rahul Mehta",
//     tips: [
//       "Use light colors to reflect more light",
//       "Add mirrors to create depth",
//       "Choose multi-functional furniture",
//       "Maximize natural light sources",
//       "Use vertical storage solutions"
//     ],
//     trending: true
//   },
//   {
//     category: "Color Psychology",
//     title: "Choosing Colors That Boost Your Mood",
//     description: "Discover how different colors can influence your emotions and create the perfect atmosphere for every room in your home.",
//     image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
//     readTime: "7 min read",
//     expert: "Anita Gupta",
//     tips: [
//       "Blue promotes calm and relaxation",
//       "Yellow energizes and uplifts mood",
//       "Green brings nature indoors",
//       "Warm tones create cozy atmospheres",
//       "Neutral colors provide timeless appeal"
//     ],
//     trending: false
//   },
//   {
//     category: "Lighting",
//     title: "Layer Your Lighting Like a Pro",
//     description: "Master the art of lighting design with professional techniques that combine ambient, task, and accent lighting.",
//     image: "https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=600&h=400&fit=crop",
//     readTime: "6 min read",
//     expert: "Priya Sharma",
//     tips: [
//       "Combine three types of lighting",
//       "Use dimmers for flexibility",
//       "Position lights at different heights",
//       "Consider natural light patterns",
//       "Add statement lighting pieces"
//     ],
//     trending: true
//   }
// ];

// const quickTips = [
//   {
//     tip: "Use the 60-30-10 rule for color schemes",
//     category: "Color Theory",
//     icon: Palette
//   },
//   {
//     tip: "Place mirrors opposite windows to double natural light",
//     category: "Lighting",
//     icon: Lightbulb
//   },
//   {
//     tip: "Hang curtains high and wide to make windows appear larger",
//     category: "Space Planning",
//     icon: Home
//   },
//   {
//     tip: "Add plants to purify air and bring life to any room",
//     category: "Wellness",
//     icon: TrendingUp
//   }
// ];

// const ExpertAdvice = () => {
//   const [activeAdvice, setActiveAdvice] = useState(0);
//   const [activeExpert, setActiveExpert] = useState(0);
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     setIsVisible(true);
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-32 left-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
//         <div className="absolute top-64 right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
//         <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
//       </div>

//       {/* Interactive Cursor Glow */}
//       <div 
//         className="fixed w-96 h-96 bg-gradient-radial from-blue-400/10 to-transparent rounded-full pointer-events-none z-10"
//         style={{
//           left: mousePosition.x - 192,
//           top: mousePosition.y - 192,
//           transition: 'all 0.1s ease-out'
//         }}
//       ></div>

//       <div className="relative z-20">
//         {/* Hero Section */}
//         <div className={`text-center py-20 px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/80 text-sm mb-6 border border-white/20">
//             <Award className="w-4 h-4" />
//             Expert Insights & Professional Tips
//           </div>
//           <h1 className="text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
//             Expert Advice
//           </h1>
//           <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
//             Get professional insights from our design experts. Transform your space with proven techniques, 
//             trending ideas, and personalized recommendations from industry leaders.
//           </p>
//         </div>

//         {/* Expert Profiles Section */}
//         <div className="px-6 mb-20">
//           <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
//             <h2 className="text-4xl font-bold text-white mb-4">Meet Our Design Experts</h2>
//             <p className="text-white/70 text-lg">Learn from the best in the industry</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {expertProfiles.map((expert, index) => (
//               <div
//                 key={index}
//                 className={`group relative transform transition-all duration-700 hover:scale-105 cursor-pointer ${
//                   isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
//                 }`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//                 onClick={() => setActiveExpert(index)}
//               >
//                 <div className={`relative bg-white/10 backdrop-blur-xl border rounded-3xl overflow-hidden transition-all duration-300 ${
//                   activeExpert === index ? 'border-blue-400/50 bg-white/15' : 'border-white/20 hover:bg-white/15'
//                 }`}>
//                   {/* Expert Image */}
//                   <div className="relative p-6 text-center">
//                     <div className="relative inline-block">
//                       <img
//                         src={expert.image}
//                         alt={expert.name}
//                         className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white/20"
//                       />
//                       <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
//                     </div>
//                     <h3 className="text-xl font-bold text-white mt-4">{expert.name}</h3>
//                     <p className="text-blue-300 text-sm">{expert.role}</p>
//                     <p className="text-white/60 text-xs mt-1">{expert.expertise}</p>
//                   </div>

//                   {/* Stats */}
//                   <div className="px-6 pb-6">
//                     <div className="grid grid-cols-2 gap-4 mb-4">
//                       <div className="bg-white/5 rounded-xl p-3 text-center">
//                         <div className="text-lg font-bold text-white">{expert.experience}</div>
//                         <div className="text-xs text-white/60">Experience</div>
//                       </div>
//                       <div className="bg-white/5 rounded-xl p-3 text-center">
//                         <div className="text-lg font-bold text-white">{expert.projects}</div>
//                         <div className="text-xs text-white/60">Projects</div>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between text-sm">
//                       <div className="flex items-center gap-1">
//                         <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                         <span className="text-white font-semibold">{expert.rating}</span>
//                       </div>
//                       <span className="text-white/60">{expert.specialty}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Advice Categories */}
//         <div className="px-6 mb-20">
//           <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
//             <h2 className="text-4xl font-bold text-white mb-4">Browse by Category</h2>
//             <p className="text-white/70 text-lg">Find expert advice tailored to your needs</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {adviceCategories.map((category, index) => (
//               <div
//                 key={index}
//                 className={`group cursor-pointer transform transition-all duration-700 hover:scale-105 ${
//                   isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
//                 }`}
//                 style={{ transitionDelay: `${index * 150}ms` }}
//               >
//                 <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
//                   <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
//                     <category.icon className="w-8 h-8 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
//                   <p className="text-white/60 text-sm mb-3">{category.description}</p>
//                   <div className="flex items-center justify-between">
//                     <span className="text-blue-300 text-sm font-semibold">{category.count}</span>
//                     <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Featured Advice Articles */}
//         <div className="px-6 mb-20">
//           <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
//             <h2 className="text-4xl font-bold text-white mb-4">Featured Design Guides</h2>
//             <p className="text-white/70 text-lg">In-depth articles from our design experts</p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//             {featuredAdvice.map((article, index) => (
//               <div
//                 key={index}
//                 className={`group relative transform transition-all duration-700 hover:scale-105 cursor-pointer ${
//                   isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
//                 }`}
//                 style={{ transitionDelay: `${index * 200}ms` }}
//                 onClick={() => setActiveAdvice(index)}
//               >
//                 <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-300">
//                   {/* Article Image */}
//                   <div className="relative overflow-hidden">
//                     <img
//                       src={article.image}
//                       alt={article.title}
//                       className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
//                     />
//                     <div className="absolute top-4 left-4">
//                       <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
//                         {article.category}
//                       </span>
//                     </div>
//                     {article.trending && (
//                       <div className="absolute top-4 right-4">
//                         <div className="bg-gradient-to-r from-orange-500 to-red-500 px-3 py-1 rounded-full text-white text-xs font-semibold">
//                           🔥 Trending
//                         </div>
//                       </div>
//                     )}
//                   </div>

//                   {/* Article Content */}
//                   <div className="p-6">
//                     <div className="flex items-center gap-3 mb-3">
//                       <Clock className="w-4 h-4 text-white/60" />
//                       <span className="text-white/60 text-sm">{article.readTime}</span>
//                       <span className="text-white/40">•</span>
//                       <span className="text-blue-300 text-sm">by {article.expert}</span>
//                     </div>

//                     <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{article.title}</h3>
//                     <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">{article.description}</p>

//                     {/* Quick Tips Preview */}
//                     <div className="mb-6">
//                       <h4 className="text-sm font-semibold text-white/80 mb-2">Quick Tips:</h4>
//                       <ul className="space-y-1">
//                         {article.tips.slice(0, 3).map((tip, tipIndex) => (
//                           <li key={tipIndex} className="text-xs text-white/60 flex items-center gap-2">
//                             <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
//                             {tip}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* CTA */}
//                     <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
//                       Read Full Guide
//                       <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Quick Tips Section */}
//         <div className="px-6 mb-20">
//           <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
//             <h2 className="text-4xl font-bold text-white mb-4">Quick Design Tips</h2>
//             <p className="text-white/70 text-lg">Bite-sized wisdom for instant improvements</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//             {quickTips.map((tipItem, index) => (
//               <div
//                 key={index}
//                 className={`group transform transition-all duration-700 hover:scale-105 ${
//                   isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
//                 }`}
//                 style={{ transitionDelay: `${index * 150}ms` }}
//               >
//                 <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 h-full">
//                   <tipItem.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
//                   <p className="text-white font-medium text-sm leading-relaxed mb-3">{tipItem.tip}</p>
//                   <span className="text-blue-300 text-xs font-semibold">{tipItem.category}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className={`text-center py-16 px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
//           <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
//             <Quote className="w-12 h-12 text-blue-400 mx-auto mb-6" />
//             <h3 className="text-4xl font-bold text-white mb-4">Need Personalized Advice?</h3>
//             <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
//               Get one-on-one consultation with our design experts. Receive tailored recommendations 
//               for your specific space, style, and budget requirements.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
//                 Book Free Consultation
//               </button>
//               <button className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105">
//                 Browse All Articles
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//         .bg-gradient-radial {
//           background: radial-gradient(circle, var(--tw-gradient-stops));
//         }
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ExpertAdvice;



import React from "react";
import {
  Award,
  Home,
  Lightbulb,
  Palette,
  Star,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { assets } from "../assets/frontend_assets/assets"; // Updated import path

const experts = [
  {
    name: "Priya Sharma",
    role: "Senior Interior Designer",
    image: assets.priyaSharma, // Now using assets
    experience: "12+ Years",
    projects: "500+",
    rating: 4.9,
    specialty: "Luxury Homes"
  },
  {
    name: "Rahul Mehta",
    role: "Space Planning Expert",
    image: assets.rahulMehta, // Now using assets
    experience: "15+ Years",
    projects: "750+",
    rating: 4.8,
    specialty: "Studio Apartments"
  },
  {
    name: "Anita Gupta",
    role: "Color & Texture Specialist",
    image: assets.anitaGupta, // New image via assets
    experience: "10+ Years",
    projects: "400+",
    rating: 4.9,
    specialty: "Traditional Homes"
  }
];

const categories = [
  {
    icon: Home,
    title: "Space Planning",
    count: "25 Tips",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "Color Schemes",
    count: "18 Ideas",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    count: "22 Guides",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Latest Trends",
    count: "15 Updates",
    color: "from-green-500 to-emerald-500"
  }
];

const ExpertAdvice = () => {
  return (
    <section className="min-h-screen px-4 py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 text-sm text-white/70">
          <Award className="w-4 h-4" /> Expert Insights & Tips
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mt-6 bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">
          Expert Advice
        </h1>
        <p className="mt-4 text-white/70 text-lg">
          Learn from experienced designers and transform your space with modern guidance.
        </p>
      </div>

      {/* Experts */}
      <div className="max-w-6xl mx-auto mb-20 px-4">
        <h2 className="text-3xl font-semibold mb-10 text-center">Meet Our Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-center hover:scale-105 transition"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white/20 mb-4"
              />
              <h3 className="text-lg font-bold mb-1">{expert.name}</h3>
              <p className="text-blue-300 text-sm mb-2">{expert.role}</p>
              <div className="flex justify-center gap-8 text-sm mb-3">
                <div>
                  <p className="font-bold text-white">{expert.experience}</p>
                  <p className="text-white/60">Experience</p>
                </div>
                <div>
                  <p className="font-bold text-white">{expert.projects}</p>
                  <p className="text-white/60">Projects</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white font-semibold">{expert.rating}</span>
                <span className="text-white/60">· {expert.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 text-center">Explore Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition"
            >
              <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${cat.color} mb-4`}>
                <cat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-1">{cat.title}</h3>
              <p className="text-blue-300 font-medium text-sm">{cat.count}</p>
              <ArrowRight className="mt-3 text-white/50 w-4 h-4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertAdvice;

