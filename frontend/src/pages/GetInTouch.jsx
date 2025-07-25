// src/pages/GetInTouch.jsx
import React from "react";

const GetInTouch = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-indigo-900 px-6 py-16 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-white/70 text-lg mb-10">
          Have a question, project, or just want to say hello? We’d love to hear from you!
        </p>

        <form className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 space-y-6">
          <div>
            <label className="block mb-2 text-left font-semibold text-white">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-left font-semibold text-white">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-left font-semibold text-white">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-white focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 rounded-xl font-bold text-white hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
