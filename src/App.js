import React, { useState, useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";

import Preloader from "./components/General/Preloader";
import ScrollToTop from "./components/General/ScrollToTop";

import Sidebar from "./components/Sidebar/Sidebar";

import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Resources from "./components/Resources/Resources";
import Resume from "./components/Resume/Resume";
import Garden from "./components/Garden/Garden";

// Import main centralized CSS
import "./styles/main.css";
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
                          <Route path="/intro" element={<Intro />} />
                          <Route path="/resume" element={<Resume />} />
                          <Route path="/projects" element={<Projects />} />
                          <Route path="/garden" element={<Garden />} />
                          <Route path="/resources" element={<Resources />} />
                          <Route path="*" element={<Navigate to="/intro" replace />} />
                          
                          {/* Add other routes here when additional sections are implemented */}
                      </Routes>
                  </div>
              </div>
          </div>
      </Router>
  );
}

export default App;
