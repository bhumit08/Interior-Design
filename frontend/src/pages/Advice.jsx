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

const experts = [
  {
    name: "Priya Sharma",
    role: "Senior Interior Designer",
    image:
      "https://www.shutterstock.com/image-photo/headshot-portrait-smiling-young-20s-260nw-1868188849.jpg",
    experience: "12+ Years",
    projects: "500+",
    rating: 4.9,
    specialty: "Luxury Homes"
  },
  {
    name: "Rahul Mehta",
    role: "Space Planning Expert",
    image:
      "https://media.istockphoto.com/id/1369746033/photo/portrait-of-a-handsome-young-businessman-working-in-office.jpg?s=612x612&w=0&k=20&c=ca1AFfPfzOPtHZdAwa7QtCD1TFDws7PG9t_rqSibdC0=",
    experience: "15+ Years",
    projects: "750+",
    rating: 4.8,
    specialty: "Studio Apartments"
  },
  {
    name: "Anita Gupta",
    role: "Color & Texture Specialist",
    image:
      "https://thumbs.dreamstime.com/b/profile-picture-smiling-indian-female-employee-profile-picture-smiling-millennial-indian-female-employee-posing-office-198022033.jpg",
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

const ExpertAdvice = () => (
  <section className="min-h-screen px-4 py-16 bg-gradient-to-br from-[#0a0f1c] via-[#0d1222] to-[#121926]
 text-white">
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

export default ExpertAdvice;
