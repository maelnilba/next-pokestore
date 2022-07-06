import { createRouter } from "./context";
import { z } from "zod";
import { MenuSchema } from "./schema";
import type { ShopifyGetMenuByHandleQuery } from "types/shopify.type";
import { ResponseShopify } from ".";

export const GetMenuRouter = createRouter().query("getByHandle", {
  input: z.object({
    handle: z.string(),
  }),
  async resolve({ input, ctx }) {
    const data = (await ctx.shopifyStore.query({
      data: {
        query: MenuSchema.getByHandle,
        variables: { handle: input.handle },
      },
    })) as ResponseShopify<ShopifyGetMenuByHandleQuery>;
    if (data.body.errors) console.error(data.body.errors);
    return data.body.data;
  },
});
