import Shopify, { ApiVersion } from "@shopify/shopify-api";
Shopify.Context.initialize({
  API_KEY: process.env.API_KEY || "",
  API_SECRET_KEY: process.env.API_SECRET_KEY || "",
  SCOPES: [process.env.SCOPES || ""],
  HOST_NAME: (process.env.HOST || "").replace(/https?:\/\//, ""),
  HOST_SCHEME: process.env.HOST_SCHEME,
  IS_EMBEDDED_APP: false,
  API_VERSION: ApiVersion.April22, // all supported versions are available, as well as "unstable" and "unversioned"
});

// https://shopify.dev/api/admin-rest/2022-04/resources/customer#post-customers
// https://github.com/Maxvien/graphql-code-generator-for-shopify-example/blob/master/src/index.ts
export const shopifyStore = new Shopify.Clients.Storefront(
  process.env.NEXT_PUBLIC_SHOP || "",
  process.env.NEXT_PUBLIC_API_STOREFRONT_KEY
);

// Storing the currently active shops in memory will force them to re-login when your server restarts. You should
// persist this object in your app.
const ACTIVE_SHOPIFY_SHOPS: { [key: string]: string | undefined } = {};
