import Image from "next/future/image";
import type { NextPage } from "next";
import { useCallback, useMemo } from "react";
import { trpc } from "utils/trpc";
import { QuantityInput } from "@components/input";
import { useQueryClient } from "react-query";

const Index: NextPage = () => {
  const client = useQueryClient();

  const { data: cart } = trpc.useQuery(["cart.getCart"], {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  const { mutate: removeCart } = trpc.useMutation(["cart.cartLinesRemove"], {
    onSuccess: (data) => {
      data && client.setQueryData("cart.getCart", data);
      // data && update(data);
    },
  });

  const { mutate: updateCart } = trpc.useMutation(["cart.cartLinesUpdate"], {
    onSuccess: (data) => {
      data && client.setQueryData("cart.getCart", data);
      // data && update(data);
    },
  });

  const handleRemoveCart = (lineId: string) => {
    removeCart({
      lineIds: [lineId],
    });
  };

  const subTotal = useMemo(
    () =>
      cart?.cart?.lines.nodes.reduce(
        (acc, line) =>
          (acc += +line.merchandise.priceV2.amount * line.quantity),
        0
      ) || 0,
    [cart]
  );
  const handleQuantity = useCallback(
    (q: number, lineId: string, merchandiseId: string) => {
      //
      updateCart({
        lines: [{ id: lineId, merchandiseId, quantity: q }],
      });
    },
    []
  );

  if (!cart) return <div>is loading...</div>;

  return (
    <div className="flex flex-col gap-4 bg-base-100 p-10 ">
      <div className="text-4xl font-bold">Your cart</div>
      <div className="flex flex-row gap-2 items-center p-2 justify-center ">
        <div className="flex flex-[2] items-center gap-4">
          <p className="flex flex-row gap-2 text-lg lg:text-2xl font-bold">
            <span>Product</span>
          </p>
        </div>
        <div className="flex flex-1 gap-2 justify-end">
          <span>Quantity</span>
        </div>
        <div className="flex flex-1 gap-2 text-lg lg:text-2xl justify-end">
          <p>Total</p>
        </div>
      </div>
      <div className="divider"></div>
      {cart.cart && (
        <div className="flex flex-col gap-2">
          {cart.cart.lines.nodes.map((line) => (
            <div
              key={line.id}
              className="flex flex-row gap-2 items-center p-2 rounded-lg"
            >
              <div className="flex flex-[2] items-center gap-4">
                <Image
                  src={line.merchandise.image?.url || ""}
                  className="w-20 h-auto"
                />
                <p className="flex flex-row gap-2 text-lg lg:text-2xl font-bold">
                  <span>{line.merchandise.product.title}</span>
                  <span>
                    {line.merchandise.title !== "Default Title" &&
                      line.merchandise.title}
                  </span>
                </p>
              </div>
              <div className="flex flex-1 gap-2 justify-end">
                <QuantityInput
                  quantity={line.quantity}
                  onChange={(p) =>
                    // should use something like debounce
                    handleQuantity(p, line.id, line.merchandise.id)
                  }
                  rangeQuantity={{ max: 20, min: 1 }}
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveCart(line.id);
                  }}
                  className="p-2 bg-base-200 rounded-lg hover:bg-base-100 active:bg-base-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex flex-1 gap-2 text-lg lg:text-2xl justify-end">
                <p>{+line.merchandise.priceV2.amount * line.quantity}€</p>
              </div>
            </div>
          ))}
          <div className="divider"></div>
          <div className="flex flex-col items-end gap-2">
            <div className="text-xl font-normal ">
              <b>Subtotal: {subTotal}€</b>
            </div>
            <button className="btn btn-ghost bg-base-200 rounded-sm">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
