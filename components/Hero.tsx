"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero({ t }: { t: any }) {
    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-8"
            >
                <div className="space-y-2">
                    <p className="text-stone-500 text-sm tracking-[0.2em] uppercase font-medium">
                        {t.subtitle}
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-stone-900 leading-[0.95]">
                        Frank
                        <br />
                        <span className="text-stone-400">Rodríguez</span>
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed text-balance"
                >
                    {t.desc}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-wrap items-center gap-6 pt-4"
                >
                    <a
                        href="#metropolis"
                        className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase text-stone-900 hover:text-stone-600 transition-colors"
                    >
                        {t.btnFeatured}
                        <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                    </a>
                    <span className="text-stone-300">/</span>
                    <a
                        href="#proyectos"
                        className="text-sm font-medium tracking-wide uppercase text-stone-500 hover:text-stone-900 transition-colors"
                    >
                        {t.btnFreelance}
                    </a>
                    <span className="text-stone-300">/</span>
                    <a
                        href="#contacto"
                        className="text-sm font-medium tracking-wide uppercase text-stone-500 hover:text-stone-900 transition-colors"
                    >
                        {t.btnContact}
                    </a>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-6 md:left-12 lg:left-24 text-xs text-stone-400 tracking-widest uppercase"
            >
                {t.scroll}
            </motion.div>
        </section>
    );
}