import React, { useEffect, useRef, useState } from 'react';

import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import Collection from '@components/frontStore/widgets/Collection';
import CategoriesMenu from './CategoriesAll';
import CategoriesAndProducts from './CategoriesAndProducts';
const CartIcon = () => {
  return (
    <svg
      fill="#ffffff"
      width={36}
      height={36}
      viewBox="0 0 64 64"
      enableBackground="new 0 0 64 64"
      id="Layer_1"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path d="M28.462,49.718c-1.202,0-2.322-0.447-3.151-1.26c-1.051-1.028-1.5-2.594-1.172-4.087c0.311-1.416,1.245-2.498,2.563-2.968   c1.803-0.643,3.784-0.14,4.983,1.234c0.852,0.977,1.237,2.295,1.057,3.618C32.467,48.262,30.667,49.718,28.462,49.718z    M28.326,43.117c-0.314,0-0.635,0.057-0.952,0.17c-0.896,0.32-1.188,1.085-1.282,1.513c-0.181,0.825,0.056,1.679,0.617,2.229   c0.454,0.445,1.077,0.689,1.753,0.689c1.024,0,2.143-0.596,2.298-1.734c0.104-0.761-0.103-1.483-0.581-2.032   C29.715,43.421,29.04,43.117,28.326,43.117z" />
      </g>

      <g>
        <path d="M41.669,49.718c-1.203,0-2.322-0.447-3.152-1.26c-1.051-1.029-1.5-2.595-1.172-4.087c0.311-1.416,1.245-2.498,2.563-2.968   c1.802-0.644,3.783-0.14,4.983,1.234c0.853,0.977,1.237,2.295,1.057,3.618C45.673,48.262,43.874,49.718,41.669,49.718z    M41.532,43.117c-0.314,0-0.635,0.057-0.952,0.17c-0.896,0.32-1.188,1.085-1.282,1.513c-0.181,0.825,0.056,1.679,0.617,2.229   c0.454,0.445,1.077,0.689,1.754,0.689c1.023,0,2.142-0.596,2.297-1.734c0.104-0.761-0.103-1.483-0.581-2.032   C42.921,43.421,42.246,43.117,41.532,43.117z" />
      </g>

      <g>
        <path d="M37.921,39.828c-1.068,0-2.127-0.026-3.093-0.05l-1.418-0.029c-2.82-0.038-7.541-0.102-9.318-2.541   c-0.916-1.261-1.626-3.712-1.81-6.247c-0.092-1.257-0.122-2.609-0.15-3.917c-0.105-4.737-0.215-9.636-3.169-10.481   c-1.206-0.344-2.195-0.3-3.688-0.236l-0.246,0.011c-0.533,0.025-1.019-0.404-1.042-0.957c-0.023-0.552,0.404-1.018,0.956-1.042   l0.245-0.011c1.568-0.068,2.809-0.123,4.324,0.312c2.326,0.665,3.45,2.574,4.012,5.039c0.392-0.004,1.029-0.013,1.838-0.023   c4.072-0.055,12.547-0.167,15.883-0.089c0.501,0.011,0.99,0.016,1.463,0.02c3.554,0.033,7.229,0.067,7.306,4.05   c0.063,3.361-1.077,7.377-1.429,8.529c-0.094,0.309-0.182,0.611-0.268,0.906c-0.405,1.388-0.787,2.698-1.572,3.912   c-0.889,1.373-2.344,2.259-4.21,2.563C41.172,39.767,39.536,39.828,37.921,39.828z M23.854,21.674   c0.195,1.684,0.236,3.515,0.276,5.325c0.028,1.283,0.058,2.61,0.146,3.816c0.154,2.122,0.743,4.266,1.433,5.215   c1.188,1.629,5.605,1.689,7.729,1.718l1.441,0.029c2.342,0.059,5.257,0.132,7.334-0.206c1.293-0.21,2.279-0.79,2.852-1.675   c0.627-0.969,0.953-2.088,1.332-3.385c0.088-0.303,0.178-0.613,0.275-0.93c0.679-2.226,1.388-5.471,1.341-7.907   c-0.034-1.799-1.102-2.049-5.324-2.088c-0.482-0.004-0.98-0.009-1.491-0.021c-3.296-0.076-11.749,0.036-15.81,0.089   C24.766,21.663,24.243,21.669,23.854,21.674z" />
      </g>
    </svg>
  );
};

