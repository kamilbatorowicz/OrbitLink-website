import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

export interface FeatureCardProps {
    feature: {
        title: string;
        desc: string;
        visual: React.ReactNode;
    };
    index: number;
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "center center"]
    });

    // Calculate distinct translation values based on the column index (0, 1, 2)
    // Left card slides in from left
    // Middle card slides in from bottom
    // Right card slides in from right
    const startX = index === 0 ? -100 : index === 2 ? 100 : 0;
    const startY = index === 1 ? 100 : 50;

    const x = useTransform(scrollYProgress, [0, 1], [startX, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [startY, 0]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div
            ref={cardRef}
            style={{ x, y, opacity }}
            className="group relative flex flex-col bg-[#111] border border-white/20 rounded-2xl overflow-hidden hover:border-white/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.12)] hover:-translate-y-1.5"
        >
            {/* Subtle base glow behind the card */}
            <div className="absolute inset-0 bg-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Visual Header Space */}
            <div className="h-56 relative bg-[#181818] border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
                {feature.visual}
            </div>

            {/* Content Space */}
            <div className="p-8 relative">
                <h3 className="text-xl font-medium text-white mb-3 tracking-tight group-hover:text-shadow-sm transition-all duration-300">
                    {feature.title}
                </h3>
                <p className="text-white/40 leading-relaxed font-light text-sm md:text-base group-hover:text-white/60 transition-colors duration-300">
                    {feature.desc}
                </p>
            </div>
        </motion.div>
    );
}
