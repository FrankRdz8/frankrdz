"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, GitBranch } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    year: string;
    description: string;
    stack: string[];
    color: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Lumina Commerce",
        category: "E-Commerce",
        year: "2024",
        description: "Plataforma de e-commerce headless con pagos en tiempo real, gestión de inventario y dashboard analítico.",
        stack: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
        color: "bg-stone-200",
    },
    {
        id: 2,
        title: "Nexus Analytics",
        category: "SaaS Dashboard",
        year: "2024",
        description: "Dashboard de analytics en tiempo real con visualización de datos complejos y reportes automatizados.",
        stack: ["React", "TypeScript", "Tailwind", "D3.js"],
        color: "bg-stone-300",
    },
    {
        id: 3,
        title: "Vertex AI",
        category: "Inteligencia Artificial",
        year: "2025",
        description: "Generador de contenido impulsado por IA con pipelines de procesamiento de lenguaje natural.",
        stack: ["Next.js", "OpenAI", "Vector DB", "Redis"],
        color: "bg-stone-400",
    },
    {
        id: 4,
        title: "Pulse Chat",
        category: "Comunicación Real-time",
        year: "2025",
        description: "Aplicación de mensajería con websockets, presencia en tiempo real y cifrado end-to-end.",
        stack: ["Socket.io", "Node.js", "MongoDB", "WebRTC"],
        color: "bg-stone-500",
    },
];

function ProjectItem({ project, index }: { project: Project; index: number }) {
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
            className="group border-t border-stone-200 py-12 md:py-16 cursor-pointer"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
                {/* Número */}
                <div className="md:col-span-1">
                    <span className="text-sm text-stone-400 font-mono">0{project.id}</span>
                </div>

                {/* Info principal */}
                <div className="md:col-span-5 space-y-4">
                    <div className="flex items-baseline justify-between md:justify-start md:gap-4">
                        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 group-hover:text-stone-600 transition-colors duration-300">
                            {project.title}
                        </h3>
                        <span className="text-sm text-stone-400 font-mono">{project.year}</span>
                    </div>
                    <p className="text-stone-500 text-sm uppercase tracking-wider">{project.category}</p>
                </div>

                {/* Descripción y Stack */}
                <div className="md:col-span-4 space-y-4">
                    <p className="text-stone-600 leading-relaxed text-balance">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs font-medium text-stone-600 bg-stone-100 rounded-full border border-stone-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Preview visual + Links */}
                <div className="md:col-span-2 flex flex-col items-end justify-between h-full gap-4">
                    <motion.div
                        animate={{
                            scale: isHovered ? 1.05 : 1,
                            opacity: isHovered ? 1 : 0.7,
                        }}
                        transition={{ duration: 0.4 }}
                        className={`w-full aspect-4/3 rounded-lg ${project.color} relative overflow-hidden`}
                    >
                        {/* Aquí iría tu imagen real: <Image src={...} fill className="object-cover" /> */}
                        <div className="absolute inset-0 flex items-center justify-center text-stone-600/50 text-xs font-mono uppercase">
                            Preview
                        </div>
                    </motion.div>

                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 rounded-full bg-stone-900 text-stone-50 hover:bg-stone-700 transition-colors">
                            <ExternalLink className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-full bg-stone-100 text-stone-900 border border-stone-200 hover:bg-stone-200 transition-colors">
                            <GitBranch className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectList() {
    return (
        <section id="proyectos" className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-24 md:py-32">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20 md:mb-28"
            >
                <h2 className="text-sm uppercase tracking-[0.2em] text-stone-500 font-medium mb-4">
                    Trabajos Seleccionados
                </h2>
                <p className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 max-w-3xl text-balance">
                    Cuatro proyectos que representan mi enfoque en arquitectura limpia y experiencias de usuario intuitivas.
                </p>
            </motion.div>

            <div className="divide-y divide-stone-200">
                {projects.map((project, index) => (
                    <ProjectItem key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}