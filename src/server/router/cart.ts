import { createRouter } from "./context";
import { z } from "zod";
import { ResponseShopify } from ".";
import { CartSchema } from "./schema";
import type {
  ShopifyCartBuyerIdentityUpdateMutation,
  ShopifyCartDiscountCodesUpdateMutation,
  ShopifyCartLinesAddMutation,
  ShopifyCartLinesRemoveMutation,
  ShopifyCartLinesUpdateMutation,
  ShopifyCreateCartMutation,
  ShopifyGetLiteCartQuery,
} from "types/shopify.type";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { TRPCError } from "@trpc/server";

const COOKIE_CART_ID = "cartid";

export const GetCartRouter = createRouter()
  .middleware(async ({ ctx, next }) => {
    if (hasCookie(COOKIE_CART_ID, { req: ctx.req, res: ctx.res })) {
      return next();
    }
    const data = (await ctx.shopifyStore.query({
      data: { query: CartSchema.createCart },
    })) as ResponseShopify<ShopifyCreateCartMutation>;
    if (data.body.errors) console.error(data.body.errors);
    const id = data.body.data.cartCreate?.cart?.id;
    if (!id) {
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
    }
    setCookie(COOKIE_CART_ID, id, {
      req: ctx.req,
      res: ctx.res,
      maxAge: 86400,
    });
    return next();
  })
  .query("getCartById", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input, ctx }) {
      const data = (await ctx.shopifyStore.query({
        data: {
          query: CartSchema.getLiteCartById,
          variables: { id: input.id },
        },
      })) as ResponseShopify<ShopifyGetLiteCartQuery>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data;
    },
  })
  .query("getCart", {
    async resolve({ ctx }) {
      const cartId = getCookie(COOKIE_CART_ID, {
        req: ctx.req,
        res: ctx.res,
      })?.toString();
      const data = (await ctx.shopifyStore.query({
        data: { query: CartSchema.getLiteCartById, variables: { id: cartId } },
      })) as ResponseShopify<ShopifyGetLiteCartQuery>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data;
    },
  })
  .mutation("createCart", {
    async resolve({ ctx }) {
      const data = (await ctx.shopifyStore.query({
        data: { query: CartSchema.createCart },
      })) as ResponseShopify<ShopifyCreateCartMutation>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data.cartCreate;
    },
  })
  .mutation("cartBuyerIdentityUpdate", {
    input: z.object({
      buyerIdentity: z.object({
        email: z.string().optional(),
        phone: z.string().optional(),
        countryCode: z.string().optional(),
        customerAccessToken: z.string(),
      }),
    }),
    async resolve({ input, ctx }) {
      const cartId = getCookie(COOKIE_CART_ID, {
        req: ctx.req,
        res: ctx.res,
      })?.toString();
      const data = (await ctx.shopifyStore.query({
        data: {
          query: CartSchema.cartBuyerIdentityUpdate,
          variables: {
            cartId: cartId,
            buyerIdentity: input.buyerIdentity,
          },
        },
      })) as ResponseShopify<ShopifyCartBuyerIdentityUpdateMutation>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data.cartBuyerIdentityUpdate;
    },
  })
  .mutation("cartDiscountCodesUpdate", {
    input: z.object({
      discountCodes: z.string().array(),
    }),
    async resolve({ input, ctx }) {
      const cartId = getCookie(COOKIE_CART_ID, {
        req: ctx.req,
        res: ctx.res,
      })?.toString();
      const data = (await ctx.shopifyStore.query({
        data: {
          query: CartSchema.cartDiscountCodesUpdate,
          variables: {
            cartId: cartId,
            discountCodes: input.discountCodes,
          },
        },
      })) as ResponseShopify<ShopifyCartDiscountCodesUpdateMutation>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data.cartDiscountCodesUpdate;
    },
  })
  .mutation("cartLinesAdd", {
    input: z.object({
      lines: z
        .object({
          merchandiseId: z.string(),
          quantity: z.number().optional().default(1),
        })
        .array(),
    }),
    async resolve({ input, ctx }) {
      const cartId = getCookie(COOKIE_CART_ID, {
        req: ctx.req,
        res: ctx.res,
      })?.toString();
      const data = (await ctx.shopifyStore.query({
        data: {
          query: CartSchema.cartLinesAdd,
          variables: {
            cartId: cartId,
            lines: input.lines,
          },
        },
      })) as ResponseShopify<ShopifyCartLinesAddMutation>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data.cartLinesAdd;
    },
  })
  .mutation("cartLinesRemove", {
    input: z.object({
      linesIds: z.string().array(),
    }),
    async resolve({ input, ctx }) {
      const cartId = getCookie(COOKIE_CART_ID, {
        req: ctx.req,
        res: ctx.res,
      })?.toString();
      const data = (await ctx.shopifyStore.query({
        data: {
          query: CartSchema.cartLinesRemove,
          variables: {
            cartId: cartId,
            linesIds: input.linesIds,
          },
        },
      })) as ResponseShopify<ShopifyCartLinesRemoveMutation>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data.cartLinesRemove;
    },
  })
  .mutation("cartLinesUpdate", {
    input: z.object({
      lines: z
        .object({
          id: z.string(),
          quantity: z.number().optional().default(1),
          merchandiseId: z.string(),
        })
        .array(),
    }),
    async resolve({ input, ctx }) {
      const cartId = getCookie(COOKIE_CART_ID, {
        req: ctx.req,
        res: ctx.res,
      })?.toString();
      const data = (await ctx.shopifyStore.query({
        data: {
          query: CartSchema.cartLinesUpdate,
          variables: {
            cartId: cartId,
            lines: input.lines,
          },
        },
      })) as ResponseShopify<ShopifyCartLinesUpdateMutation>;
      if (data.body.errors) console.error(data.body.errors);
      return data.body.data.cartLinesUpdate;
    },
  });
