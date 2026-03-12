import { Satellite, Twitter, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="relative z-10 bg-[#000000] border-t border-white/10 pt-20 pb-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto w-full">
                {/* Top gradient line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Branding */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <Link to="/" className="flex items-center gap-2 group w-fit">
                            <Satellite className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-500" />
                            <span className="text-xl font-medium tracking-wide text-white">OrbitLink</span>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                            Redefining global connectivity through advanced low-earth orbit satellite networks. Secure, fast, and reliable latency anywhere on Earth.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/30 transition-all text-white/50 hover:text-white">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:block lg:col-span-2" />

                    {/* Technology */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h4 className="text-white font-medium mb-2">Technology</h4>
                        <ul className="flex flex-col gap-3">
                            {["Constellation", "Ground Stations", "Security", "Latency SLA"].map((item) => (
                                <li key={item}><Link to="/services" className="text-white/40 hover:text-white transition-colors text-sm">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h4 className="text-white font-medium mb-2">Company</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/services" className="text-white/40 hover:text-white transition-colors text-sm">Services</Link></li>
                            <li><Link to="/about" className="text-white/40 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/missions" className="text-white/40 hover:text-white transition-colors text-sm">Missions</Link></li>
                            <li><Link to="/contact" className="text-white/40 hover:text-white transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="lg:col-span-2 flex flex-col gap-4">
                        <h4 className="text-white font-medium mb-2">Legal</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/privacy" className="text-white/40 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-white/40 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
                            <li><Link to="/cookies" className="text-white/40 hover:text-white transition-colors text-sm">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/30 text-xs text-center md:text-left">
                        &copy; {new Date().getFullYear()} OrbitLink Satellite Solutions. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-white/30 text-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        All systems operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
