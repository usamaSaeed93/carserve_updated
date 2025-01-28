import React from 'react';
import { useQuery } from 'urql';
import CollectionProducts from './CollectionProducts';

const GET_COLLECTIONS = `
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

const FirstCollection = () => {
    const [result] = useQuery({
        query: GET_COLLECTIONS,
        variables: { count: 5 }, // Replace `5` with your desired limit or dynamic value
    });

    const { data, fetching, error } = result;

    if (fetching) return <p>Loading collections...</p>;
    if (error) return <p>Error loading collections: {error.message}</p>;

    return (
        <div>
            <h1>First Collection</h1>
            {data?.collections?.items ? (
                <CollectionProducts collections={data.collections} />
            ) : (
                <p>No collections found.</p>
            )}
        </div>
    );
};

export default FirstCollection;
