import { useEffect, useRef, Fragment } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Zap, Globe, Cpu, RadioTower, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { tag: "Broadband", title: "LEO Broadband Connectivity", desc: "Ultra-low latency internet access from anywhere on Earth, powered by our 648-satellite low-earth orbit constellation. Residential, maritime, aviation, and rural enterprise coverage from a single unified network.", icon: Zap, bullets: ["Sub-20ms latency globally", "Up to 1 Gbps downlink", "99.9% monthly uptime SLA"], satelliteRight: true },
  { tag: "Enterprise", title: "Enterprise Network Solutions", desc: "Dedicated private bandwidth channels with guaranteed QoS, SD-WAN integration, and 24/7 NOC monitoring. Built for critical infrastructure, oil platforms, mining operations, and government deployments.", icon: Globe, bullets: ["Dedicated bandwidth pools", "SD-WAN & MPLS integration", "Custom SLA agreements"], satelliteRight: false },
  { tag: "IoT", title: "IoT & Device Integration", desc: "Connect millions of sensors, vehicles, and remote devices through our low-power global uplink. The backbone for machine-to-machine connectivity at planetary scale.", icon: Cpu, bullets: ["Global M2M connectivity", "Low-power uplink protocol", "Edge compute integration"], satelliteRight: true },
  { tag: "Infrastructure", title: "Ground Station Access", desc: "Co-locate with or lease access to OrbitLink's network of globally distributed ground stations and telemetry hubs. Reduce latency to your constellation and increase contact windows.", icon: RadioTower, bullets: ["52 global ground stations", "Ka / Ku / X-band support", "Telemetry & command relay"], satelliteRight: false },
];

