"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Users, Clock, BarChart3, Cpu, ChevronLeft, ChevronRight } from "lucide-react";

const icons = [
    <FileText key="1" className="w-5 h-5" />,
    <Users key="2" className="w-5 h-5" />,
    <Clock key="3" className="w-5 h-5" />,
    <BarChart3 key="4" className="w-5 h-5" />
];

const techBadges = [
    "Next.js 16", "TypeScript", "PostgreSQL", "Drizzle ORM",
    "Better-Auth", "TanStack Query & Table", "Recharts", "Upstash Redis",
    "Tailwind CSS v4", "Shadcn UI"
];

const metropolisScreenshots = [
    { src: "/screenshots/metropolis.png", alt: "Sección de Inicio - Landing" },
    { src: "/screenshots/metropolis-dashboard.png", alt: "Dashboard de Administrador" },
    { src: "/screenshots/metropolis-servicios.png", alt: "Sección de servicios - Landing" },
    { src: "/screenshots/metropolis-contacto.png", alt: "Sección de contacto - Landing" },
];

export default function MetropolisFeature({ t }: { t: any }) {
    const [currentImg, setCurrentImg] = useState(0);

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImg((prev) => (prev === metropolisScreenshots.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImg((prev) => (prev === 0 ? metropolisScreenshots.length - 1 : prev - 1));
    };

    return (
        <section id="metropolis" className="bg-stone-900 text-stone-100 py-24 md:py-32 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4 mb-16"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-stone-400 font-mono">{t.tag}</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Metropolis</h2>
                    <p className="text-stone-400 text-xl font-medium max-w-3xl">{t.subtitle}</p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Core Architecture */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                                <Cpu className="w-4 h-4 text-stone-400" /> {t.architecture}
                            </h3>
                            <p className="text-stone-400 text-sm leading-relaxed">{t.archDesc}</p>
                        </div>

                        <div className="space-y-3">
                            <h4 className="text-xs uppercase tracking-widest text-stone-400 font-mono">{t.stackTag}</h4>
                            <div className="flex flex-wrap gap-2">
                                {techBadges.map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-xs bg-stone-800 text-stone-300 border border-stone-700 font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Módulos */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.modules.map((mod: any, index: number) => (
                            <motion.div
                                key={mod.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 bg-stone-800/50 border border-stone-800 space-y-4 hover:border-stone-700 transition-colors"
                            >
                                <div className="text-stone-400 bg-stone-800 w-10 h-10 flex items-center justify-center">
                                    {icons[index]}
                                </div>
                                <h4 className="text-lg font-semibold text-white tracking-tight">{mod.title}</h4>
                                <p className="text-stone-400 text-xs leading-relaxed">{mod.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Galería Interactiva Premium */}
                <div className="mt-16 space-y-4">
                    <motion.div
                        className="w-full aspect-video bg-stone-800/30 border border-stone-800 relative overflow-hidden group cursor-pointer shadow-xl transition-shadow duration-500 hover:shadow-2xl hover:shadow-black/60 hover:border-stone-700"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Animación de Desvanecimiento Cruzado al cambiar de imagen */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImg}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="w-full h-full"
                            >
                                <img
                                    src={metropolisScreenshots[currentImg].src}
                                    alt={metropolisScreenshots[currentImg].alt}
                                    className="w-full h-full object-cover transition-transform duration-700 ease-[0.22, 1, 0.36, 1] group-hover:scale-[1.04]"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Gradiente sutil para oscurecer el fondo en Hover */}
                        <div className="absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        {/* Controles Nav Flotantes */}
                        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <button
                                onClick={prevImage}
                                className="p-2 bg-stone-950/80 text-stone-100 hover:bg-stone-900 border border-stone-800 transition-colors rounded-none"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="p-2 bg-stone-950/80 text-stone-100 hover:bg-stone-900 border border-stone-800 transition-colors rounded-none"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Tag de la Pantalla Actual */}
                        <div className="absolute bottom-4 left-4 bg-stone-950/90 border border-stone-800 px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {metropolisScreenshots[currentImg].alt}
                        </div>
                    </motion.div>

                    {/* Indicadores Lineales de Progreso Inferiores */}
                    <div className="flex justify-center gap-2 pt-2">
                        {metropolisScreenshots.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImg(index)}
                                className={`h-0.5 transition-all duration-300 rounded-none ${index === currentImg ? "w-12 bg-stone-400" : "w-4 bg-stone-700 hover:bg-stone-500"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}