import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/General/Preloader";
import ScrollToTop from "./components/General/ScrollToTop";
import Sidebar from "./components/General/Sidebar";
import AboutMe from "./components/About/AboutMe";
import Homepage from "./components/General/Homepage";

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
          <Routes>
            {/* Route for the homepage with expanded sidebar */}
            <Route path="/" element={<Homepage />} />
            {/* Route for the app layout with sidebar */}
            <Route
                path="/*"
                element={
                  <div className="app-layout">
                    <Sidebar />
                    <div className="main-content">
                      <Routes>
                        <Route path="/intro" element={<AboutMe />} />
                        <Route path="/resume" element={<h1>Coming Soon...</h1>} />
                        <Route path="/blog" element={<h1>Coming Soon...</h1>} />
                        {/* Add other routes here when additional sections are implemented */}
                      </Routes>
                    </div>
                  </div>
                }
            />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
