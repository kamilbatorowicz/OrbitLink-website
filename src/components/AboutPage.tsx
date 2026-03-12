import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, Globe, Zap, Shield, Users, Satellite, Radio } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
    { value: "1,240+", label: "Active Satellites" },
    { value: "99.97%", label: "Uptime SLA" },
    { value: "180+", label: "Countries Covered" },
];

const values = [
    {
        icon: Globe,
        title: "Global Reach",
        description: "Our LEO constellation blankets every corner of the Earth, delivering sub-20ms latency to even the most remote locations.",
    },
    {
        icon: Shield,
        title: "Mission-Grade Reliability",
        description: "Built to military and aerospace standards. Triple-redundant ground stations ensure your data never drops.",
    },
];

const team = [
    { name: "Dr. Amara Osei", role: "CEO & Co-founder", initials: "AO", photo: "/team_amara.png", gradient: "linear-gradient(160deg, #0d1b2a 0%, #0e3352 100%)", accent: "#22d3ee" },
    { name: "Ivan Petrov", role: "CTO, RF Systems", initials: "IP", photo: "/team_ivan.png", gradient: "linear-gradient(160deg, #0a1128 0%, #1a2060 100%)", accent: "#22d3ee" },
    { name: "Yuki Sato", role: "Head of Orbital Ops", initials: "YS", photo: "/team_yuki.png", gradient: "linear-gradient(160deg, #0d1f2d 0%, #0c3050 100%)", accent: "#22d3ee" },
    { name: "Laila Mansour", role: "VP Engineering", initials: "LM", photo: "/team_laila.png", gradient: "linear-gradient(160deg, #150d2a 0%, #2d1060 100%)", accent: "#22d3ee" },
];

function TeamSection() {
    const [selected, setSelected] = useState<number>(0);
    const [hovered, setHovered] = useState<number | null>(null);
    const activeIdx = hovered ?? selected;

    const prev = () => setSelected((s) => (s - 1 + team.length) % team.length);
    const next = () => setSelected((s) => (s + 1) % team.length);

    return (
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-center mb-14"
            >
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                    The team behind the constellation
                </h2>
                <p className="text-white/40 text-lg font-light max-w-xl mx-auto">
                    Veterans from SpaceX, ESA, Airbus Defence and top aerospace universities.
                </p>
            </motion.div>

            {/* Accordion cards row — centered */}
            <div className="flex gap-4 h-[480px] justify-center">
                {team.map((member, i) => (
                    <motion.div
                        key={member.name}
                        className="relative rounded-3xl overflow-hidden cursor-pointer flex-shrink-0"
                        animate={{
                            width: activeIdx === i ? 460 : 240,
                        }}
                        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                        onHoverStart={() => setHovered(i)}
                        onHoverEnd={() => setHovered(null)}
                        onClick={() => setSelected(i)}
                    >
                        {/* Photo background */}
                        <img
                            src={member.photo}
                            alt={member.name}
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />

                        {/* Bottom gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        {/* Monogram — visible when collapsed */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold pointer-events-none"
                            style={{ color: member.accent }}
                            animate={{ opacity: activeIdx === i ? 0 : 1, scale: activeIdx === i ? 0.8 : 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {member.initials}
                        </motion.div>

                        {/* Name + role — revealed on expand */}
                        <motion.div
                            className="absolute bottom-7 left-6 right-6 pointer-events-none"
                            animate={{ opacity: activeIdx === i ? 1 : 0, y: activeIdx === i ? 0 : 10 }}
                            transition={{ duration: 0.3, delay: activeIdx === i ? 0.15 : 0 }}
                        >
                            <div
                                className="text-xs font-bold uppercase tracking-widest mb-1.5"
                                style={{ color: member.accent }}
                            >
                                {member.role}
                            </div>
                            <div className="text-white font-semibold text-xl leading-tight">
                                {member.name}
                            </div>
                        </motion.div>

                        {/* Bottom accent line */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-[3px]"
                            style={{ background: `linear-gradient(90deg, transparent, ${member.accent}, transparent)` }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Arrow navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
                <button
                    onClick={prev}
                    className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                    aria-label="Previous"
                >
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>

                {/* Dot indicators */}
                <div className="flex gap-2">
                    {team.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setSelected(i)}
                            className="transition-all duration-300 rounded-full"
                            style={{
                                width: selected === i ? 24 : 8,
                                height: 8,
                                background: selected === i ? team[selected].accent : "rgba(255,255,255,0.2)",
                            }}
                            aria-label={`Team member ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-200"
                    aria-label="Next"
                >
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
            </div>
        </div>
    );
}

export default function AboutPage() {

    return (
        <div className="min-h-screen bg-black text-white">

            {/* Hero Split Section */}
            <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-[-5%] w-[45%] h-[70%] bg-cyan-500/8 blur-[160px] rounded-full" />
                    <div className="absolute bottom-[-10%] left-[5%] w-[30%] h-[50%] bg-blue-500/8 blur-[140px] rounded-full" />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                    {/* LEFT — Image + stat card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden min-h-[520px] h-full">
                            <img
                                src="/about_hero.png"
                                alt="OrbitLink mission control"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400/80 via-blue-400/60 to-transparent" />
                        </div>

                        {/* Floating stat card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex -space-x-2">
                                    {["AO", "IP", "YS"].map((init, i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-black flex items-center justify-center text-[10px] font-bold text-white"
                                        >
                                            {init}
                                        </div>
                                    ))}
                                </div>
                                <span className="text-white/50 text-xs font-medium">+40 engineers</span>
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                                {stats.map((s) => (
                                    <div key={s.label}>
                                        <div className="text-white font-bold text-lg">{s.value}</div>
                                        <div className="text-white/40 text-[11px]">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT — Text + features */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[10px] uppercase tracking-widest font-bold text-cyan-400 mb-5"
                            >
                                <Radio className="w-3 h-3" />
                                Our Mission
                            </motion.div>
                            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-6">
                                Connecting Humanity{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                                    From Above
                                </span>
                            </h1>
                            <p className="text-white/50 text-lg font-light leading-relaxed">
                                OrbitLink isn't just a satellite network — it's the backbone of a connected planet.
                                We believe that access to reliable, high-speed connectivity is a fundamental right,
                                not a privilege tied to geography. Our constellation makes that belief a reality.
                            </p>
                        </div>

                        <Link to="/services" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold w-fit hover:bg-white/90 transition-all group">
                            View Our Services
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        {/* Mini feature cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {values.map((v, i) => (
                                <motion.div
                                    key={v.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                                    className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-300"
                                >
                                    <v.icon className="w-5 h-5 text-cyan-400 mb-3" />
                                    <h3 className="text-white font-semibold text-sm mb-1.5">{v.title}</h3>
                                    <p className="text-white/40 text-sm font-light leading-relaxed">{v.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-6 md:px-12 border-t border-white/5">
                <TeamSection />
            </section>


        </div>
    );
}
