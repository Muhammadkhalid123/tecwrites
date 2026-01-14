"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="border-b border-gray-100/50 bg-white/70 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
            <div className="container mx-auto flex justify-between items-center h-20 md:h-40 px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="relative h-16 md:h-32 w-auto">
                        <Image
                            src="/TecWrites-Logo-03.png"
                            alt="TecWrites Logo"
                            width={400}
                            height={133}
                            className="h-full w-auto object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Desktop Nav Links */}
                <nav className="hidden md:flex items-center gap-10 text-[0.95rem] font-medium text-gray-600">
                    <a href="/" className="hover:text-black transition-colors">
                        Home
                    </a>
                    <a href="/services" className="hover:text-black transition-colors">
                        Services
                    </a>
                    <a href="/portfolio" className="hover:text-black transition-colors">
                        Portfolio
                    </a>
                    <a href="/about" className="hover:text-black transition-colors">
                        About
                    </a>
                    <a href="/contact" className="hover:text-black transition-colors">
                        Contact
                    </a>
                </nav>

                {/* Desktop CTA Button */}
                <div className="hidden md:block">
                    <a href="/contact" className="btn btn-primary btn-sm">
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-gray-600 hover:text-black transition-colors"
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <line x1="3" y1="18" x2="21" y2="18" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white">
                    <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <a href="/" className="text-gray-600 hover:text-black transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                            Home
                        </a>
                        <a href="/services" className="text-gray-600 hover:text-black transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                            Services
                        </a>
                        <a href="/portfolio" className="text-gray-600 hover:text-black transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                            Portfolio
                        </a>
                        <a href="/about" className="text-gray-600 hover:text-black transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                            About
                        </a>
                        <a href="/contact" className="text-gray-600 hover:text-black transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                            Contact
                        </a>
                        <a href="/contact" className="btn btn-primary btn-sm mt-2" onClick={() => setMobileMenuOpen(false)}>
                            Get Started
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
