import React, { useState, useEffect } from 'react';
import { useQuery } from 'urql';

const GET_CATEGORIES = `
  query GetCategories {
    categories {
      items {
        categoryId
        name
        description
        image {
          url
          alt
        }
        url
        children {
          categoryId
          name
          description
          image {
            url
            alt
          }
          url
          children {
            categoryId
            name
            description
            image {
              url
              alt
            }
            url
          }
        }
      }
    }
  }
`;

const CategoriesAndProducts = () => {
    const [result] = useQuery({ query: GET_CATEGORIES });
    const { data, fetching, error } = result;

    const [categories, setCategories] = useState([]);
    const [showProductsList, setShowProductsList] = useState(null);

    // Update categories when new data is available
    useEffect(() => {
        if (data && data.categories && data.categories.items) {
            console.log("data", data);
            setCategories(data.categories.items);
        }
    }, [data]);

    const handleProductsList = (event, category) => {
        if (category?.children) {
            setShowProductsList(category.children);
        } else {
            setShowProductsList(null);
        }
    };
    const handleMouseLeave = () => {
        setShowProductsList(null);
    };
    if (fetching) return <p className="text-center text-gray-500">Loading categories...</p>;
    if (error) return <p className="text-center text-red-500">Failed to load categories: {error.message}</p>;

    return (
        <div className="relative" onMouseLeave={handleMouseLeave}>
            <div className="flex text-[14px] flex-wrap justify-center text-white gap-x-6 gap-y-5 px-3 py-4 bg-[#222222]">
                {categories?.map((category) => (
                    <div
                        key={category.categoryId}
                        onMouseEnter={(event) => handleProductsList(event, category)}
                        className="cursor-pointer hover:text-[#ff943d] transition-all duration-200"
                    >
                        {category.name}
                    </div>
                ))}
            </div>

            {showProductsList ? (
                <div
                    onMouseEnter={(event) => event.preventDefault()}
                    className="w-full md:w-[80%] absolute px-6 border-l border-r border-gray-200 py-10 text-2xl bg-white shadow-md left-1/2 -translate-x-1/2 z-20"
                >
                    <div className="w-full flex flex-wrap gap-y-3 justify-between">
                        {showProductsList.map((subCategory) => (
                            <div key={subCategory.categoryId} className="space-y-3 flex-grow">
                                <a href={subCategory.url} className="cursor-pointer hover:text-[#ff943d] transition-all duration-300">
                                    {subCategory.name}
                                </a>
                                {subCategory.children && subCategory.children.length > 0 && (
                                    <ul className="pl-4">
                                        {subCategory.children.map((child) => (
                                            <li key={child.categoryId}>
                                                <a
                                                    href={child.url}
                                                    className="hover:text-[#ff943d] transition-all duration-300"
                                                >
                                                    {child.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default CategoriesAndProducts;
