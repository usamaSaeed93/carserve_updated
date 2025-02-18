import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

export const FeaturedProducts = ({ collections }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="py-10 space-y-8 bg-[#f5f5f5]">
            {/* Header Section */}
            <div className="flex flex-col items-center gap-7">
                <p className="text-4xl font-semibold">Featured products in</p>
                <div className="flex gap-3 font-medium flex-wrap px-8 sm:px-0 justify-center">
                    {collections &&
                        collections?.items?.map((collection, index) => (
                            <div
                                key={collection.collectionId}
                                className={`px-7 py-2.5 bg-white transition-all duration-150 cursor-pointer rounded-lg border-2 ${activeTab === index
                                    ? 'border-[#034c8c] text-[#034c8c]'
                                    : 'border-gray-300 text-black'
                                    }`}
                                onClick={() => handleTabClick(index)}
                            >
                                {collection.name}
                            </div>
                        ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="px-4 lg:px-28 h-auto">
                <Splide
                    hasTrack={false}
                    options={{
                        mediaQuery: 'min',
                        type: 'loop',
                        pagination: false,
                        breakpoints: {
                            320: { perPage: 1 },
                            550: { perPage: 2, arrows: false },
                            768: { perPage: 3 },
                            1024: { perPage: 4, arrows: true },
                            1280: { perPage: 5 },
                            1400: { perPage: 6 },
                        },
                    }}
                >
                    <SplideTrack>
                        {collections.items?.[activeTab]?.products?.items.map((product) => (
                            <SplideSlide key={product.productId}>
                                <div className="bg-white w-[200px] relative overflow-hidden border border-gray-300 rounded-md">
                                    <div className="absolute left-2 top-2.5 flex gap-x-2 text-xl font-medium w-[85%]">
                                        <div className="px-4 py-1.5 bg-[#f29f05] rounded-md">Sale</div>
                                        <div className="px-4 py-1.5 bg-[#04bf33] text-white rounded-md">New</div>
                                    </div>
                                    <div className="h-[180px]">
                                        <img
                                            src={product.image.url}
                                            alt={product.image.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="space-y-4 px-3 pt-3 pb-3">
                                        <div className="space-y-2">
                                            <p className="font-semibold">{product.name}</p>
                                            <div className="flex">
                                                {[1, 2, 3, 4, 5].map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="18"
                                                        height="18"
                                                        viewBox="0 0 51 48"
                                                    >
                                                        <path
                                                            fill={index < 4 ? 'gold' : '#e0e0e0'}
                                                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                                        />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex gap-x-1.5 items-center">
                                            {/* <div className="text-gray-400">
                                                <span>{product.price.regular.text}</span>
                                            </div> */}
                                            <span className="text-[#bf3617] text-3xl font-bold">
                                                {product.price.regular.text}
                                            </span>
                                        </div>
                                        {/* <div className="flex gap-x-1 cursor-pointer font-semibold items-center">
                                            <svg
                                                className="mt-[2px]"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="#034c8c"
                                            >
                                                <path
                                                    stroke="#034c8c"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m19 12-6-6m6 6-6 6m6-6H5"
                                                />
                                            </svg>
                                        </div> */}
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </SplideTrack>
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev !bg-transparent lg:!-left-[4%]">
                            &lt;
                        </button>
                        <button className="splide__arrow splide__arrow--next !bg-transparent lg:!-right-[4%]">
                            &gt;
                        </button>
                    </div>
                </Splide>
            </div>
        </div>
    );
};

// FeaturedProducts.propTypes = {
//     collections: PropTypes.shape({
//         items: PropTypes.arrayOf(
//             PropTypes.shape({
//                 collectionId: PropTypes.number.isRequired,
//                 name: PropTypes.string.isRequired,
//                 products: PropTypes.shape({
//                     items: PropTypes.arrayOf(
//                         PropTypes.shape({
//                             productId: PropTypes.number.isRequired,
//                             name: PropTypes.string.isRequired,
//                             image: PropTypes.shape({
//                                 url: PropTypes.string.isRequired,
//                                 alt: PropTypes.string.isRequired,
//                             }).isRequired,
//                             price: PropTypes.shape({
//                                 regular: PropTypes.shape({
//                                     text: PropTypes.string.isRequired,
//                                 }).isRequired,
//                                 special: PropTypes.shape({
//                                     text: PropTypes.string.isRequired,
//                                 }).isRequired,
//                             }).isRequired,
//                         })
//                     ).isRequired,
//                 }).isRequired,
//             })
//         ),
//     }).isRequired,
// };

export default FeaturedProducts;
