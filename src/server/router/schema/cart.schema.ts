import { gql } from "graphql-request";
import { FRAGMENT_CART } from "./cart.fragment";

export const createCart = gql`
  mutation createCart {
    cartCreate(
      input: {
        attributes: { key: "cart_attribute", value: "This is a cart attribute" }
      }
    ) {
      cart {
        ...CartDetails
      }
    }
  }
  ${FRAGMENT_CART}
`;

export const cartBuyerIdentityUpdate = gql`
  mutation cartBuyerIdentityUpdate(
    $cartId: ID!
    $buyerIdentity: CartBuyerIdentityInput!
  ) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        ...CartDetails
      }
    }
  }
  ${FRAGMENT_CART}
`;

export const cartDiscountCodesUpdate = gql`
  mutation cartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!]) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      cart {
        ...CartDetails
      }
    }
  }
  ${FRAGMENT_CART}
`;

export const cartLinesAdd = gql`
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartDetails
      }
    }
  }
  ${FRAGMENT_CART}
`;

export const cartLinesRemove = gql`
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartDetails
      }
    }
  }
  ${FRAGMENT_CART}
`;

export const cartLinesUpdate = gql`
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartDetails
      }
    }
  }
  ${FRAGMENT_CART}
`;

export const getLiteCartById = gql`
  query getLiteCart($id: ID!) {
    cart(id: $id) {
      ...CartDetails
    }
  }
  ${FRAGMENT_CART}
`;