const parts = [
  {
    title: 'Body',
    imgSrc: 'https://enovathemes.com/mobex/wp-content/uploads/Body.webp',
    link: 'https://enovathemes.com/mobex/shop/?ca=body&ajax=true'
  },
  {
    title: 'Brakes',
    imgSrc: 'https://enovathemes.com/mobex/wp-content/uploads/Brakes.webp',
    link: 'https://enovathemes.com/mobex/shop/?ca=brakes&ajax=true'
  },
  {
    title: 'Care Kit',
    imgSrc: 'https://enovathemes.com/mobex/wp-content/uploads/Care-Kit.webp',
    link: 'https://enovathemes.com/mobex/shop/?ca=care-kit&ajax=true'
  },
  {
    title: 'Damping',
    imgSrc: 'https://enovathemes.com/mobex/wp-content/uploads/Damping.webp',
    link: 'https://enovathemes.com/mobex/shop/?ca=damping&ajax=true'
  },
  {
    title: 'Electrics',
    imgSrc: 'https://enovathemes.com/mobex/wp-content/uploads/Electrics.webp',
    link: 'https://enovathemes.com/mobex/shop/?ca=electrics&ajax=true'
  },
  {
    title: 'Engine',
    imgSrc: 'https://enovathemes.com/mobex/wp-content/uploads/Engine.webp',
    link: 'https://enovathemes.com/mobex/shop/?ca=engine&ajax=true'
  },
  {
    title: 'Filters',
    imgSrc:
      'https://enovathemes.com/mobex/wp-content/uploads/Air-conditioning.webp',
    link: 'https://enovathemes.com/mobex/shop/?ca=filters&ajax=true'
  },
  {
    title: 'Interior',
    imgSrc: 'https://enovathemes.com/mobex/wp-content/uploads/Interior.webp',
    link: 'https://enovathemes.com/mobex/shop/?ca=interior&ajax=true'
  },
  {
    title: 'Fluids',
    imgSrc:
      'https://enovathemes.com/mobex/wp-content/uploads/Oils-and-fluids.webp',
    link: 'https://enovathemes.com/mobex/shop/?ca=oils-and-fluids&ajax=true'
  }
];

const GET_PRODUCTS = `
  query Query($filters: [FilterInput]) {
    products(filters: $filters) {
      items {
        productId
        uuid
        name
        image {
          thumb
        }
        sku
        status
        price {
          regular {
            value
            text
          }
        }
      }
    }
  }
`;
import { useQuery } from "urql";
import debounce from "lodash.debounce";

