import Image from "next/future/image";
import Link from "next/link";
import { useMemo } from "react";
import { useQueryClient } from "react-query";
import { trpc } from "utils/trpc";

export const CardDropdown = () => {
  const client = useQueryClient();

  const { data: cart } = trpc.useQuery(["cart.getCart"], {
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  const { mutate: removeCart } = trpc.useMutation(["cart.cartLinesRemove"], {
    onSuccess: (data) => {
      data && client.setQueryData("cart.getCart", data);
    },
  });

  const handleRemoveCart = (lineId: string) => {
    removeCart({
      lineIds: [lineId],
    });
  };
  const linesCount = useMemo(() => cart?.cart?.lines.nodes.length || 0, [cart]);
  const subTotal = useMemo(
    () =>
      cart?.cart?.lines.nodes.reduce(
        (acc, line) =>
          (acc += +line.merchandise.priceV2.amount * line.quantity),
        0
      ) || 0,
    [cart]
  );
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">{linesCount}</span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="mt-3 card card-compact dropdown-content w-max bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="font-bold text-lg">{linesCount} Items</span>
          <div className="flex flex-col gap-4">
            {cart?.cart &&
              cart?.cart.lines.nodes.map((line) => (
                <Link
                  href={`/collection/${line.merchandise.product.collections.nodes[0]?.handle}/${line.merchandise.product.handle}`}
                  passHref
                  key={line.id}
                >
                  <button className="btn btn-ghost gap-2  bg-base-200  rounded-lg ">
                    <b>{line.quantity}</b>
                    <div className="flex items-center gap-2 flex-1">
                      <Image
                        src={line.merchandise.image?.url || ""}
                        className="w-10 h-auto"
                      />
                      <p className="flex flex-row gap-2">
                        <span>{line.merchandise.product.title}</span>
                        <span>
                          {line.merchandise.title !== "Default Title" &&
                            line.merchandise.title}
                        </span>
                      </p>
                    </div>
                    <div
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
                        viewBox="0 0 20 20"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              ))}
          </div>
          <span className="text-info">Subtotal: {subTotal}Є</span>
          <div className="card-actions">
            <Link href="/cart" passHref>
              <a className="btn btn-primary btn-block">View cart</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
