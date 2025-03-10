import React, { useState, useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Preloader from "./components/General/Preloader";
import ScrollToTop from "./components/General/ScrollToTop";
import Sidebar from "./components/General/Sidebar";

import AboutMe from "./components/About/AboutMe";
import Resources from "./components/Resources/Resources";
import Resume from "./components/Resume/Resume";
import Personal from "./components/Personal/Personal";

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
              <div className="app-layout">
                  <Sidebar />
                  <div className="main-content">
                      <Routes>
                          <Route path="/" element={<AboutMe />} />
                          <Route path="/aboutme" element={<AboutMe />} />
                          <Route path="/resume" element={<Resume />} />
                          <Route path="/blog" element={<h1>Blog coming soon...</h1>} />
                          <Route path="/garden" element={<h1>Digital Garden coming soon...</h1>} />
                          <Route path="/resources" element={<Resources />} />
                          <Route path="/personal" element={<Personal />} />
                          {/* Add other routes here when additional sections are implemented */}
                      </Routes>
                  </div>
              </div>
          </div>
      </Router>
  );
}

export default App;
