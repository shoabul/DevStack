import React, { useState } from 'react';
import Logo from '../../assets/logo-text.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur-md">
            <div className="container mx-auto flex h-19.5 items-center justify-between px-4">

                <div className="flex items-center md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="rounded-lg p-1.5 text-gray-600 transition hover:bg-gray-100 hover:text-pink-600 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                <div className="flex items-center justify-center md:justify-start">
                   <a href="#home"> <img src={Logo} alt="Logo" className="h-7 w-auto sm:h-8 md:h-10" /> </a>
                </div>

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


                <div className="flex items-center gap-2 sm:gap-5">
                    <button className="text-xs font-medium text-gray-700 transition hover:text-pink-600 sm:text-base">
                        <a href="#sign-in">Sign In</a>
                    </button>
                    <button className="rounded-full bg-pink-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md transition hover:bg-pink-700 sm:px-7 sm:py-3 sm:text-base">
                        <a href="#sign-up">Sign Up</a>
                    </button>
                </div>

            </div>

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