function TextSection({ svc }: { svc: typeof services[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current?.querySelector(".text-content");
    if (!el) return;
    const anim = gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%", toggleActions: "play none none reverse" } }
    );
    return () => { anim.scrollTrigger?.kill(); };
  }, []);
  const textLeft = svc.satelliteRight;
  return (
    <div ref={ref} className="relative w-full flex items-center overflow-hidden" style={{ height: "100vh" }}>
      {/* Background Glows & Dynamic Sci-Fi Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        {/* Glows */}
        {textLeft ? (
          <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen" />
        ) : (
          <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
        )}
        
        {/* Moving Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
             
        {/* Scanning Line Animation */}
        <motion.div 
          animate={{ y: ["-10vh", "110vh"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
        />

        {/* Orbit Path Circles */}
        <div className={`absolute top-1/2 -translate-y-1/2 ${textLeft ? "left-[-200px]" : "right-[-200px]"} w-[800px] h-[800px] rounded-full border border-white/[0.03]`} />
        <div className={`absolute top-1/2 -translate-y-1/2 ${textLeft ? "left-[-100px]" : "right-[-100px]"} w-[600px] h-[600px] rounded-full border border-white/[0.02] border-dashed`} />

        {/* Tech Decor / Target Markers */}
        <div className={`absolute top-[20%] ${textLeft ? "right-[15%]" : "left-[15%]"} w-8 h-8 border-t border-l border-cyan-500/30`} />
        <div className={`absolute bottom-[20%] ${textLeft ? "right-[25%]" : "left-[25%]"} w-8 h-8 border-b border-r border-blue-500/30`} />
        
        {/* Blinking Data Point */}
        <motion.div 
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-[60%] flex items-center gap-2 ${textLeft ? "right-[20%]" : "left-[20%]"}`}
        >
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
          <span className="text-[10px] text-cyan-400/50 font-mono tracking-widest uppercase">Sync_Ok</span>
        </motion.div>
      </div>

      <div className={`text-content relative z-10 w-full md:w-1/2 flex flex-col gap-5 px-6 md:px-20 ${textLeft ? "" : "md:ml-auto"}`}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[10px] uppercase tracking-widest font-bold text-cyan-400 w-fit">
          <svc.icon className="w-3 h-3" />
          {svc.tag}
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3 leading-tight">{svc.title}</h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 mt-3 mb-4" />
          <p className="text-white/50 text-base font-light leading-relaxed">{svc.desc}</p>
        </div>
        <ul className="flex flex-col gap-2.5">
          {svc.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-white/60 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />{b}
            </li>
          ))}
        </ul>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-white/90 transition-all group w-fit">
          Get in touch <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

function SatelliteScroller() {
  const containerRef = useRef<HTMLDivElement>(null);
  const satRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sat = satRef.current;
    const container = containerRef.current;
    if (!sat || !container) return;

    let mm = gsap.matchMedia();

    // Desktop Animation
    mm.add("(min-width: 768px)", () => {
      const getLeft = (right: boolean) => (right ? "75%" : "25%");

      gsap.set(sat, { left: getLeft(services[0].satelliteRight), top: "150%", opacity: 1, scale: 1 });

      const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.inOut" } });
      
      tl.to(sat, { top: "43%", duration: 1.0, ease: "none" }, 0.0);
      tl.to(sat, { left: getLeft(false), duration: 0.5 }, 1.25);
      tl.to(sat, { left: getLeft(true), duration: 0.5 }, 2.25);
      tl.to(sat, { left: getLeft(false), duration: 0.5 }, 3.25);
      tl.to(sat, { top: "-50%", duration: 1.0, ease: "none" }, 4.0);

      ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
        animation: tl,
      });

      return () => { tl.kill(); };
    });

    // Mobile Animation
    mm.add("(max-width: 767px)", () => {
      // Keep it centered but in the background behind text (z-index 0) and slightly transparent
      gsap.set(sat, { left: "50%", top: "120%", opacity: 0.4, scale: 0.8, zIndex: 0 });

      const tl = gsap.timeline({ paused: true, defaults: { ease: "none" } });
      
      tl.to(sat, { top: "43%", duration: 1.0 }, 0.0);
      tl.to(sat, { top: "-20%", duration: 1.0 }, 4.0);

      ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5, // Smoother scrub for mobile
        animation: tl,
      });

      return () => { tl.kill(); };
    });

    // Gentle floating on the image
    const img = sat.querySelector("img");
    if (img) gsap.to(img, { rotation: 3, ease: "sine.inOut", duration: 3, repeat: -1, yoyo: true });

    return () => {
      mm.revert(); // Revert matchMedia changes
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {createPortal(
        <div
          ref={satRef}
          style={{
            position: "fixed",
            top: "150%",
            left: "75%",
            transform: "translate(-50%, -50%) rotate(-8deg)",
            zIndex: 9999, // Base style desktop
            pointerEvents: "none",
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}satellite.png`}
            alt="OrbitLink satellite"
            style={{ width: "80vw", maxWidth: "580px", minWidth: "240px", display: "block",
              filter: "drop-shadow(0 0 35px rgba(34,211,238,0.4))" }}
          />
        </div>,
        document.body
      )}
      <div ref={containerRef} style={{ height: `${services.length * 100}vh` }}>
        {services.map((svc) => (
          <Fragment key={svc.tag}>
            <TextSection svc={svc} />
          </Fragment>
        ))}
      </div>
    </>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 left-[-10%] w-[700px] h-[600px] rounded-full blur-[160px]"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(37,99,235,0.08) 55%, transparent 100%)" }} />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[500px] rounded-full blur-[150px]"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)" }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)" }} />
      </div>
      <section className="relative z-10 pt-28 pb-16 md:pt-40 md:pb-32 px-6 md:px-16 text-center w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image & Masking */}
        <div className="absolute inset-0 z-[-2]">
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 z-10" />
          <img 
            src={`${import.meta.env.BASE_URL}services_hero_bg.jpg`} 
            alt="Space Background" 
            className="w-full h-full object-cover object-top opacity-80 block"
          />
        </div>

        {/* Ambient Glows */}
        <div className="absolute inset-0 z-[-1] pointer-events-none flex justify-center items-center">
            <div className="absolute w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute w-[400px] h-[300px] bg-blue-600/20 rounded-full blur-[150px] mix-blend-screen" />
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[10px] uppercase tracking-widest font-bold text-cyan-400 mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            What we offer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-2xl">
            Satellite services<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">built for scale</span>
          </h1>
          <div className="w-20 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
          <p className="text-white/80 md:text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md mb-12">
            From broadband for the most remote corners of Earth to enterprise-grade private networks.
            OrbitLink delivers the infrastructure that powers next-generation connectivity.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-col items-center justify-center gap-2 text-white/40"
          >
            <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                <rect x="5" y="2" width="14" height="20" rx="7" />
                <path d="M12 6v4" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      <div className="relative z-10">
        <SatelliteScroller />
      </div>
      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="relative z-10 px-6 md:px-16 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl"
          style={{
            background: "linear-gradient(135deg, rgba(6,182,212,0.15) 0%, rgba(37,99,235,0.25) 50%, rgba(6,182,212,0.10) 100%)",
            border: "1px solid rgba(34,211,238,0.2)",
            boxShadow: "0 0 80px rgba(6,182,212,0.12), inset 0 0 80px rgba(37,99,235,0.08)",
          }}
        >
          {/* background glow blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -left-20 w-[500px] h-[400px] rounded-full blur-[120px]"
              style={{ background: "radial-gradient(circle, rgba(6,182,212,0.18) 0%, transparent 70%)" }} />
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[300px] rounded-full blur-[100px]"
              style={{ background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)" }} />
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 px-10 md:px-16 py-16">

            {/* ── Left: text ── */}
            <div className="flex-1 flex flex-col gap-6 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/25 text-[10px] uppercase tracking-widest font-bold text-cyan-400 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Global Coverage Guaranteed
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Connect to anywhere<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
                  on Earth, instantly.
                </span>
              </h2>

              <p className="text-white/50 text-base font-light leading-relaxed">
                OrbitLink's constellation gives you enterprise-grade satellite connectivity wherever you operate.
                Talk to our team and find the right plan for your mission.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all group"
                >
                  Contact Sales <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/missions"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-semibold px-8 py-4 rounded-full hover:border-cyan-400/50 hover:text-white transition-all"
                >
                  View Missions
                </Link>
              </div>

              {/* stats row */}
              <div className="flex gap-8 pt-4 border-t border-white/10 mt-2">
                {[["648+", "Satellites"], ["99.9%", "Uptime SLA"], ["52", "Ground Stations"]].map(([val, label]) => (
                  <div key={label}>
                    <div className="text-xl font-bold text-cyan-400">{val}</div>
                    <div className="text-xs text-white/40 font-light">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: satellite visual ── */}
            <div className="flex-1 relative flex items-center justify-center min-h-[300px]">
              {/* floating badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 text-xs font-semibold text-white/70"
              >
                🌍 Global LEO Network
              </motion.div>
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 right-4 bg-cyan-400/10 border border-cyan-400/20 rounded-xl px-3 py-2 text-xs font-semibold text-cyan-300"
              >
                ⚡ &lt;20ms latency
              </motion.div>
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-12 left-2 bg-blue-500/10 border border-blue-400/20 rounded-xl px-3 py-2 text-xs font-semibold text-blue-300"
              >
                🛰 648 Satellites
              </motion.div>

              {/* satellite image */}
              <motion.img
                src={`${import.meta.env.BASE_URL}satellite.png`}
                alt="OrbitLink satellite"
                animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-[320px] md:w-[400px] drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 40px rgba(34,211,238,0.5))" }}
              />
            </div>

          </div>
        </motion.div>
      </section>
    </div>
  );
}
