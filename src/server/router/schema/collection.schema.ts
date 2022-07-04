import { gql } from "graphql-request";
import { FRAGMENT_PRODUCTS } from "./product.fragment";

export const getAllCollections = gql`
  query getAllCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
        }
      }
    }
  }
`;
export const getById = gql`
  query getCollectionById($id: ID!) {
    collection(id: $id) {
      id
      handle
      description
      descriptionHtml
      title
    }
  }
`;

export const getByIdWithProducts = gql`
  query getCollectionByIdWithProducts($id: ID!) {
    collection(id: $id) {
      id
      handle
      description
      descriptionHtml
      products(first: 100) {
        ...ProductsDetails
      }
    }
  }
  ${FRAGMENT_PRODUCTS}
`;

export const getByHandleWithProducts = gql`
  query getCollectionByHandleWithProducts($handle: String!) {
    collection(handle: $handle) {
      id
      handle
      description
      descriptionHtml
      products(first: 100) {
        ...ProductsDetails
      }
    }
  }
  ${FRAGMENT_PRODUCTS}
`;
