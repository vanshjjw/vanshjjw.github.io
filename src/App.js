import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import "./index.css";

// Simple preloader
const Preloader = ({ load }) => {
  if (!load) return null;
  
  return (
    <div className="fixed inset-0 bg-warm-page z-50 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className={load ? "opacity-0" : "opacity-100 transition-opacity duration-300"}>
        <Home />
      </div>
    </>
  );
}

export default App;
