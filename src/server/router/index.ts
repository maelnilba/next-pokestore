// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { GetCollectionRouter } from "./collections";
import { GetProductRouter } from "./products";
import { GetMenuRouter } from "./menu";
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
  .merge("menu.", GetMenuRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
