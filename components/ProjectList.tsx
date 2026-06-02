"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

const staticUrls = [
    "https://almaqconstruccion.com/",
    "https://soles.org.ar/",
    "https://cruzdelsacrificio.com.ar/"
];

const staticStacks = [
    ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion"],
    ["PHP", "Tailwind CSS", "JavaScript", "SEO Optimization"],
    ["SCSS / SASS", "JavaScript", "UI/UX Enhancements", "Performance Audit"]
];

// Mapeo exacto de las rutas de tus capturas en public/screenshots
const staticScreenshots = [
    "/screenshots/almaq.png",
    "/screenshots/soles.png",
    "/screenshots/cruzsacrificio.png"
];

function ProjectItem({ project, index, visitText }: { project: any; index: number; visitText: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group border-t border-stone-200 py-12 md:py-16"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                {/* Número */}
                <div className="md:col-span-1">
                    <span className="text-sm text-stone-400 font-mono">0{index + 1}</span>
                </div>

                {/* Título, Categoría y Métricas */}
                <div className="md:col-span-5 space-y-4">
                    <div className="flex items-baseline justify-between md:justify-start md:gap-4">
                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors duration-300">
                            {project.title}
                        </h3>
                        <span className="text-sm text-stone-400 font-mono">2025</span>
                    </div>
                    <p className="text-stone-500 text-xs uppercase tracking-wider font-mono">{project.category}</p>
                    <div className="text-emerald-700 bg-emerald-50/60 border border-emerald-100 inline-block px-2.5 py-1 text-xs font-medium">
                        {project.metrics}
                    </div>
                </div>

                {/* Descripción y Stack de Tecnologías */}
                <div className="md:col-span-4 space-y-4">
                    <p className="text-stone-600 text-sm leading-relaxed text-balance">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                        {staticStacks[index].map((tech) => (
                            <span key={tech} className="px-2.5 py-0.5 text-[11px] font-medium text-stone-600 bg-stone-100 border border-stone-200">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Contenedor Visual e Imagen Real con Efecto Premium */}
                <div className="md:col-span-2 flex flex-col items-end justify-between h-full gap-4">
                    <motion.div
                        animate={{
                            scale: isHovered ? 1.02 : 1,
                            opacity: isHovered ? 1 : 0.85
                        }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full aspect-video bg-stone-100 relative overflow-hidden rounded-none border border-stone-200 shadow-sm group-hover:shadow-md group-hover:border-stone-300 transition-all duration-300"
                    >
                        <img
                            src={staticScreenshots[index]}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-[0.22, 1, 0.36, 1] group-hover:scale-[1.05]"
                        />
                        {/* Overlay sutil para homogeneizar el contraste visual */}
                        <div className="absolute inset-0 bg-stone-950/5 opacity-20 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none" />
                    </motion.div>

                    {/* Enlace Externo */}
                    <a
                        href={staticUrls[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-stone-500 hover:text-stone-900 transition-colors pt-2"
                    >
                        {visitText} <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectList({ t }: { t: any }) {
    return (
        <section id="proyectos" className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-24 md:py-32">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16 md:mb-24"
            >
                <h2 className="text-sm uppercase tracking-[0.2em] text-stone-500 font-medium mb-4">{t.tag}</h2>
                <p className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 max-w-3xl text-balance">{t.subtitle}</p>
            </motion.div>

            <div className="divide-y divide-stone-200">
                {t.items.map((project: any, index: number) => (
                    <ProjectItem key={index} project={project} index={index} visitText={t.visit} />
                ))}
            </div>
        </section>
    );
}