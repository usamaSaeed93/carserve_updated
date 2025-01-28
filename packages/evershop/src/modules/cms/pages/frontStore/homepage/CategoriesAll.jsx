import React from 'react';
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

const CategoriesMenu = () => {
    const [result] = useQuery({ query: GET_CATEGORIES });
    const { data, fetching, error } = result;
    console.log(data);

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const renderCategories = (categories) =>
        categories.map((category) => (
            <div key={category.categoryId}>
                <h3>{category.name}</h3>
                {category.children && category.children.length > 0 && (
                    <div className="subcategories">
                        {renderCategories(category.children)}
                    </div>
                )}
            </div>
        ));

    return <div>{renderCategories(data.categories)}</div>;
};

export default CategoriesMenu;
