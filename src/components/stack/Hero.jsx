import React from 'react';
import BannerStack from '../../assets/banner-stack.png'

const Hero = () => {
    return (
        <div>

            <section className="w-full bg-white">
                <div className="container mx-auto min-h-[495px] px-5 py-16 flex items-center justify-between gap-15">

                    <div className="max-w-[610px]">
                        <h1 className="text-[58px] leading-[1.05] tracking-[-2px] font-extrabold text-gray-900">
                            Build Your Ideal
                            <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-6 max-w-[590px] text-[18px] leading-[1.65] text-[#38506b]">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that fits
                            your next project.
                        </p>

                        <div className="mt-12 flex items-center gap-3">
                            <a
                                href="#technologies"
                                className="flex h-[42px] min-w-[168px] items-center justify-center rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-3 text-sm font-semibold text-white shadow-md shadow-pink-500/20 transition hover:scale-[1.02]"
                            >
                                Explore Technologies
                            </a>

                            <a
                                href="#about"
                                className="flex h-[42px] min-w-[170px] items-center justify-center rounded-lg border border-gray-200 bg-white px-3 text-sm font-semibold text-[#26364a] transition hover:bg-gray-50"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>


                    <div className="flex w-[420px] items-center justify-center">
                        <img
                            src={BannerStack}
                            alt="Development stack"
                            className="w-full max-w-[390px] object-contain"
                        />
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Hero;