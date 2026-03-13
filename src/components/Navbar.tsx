import { Satellite, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Missions", to: "/missions" },
    { label: "Contact", to: "/contact" },
];

export default function Navbar() {
    const { pathname } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu on navigation
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-xl bg-black/60 border-b border-white/8 transition-all duration-300">
                <Link to="/" className="flex items-center gap-2 group relative z-[70]">
                    <Satellite className="w-7 h-7 text-cyan-400 group-hover:rotate-12 transition-transform duration-500" />
                    <span className="text-2xl font-bold tracking-tighter text-white">OrbitLink</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            to={link.to}
                            className={`transition-colors ${pathname === link.to
                                ? "text-white"
                                : "text-white/60 hover:text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/contact" className="hidden md:block bg-white text-black px-6 py-2 rounded-lg text-sm font-bold hover:bg-white/90 transition-all">
                        Contact us
                    </Link>
                    {/* Mobile Toggle Button */}
                    <button 
                        className="md:hidden p-2 text-white relative z-[70]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[55] bg-black md:hidden flex flex-col justify-center items-center px-12"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full" />
                        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full" />

                        <div className="flex flex-col items-center gap-8 relative z-10 w-full">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        to={link.to}
                                        className={`text-3xl font-bold tracking-tighter transition-colors block py-2 ${
                                            pathname === link.to ? "text-cyan-400" : "text-white/60 hover:text-white"
                                        }`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                                className="w-full pt-8"
                            >
                                <Link 
                                    to="/contact" 
                                    className="block bg-white text-black w-full py-5 rounded-2xl text-xl font-bold text-center active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                >
                                    Contact us
                                </Link>
                            </motion.div>
                        </div>
                        
                        <div className="absolute bottom-12 flex items-center gap-2 text-white/20 text-xs">
                            <Satellite className="w-4 h-4" />
                            <span>OrbitLink Satellite Solutions</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
