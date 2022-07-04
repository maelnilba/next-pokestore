import { gql } from "graphql-request";
export const getByHandle = gql`
  query getMenuByHandle($handle: String!) {
    menu(handle: $handle) {
      items {
        items {
          id
          url
          type
          title
          resourceId
        }
        id
        url
        type
        title
        resourceId
      }
      itemsCount
      id
    }
  }
`;
