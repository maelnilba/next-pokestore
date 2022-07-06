import type { NextPage } from "next";
import { trpc } from "utils/trpc";
import { useStore } from "utils/zustand";
import shallow from "zustand/shallow";

const Index: NextPage = () => {
  const { update, cart } = useStore(
    (store) => ({
      cart: store.cart,
      update: store.update,
    }),
    shallow
  );
  const { data } = trpc.useQuery(["cart.getCart"], {
    onSuccess: (data) => {
      update(data);
    },
  });

  //   const { mutate } = trpc.useMutation(["cart.createCart"], {
  //     onSuccess: (data) => {
  //       update(data);
  //     },
  //   });
  //   const handleClick = () => {
  //     mutate();
  //   };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* <button className="btn" onClick={handleClick}>
        click me
      </button> */}
      <div>
        <p>Test middleware</p>
        {data && (
          <code className="text-xs">{JSON.stringify(data, null, 2)}</code>
        )}
      </div>

      <div className="text-xs">
        <p>Cart:</p>
        <code>{JSON.stringify(cart, null, 2)}</code>
      </div>
    </div>
  );
};

export default Index;
