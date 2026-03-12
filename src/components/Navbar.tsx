import { Satellite, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Missions", to: "/missions" },
    { label: "Contact", to: "/contact" },
];

export default function Navbar() {
    const { pathname } = useLocation();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-xl bg-black/60 border-b border-white/8">
            <Link to="/" className="flex items-center gap-2 group">
                <Satellite className="w-7 h-7 text-cyan-400 group-hover:rotate-12 transition-transform duration-500" />
                <span className="text-2xl font-bold tracking-tighter text-white">OrbitLink</span>
            </Link>

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
                <button className="md:hidden p-2">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
}
