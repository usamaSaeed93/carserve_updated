import React from 'react';
import PropTypes from 'prop-types';
import ProductList from '@components/frontStore/catalog/product/list/List';
import FeaturedProducts from './FeaturedProducts';

export default function CollectionProducts({ collections }) {

  console.log("collextions", collections);
  if (!collections || collections.length === 0) {
    return <p>No collections available</p>;
  }

  return (
    <div className="pt-12">
      <div className="">
        <FeaturedProducts collections={collections} />
      </div>
    </div>
  );
}

CollectionProducts.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      collectionId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      products: PropTypes.shape({
        items: PropTypes.arrayOf(
          PropTypes.shape({
            productId: PropTypes.number.isRequired,
            sku: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.shape({
              regular: PropTypes.shape({
                value: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
              }).isRequired,
              special: PropTypes.shape({
                value: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
              }).isRequired,
            }).isRequired,
            image: PropTypes.shape({
              alt: PropTypes.string.isRequired,
              url: PropTypes.string.isRequired,
            }),
            url: PropTypes.string.isRequired,
          })
        ).isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export const query = `
  query Query($count: ID) {
    collections {
      items {
        collectionId
        name
        products(filters: [{ key: "limit", operation: eq, value: $count }]) {
          items {
            ...Product
          }
        }
      }
    }
  }
`;

export const fragments = `
  fragment Product on Product {
    productId
    name
    sku
    price {
      regular {
        value
        text
      }
      special {
        value
        text
      }
    }
    image {
      alt
      url: listing
    }
    url
  }
`;

export const variables = `{
  count: getWidgetSetting("count")
}`;
