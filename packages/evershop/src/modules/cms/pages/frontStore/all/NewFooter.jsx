import React from "react";
const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="bg-black container mx-auto space-y-16 px-8 lg:px-16 xl:px-24 text-white pb-10 pt-16">
                {/* Top Section */}
                <div className="flex  flex-col md:flex-row md:justify-between gap-y-12">
                    <div className="md:w-[22%] space-y-6">
                        <p className="font-bold text-2xl mb-2">
                            With over 250+ branches nationwide and 130,000 parts available,
                            Mobex Auto Parts is the USA's number 1 supplier!
                        </p>
                        <p className="text-gray-400 text-xl">
                            We offer service parts at very competitive prices with Free
                            Delivery across the whole of the USA.
                        </p>
                        <button className="border-2 border-yellow-500 hover:bg-yellow-500 transition-all duration-300  text-yellow-500 hover:text-white font-semibold py-3.5 text-xl px-6 rounded">
                            Discover more →
                        </button>
                    </div>
                    {[1, 2, 3].map(() => {
                        return (
                            <div className="space-y-3">
                                <h3 className="font-bold text-xl mb-2">Air Conditioning</h3>
                                <ul className="text-gray-400 text-xl space-y-2">
                                    <li>Condenser</li>
                                    <li>AC Compressor</li>
                                    <li>Heat Exchanger</li>
                                    <li>Receiver Drier</li>
                                    <li>Heater Control Valve</li>
                                    <li className="text-yellow-500 cursor-pointer">View all →</li>
                                </ul>
                            </div>
                        );
                    })}
                    <div className="md:w-[200px] -mt-4 ">
                        <div className="w-[150px] h-20  bg-contain bg-no-repeat bg-center bg-[url(https://enovathemes.com/mobex/wp-content/uploads/logo-landing.svg)]"></div>
                        <div className="space-y-6">
                            {[1, 2, 3].map(() => {
                                return (
                                    <div className="flex text-xl font-medium gap-x-4  items-start">
                                        <div className="min-w-[24px] h-[24px] ">
                                            <svg
                                                className="w-full h-full"
                                                version="1.1"
                                                id="Capa_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                viewBox="0 0 255.856 255.856"
                                                xmlSpace="preserve"
                                            >
                                                <g>
                                                    <path
                                                        className="fill-yellow-500"
                                                        d="M127.928,38.8c-30.75,0-55.768,25.017-55.768,55.767s25.018,55.767,55.768,55.767
  s55.768-25.017,55.768-55.767S158.678,38.8,127.928,38.8z M127.928,135.333c-22.479,0-40.768-18.288-40.768-40.767
  S105.449,53.8,127.928,53.8s40.768,18.288,40.768,40.767S150.408,135.333,127.928,135.333z"
                                                    />
                                                    <path
                                                        className="fill-yellow-500"
                                                        d="M127.928,0C75.784,0,33.362,42.422,33.362,94.566c0,30.072,25.22,74.875,40.253,98.904
  c9.891,15.809,20.52,30.855,29.928,42.365c15.101,18.474,20.506,20.02,24.386,20.02c3.938,0,9.041-1.547,24.095-20.031
  c9.429-11.579,20.063-26.616,29.944-42.342c15.136-24.088,40.527-68.971,40.527-98.917C222.495,42.422,180.073,0,127.928,0z
    M171.569,181.803c-19.396,31.483-37.203,52.757-43.73,58.188c-6.561-5.264-24.079-26.032-43.746-58.089
  c-22.707-37.015-35.73-68.848-35.73-87.336C48.362,50.693,84.055,15,127.928,15c43.873,0,79.566,35.693,79.566,79.566
  C207.495,112.948,194.4,144.744,171.569,181.803z"
                                                    />
                                                </g>
                                            </svg>
                                        </div>
                                        <p className="-mt-1 leading-7">
                                            7031 N 35th Ave, Phoenix Arkansas United States
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Links Section */}
                <div className="flex flex-wrap gap-y-14  justify-between border-t border-b border-gray-800 py-9">
                    {[1, 2, 3, 4, 5, 6].map(() => {
                        return (
                            <div className="space-y-3">
                                <h3 className="font-bold text-xl mb-2">Air Conditioning</h3>
                                <ul className="text-gray-400 text-xl space-y-2">
                                    <li>Condenser</li>
                                    <li>AC Compressor</li>
                                    <li>Heat Exchanger</li>
                                    <li>Receiver Drier</li>
                                    <li>Heater Control Valve</li>
                                    <li className="text-yellow-500 cursor-pointer">View all →</li>
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
                    <div className="text-gray-400 text-xl">
                        <p>Copyright © 2024 Mobex. All Rights Reserved</p>
                    </div>
                    <div className="flex flex-wrap justify-center text-xl space-x-4">
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;