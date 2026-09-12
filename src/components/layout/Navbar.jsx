import React from 'react';
import Logo from '../../assets/logo-text.png'

const Navbar = () => {
    return (
        <nav className="w-full border-b border-gray-200 bg-white">
            <div className="container mx-auto flex h-19.5 items-center justify-between px-4">

                <div>
                    <img src={Logo} alt='Logo' />
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

                <div className="flex items-center gap-5">
                    <button className="font-medium text-gray-700 transition hover:text-pink-600">
                        Sign In
                    </button>

                    <button className="rounded-full bg-pink-600 px-7 py-3 font-semibold text-white shadow-md transition hover:bg-pink-700">
                        Sign Up
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;