// // import React, { useState } from 'react';
// // const CategoriesAndProducts = ({ showProductsList, setShowProductsList }) => {
// //     const categories = [
// //         'LED & LIGHTENING',
// //         'EXTERIOR',
// //         'INTERIOR',
// //         'CAR CARE',
// //         'MODIFICATIONS',
// //         'GADGETS',
// //         'PAINT PROTECTION FILM',
// //         'MORE',
// //         'SALE'
// //     ];

// //     const products = [
// //         [
// //             ['first', 'second', 'third'],
// //             ['fourth', 'fifth', 'sixth'],
// //             ['seventh', 'eight', 'ninth']
// //         ],
// //         [
// //             ['another first', 'anotherrr second', 'anotherrr third'],
// //             ['another fourth', 'anotherrr fifth', 'anotherrr sixth'],
// //             ['another seventh', 'anotherrr eight', 'anotherrr ninth']
// //         ]
// //     ];

// //     // const [showProductsList, setShowProductsList] = useState(products[0]);

// //     const handleProductsList = (event, index) => {
// //         if (products[index]) {
// //             setShowProductsList(products[index]);
// //         } else {
// //             setShowProductsList(null);
// //         }
// //     };

// //     const handleMouseLeave = () => {
// //         setShowProductsList(null);
// //     };

// //     return (
// //         <div className="relative">
// //             <div className="flex text-[14px] flex-wrap justify-center  text-white gap-x-6 gap-y-5 px-3 py-4 bg-[#222222]">
// //                 {categories.map((category, index) => {
// //                     return (
// //                         <div
// //                             onMouseEnter={(event) => {
// //                                 handleProductsList(event, index);
// //                             }}
// //                             // onMouseLeave={handleMouseLeave}
// //                             className="cursor-pointer hover:text-[#ff943d] transition-all duration-200"
// //                         >
// //                             {category}
// //                         </div>
// //                     );
// //                 })}
// //             </div>

// //             {showProductsList ? (
// //                 <div
// //                     onMouseEnter={(event) => {
// //                         event.preventDefault();
// //                     }}
// //                     className="w-full md:w-[80%] absolute px-6 border-l border-r border-gray-200 py-10 text-2xl  bg-white shadow-md left-1/2 -translate-x-1/2 z-20"
// //                 >
// //                     <div className="w-full   flex flex-wrap gap-y-3 justify-between">
// //                         {showProductsList.map((productsList) => {
// //                             return (
// //                                 <div className="space-y-3  flex-grow">
// //                                     {productsList.map((product) => {
// //                                         return (
// //                                             <div className="cursor-pointer hover:text-[#ff943d] transition-all duration-300">
// //                                                 {product}
// //                                             </div>
// //                                         );
// //                                     })}
// //                                 </div>
// //                             );
// //                         })}
// //                     </div>
// //                 </div>
// //             ) : null}
// //         </div>
// //     );
// // };
// // export default CategoriesAndProducts;

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const CategoriesAndProducts = ({ categories, showProductsList, setShowProductsList }) => {
//     const handleProductsList = (event, index) => {
//         if (categories[index]?.children) {
//             setShowProductsList(categories[index].children);
//         } else {
//             setShowProductsList(null);
//         }
//     };

//     return (
//         <div className="relative">
//             <div className="flex text-[14px] flex-wrap justify-center text-white gap-x-6 gap-y-5 px-3 py-4 bg-[#222222]">
//                 {categories.map((category, index) => (
//                     <div
//                         key={category.id}
//                         onMouseEnter={(event) => handleProductsList(event, index)}
//                         className="cursor-pointer hover:text-[#ff943d] transition-all duration-200"
//                     >
//                         {category.name}
//                     </div>
//                 ))}
//             </div>

//             {showProductsList ? (
//                 <div
//                     onMouseEnter={(event) => event.preventDefault()}
//                     className="w-full md:w-[80%] absolute px-6 border-l border-r border-gray-200 py-10 text-2xl bg-white shadow-md left-1/2 -translate-x-1/2 z-20"
//                 >
//                     <div className="w-full flex flex-wrap gap-y-3 justify-between">
//                         {showProductsList.map((subCategory) => (
//                             <div key={subCategory.id} className="space-y-3 flex-grow">
//                                 <div className="cursor-pointer hover:text-[#ff943d] transition-all duration-300">
//                                     {subCategory.name}
//                                 </div>
//                                 {subCategory.children && subCategory.children.length > 0 && (
//                                     <ul className="pl-4">
//                                         {subCategory.children.map((child) => (
//                                             <li key={child.id} className="hover:text-[#ff943d] transition-all duration-300">
//                                                 {child.name}
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ) : null}
//         </div>
//     );
// };

// CategoriesAndProducts.propTypes = {
//     categories: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             children: PropTypes.arrayOf(
//                 PropTypes.shape({
//                     id: PropTypes.string.isRequired,
//                     name: PropTypes.string.isRequired,
//                     children: PropTypes.arrayOf(
//                         PropTypes.shape({
//                             id: PropTypes.string.isRequired,
//                             name: PropTypes.string.isRequired,
//                         })
//                     ),
//                 })
//             ),
//         })
//     ).isRequired,
//     showProductsList: PropTypes.array,
//     setShowProductsList: PropTypes.func.isRequired,
// };

// export default CategoriesAndProducts;
