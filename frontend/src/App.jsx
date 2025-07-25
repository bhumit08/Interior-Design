// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Main from "./components/Main";
// import Navbar from "./components/Navbar";
// import "./App.css";

// // Pages
// import HowItWorks from "./pages/HowItWorks";
// import Portfolio from "./pages/Portfolio";
// import Advice from "./pages/Advice";
// import GetInTouch from "./pages/GetInTouch";
// import Ouroffer from "./pages/Ouroffer";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/how-it-works" element={<HowItWorks />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="/advice" element={<Advice />} />
//           <Route path="/getintouch" element={<GetInTouch />} />
//           <Route path="/ouroffer" element={<Ouroffer/>} />
          
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css";

// Pages
import HowItWorks from "./pages/HowItWorks";
import Portfolio from "./pages/Portfolio";
import Advice from "./pages/Advice";
import GetInTouch from "./pages/GetInTouch";
import Ouroffer from "./pages/Ouroffer";

// Admin Panel
import QuoteEditor from "./admin/QuoteEditor";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/getintouch" element={<GetInTouch />} />
          <Route path="/ouroffer" element={<Ouroffer />} />
          
          {/* Admin Route */}
          <Route path="/admin/quote" element={<QuoteEditor />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
