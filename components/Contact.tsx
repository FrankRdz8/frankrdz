"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

// lucide-react (>=1.x) sacó los íconos de marca (Github, Linkedin, etc.) de
// su catálogo — se inlinean acá los dos que hacen falta, mismo tratamiento
// que un ícono de lucide (viewBox 24x24, currentColor, w-4 h-4).
function GithubIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    );
}

function LinkedinIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}

const contactLinks = [
    { label: "Email", value: "frankrda8@gmail.com", href: "mailto:frankrda8@gmail.com", icon: <Mail className="w-4 h-4" /> },
    { label: "LinkedIn", value: "linkedin.com/in/frank-rodriguez-714204228", href: "https://www.linkedin.com/in/frank-rodriguez-714204228", icon: <LinkedinIcon className="w-4 h-4" /> },
    { label: "GitHub", value: "github.com/FrankRdz8", href: "https://github.com/FrankRdz8", icon: <GithubIcon className="w-4 h-4" /> },
];

export default function Contact({ t }: { t: any }) {
    return (
        <section id="contacto" className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-24 md:py-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-sm uppercase tracking-[0.2em] text-stone-500 font-medium">{t.tag}</h2>
                        <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1] text-balance">{t.title}</p>
                    </div>
                    <p className="text-lg text-stone-600 leading-relaxed max-w-md text-balance">{t.desc}</p>
                    <div className="flex items-center gap-2 text-sm text-stone-500 pt-4">
                        <MapPin className="w-4 h-4" />
                        <span>{t.location}</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col justify-center"
                >
                    <div className="space-y-1">
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between gap-4 py-6 border-b border-stone-200 hover:border-stone-400 transition-colors"
                            >
                                <div className="flex items-center gap-4 min-w-0">
                                    <div className="shrink-0 w-9 h-9 flex items-center justify-center bg-stone-100 text-stone-500 group-hover:bg-stone-900 group-hover:text-stone-50 transition-colors">
                                        {link.icon}
                                    </div>
                                    <div className="space-y-1 min-w-0">
                                        <span className="block text-xs uppercase tracking-wider text-stone-400">{link.label}</span>
                                        <span className="block text-lg md:text-xl font-medium text-stone-900 group-hover:text-stone-600 transition-colors break-all">{link.value}</span>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-5 h-5 shrink-0 text-stone-300 group-hover:text-stone-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </a>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-stone-200">
                        <a href="mailto:frankrda8@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-stone-50 rounded-none text-sm font-medium tracking-wide hover:bg-stone-700 transition-colors">
                            <Mail className="w-4 h-4" />
                            {t.btnMessage}
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="mt-32 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 tracking-wider uppercase">
                <p>© 2026 Frank Rodríguez. All rights reserved.</p>
            </div>
        </section>
    );
}