// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { GetCollectionRouter } from "./collections";
import { GetProductRouter } from "./products";
import { GetMenuRouter } from "./menu";
import { GetCartRouter } from "./cart";
export interface ResponseShopify<T> {
  body: {
    data: T;
    errors?: any;
  };
  headers: object;
}
export const appRouter = createRouter()
  .transformer(superjson)
  .merge("collections.", GetCollectionRouter)
  .merge("products.", GetProductRouter)
  .merge("menu.", GetMenuRouter)
  .merge("cart.", GetCartRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
