import { motion } from "motion/react";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Check, Send, Loader2 } from "lucide-react";
import { useState, useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

// ─── EmailJS config ─────────────────────────────────────────────────────────
// 1. Go to https://www.emailjs.com and create a free account
// 2. Add a Gmail service  →  copy your Service ID below
// 3. Create an email template (use variables: {{from_name}}, {{from_email}}, {{message}})
//    →  copy your Template ID below
// 4. Go to Account → API Keys  →  copy your Public Key below
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
// ────────────────────────────────────────────────────────────────────────────

const perks = [
    "Personalized assistance",
    "Timely response within 24h",
    "Comprehensive mission support",
];

const infoCards = [
    { icon: Mail, label: "Email us", value: "kamilbatorowicz@gmail.com" },
    { icon: Phone, label: "Call us", value: "+1 (800) 555-0198" },
    { icon: MapPin, label: "Our location", value: "Cape Canaveral, FL, US" },
];

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        setStatus("sending");
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus("success");
            formRef.current.reset();
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">

            {/* Giant watermark */}
            <div
                className="pointer-events-none select-none absolute top-24 left-0 w-full text-center font-extrabold leading-none z-0"
                style={{ fontSize: "clamp(80px, 16vw, 220px)", color: "rgba(255,255,255,0.07)" }}
            >
                Contact Us
            </div>

            {/* Background glow orbs */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Top-left large orb */}
                <div className="absolute -top-20 -left-32 w-[600px] h-[500px] rounded-full blur-[140px]"
                    style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(37,99,235,0.08) 60%, transparent 100%)" }} />
                {/* Centre-right orb */}
                <div className="absolute top-1/3 right-[-10%] w-[500px] h-[400px] rounded-full blur-[120px]"
                    style={{ background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)" }} />
                {/* Bottom-left orb */}
                <div className="absolute bottom-10 left-1/4 w-[400px] h-[300px] rounded-full blur-[100px]"
                    style={{ background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)" }} />
                {/* Sparkling cyan line accent */}
                <div className="absolute top-[38%] left-0 w-full h-[1px] opacity-20"
                    style={{ background: "linear-gradient(90deg, transparent 0%, #22d3ee 40%, #3b82f6 60%, transparent 100%)" }} />
            </div>

            {/* Main content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-32 min-h-[70vh]">

                {/* Top section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="flex flex-col gap-5"
                    >
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 flex items-center gap-3">
                                Reach out
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30">
                                    <svg width="22" height="22" fill="none" stroke="#22d3ee" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </h1>
                            <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 mb-6" />
                            <p className="text-white/50 text-base font-light leading-relaxed max-w-sm">
                                Have a question or need assistance?
                                Reach out to our dedicated support team.
                                We're here to help with any inquiries you may have.
                            </p>
                        </div>

                        <ul className="flex flex-col gap-3">
                            {perks.map((perk) => (
                                <li key={perk} className="flex items-center gap-3 text-white/60 text-sm">
                                    <span className="w-6 h-6 rounded-full bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3.5 h-3.5 text-cyan-400" />
                                    </span>
                                    {perk}
                                </li>
                            ))}
                        </ul>

                        <div className="flex items-center gap-3 mt-2">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="relative"
                    >
                        {/* Card glow */}
                        <div className="absolute -inset-1 rounded-3xl blur-xl opacity-30"
                            style={{ background: "linear-gradient(135deg, #06b6d4, #2563eb)" }} />

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="relative bg-white/[0.04] border border-white/10 rounded-3xl p-8 flex flex-col gap-4 backdrop-blur-sm"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    name="from_name"
                                    type="text"
                                    placeholder="Name"
                                    required
                                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_0_2px_rgba(34,211,238,0.1)] transition-all duration-200"
                                />
                                <input
                                    name="from_email"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_0_2px_rgba(34,211,238,0.1)] transition-all duration-200"
                                />
                            </div>

                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={5}
                                required
                                className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan-400/60 focus:shadow-[0_0_0_2px_rgba(34,211,238,0.1)] transition-all duration-200 resize-none"
                            />

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-4 rounded-xl hover:bg-white/90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 text-sm tracking-wide"
                            >
                                {status === "sending" ? (
                                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                                ) : (
                                    <><Send className="w-4 h-4" /> Submit</>
                                )}
                            </button>

                            {status === "success" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-cyan-400 text-sm font-medium"
                                >
                                    ✓ Message sent! We'll get back to you soon.
                                </motion.p>
                            )}
                            {status === "error" && (
                                <motion.p
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center text-red-400 text-sm"
                                >
                                    Something went wrong. Please try again.
                                </motion.p>
                            )}
                        </form>
                    </motion.div>
                </div>

                {/* Bottom info cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                    {infoCards.map((card) => (
                        <div key={card.label}
                            className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col gap-3 hover:border-cyan-400/30 hover:bg-white/[0.05] transition-all duration-300 group"
                        >
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center group-hover:bg-cyan-500/15 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.2)] transition-all duration-300">
                                <card.icon className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div>
                                <div className="text-white/80 font-medium text-sm mb-0.5">{card.label}</div>
                                <div className="text-white/40 text-sm font-light">{card.value}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
