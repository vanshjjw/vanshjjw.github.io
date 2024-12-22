// import React, { useState, useEffect } from "react";
// import Preloader from "../src/components/Pre";
//
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate
// } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop";
// import "./style.css";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
//
// function App() {
//   const [load, upadateLoad] = useState(true);
//
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       upadateLoad(false);
//     }, 1200);
//
//     return () => clearTimeout(timer);
//   }, []);
//
//   return (
//     <Router>
//       <Preloader load={load} />
//       <div className="App" id={load ? "no-scroll" : "scroll"}>
//         <ScrollToTop />
//         <div className="content">
//           <h1 style={{ textAlign: "center", marginTop: "20%" }}>Coming Soon...</h1>
//         </div>
//       </div>
//     </Router>
//   );
// }
//
// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/Pre";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AboutMe from "./components/About/AboutMe";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <ScrollToTop />
          <Navbar />
          <div className="app-layout">
            <Sidebar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<AboutMe />} />
                {/* Add other routes here when additional sections are implemented */}
              </Routes>
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
