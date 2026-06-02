"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import MetropolisFeature from "@/components/MetropolisFeature";
import ProjectList from "@/components/ProjectList";
import Contact from "@/components/Contact";
import { translations } from "@/components/translations";
import { Languages } from "lucide-react";

export default function Home() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const t = translations[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <main className="min-h-screen bg-stone-50 relative">
      {/* Botón Flotante i18n */}
      <button
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-50 bg-stone-950 text-stone-100 hover:bg-stone-800 transition-colors px-4 py-2 text-xs font-mono tracking-widest uppercase flex items-center gap-2 rounded-none shadow-md border border-stone-800"
      >
        <Languages className="w-3.5 h-3.5" />
        {lang === "es" ? "EN" : "ES"}
      </button>

      <Hero t={t.hero} />
      <MetropolisFeature t={t.metropolis} />
      <ProjectList t={t.projects} />
      <Contact t={t.contact} />
    </main>
  );
}