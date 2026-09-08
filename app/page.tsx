"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import ProjectFeature from "@/components/ProjectFeature";
import Contact from "@/components/Contact";
import { translations } from "@/components/translations";
import {
  Languages, FileText, Clock, BarChart3,
  Users, ShieldCheck, ArrowLeftRight, DatabaseBackup, TrendingUp, MessageSquareWarning,
  GraduationCap, Landmark, History, Mail, Gauge, ToggleLeft,
  Building2, Images, MessageSquare, Accessibility,
} from "lucide-react";

const metropolisTechBadges = [
  "Next.js 16", "TypeScript", "PostgreSQL", "Drizzle ORM",
  "Better-Auth", "TanStack Query & Table", "Recharts", "Upstash Redis",
  "Tailwind CSS v4", "Shadcn UI"
];

const solesTechBadges = [
  "PHP 8.2", "MySQL", "PDO", "PHPMailer", "Tailwind CSS", "JavaScript", "PHPUnit", "Apache"
];

const almaqTechBadges = ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion"];
const cruzTechBadges = ["SCSS / SASS", "JavaScript", "UI/UX", "Performance Audit"];

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

      <ProjectFeature
        id="metropolis"
        title="Metropolis"
        tag={t.metropolis.tag}
        subtitle={t.metropolis.subtitle}
        stats={t.metropolis.stats}
        architecture={t.metropolis.architecture}
        archDesc={t.metropolis.archDesc}
        stackTag={t.metropolis.stackTag}
        techBadges={metropolisTechBadges}
        modules={t.metropolis.modules}
        moduleIcons={[
          <FileText key="1" className="w-5 h-5" />,
          <Clock key="2" className="w-5 h-5" />,
          <BarChart3 key="3" className="w-5 h-5" />,
        ]}
        mentionedTag={t.metropolis.mentionedTag}
        mentionedModules={t.metropolis.mentionedModules}
        mentionedIcons={[
          <Users key="1" className="w-4 h-4" />,
          <ShieldCheck key="2" className="w-4 h-4" />,
          <ArrowLeftRight key="3" className="w-4 h-4" />,
          <DatabaseBackup key="4" className="w-4 h-4" />,
          <TrendingUp key="5" className="w-4 h-4" />,
          <MessageSquareWarning key="6" className="w-4 h-4" />,
        ]}
        url="https://metropolislimpieza.com/"
        visitText={t.metropolis.visit}
      />

      <ProjectFeature
        id="soles"
        title="Soles"
        tag={t.soles.tag}
        subtitle={t.soles.subtitle}
        stats={t.soles.stats}
        architecture={t.soles.architecture}
        archDesc={t.soles.archDesc}
        stackTag={t.soles.stackTag}
        techBadges={solesTechBadges}
        modules={t.soles.modules}
        moduleIcons={[
          <Users key="1" className="w-5 h-5" />,
          <Clock key="2" className="w-5 h-5" />,
          <GraduationCap key="3" className="w-5 h-5" />,
        ]}
        mentionedTag={t.soles.mentionedTag}
        mentionedModules={t.soles.mentionedModules}
        mentionedIcons={[
          <Landmark key="1" className="w-4 h-4" />,
          <History key="2" className="w-4 h-4" />,
          <Mail key="3" className="w-4 h-4" />,
          <Gauge key="4" className="w-4 h-4" />,
          <ToggleLeft key="5" className="w-4 h-4" />,
        ]}
        url="https://soles.org.ar/"
        visitText={t.soles.visit}
      />

      <ProjectFeature
        id="proyectos"
        title="Almaq Construcción"
        tag={t.almaq.tag}
        subtitle={t.almaq.subtitle}
        stackTag={t.almaq.stackTag}
        techBadges={almaqTechBadges}
        modules={t.almaq.modules}
        moduleIcons={[
          <Building2 key="1" className="w-5 h-5" />,
          <Images key="2" className="w-5 h-5" />,
          <MessageSquare key="3" className="w-5 h-5" />,
        ]}
        url="https://almaqconstruccion.com/"
        visitText={t.almaq.visit}
        size="md"
      />

      <ProjectFeature
        id="cruz-sacrificio"
        title="Instituto Cruz del Sacrificio"
        tag={t.cruzSacrificio.tag}
        subtitle={t.cruzSacrificio.subtitle}
        stackTag={t.cruzSacrificio.stackTag}
        techBadges={cruzTechBadges}
        modules={t.cruzSacrificio.modules}
        moduleIcons={[<Accessibility key="1" className="w-5 h-5" />]}
        url="https://cruzdelsacrificio.com.ar/"
        visitText={t.cruzSacrificio.visit}
        size="md"
      />

      <Contact t={t.contact} />
    </main>
  );
}