const CarSelection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(true);

  const [result] = useQuery({
    query: GET_PRODUCTS,
    variables: { filters },
    pause: !filters.length,
  });

  const { data, fetching, error } = result;

  const handleSearch = debounce((query) => {
    if (query) {
      setFilters([{ key: "name", operation: "like", value: query }]);
    } else {
      setFilters([]);
    }
  }, 300);

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);


  return (
    <div
      onMouseEnter={() => {
        if (searchQuery) {
          setShowSearchResults(true);
        }
      }}
      className=" bg-gradient-to-b from-[#075691] to-[#26a1bd] px-8 pb-8 pt-12   shadow-lg"
    >
      <div className="mb-12 flex flex-col sm:flex-row gap-y-28 justify-between items-center relative"
        // onMouseLeave={() => {
        //   setShowSearchResults(false);
        // }}
      >
        {showSearchResults && searchQuery && (
          <div className="absolute left-1/2 -translate-x-1/2 z-50 top-[80%] rounded-lg w-[570px] pt-4 pb-7 space-y-7 bg-white shadow-2xl px-7">
            {fetching ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : error ? (
              <p className="text-center text-red-500">Error: {error.message}</p>
            ) : (
              <>
                {console.log(data)}
                {data?.products?.items.length > 0 ? (
                  data.products.items.map((product) => (
                    <div
                      key={product.productId}
                      className="cursor-pointer hover:scale-105 duration-200 flex gap-x-8 items-center"
                    >
                      <div
                        className="h-[80px] min-w-[80px] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${product.image?.thumb})` }}
                      ></div>
                      <div className="text-sm space-y-2">
                        <p className="text-xl font-medium">{product.name}</p>
                        <p className="text-xl space-x-3">
                          {product.discountedPrice && (
                            <span className="line-through">RS.{product.price}</span>
                          )}
                          <span>RS.{product?.price?.regular?.value}</span>
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No results found</p>
                )}
              </>
            )}
            <div className="cursor-pointer text-2xl font-medium hover:text-[#ff943d] transition-all duration-300">
              View All
            </div>
          </div>
        )}

        <div className="w-56 h-auto ">
          <img
            src="https://dfwcz.s3.us-east-2.amazonaws.com/static/carserve-logo-removebg-preview.png"
            className="w-full h-full max-w-full object-contain"
            alt=""
          />
        </div>
        <div className=" absolute left-1/2 top-[37%] sm:top-auto  -translate-x-1/2 min-w-[280px] md:w-[420px] px-5 flex items-center gap-x-3 bg-white rounded-full">
          <div className="size-7 ">
            <svg
              className="w-full h-full"
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 488.4 488.4"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
    s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
    S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
    S381.9,104.65,381.9,203.25z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className="w-full bg-transparent outline-none border-none py-3.5   text-xl "
            placeholder="Search"
          />
          {/* <button
            onClick={handleSearch}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button> */}
        </div>
        <div className="-mt-2 flex items-center gap-x-4">
          <div className="size-8  cursor-pointer">
            <svg
              fill="#ffffff"
              className="w-full h-full"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 471.701 471.701"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
  c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
  l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
  C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
  s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
  c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
  C444.801,187.101,434.001,213.101,414.401,232.701z"
                />
              </g>
            </svg>
          </div>
          <div className="-mt-[14px] size-8 cursor-pointer">
            <CartIcon />
          </div>
        </div>
      </div>

      <div>
        <div className="m-auto flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold text-center mb-4">
            Select Your Car
          </h1>
          <p className="text-white text-center text-2xl mb-6">
            Over 300,000 auto parts and accessories
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center py-3 px-5 rounded-md m-auto space-y-4 md:space-y-0 md:space-x-4 mb-6 w-3/4 bg-[#f29f05] ">
          <div className="w-full md:w-1/4">
            <select
              id="make"
              className="mt-1.5 w-full rounded-lg border-gray-300 bg-white   p-5 text-2xl"
            >
              <option value="" className="text-white">
                Make
              </option>
              <option value="ford">Ford</option>
              <option value="chevrolet">Chevrolet</option>
              <option value="toyota">Toyota</option>
            </select>
          </div>
          <div className="w-full md:w-1/4">
            <select
              id="model"
              className="mt-1.5 w-full rounded-lg border-gray-300 bg-white   p-5 text-2xl"
            >
              <option value="">Please select</option>
              <option value="mustang">Mustang</option>
              <option value="camaro">Camaro</option>
              <option value="corolla">Corolla</option>
            </select>
          </div>
          <div className="w-full md:w-1/4">
            <select
              id="year"
              className="mt-1.5 w-full rounded-lg border-gray-300 bg-white   p-5 text-2xl"
            >
              <option value="">Please select </option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
          <span className="text-white">OR</span>
          <div className="relative w-full md:w-1/4">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <input
              type="text"
              id="search"
              placeholder="Search by VIN"
              className="mt-1.5 w-full rounded-lg border-gray-300 bg-white p-5 text-2xl"
              style={{
                background: 'white'
              }}
            />
          </div>
          <button className="bg-[#034c8c] hover:bg-[#034c8c] text-white  px-6 py-2 rounded-md transition duration-200">
            Search
          </button>
        </div>
        <div className="flex justify-center flex-wrap gap-4 my-4 py-4 ">
          {parts.map((part, index) => (
            <div key={index} className="text-center">
              <a
                href={part.link}
                title={part.title}
                className="flex flex-col gap-4"
              >
                <div className="bg-white p-4 rounded-full shadow-md hover:scale-110 transition-all duration-300">
                  <img
                    src={part.imgSrc}
                    alt={part.title}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>
                <span className="text-white pt-4">{part.title}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export const Footer = () => {
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

const ByCategories = () => {
  return (
    <div className="px-4 lg:px-12 xl:px-64 space-y-10">
      <div className="space-y-1">
        <div className="flex gap-x-4 text-4xl font-bold items-center uppercase">
          <div className="h-0.5 flex-grow bg-yellow-500"></div>
          <p>Deal Zone</p>
          <div className="h-0.5 flex-grow bg-yellow-500"></div>
        </div>
        <p className="text-center">Find Discounts by Quick Price Filters </p>
      </div>
      <div className="flex gap-x-5 text-center gap-y-8 font-medium text-xl justify-center flex-wrap ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => {
          return (
            <div>
              <div className="size-[180px] bg-[#ffdd7d]"></div>

              <p className="mt-4 text-[14px]">Led & Lightening</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DealZone = () => {
  return (
    <div className="px-4 lg:px-12 xl:px-64 space-y-10">
      <div className="space-y-1">
        <div className="flex gap-x-4 text-4xl font-bold items-center uppercase">
          <div className="h-0.5 flex-grow bg-yellow-500"></div>
          <p>Deal Zone</p>
          <div className="h-0.5 flex-grow bg-yellow-500"></div>
        </div>
        <p className="text-center">Find Discounts by Quick Price Filters </p>
      </div>
      <div className=" flex flex-wrap items-center justify-center font-bold gap-8">
        {['bg-[#FE555A]', 'bg-[#ffd2bd]', 'bg-[#fece48]', 'bg-[#fe994c]'].map(
          (bg) => {
            return (
              <div
                className={` rounded-full px-4 text-center flex-col size-[230px] gap-y-2  flex justify-center items-center ${bg}`}
              >
                <p className="text-7xl">HALF PRICE</p>
                <p>STORE</p>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const tabComponent = [
    <Splide
      hasTrack={false}
      options={{
        mediaQuery: 'min',
        type: 'loop',
        pagination: false,
        breakpoints: {
          320: {
            perPage: 1
          },
          550: {
            perPage: 2,
            arrows: false
          },
          768: {
            perPage: 3
          },
          1024: {
            perPage: 4,
            arrows: true
          },
          1280: {
            perPage: 5
          },
          1400: {
            perPage: 6
          }
        }
      }}
    >
      <SplideTrack>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(() => {
          return (
            <SplideSlide className="flex justify-center">
              <div className="bg-white w-[200px] relative overflow-hidden  border border-gray-300 rounded-md">
                <div className="absolute left-2 top-2.5 flex gap-x-2 text-xl font-medium  w-[85%]">
                  <div className="px-4 py-1.5 bg-[#f29f05] rounded-md   ">
                    Sale
                  </div>
                  <div className="px-4 py-1.5 bg-[#04bf33] text-white rounded-md   ">
                    Sale
                  </div>
                </div>
                <div className=" h-[180px]">
                  <img
                    src="https://enovathemes.com/mobex/wp-content/uploads/p1-img-1-300x300.webp"
                    className="w-full h-full max-w-full bg-contain"
                    alt=""
                  />
                </div>
                <div className="space-y-4 px-3 pt-3 pb-3">
                  <div className="space-y-2">
                    <p className="font-semibold">
                      Vemo v95-72-0029 knock sensor
                    </p>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((elem, index) => {
                        return (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 51 48"
                          >
                            <path
                              fill={index % 2 !== 0 ? '#e0e0e0' : 'gold'}
                              d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            />
                          </svg>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex gap-x-1.5 items-center">
                    <div className="text-gray-400 ">
                      <span>$</span>
                      <span className=" line-through">33.60</span>
                    </div>
                    <span className="text-[#bf3617] text-3xl font-bold">
                      $23.86
                    </span>
                  </div>
                  <div className=" flex gap-x-1 cursor-pointer font-semibold items-center">
                    <p className="text-[#034c8c]">Add to cart</p>
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 12-6-6m6 6-6 6m6-6H5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </SplideTrack>
      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev !bg-transparent lg:!-left-[4%]">
          <svg
            className="!w-4 !h-4"
            fill="#000000"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
      c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
      C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
      C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
        </button>
        <button className="splide__arrow splide__arrow--next !bg-transparent lg:!-right-[4%] ">
          <svg
            className="!w-4 !h-4"
            fill="#000000"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
      c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
      C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
      C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
        </button>
      </div>
    </Splide>,

    <div className="text-center text-2xl">Second tab</div>,
    <div className="text-center text-2xl">Third tab</div>
  ];

  return (
    <div className="py-10 space-y-8 bg-[#f5f5f5]">
      <div className="flex flex-col items-center gap-7">
        <p className="text-4xl font-semibold">Featured products in</p>
        <div className="flex gap-3 font-medium flex-wrap px-8 sm:px-0 justify-center">
          {[1, 2, 3].map((elem, index) => {
            return (
              <div
                className={`px-7 py-2.5 bg-white transition-all duration-150 cursor-pointer rounded-lg border-2 ${activeTab === index
                  ? 'border-[#034c8c] text-[#034c8c]'
                  : 'border-gray-300 text-black'
                  }`}
                onClick={() => handleTabClick(index)}
              >
                Engine parts
              </div>
            );
          })}
        </div>
      </div>

      <div className="px4 lg:px-28 h-[350px]">{tabComponent[activeTab]}</div>
    </div>
  );
};

const Showcase = () => {
  const splideRef = useRef();
  const slides = [1, 2, 3, 4, 5];
  const [disableStartingMovement, setDisableStartingMovement] = useState(false);
  useEffect(() => {
    if (splideRef.current?.splide) {
      const progressBar = document.querySelector('.my-carousel-progress-bar');
      splideRef.current.splide.on('mounted move', function () {
        if (!disableStartingMovement) {
          setDisableStartingMovement(true);
        }
        var end = splideRef.current.splide.Components.Controller.getEnd() + 1;
        var rate = Math.min((splideRef.current.splide.index + 1) / end, 1);
        progressBar.style.width = String(100 * rate) + '%';
      });

      if (!disableStartingMovement) {
        var rate = Math.min(1 / slides.length, 1);
        progressBar.style.width = String(100 * rate) + '%';
      }
    }
  }, [splideRef.current]);
  return (
    <div>
      <div className="flex flex-col min-[1100px]:flex-row gap-4 px-2 md:px-0 justify-center ">
        {/*  */}

        <div className="w-full sm:w-[calc(100%-30px)] min-[1100px]:w-[calc(100%-400px)] xl:w-[800px] mx-auto min-[1100px]:mx-0 h-[400px] min-[1100px]:h-auto ">
          <Splide
            hasTrack={false}
            options={{
              arrows: false
            }}
            ref={splideRef}
            className="h-full w-full max-w-full"
          >
            <SplideTrack className="h-full w-full max-w-full">
              {slides.map(() => {
                return (
                  <SplideSlide>
                    <div className="w-full rounded-md h-full  z-10    relative flex items-center ">
                      <div className="w-full h-full rounded-md -z-10 left-0 top-0 absolute bg-center bg-no-repeat bg-cover bg-[url(https://enovathemes.com/mobex/wp-content/uploads/slide-2.webp)]"></div>
                      <div className="size-[100px] rotate-[20deg] rounded-full bg-[#bf3717]  left-[70%] top-[47%]  absolute flex flex-col text-white justify-center items-center ">
                        <p className="font-medium  ">FROM</p>
                        <p className="font-semibold ">
                          <span className="text-2xl">$3</span>
                          <span className="relative left-0.5 -top-2">.09</span>
                        </p>
                      </div>

                      <div className="w-[65%] ml-5 min-[1100px]:ml-10   flex flex-col gap-y-3  text-white">
                        <div className="uppercase -ml-1.5 space-y-1 font-semibold">
                          <p className="text-7xl  ">Wiper Blades</p>
                          <p className="text-[24px] pl-1.5">
                            Keep your visions clear
                          </p>
                        </div>
                        <div className="font-medium ">
                          Plus Price Lock on 100s of lines
                        </div>
                        <div className="mt-4 bg-white gap-x-1 flex justify-center self-start text-black px-9 py-4 text-xl font-semibold cursor-pointer   rounded-md items-center">
                          <p>Shop now</p>
                          <svg
                            className="mt-[0.5px]"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                          >
                            <path
                              stroke="#000000"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m19 12-6-6m6 6-6 6m6-6H5"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                );
              })}
            </SplideTrack>
            <div className="my-carousel-progress relative -top-[4px] ">
              <div
                className={`my-carousel-progress-bar bg-[#a6c2b8] h-1 w-0 transition-all duration-300`}
              ></div>
            </div>
          </Splide>
        </div>

        {/*  */}
        <div className=" flex flex-wrap min-[1100px]:flex-nowrap justify-center min-[1100px]:flex-col  gap-4   ">
          {/*  */}
          <div className="w-[330px] rounded-md  z-10   py-4 relative h-[220px]">
            <div className="w-full h-full rounded-md bg-[#f29f05] overflow-hidden -z-10 left-0 top-0 absolute">
              <div className="  absolute h-full -right-20 w-2/3 bg-contain bg-center bg-no-repeat bg-[url(https://enovathemes.com/mobex/wp-content/uploads/banner5-img.webp)]"></div>
            </div>

            <div className="w-[65%] ml-5 h-full  flex flex-col justify-between">
              <div className="space-y-1 flex flex-col ">
                <div className="px-3 text-lg py-2 font-semibold text-white  rounded-lg self-start bg-[#bf3617]  ">
                  Top brands
                </div>
                <p className="text-[27px] font-semibold">Batteries</p>
                <p>Stay charged up!</p>
              </div>
              <div className="bg-white gap-x-1 flex justify-center self-start text-black px-3 py-3 text-xl font-semibold cursor-pointer   rounded-md items-center">
                <p>Shop now</p>
                <svg
                  className="mt-[0.5px]"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 12-6-6m6 6-6 6m6-6H5"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="w-[330px] rounded-md  z-10   py-4 relative h-[220px]">
            <div className="w-full h-full rounded-md bg-[#e9f3fb] overflow-hidden -z-10 left-0 top-0 absolute">
              <div className="  absolute h-full -right-16 top-32 w-2/3 bg-contain bg-center bg-no-repeat bg-[url(https://enovathemes.com/mobex/wp-content/uploads/banner5-img.webp)]"></div>
            </div>
            <div className="w-[65%] ml-5 h-full  flex flex-col justify-between">
              <div className="space-y-1 flex flex-col ">
                <div className="px-3 text-lg py-2.5 font-semibold text-white rounded-lg self-start bg-[#04bf33]  ">
                  Buy 3 Get 1 For Free
                </div>
                <p className="text-[27px] font-semibold">Tires & Wheels</p>
                <p>Stay safe on road!</p>
              </div>
              <div className="bg-white gap-x-1 flex justify-center self-start text-black px-3 py-3 text-xl font-semibold cursor-pointer   rounded-md items-center">
                <p>Shop now</p>
                <svg
                  className="mt-[0.5px]"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 12-6-6m6 6-6 6m6-6H5"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

const BigSaleDeal = () => {
  return (
    <div className="w-full h-auto min-[1100px]:h-[500px]  overflow-hidden gap-y-12 md:gap-y-24  bg-[#f5f8fe] px-5 pt-6 pb-12 xl:py-0 lg:px-20 xl:px-64 flex flex-col min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:justify-between ">
      <div className="flex flex-col gap-7  ">
        <div className="font-medium space-y-0">
          <p className="text-5xl font-semibold">Big Sale Deal </p>
          <p className="text-[#ffb701] text-[56px] ">Sale 40% Off</p>
        </div>
        <div className="flex gap-6 flex-wrap xl:justify-center ">
          {['Days', 'Hours', 'Minutes', 'Seconds'].map((element) => {
            return (
              <div className="size-44 shadow-sm bg-white border border-gray-200 flex flex-col items-center justify-center gap-y-3">
                <p className=" text-6xl text-[#313334]">00</p>
                <p className="text-[#a09593] ">{element}</p>
              </div>
            );
          })}
        </div>
        <div className=" bg-[#ffb701] gap-x-2   self-start flex justify-center text-white px-10 py-3.5  cursor-pointer  rounded-md items-center">
          <p>Shop now</p>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="size-[300px] relative bg-[#f0f4f9] rounded-full">
          <div className="absolute w-[300px] h-[350px] -top-[10%]  right-8 md:w-[350px] md:h-[400px] md:-top-[25%]  md:right-28 lg:w-[400px] lg:h-[450px] lg:-top-[25%]  lg:right-28 ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/041/468/920/non_2x/ai-generated-baby-safety-car-seat-isolated-on-transparent-background-png.png"
              className="w-full max-w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Banners = () => {
  return (
    <div className="  px-3  lg:px-20 xl:px-32 flex flex-col items-center gap-y-6 md:gap-y-10 lg:gap-y-14">
      <div className="w-full max-w-[1240px] h-[315px] bg-orange-500"></div>
      <div className="w-full max-w-[1240px] h-[175px] bg-orange-500"></div>
    </div>
  );
};
export default function MainBanner() {
  const [showProductsList, setShowProductsList] = useState(null);

  return (
    <div className="text-black space-y-16 ">
      <div>
        <CategoriesAndProducts
        />
        <CarSelection
          showProductsList={showProductsList}
          setShowProductsList={setShowProductsList}
        />
        <Collection />
      </div>
      <Showcase />
      <BigSaleDeal />
      <ByCategories />

      <DealZone />
      <FeaturedProducts />
      <Banners />
      {/* <Footer /> */}
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 2
};
