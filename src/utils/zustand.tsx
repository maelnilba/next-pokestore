import { ReactNode, useMemo } from "react";
import create, { EqualityChecker, StateSelector } from "zustand";
import { createContext, useContext } from "react";
import { ResponseShopify } from "server/router";
import type {
  ShopifyCreateCartMutation,
  ShopifyGetLiteCartQuery,
} from "types/shopify.type";
import { getCookie, hasCookie } from "cookies-next";

// https://codesandbox.io/s/ku82o

type StoreType = ReturnType<typeof initStore> | undefined;
let store: StoreType;
type Cart =
  | ResponseShopify<ShopifyGetLiteCartQuery>["body"]["data"]
  | ResponseShopify<ShopifyCreateCartMutation>["body"]["data"]["cartCreate"];
export const StoreContext = createContext<StoreType | null>(null);
type initialStateType = typeof initialState;
interface StoreStateType extends initialStateType {
  update: (cart: Cart) => void;
}

const initialState: { cart: Cart } = {
  cart: {
    cart: {
      id: "",
      lines: {
        nodes: [],
      },
    },
  },
};

function initStore(preloadedState = initialState) {
  return create<StoreStateType>((set, get) => ({
    ...initialState,
    ...preloadedState,
    update: (updatedCart: Cart) => {
      set({
        cart: updatedCart,
      });
    },
  }));
}

export const initializeStore = (preloadedState: initialStateType) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Zustand state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useHydrate(initialState: initialStateType | string) {
  const state =
    typeof initialState === "string" ? JSON.parse(initialState) : initialState;
  const store = useMemo(() => initializeStore(state), [state]);
  return store;
}

interface StoreProviderProps {
  children: ReactNode;
  store: StoreType;
}
export const StoreProvider: React.FC<StoreProviderProps> = ({
  children,
  store,
}) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = (
  selector: StateSelector<StoreStateType, unknown>,
  eqFn?: EqualityChecker<unknown> | undefined
) => {
  const store = useContext(StoreContext!)!;
  const values = store ? store(selector, eqFn) : undefined;

  return values as StoreStateType;
};
