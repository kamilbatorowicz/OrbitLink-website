/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Satellite, Menu, Zap, Shield, Rocket, Globe, Twitter, Linkedin, Github, Mail } from "lucide-react";
import { useEffect, useRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import { CobeGlobe } from "./components/CobeGlobe";


function ScrollCard({ feature, index }: { feature: { title: string; desc: string; visual: ReactNode }; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start 95%", "center 70%"] });
  // Wider/longer animation ranges for more visibility
  const startX = index === 0 ? -280 : index === 2 ? 280 : 0;
  const startY = index === 1 ? 220 : 80;
  const startScale = index === 1 ? 0.8 : 0.85;
  const x = useTransform(scrollYProgress, [0, 1], [startX, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [startY, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.6, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [startScale, 1]);
  return (
    <motion.div ref={cardRef} style={{ x, y, opacity, scale }}
      className="group relative flex flex-col bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:-translate-y-1.5"
    >
      <div className="absolute inset-0 bg-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      <div className="h-56 relative bg-[#181818] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-80 group-hover:opacity-100 transition-opacity duration-700"></div>
        {feature.visual}
      </div>
      <div className="p-8 relative">
        <h3 className="text-xl font-medium text-white mb-3 tracking-tight">{feature.title}</h3>
        <p className="text-white/40 leading-relaxed font-light text-sm md:text-base group-hover:text-white/60 transition-colors duration-300">{feature.desc}</p>
      </div>
    </motion.div>
  );
}

export default function App() {
  const { scrollY } = useScroll();
  const yHeroText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHeroText = useTransform(scrollY, [0, 300], [1, 0]);
  const yBackground = useTransform(scrollY, [0, 1000], [0, 300]);

  // Parallax for Infrastructure Section
  const infraRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: infraScrollProgress } = useScroll({
    target: infraRef,
    offset: ["start end", "center center"]
  });

  const yInfraText = useTransform(infraScrollProgress, [0, 1], [100, 0]);
  const opacityInfraText = useTransform(infraScrollProgress, [0.3, 1], [0, 1]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl = `${import.meta.env.BASE_URL}satelita.mp4`;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed, but muted should work:", error);
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#000000] text-white font-sans selection:bg-white/20 overflow-hidden">
      {/* Fixed Background Video with Fallback */}
      <div className="fixed inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />
      </div>

      {/* Hero Section - Vertically Centered Content */}
      <main className="relative z-10 flex items-center min-h-screen px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="flex flex-col items-start gap-8"
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] uppercase tracking-wider font-bold text-white/90">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Next Launch: March 15, 2026
              </div>

              {/* Headline */}
              <div className="space-y-2 relative">
                {/* Subtle blue accent glow behind headline */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[150px] bg-cyan-500/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.05] text-white relative z-10">
                  Connecting the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">world from space.</span>
                </h1>
              </div>

              {/* Description */}
              <p className="max-w-lg text-lg md:text-xl text-white/60 leading-relaxed font-light relative z-10">
                We provide high-speed, low-latency satellite connectivity for global enterprises,
                remote research stations, and government infrastructure.
              </p>

              {/* Stats Section - Positioned above buttons */}
              <div className="flex flex-wrap gap-x-12 gap-y-6 py-6 border-y border-white/10 w-full lg:w-auto relative z-10">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Active Satellites</span>
                  <span className="text-white text-2xl font-medium drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">1,240+</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Global Coverage</span>
                  <span className="text-cyan-400 text-2xl font-medium drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">99.9%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">Throughput</span>
                  <span className="text-white text-2xl font-medium drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]">100 Gbps</span>
                </div>
              </div>

              {/* Buttons - Positioned at the bottom */}
              <div className="flex flex-wrap gap-4 pt-4 relative z-10">
                <Link to="/services">
                  <button className="bg-white text-black px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-white/90 transition-all group shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                    Explore Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link to="/missions">
                  <button className="px-10 py-4 rounded-full font-bold border border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-cyan-400/50 hover:text-white transition-all text-white/80">
                    Our Missions
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Right Side (Visual Balance) */}
            <div className="hidden lg:block">
              {/* Open space for video visibility */}
            </div>
          </div>
        </div>
      </main>

      {/* Second Section: Global Infrastructure */}
      <section ref={infraRef} className="relative z-10 bg-[#050505] py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
        {/* Blue/cyan accent orbs in background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[35%] h-[60%] bg-cyan-500/10 blur-[140px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[5%] w-[25%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[30%] bg-cyan-400/5 blur-[100px] rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            style={{ y: yInfraText, opacity: opacityInfraText }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-10">
              Infrastructure that spans <br className="hidden md:block" /> the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-cyan-400 inline-flex items-baseline">
                  {"entire globe.".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      animate={{ 
                        opacity: [0, 1, 1, 0, 0],
                        y: [10, 0, 0, -5, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        times: [0, 0.05, 0.8, 0.9, 1],
                        delay: index * 0.08,
                        ease: "easeInOut"
                      }}
                      className="inline-block"
                      style={{ whiteSpace: "pre" }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [0, 1, 1, 0, 0] }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    times: [0, 0.1, 0.8, 0.9, 1],
                    delay: 0.5 
                  }}
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent origin-left"
                ></motion.span>
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-white/50 text-lg md:text-xl font-light">
              Our constellation of low-earth orbit satellites provides unparalleled bandwidth and reliability, seamlessly bridging the gap between continents.
            </p>
          </motion.div>

          {/* Feature Grid with staggering scroll effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Ultra-Low Latency",
                desc: "Achieve fiber-like speeds from the most remote locations on Earth, enabling real-time operations anywhere.",
                visual: (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.5, 0.1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-20 h-20 rounded-full border border-white/40 flex flex-col items-center justify-center relative shadow-[0_0_15px_rgba(255,255,255,0.15)]"
                    >
                      <Zap
                        className="w-7 h-7 text-white relative z-10 mb-1 drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
                        fill="currentColor"
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-white/50 scale-125 shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
                      <div className="absolute inset-0 rounded-full border border-white/30 scale-150 shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>
                      <div className="absolute inset-0 rounded-full border border-white/20 scale-175 shadow-[0_0_10px_rgba(255,255,255,0.05)]"></div>
                      <div className="absolute inset-0 bg-white/30 rounded-full blur-md"></div>
                    </motion.div>
                    {/* Grid lines background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(circle_at_center,black_30%,transparent_70%)] pointer-events-none"></div>
                  </div>
                )
              },
              {
                title: "Military-Grade Security",
                desc: "End-to-end quantum encryption ensures your mission-critical data remains impenetrable and secure.",
                visual: (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full flex flex-col items-center justify-center gap-3">
                      {/* Mock UI elements mimicking screenshot abstract UI */}
                      <motion.div
                        initial={{ y: 0 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="w-3/4 max-w-[200px] bg-[#111] border border-white/20 rounded-xl p-4 shadow-[0_0_20px_rgba(255,255,255,0.05)] flex flex-col items-start gap-3 z-10 mx-auto"
                      >
                        <div className="flex items-center gap-2 w-full">
                          <Shield className="w-3.5 h-3.5 text-white/80" />
                          <div className="text-[10px] text-white/80 uppercase tracking-widest font-semibold">Encrypted</div>
                        </div>
                        <div className="space-y-2 w-full">
                          <div className="h-1.5 bg-white/50 rounded w-full"></div>
                          <div className="h-1.5 bg-white/30 rounded w-4/5"></div>
                          <div className="h-1.5 bg-white/20 rounded w-2/3"></div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ y: 0, opacity: 0.6 }}
                        whileHover={{ y: 5, opacity: 1 }}
                        className="w-2/3 max-w-[160px] bg-[#0a0a0a] border border-white/10 rounded-lg p-3 flex items-center gap-2 -mt-6 mx-auto shadow-lg relative z-0"
                      >
                        <div className="w-3 h-3 rounded-full bg-white/40 shrink-0"></div>
                        <div className="h-1 bg-white/30 rounded w-full"></div>
                      </motion.div>

                      {/* Connecting line */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-white/30 to-transparent -z-10"></div>
                    </div>
                  </div>
                )
              },
              {
                title: "Rapid Deployment",
                desc: "Set up a fully functional gigabit terminal in less than 15 minutes, with zero technical expertise required.",
                visual: (
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Rotating network ring */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="relative w-40 h-40 rounded-full border border-white/30 border-dashed flex items-center justify-center p-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                      >
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/80 hover:bg-white transition-colors rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
                        <div className="absolute bottom-4 right-2 w-3 h-3 bg-white/60 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
                        <div className="absolute top-1/3 -left-1 w-3.5 h-3.5 bg-white/50 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.4)]"></div>
                      </motion.div>

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        <Rocket className="w-8 h-8 text-white/90" />
                      </div>

                      {/* Gradient overlay masking bottom half */}
                      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                )
              }
            ].map((feature, idx) => (
              <div key={idx} className="contents">
                <ScrollCard feature={feature} index={idx} />
              </div>
            ))}
          </div>
        </div>

        {/* Glow effect at the top of the section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
      </section>

      {/* Third Section: Call to Action (CTA) */}
      <section className="relative z-10 bg-black/80 backdrop-blur-sm py-16 md:py-24 px-6 md:px-12 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0 bg-black">
              <motion.img
                src={`${import.meta.env.BASE_URL}satelita_zdjecie.jpg`}
                alt="Satellite Orbit"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1.0 }}
                viewport={{ once: true }}
                transition={{ duration: 8, ease: "easeOut" }}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Animated pulsing glow orbs */}
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] pointer-events-none"
            />
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.15, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-20 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[60px] pointer-events-none"
            />

            {/* SVG border line — travels the perimeter smoothly */}
            <svg
              className="absolute inset-0 pointer-events-none z-20"
              style={{ width: '100%', height: '100%', overflow: 'visible' }}
            >
              <rect
                x="1" y="1"
                style={{ width: 'calc(100% - 2px)', height: 'calc(100% - 2px)', filter: 'drop-shadow(0 0 6px #22d3ee)' }}
                rx="23" ry="23"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2"
                pathLength="1"
                strokeDasharray="0.1 0.9"
                className="cta-border-line"
              />
              {/* Second line — identical but offset by half the cycle = always opposite */}
              <rect
                x="1" y="1"
                style={{ width: 'calc(100% - 2px)', height: 'calc(100% - 2px)', filter: 'drop-shadow(0 0 6px #22d3ee)' }}
                rx="23" ry="23"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2"
                pathLength="1"
                strokeDasharray="0.1 0.9"
                className="cta-border-line-2"
              />
            </svg>

            {/* Content */}
            <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] uppercase tracking-wider font-bold text-white/80 mb-6"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Now accepting new deployments
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight"
                >
                  Ready to deploy <br className="hidden md:block" /> your global network?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-white/50 text-lg font-light mb-10 leading-relaxed max-w-md"
                >
                  Join the vanguard of global connectivity. Setup takes minutes, giving you instantaneous access to low-latency bandwidth from anywhere on Earth.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-white text-black px-10 py-4 rounded-full font-bold flex items-center gap-2 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-10 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all bg-[#0a0a0a]/50 backdrop-blur-md text-white"
                    >
                      Contact Sales
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW Section: Interactive Constellation Map */}
      <section className="relative z-10 bg-[#020202] py-24 md:py-32 px-6 md:px-12 border-t border-white/5 overflow-hidden">
        {/* Dynamic Background Elements for the Globe Section */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle tech grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_10%,transparent_100%)]"></div>

          {/* Glowing blue/cyan orbs for depth */}
          <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-blue-500/20 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/20 blur-[120px] rounded-full"></div>

          {/* Static Horizontal Blue/Cyan Mist Streak (More Visible) */}
          <div className="absolute top-[40%] left-0 w-[150%] -translate-x-1/4 h-[30px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-[30px] rotate-[-2deg]" />
          <div className="absolute top-[40%] left-0 w-[150%] -translate-x-1/4 h-[8px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent blur-[8px] rotate-[-2deg]" />

          {/* Animated Shooting Satellites — 3 at different heights and delays */}
          {/* Satellite 1 */}
          <motion.div
            animate={{ x: ['-50vw', '150vw'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear", repeatDelay: 15 }}
            className="absolute top-[38%] left-0 h-[2px] w-[60px] bg-gradient-to-r from-transparent via-white to-transparent rotate-[-2deg] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-white rounded-full blur-[1px]"></div>
          </motion.div>

          {/* Satellite 2 */}
          <motion.div
            animate={{ x: ['-50vw', '150vw'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "linear", repeatDelay: 15, delay: 9 }}
            className="absolute top-[48%] left-0 h-[2px] w-[60px] bg-gradient-to-r from-transparent via-white to-transparent rotate-[-2deg] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-white rounded-full blur-[1px]"></div>
          </motion.div>

          {/* Satellite 3 */}
          <motion.div
            animate={{ x: ['-50vw', '150vw'], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "linear", repeatDelay: 18, delay: 18 }}
            className="absolute top-[43%] left-0 h-[2px] w-[60px] bg-gradient-to-r from-transparent via-white to-transparent rotate-[-2deg] drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-white rounded-full blur-[1px]"></div>
          </motion.div>

          {/* Subtle gradient overlay to blend edges */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-transparent to-[#020202] opacity-80" />
        </div >

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-wider font-bold text-white/50 w-fit">
                <Globe className="w-3 h-3" />
                Live Telemetry
              </div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                Visual proof of our <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">99.9% coverage.</span>
              </h2>
              <p className="text-lg text-white/50 font-light leading-relaxed">
                Watch our constellation of low-earth orbit satellites in real-time.
                With over <strong className="text-white font-medium">1,240 active nodes</strong> forming a protective mesh around the planet,
                we ensure that dropouts are a thing of the past. Drag to explore our global footprint.
              </p>

              <div className="flex items-center gap-8 mt-4 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl font-light text-white mb-1">11ms</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Avg Latency</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-white mb-1">24/7</div>
                  <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Uptime SLA</div>
                </div>
              </div>
            </motion.div>

            {/* Interactive 3D Globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full aspect-square flex items-center justify-center p-8 lg:p-0"
            >
              {/* Radial gradient behind the globe for depth */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none"></div>

              <CobeGlobe />
            </motion.div>

          </div>
        </div>
      </section >
    </div>
  );
}
