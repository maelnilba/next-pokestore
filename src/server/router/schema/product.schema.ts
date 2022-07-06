import { gql } from "graphql-request";
import {
  FRAGMENT_PRODUCT,
  FRAGMENT_PRODUCTS,
  FRAGMENT_PRODUCT_VARIANT,
} from "./product.fragment";

export const getAll = gql`
  query getAllProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

export const getById = gql`
  query getProductById($id: ID!) {
    product(id: $id) {
      ...ProductDetails
    }
  }
  ${FRAGMENT_PRODUCT}
`;

export const getByHandle = gql`
  query getProductByHandle($handle: String!) {
    product(handle: $handle) {
      ...ProductDetails
    }
  }
  ${FRAGMENT_PRODUCT}
`;

export const getByHandleVariantBySelectedOptions = gql`
  query getProductByHandleVariantBySelectedOptions(
    $handle: String!
    $selectedOptions: [SelectedOptionInput!]!
  ) {
    product(handle: $handle) {
      id
      variantBySelectedOptions(selectedOptions: $selectedOptions) {
        id
        priceV2 {
          amount
        }
        product {
          ...ProductVariantDetails
        }
      }
    }
  }
  ${FRAGMENT_PRODUCT_VARIANT}
`;

export const getNewArrivals = gql`
  query getNewArrivals($first: Int!) {
    products(first: $first, sortKey: CREATED_AT, reverse: true) {
      ...ProductsDetails
    }
  }
  ${FRAGMENT_PRODUCTS}
`;

export const getProductsRecommendations = gql`
  query getProductsRecommendations($id: ID!) {
    productRecommendations(productId: $id) {
      id
      images(first: 1) {
        edges {
          node {
            url
            id
          }
        }
      }
      title
      priceRange {
        minVariantPrice {
          amount
        }
        maxVariantPrice {
          amount
        }
      }
      handle
      collections(first: 1) {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
  }
`;
