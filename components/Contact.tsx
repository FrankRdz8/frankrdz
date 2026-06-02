"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const contactLinks = [
    { label: "Email", value: "frankrda8@gmail.com", href: "mailto:frankrda8@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/frank-rodriguez-714204228", href: "https://www.linkedin.com/in/frank-rodriguez-714204228" },
    { label: "GitHub", value: "github.com", href: "https://github.com/FrankRdz8" },
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
                                className="group flex items-center justify-between py-6 border-b border-stone-200 hover:border-stone-400 transition-colors"
                            >
                                <div className="space-y-1">
                                    <span className="block text-xs uppercase tracking-wider text-stone-400">{link.label}</span>
                                    <span className="block text-lg md:text-xl font-medium text-stone-900 group-hover:text-stone-600 transition-colors break-all">{link.value}</span>
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-stone-300 group-hover:text-stone-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
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