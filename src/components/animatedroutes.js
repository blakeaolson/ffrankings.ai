import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/home";
import Rankings from "../pages/rankings";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/rankings" element={<Rankings />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;