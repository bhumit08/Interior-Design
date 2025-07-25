import React, { useState, useEffect } from "react";
import axios from "axios";

const QuoteEditor = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/quote")
      .then((res) => setQuote(res.data?.text || ""));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/quote", { text: quote });
    alert("Quote updated successfully!");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded mt-10">
      <h2 className="text-2xl font-bold mb-4">Update Hero Quote</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border border-gray-300 rounded p-3 mb-4"
          rows="5"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        ></textarea>
        <button type="submit" className="bg-yellow-400 px-6 py-2 rounded text-black font-semibold hover:bg-yellow-500">
          Save Quote
        </button>
      </form>
    </div>
  );
};

export default QuoteEditor;
