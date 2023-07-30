import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import { Dashboard } from "./pages/Dashboard";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";
import { Tools } from "./pages/Tools";

export function App() {
  const [language, setLanguage] = useState(
    () => window.localStorage.getItem("language") || "ES"
  );

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<Dashboard language={language} />} />
        <Route path="aboutme" element={<AboutMe language={language} />} />
        <Route path="projects" element={<Projects language={language} />} />
        <Route path="skills" element={<Skills language={language} />} />
        <Route path="tools" element={<Tools language={language} />} />
        <Route path="/" element={<Dashboard language={language} />} />
      </Routes>
      <Footer language={language} />
    </div>
  );
}
