import React from 'react';
import Logo from '../../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="mt-15 border-t border-gray-100 w-full bg-white pt-12 md:pt-16 pb-8 text-gray-600 font-sans">
            <div className="container mx-auto px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">

                    <div className="md:col-span-2 space-y-4 md:pr-4 flex flex-col items-center md:items-start text-center md:text-left">
                        <div>
                            <img src={Logo} alt="Dev Stack" className="h-8 w-auto" />
                        </div>

                        <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <div className="flex items-center space-x-2 pt-2 text-sm font-semibold text-gray-700">
                            <a href="#" className="hover:text-gray-900 transition-colors">GitHub</a>
                            <span className="text-gray-400">•</span>
                            <a href="#" className="hover:text-gray-900 transition-colors">Twitter</a>
                            <span className="text-gray-400">•</span>
                            <a href="#" className="hover:text-gray-900 transition-colors">LinkedIn</a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                            Product
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                        </ul>
                    </div>
                    <div className="hidden md:block">
                        <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>
                <div className="border-t border-gray-100 pt-8 flex flex-row justify-between items-center text-xs text-gray-400">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;