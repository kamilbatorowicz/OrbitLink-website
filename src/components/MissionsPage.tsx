import { motion } from "motion/react";
import { Check, ArrowUpRight, Star, Activity, Shield, Cpu, Zap } from "lucide-react";

export default function MissionsPage() {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">

            {/* Background Image & Masking (Hero) */}
            <div className="absolute inset-0 z-0 h-[100vh]">
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80 z-10" />
                <img
                    src={`${import.meta.env.BASE_URL}services_hero_bg.jpg`}
                    alt="Space Background"
                    className="w-full h-full object-cover object-center opacity-70 block"
                />
            </div>
            
            {/* Ambient Glows (Hero) */}
            <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-center h-[100vh]">
                <div className="absolute w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] mix-blend-screen" />
                <div className="absolute w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[150px] mix-blend-screen" />
            </div>


            <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 pt-40 pb-16 min-h-[70vh]">

                {/* Header text */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-semibold text-white/80 backdrop-blur-md mb-6 hover:bg-white/[0.08] transition-colors">
                        <div className="bg-cyan-500 rounded-full w-4 h-4 flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-black stroke-[3]" />
                        </div>
                        Our Missions
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-xl max-w-4xl">
                        Powering global connectivity:<br />
                        <span className="text-white">Infrastructure that connects the world.</span>
                    </h1>
                </motion.div>


                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:h-[480px]">

                    {/* Left Column (Partners & ROI) */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="col-span-1 md:col-span-3 flex flex-col gap-5">
                        
                        {/* Partners Card */}
                        <div className="bg-[#111] border border-white/10 rounded-[28px] p-5 flex items-center justify-between hover:border-cyan-400/30 hover:bg-[#161616] transition-all group">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-[#111] bg-gradient-to-br from-cyan-900 to-blue-900 group-hover:border-[#161616] transition-all flex items-center justify-center`}>
                                        <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-white/60 text-xs font-medium">12+ Partners</span>
                        </div>

                        {/* Large Metric Card */}
                        <div className="flex-1 bg-[#111] border border-white/10 rounded-[32px] p-8 flex flex-col justify-between hover:border-cyan-400/30 hover:bg-[#161616] transition-all relative overflow-hidden group">
                           <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-[30px] group-hover:bg-cyan-500/10 transition-all" />
                           <p className="text-white/70 text-[15px] leading-relaxed relative z-10 w-4/5 pt-2">
                                Achieve global coverage<br/>in just 30 days.
                           </p>
                           <div className="relative z-10 pb-2">
                               <div className="text-[56px] font-bold text-white tracking-tighter leading-none mb-2">
                                   99<span className="text-3xl font-medium tracking-normal text-cyan-400/80">.9%</span>
                               </div>
                               <p className="text-white/50 text-sm font-medium">Network Uptime SLA</p>
                           </div>
                        </div>
                    </motion.div>


                    {/* Middle Column (Revenue / Impact) */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="col-span-1 md:col-span-4 flex flex-col gap-5">
                       
                       {/* Main Middle Card */}
                       <div className="flex-[3] bg-[#111] border border-white/10 rounded-[32px] p-8 flex flex-col justify-between hover:border-cyan-400/30 hover:bg-[#161616] transition-all group">
                            <p className="text-white/70 text-[15px] leading-relaxed pt-2 group-hover:text-white/90 transition-colors">
                                Global LEO constellation delivering uninterrupted, broadband data transfer at scale.
                            </p>
                            <div className="pb-2">
                               <div className="text-[56px] font-bold text-white tracking-tighter leading-none mb-3">
                                   1.2<span className="text-3xl font-medium tracking-normal text-white/50 ml-1">PB+</span>
                               </div>
                               <p className="text-white/50 text-sm font-medium">Daily data transferred.</p>
                            </div>
                       </div>

                       {/* Status Pill Card */}
                       <div className="flex-1 bg-[#111] border border-white/10 rounded-[28px] p-6 flex items-center gap-4 hover:border-cyan-400/30 hover:bg-[#161616] transition-all min-h-[88px]">
                            <div className="relative flex h-4 w-4 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#111]"></span>
                            </div>
                            <span className="text-white font-medium">Constellation Active!</span>
                       </div>
                    </motion.div>

                    {/* Right Column (Satisfaction / Feature) */}
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="col-span-1 md:col-span-5 flex flex-col">
                       
                       <div className="flex-1 bg-[#111] border border-white/10 rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-400/30 hover:bg-[#161616] transition-all">
                            
                            {/* Large decorative arrow in background */}
                            <ArrowUpRight className="absolute top-1/4 right-8 w-64 h-64 text-white/[0.02] group-hover:text-cyan-400/[0.04] transition-colors group-hover:-translate-y-4 group-hover:translate-x-4 duration-500 block" strokeWidth={3} />
                            
                            <p className="text-white/70 text-[15px] leading-relaxed relative z-10 w-5/6 pt-2 group-hover:text-white/90 transition-colors">
                                We fuse deep telemetry insight with bold LEO strategy to build networks that perform at the highest level.
                            </p>

                            <div className="relative z-10 flex items-end justify-between pb-2">
                                <div>
                                    <div className="text-[56px] font-bold text-white tracking-tighter leading-none mb-2">
                                        20<span className="text-3xl font-medium tracking-normal text-white/50 ml-1">ms</span>
                                    </div>
                                    <p className="text-white/50 text-sm font-medium">Ultra-low latency</p>
                                </div>
                                <div className="text-right flex flex-col items-end">
                                    <div className="flex items-center gap-1 mb-2">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <Star key={i} className="w-4 h-4 fill-[#6366f1] text-[#6366f1]" />
                                        ))}
                                    </div>
                                    <div className="text-white/80 font-medium text-sm">Trusted by</div>
                                    <div className="text-white/50 text-xs">Global Infrastructure</div>
                                </div>
                            </div>

                       </div>

                    </motion.div>

                </div>
            </div>

            {/* Content Section 1: Earth Observation */}
            <div className="relative w-full py-24 md:py-32 overflow-hidden border-t border-white/5">
                <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2 bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
                
                <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative group h-[500px]"
                    >
                        {/* Decorative tech scanning elements */}
                        <div className="absolute -inset-4 border border-cyan-500/20 rounded-3xl z-0 transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 z-20 rounded-tl-2xl" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 z-20 rounded-br-2xl" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 rounded-2xl pointer-events-none" />
                        
                        <img 
                            src={`${import.meta.env.BASE_URL}mission_1.jpg`} 
                            alt="Earth Observation Satellite" 
                            className="w-full h-full object-cover rounded-2xl relative z-10 shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                        />
                        
                        {/* Floating data point */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-6 top-1/4 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl z-20 shadow-2xl flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center">
                                <Activity className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <div className="text-white/50 text-xs">Live Telemetry</div>
                                <div className="text-white font-mono font-bold text-lg">Active</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[10px] uppercase tracking-widest font-bold text-cyan-400 w-fit">
                            <Shield className="w-3 h-3" />
                            Observation & Telemetry
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Monitoring Earth,<br />
                            <span className="text-cyan-400">protecting the future.</span>
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed font-light">
                            Our advanced imaging constellation provides unparalleled high-resolution optical and radar data. Capable of penetrating clouds and operating at night, OrbitLink ensures you never lose sight of mission-critical assets.
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                "Real-time maritime tracking", 
                                "Sub-meter optical resolution", 
                                "Multi-spectral imaging", 
                                "Automated change detection"
                            ].map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-white/80 text-sm">
                                    <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-cyan-400" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>


            {/* Content Section 2: In-Orbit Operations */}
            <div className="relative w-full py-24 md:py-32 overflow-hidden border-t border-white/5 bg-[#050505]">
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 translate-x-1/4 bg-blue-900/10 rounded-full blur-[130px] mix-blend-screen pointer-events-none" />
                
                {/* Tech grid texture background */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                     style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

                <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 flex-col-reverse lg:flex-row">
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6 order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[10px] uppercase tracking-widest font-bold text-blue-400 w-fit">
                            <Cpu className="w-3 h-3" />
                            In-Orbit Robotics
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Extending lifespans<br />
                            <span className="text-blue-400">beyond the limit.</span>
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed font-light">
                            Pioneering space mobility and logistics. Our autonomous servicing vehicles can inspect, repair, and refuel satellites directly in orbit, drastically reducing the cost of space operations and mitigating orbital debris.
                        </p>
                        
                        <div className="flex gap-8 pt-4 border-t border-white/10 mt-2">
                            <div>
                                <div className="text-3xl font-bold inline-flex items-baseline gap-1">
                                    <span className="text-blue-400">5</span><span className="text-white/50 text-xl font-medium">yrs</span>
                                </div>
                                <div className="text-xs text-white/40 font-light mt-1 uppercase tracking-wider">Avg. Lifespan Ext</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold inline-flex items-baseline gap-1">
                                    <span className="text-blue-400">100</span><span className="text-white/50 text-xl font-medium">%</span>
                                </div>
                                <div className="text-xs text-white/40 font-light mt-1 uppercase tracking-wider">Success Rate</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative group h-[500px] order-1 lg:order-2"
                    >
                        {/* Decorative tech scanning elements */}
                        <div className="absolute -inset-4 border border-blue-500/20 rounded-3xl z-0 transition-transform duration-700 group-hover:scale-95" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-400 z-20 rounded-tr-2xl" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-blue-400 z-20 rounded-bl-2xl" />
                        
                        <img 
                            src={`${import.meta.env.BASE_URL}mission_2.jpg`} 
                            alt="Space Station Resupply" 
                            className="w-full h-full object-cover rounded-2xl relative z-10 shadow-2xl brightness-90 group-hover:brightness-110 transition-all duration-700"
                        />
                        
                        {/* Floating data point */}
                        <motion.div 
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -left-6 bottom-1/4 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl z-20 shadow-2xl flex items-center gap-4"
                        >
                            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                                <Zap className="w-6 h-6 text-blue-400" />
                            </div>
                            <div>
                                <div className="text-white/50 text-xs">Power Transfer</div>
                                <div className="text-white font-mono font-bold text-lg">Stable</div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

        </div>
    );
}
