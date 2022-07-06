import { createRouter } from "./context";
import { z } from "zod";
import type {
  ShopifyGetAllCollectionsQuery,
  ShopifyGetCollectionByHandleWithProductsQuery,
  ShopifyGetCollectionByIdQuery,
  ShopifyGetCollectionByIdWithProductsQuery,
} from "types/shopify.type";
import type { ResponseShopify } from ".";
import { CollectionSchema } from "./schema";

// https://shopify.dev/graphiql/storefront-graphiql
// https://pokestore-next.myshopify.com/admin/apps/shopify-graphiql-app

export const GetCollectionRouter = createRouter()
  .query("getById", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      const data = (await ctx.shopifyStore.query({
        data: { query: CollectionSchema.getById, variables: { id: input.id } },
      })) as ResponseShopify<ShopifyGetCollectionByIdQuery>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data;
    },
  })
  .query("getByIdWithProducts", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      const data = (await ctx.shopifyStore.query({
        data: {
          query: CollectionSchema.getByIdWithProducts,
          variables: { id: input.id },
        },
      })) as ResponseShopify<ShopifyGetCollectionByIdWithProductsQuery>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data;
    },
  })
  .query("getByHandleWithProducts", {
    input: z.object({
      handle: z.string(),
    }),
    async resolve({ input, ctx }) {
      const data = (await ctx.shopifyStore.query({
        data: {
          query: CollectionSchema.getByHandleWithProducts,
          variables: { handle: input.handle },
        },
      })) as ResponseShopify<ShopifyGetCollectionByHandleWithProductsQuery>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data;
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      const data = (await ctx.shopifyStore.query({
        data: {
          query: CollectionSchema.getAllCollections,
          variables: { first: 100 },
        },
      })) as ResponseShopify<ShopifyGetAllCollectionsQuery>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data;
    },
  });
