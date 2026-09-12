import React, { useState } from 'react';
import Logo from '../../assets/logo-text.png';

const Navbar = () => {
    // মোবাইল মেনু ওপেন/ক্লোজ স্টেট
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // মেনু বন্ধ করার ফাংশন (লিংকে ক্লিক করলে যেন মেনু বন্ধ হয়ে যায়)
    const closeMenu = () => setIsMenuOpen(false);

    return (
        // sticky, top-0 এবং z-50 দিয়ে স্টিকি করা হয়েছে
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
            <div className="container mx-auto flex h-19.5 items-center justify-between px-4">

                {/* Logo Section */}
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="h-8 w-auto md:h-10" />
                </div>

                {/* Desktop Nav Links (Medium স্ক্রিন থেকে দেখাবে) */}
                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#home"
                        className="font-medium text-pink-600 transition hover:text-pink-700"
                    >
                        Home
                    </a>
                    <a
                        href="#technologies"
                        className="font-medium text-gray-600 transition hover:text-pink-600"
                    >
                        Technologies
                    </a>
                    <a
                        href="#projects"
                        className="font-medium text-gray-600 transition hover:text-pink-600"
                    >
                        Projects
                    </a>
                    <a
                        href="#about"
                        className="font-medium text-gray-600 transition hover:text-pink-600"
                    >
                        About
                    </a>
                    <a
                        href="#contact"
                        className="font-medium text-gray-600 transition hover:text-pink-600"
                    >
                        Contact
                    </a>
                </div>

                {/* Right Side Buttons & Hamburger Toggle */}
                <div className="flex items-center gap-3 sm:gap-5">
                    {/* Auth Buttons */}
                    <button className="text-sm font-medium text-gray-700 transition hover:text-pink-600 sm:text-base">
                        Sign In
                    </button>
                    <button className="rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-pink-700 sm:px-7 sm:py-3 sm:text-base">
                        Sign Up
                    </button>

                    {/* Hamburger Button (শুধুমাত্র মোবাইলে দেখাবে) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="ml-2 rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 hover:text-pink-600 focus:outline-none md:hidden"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            // Close Icon (X)
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon (≡)
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="border-b border-gray-200 bg-white px-4 pt-2 pb-6 shadow-lg md:hidden">
                    <div className="flex flex-col space-y-4">
                        <a
                            href="#home"
                            onClick={closeMenu}
                            className="font-medium text-pink-600 transition hover:text-pink-700"
                        >
                            Home
                        </a>
                        <a
                            href="#technologies"
                            onClick={closeMenu}
                            className="font-medium text-gray-600 transition hover:text-pink-600"
                        >
                            Technologies
                        </a>
                        <a
                            href="#projects"
                            onClick={closeMenu}
                            className="font-medium text-gray-600 transition hover:text-pink-600"
                        >
                            Projects
                        </a>
                        <a
                            href="#about"
                            onClick={closeMenu}
                            className="font-medium text-gray-600 transition hover:text-pink-600"
                        >
                            About
                        </a>
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="font-medium text-gray-600 transition hover:text-pink-600"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;