import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RocketCursor from "./RocketCursor";
import ScrollToTop from "./ScrollToTop";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <ScrollToTop />
            <RocketCursor />
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
