import { createRouter } from "./context";
import { z } from "zod";
import type { ResponseShopify } from ".";
import {
  ShopifyGetAllProductsQuery,
  ShopifyGetNewArrivalsQuery,
  ShopifyGetProductByHandleQuery,
  ShopifyGetProductByHandleVariantBySelectedOptionsQuery,
  ShopifyGetProductByIdQuery,
} from "types/shopify.type";
import { ProductSchema } from "./schema";
export const GetProductRouter = createRouter()
  .query("getById", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      const data = (await ctx.shopifyStore.query({
        data: { query: ProductSchema.getById, variables: { id: input.id } },
      })) as ResponseShopify<ShopifyGetProductByIdQuery>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data;
    },
  })
  .query("getByHandle", {
    input: z.object({
      handle: z.string(),
    }),
    async resolve({ input, ctx }) {
      const data = (await ctx.shopifyStore.query({
        data: {
          query: ProductSchema.getByHandle,
          variables: { handle: input.handle },
        },
      })) as ResponseShopify<ShopifyGetProductByHandleQuery>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data;
    },
  })
  // @TODO
  .query("getByHandleVariantBySelectedOptions", {
    input: z.object({
      handle: z.string(),
      selectedOptions: z
        .object({
          name: z.string(),
          value: z.string(),
        })
        .array()
        .nonempty(),
    }),
    async resolve({ input, ctx }) {
      const data = (await ctx.shopifyStore.query({
        data: {
          query: ProductSchema.getByHandleVariantBySelectedOptions,
          variables: {
            handle: input.handle,
            selectedOptions: input.selectedOptions,
          },
        },
      })) as ResponseShopify<ShopifyGetProductByHandleVariantBySelectedOptionsQuery>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data;
    },
  })
  .query("getNewArrivals", {
    async resolve({ ctx }) {
      const data = (await ctx.shopifyStore.query({
        data: { query: ProductSchema.getNewArrivals, variables: { first: 8 } },
      })) as ResponseShopify<ShopifyGetNewArrivalsQuery>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data;
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      const data = (await ctx.shopifyStore.query({
        data: { query: ProductSchema.getAll, variables: { first: 100 } },
      })) as ResponseShopify<ShopifyGetAllProductsQuery>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data;
    },
  });
