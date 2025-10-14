import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Profile } from "./hooks/Profile.tsx";
import { About } from "./hooks/About.tsx";
import { Skills } from "./hooks/Skills.tsx";
import { Education } from "./hooks/Education.tsx";
import { Projects } from "./hooks/Projects.tsx";
import { Contact } from "./hooks/Contact.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <div className="w-11/12 max-w-6xl p-6">
        <h1 className="text-4xl font-bold text-center mb-8"></h1>

        {/* GRID yapısı ile tüm componentleri düzenli diziyoruz */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Profile />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  </StrictMode>
);
