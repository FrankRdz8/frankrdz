"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, ExternalLink } from "lucide-react";

export interface ProjectModule {
    number: string;
    title: string;
    desc: string;
    image: string;
    imageAlt: string;
}

export interface ProjectMentioned {
    title: string;
    desc: string;
}

export interface ProjectStat {
    value: string;
    label: string;
}

function ModuleRow({ mod, icon, index }: { mod: ProjectModule; icon: ReactNode; index: number }) {
    const [isHovered, setIsHovered] = useState(false);
    const imageFirst = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
            <motion.div
                animate={{ scale: isHovered ? 1.015 : 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`aspect-video bg-stone-800/30 border border-stone-800 relative overflow-hidden shadow-xl group-hover:border-stone-700 transition-colors duration-300 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
            >
                <img
                    src={mod.image}
                    alt={mod.imageAlt}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-stone-950/25 group-hover:opacity-0 opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>

            <div className={`space-y-4 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
                <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-emerald-400">{mod.number}</span>
                    <div className="text-stone-400 bg-stone-800 w-9 h-9 flex items-center justify-center">
                        {icon}
                    </div>
                </div>
                <h4 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">{mod.title}</h4>
                <p className="text-stone-400 text-sm leading-relaxed max-w-md">{mod.desc}</p>
            </div>
        </motion.div>
    );
}

interface ProjectFeatureProps {
    id: string;
    title: string;
    tag: string;
    subtitle: string;
    /** Sección de estadísticas — se omite si no se pasa (proyectos más simples). */
    stats?: ProjectStat[];
    /** Bloque de arquitectura/estabilidad — se omite si no se pasa. */
    architecture?: string;
    archDesc?: string;
    stackTag?: string;
    techBadges?: string[];
    modules: ProjectModule[];
    /** Un ícono por módulo, mismo orden que `modules`. */
    moduleIcons: ReactNode[];
    /** "También incluye" — se omite si no se pasa. */
    mentionedTag?: string;
    mentionedModules?: ProjectMentioned[];
    mentionedIcons?: ReactNode[];
    url?: string;
    visitText?: string;
    /** "lg" (default, proyectos principales) o "md" (proyectos más chicos, menos aire). */
    size?: "lg" | "md";
}

export default function ProjectFeature({
    id,
    title,
    tag,
    subtitle,
    stats,
    architecture,
    archDesc,
    stackTag,
    techBadges,
    modules,
    moduleIcons,
    mentionedTag,
    mentionedModules,
    mentionedIcons,
    url,
    visitText,
    size = "lg",
}: ProjectFeatureProps) {
    const isCompact = size === "md";

    return (
        <section
            id={id}
            className={`bg-stone-900 text-stone-100 px-6 md:px-12 lg:px-24 ${isCompact ? "py-16 md:py-20" : "py-24 md:py-32"}`}
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={isCompact ? "space-y-3 mb-10" : "space-y-4 mb-16"}
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-stone-400 font-mono">{tag}</span>
                    <h2 className={`font-bold tracking-tight text-white ${isCompact ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl"}`}>{title}</h2>
                    <p className={`text-stone-400 font-medium max-w-3xl ${isCompact ? "text-base md:text-lg" : "text-xl"}`}>{subtitle}</p>
                    {url && (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 hover:text-emerald-300 transition-colors pt-2"
                        >
                            {visitText} <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    )}
                </motion.div>

                {/* Franja de estadísticas — impacto real del proyecto */}
                {stats && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-800 border border-stone-800 mb-20"
                    >
                        {stats.map((s) => (
                            <div key={s.label} className="bg-stone-900 px-5 py-6 md:px-8 space-y-1.5">
                                <div className="text-3xl md:text-4xl font-bold text-white font-mono tabular-nums">{s.value}</div>
                                <div className="text-[10px] md:text-[11px] uppercase tracking-widest text-stone-500">{s.label}</div>
                            </div>
                        ))}
                    </motion.div>
                )}

                {/* Estabilidad y stack — franja angosta, la tecnología queda solo como referencia */}
                {(architecture || techBadges) && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20 pb-16 border-b border-stone-800">
                        {architecture && (
                            <div className="lg:col-span-5 space-y-3">
                                <h3 className="text-lg font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                                    <Cpu className="w-4 h-4 text-stone-400" /> {architecture}
                                </h3>
                                <p className="text-stone-400 text-sm leading-relaxed">{archDesc}</p>
                            </div>
                        )}

                        {techBadges && (
                            <div className={`space-y-3 ${architecture ? "lg:col-span-7" : "lg:col-span-12"}`}>
                                <h4 className="text-xs uppercase tracking-widest text-stone-400 font-mono">{stackTag}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {techBadges.map((tech) => (
                                        <span key={tech} className="px-3 py-1 text-xs bg-stone-800 text-stone-300 border border-stone-700 font-mono">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Módulos destacados, cada uno con su propia pantalla */}
                <div className={isCompact ? "space-y-16 md:space-y-20" : "space-y-20 md:space-y-28"}>
                    {modules.map((mod, index) => (
                        <ModuleRow key={mod.title} mod={mod} icon={moduleIcons[index]} index={index} />
                    ))}
                </div>

                {/* También incluye — mencionados, sin protagonismo visual */}
                {mentionedModules && (
                    <div className="mt-20 md:mt-28 pt-12 border-t border-stone-800 space-y-6">
                        <span className="text-xs uppercase tracking-[0.3em] text-stone-500 font-mono">{mentionedTag}</span>

                        <div className="flex flex-wrap gap-3">
                            {mentionedModules.map((mod, index) => (
                                <motion.div
                                    key={mod.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="flex items-center gap-3 px-4 py-3 bg-stone-800/40 border border-stone-800 hover:border-stone-700 transition-colors"
                                >
                                    <span className="text-stone-500 shrink-0">{mentionedIcons?.[index]}</span>
                                    <span className="text-sm text-stone-200 font-medium whitespace-nowrap">{mod.title}</span>
                                    <span className="text-xs text-stone-500 whitespace-nowrap hidden sm:inline">— {mod.desc}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
