import { gql } from "graphql-request";

export const FRAGMENT_PRODUCTS = gql`
  fragment ProductsDetails on ProductConnection {
    edges {
      node {
        id
        handle
        title
        images(first: 10) {
          edges {
            node {
              id
              url
            }
          }
        }
        priceRange {
          maxVariantPrice {
            amount
          }
          minVariantPrice {
            amount
          }
        }
        collections(first: 10) {
          edges {
            node {
              id
              handle
              title
            }
          }
        }
      }
    }
  }
`;

export const FRAGMENT_PRODUCT = gql`
  fragment ProductDetails on Product {
    id
    availableForSale
    description
    images(first: 10) {
      edges {
        node {
          id
          url
        }
      }
    }
    priceRange {
      maxVariantPrice {
        amount
      }
      minVariantPrice {
        amount
      }
    }
    options(first: 100) {
      id
      name
      values
    }
    productType
    tags
    title
  }
`;

export const FRAGMENT_PRODUCT_VARIANT = gql`
  fragment ProductVariantDetails on Product {
    id
    availableForSale
    description
    images(first: 10) {
      edges {
        node {
          id
          url
        }
      }
    }
    priceRange {
      maxVariantPrice {
        amount
      }
      minVariantPrice {
        amount
      }
    }
    productType
    tags
    title
  }
`;
