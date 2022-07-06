import { gql } from "graphql-request";

export const FRAGMENT_CART = gql`
  fragment CartDetails on Cart {
    id
    lines(first: 100) {
      nodes {
        merchandise {
          ... on ProductVariant {
            id
            priceV2 {
              amount
            }
            title
            image {
              url
              id
            }
            product {
              handle
              id
            }
          }
        }
        quantity
      }
    }
  }
`;
