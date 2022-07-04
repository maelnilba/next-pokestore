import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ShopifyGetMenuByHandleQuery } from "types/shopify.type";
import { trpc } from "utils/trpc";

const MenuLink: React.FC<{
  url: string;
  title: string;
  className?: string;
  currentHandle?: string;
}> = ({ url, title, className, currentHandle }) => {
  const handle = useMemo(() => {
    const absoluteShopUrl = `https://${process.env.NEXT_PUBLIC_SHOP}/`;
    if (url.includes(absoluteShopUrl)) {
      const split = url.replace(absoluteShopUrl, "").split("/");
      if (split.length > 1)
        if (split[0] === "collections") {
          return split[split.length - 1] || "/";
        }
    }
    return "/";
  }, [url]);
  return (
    <Link passHref href={`/collection/${handle}`}>
      <a
        className={`${className} ${
          currentHandle && currentHandle === handle && "font-bold"
        }`}
      >
        {title}
      </a>
    </Link>
  );
};

const CollectionsDropdown: React.FC<{
  menu: ShopifyGetMenuByHandleQuery["menu"];
}> = ({ menu }) => {
  return (
    <div className="dropdown">
      <label
        tabIndex={0}
        className="btn btn-ghost normal-case text-xl bg-transparent text-black "
      >
        Products
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {menu &&
          menu.items.map((item) => (
            <li key={item.id} tabIndex={item.items.length > 0 ? 0 : undefined}>
              <MenuLink url={item.url || ""} title={item.title} />
              {item.items.length > 0 && (
                <ul className="bg-base-100 p-2 h-max w-full shadow">
                  {item.items.map((nesteditem) => (
                    <li key={nesteditem.id}>
                      <MenuLink
                        url={nesteditem.url || ""}
                        title={nesteditem.title}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export const CollectionsList: React.FC<{
  menu: ShopifyGetMenuByHandleQuery["menu"];
  currentHandle?: string;
}> = ({ menu, currentHandle }) => {
  return (
    <div className="p-8 text-lg">
      <ul className="p-2 bg-base-100  w-52">
        {menu &&
          menu.items.map((item) => (
            <li key={item.id}>
              <MenuLink
                url={item.url || ""}
                title={item.title}
                className="hover:underline"
                currentHandle={currentHandle}
              />
              {item.items.length > 0 && (
                <ul className="bg-base-100 p-2 w-max">
                  {item.items.map((nesteditem) => (
                    <li key={nesteditem.id}>
                      <MenuLink
                        url={nesteditem.url || ""}
                        title={nesteditem.title}
                        className="hover:underline"
                        currentHandle={currentHandle}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
const NavigationBar: React.FC = () => {
  const { data: menu } = trpc.useQuery([
    "menu.getByHandle",
    { handle: "collections" },
  ]);
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  return (
    <div
      className={`navbar px-8 z-10 bg-base-100 bg-transparent ${
        goingUp ? "sticky" : "relative"
      } top-0`}
    >
      <div className="flex-0 mr-6">
        <a className="normal-case font-bold text-3xl text-black hidden md:block">
          PokeStore
        </a>
      </div>
      <div className="flex-1 items-start ">
        <Link passHref href="/">
          <a className="btn btn-ghost normal-case text-xl text-black ">Home</a>
        </Link>
        <CollectionsDropdown menu={menu?.menu} />
      </div>
      <div className="flex-none gap-6">
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
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
