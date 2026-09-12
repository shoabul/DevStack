import React from 'react';
import BannerStack from '../../assets/banner-stack.png';

const Hero = () => {
    return (
        <div>
            <section className="w-full bg-white">
                <div className="container mx-auto min-h-[495px] px-5 py-10 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-15 text-center lg:text-left">

                    <div className="max-w-[610px] flex flex-col items-center lg:items-start">
                        <h1 className="text-[36px] sm:text-[44px] lg:text-[58px] leading-[1.1] lg:leading-[1.05] tracking-[-1px] lg:tracking-[-2px] font-extrabold text-gray-900">
                            Build Your Ideal
                            <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-4 lg:mt-6 max-w-[590px] text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] lg:leading-[1.65] text-[#38506b]">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits
                            your next project.
                        </p>

                        <div className="mt-8 lg:mt-12 flex flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto">
                            <a
                                href="#technologies"
                                className="flex h-[42px] min-w-[150px] sm:min-w-[168px] items-center justify-center rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-3 text-xs sm:text-sm font-semibold text-white shadow-md shadow-pink-500/20 transition hover:scale-[1.02]"
                            >
                                Explore Technologies
                            </a>

                            <a
                                href="#about"
                                className="flex h-[42px] min-w-[130px] sm:min-w-[170px] items-center justify-center rounded-lg border border-gray-200 bg-white px-3 text-xs sm:text-sm font-semibold text-[#26364a] transition hover:bg-gray-50"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="flex w-full max-w-[320px] sm:max-w-[390px] lg:w-[420px] items-center justify-center">
                        <img
                            src={BannerStack}
                            alt="Development stack"
                            className="w-full object-contain"
                        />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Hero;