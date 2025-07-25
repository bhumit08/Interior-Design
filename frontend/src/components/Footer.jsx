import { Facebook, Instagram, Twitter, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#111827] text-white">
      {/* Decorative Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1f2937] via-[#111827] to-[#0f172a] opacity-90 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-white">
              Interior<span className="text-yellow-400">Zen</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Creating beautiful, functional spaces that enhance your lifestyle and reflect your unique personality.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                "Residential Design",
                "Space Planning",
                "Color & Styling",
                "Lighting Design",
                "Furniture Curation",
                "Full Renovation"
              ].map((service, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-yellow-400 transition">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                "About Us",
                "Our Team",
                "Portfolio",
                "Testimonials",
                "Careers",
                "Press"
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-yellow-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="text-gray-400 text-sm space-y-4">
              <div>
                <p className="font-medium text-white">Address</p>
                <p>123 Design Street<br />New York, NY 10001</p>
              </div>
              <div>
                <p className="font-medium text-white">Phone</p>
                <p>(555) 123-4567</p>
              </div>
              <div>
                <p className="font-medium text-white">Email</p>
                <p>hello@interiorzen.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2024 InteriorZen. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-yellow-400" /> for beautiful spaces
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
