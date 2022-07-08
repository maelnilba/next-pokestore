import BackgroundVideo from "@components/background-video";
import { BannerWithTitle } from "@components/banner";
import Carousel from "@components/carousel";
import { Card } from "@components/product";
import type { NextPage } from "next";
import { trpc } from "utils/trpc";

const Index: NextPage = () => {
  const { data: newArrivals } = trpc.useQuery(["products.getNewArrivals"]);

  const { data: favorites } = trpc.useQuery([
    "collections.getByHandleWithProducts",
    { handle: "favorites" },
  ]);

  return (
    <div>
      <div className="mb-10 flex flex-col items-center w-full">
        <BackgroundVideo />
        <div className="items-center flex flex-col px-10  w-screen">
          <BannerWithTitle
            bannerImageSrc="new-arrivals.jpeg"
            title="New arrivals"
          />
          {newArrivals && (
            <Carousel
              items={newArrivals.products.edges}
              renderItem={(item) => (
                <Card
                  images={item.node.images.edges}
                  title={item.node.title}
                  handle={item.node.handle}
                  collections={item.node.collections.edges}
                  priceRange={item.node.priceRange}
                  id={item.node.id}
                />
              )}
            />
          )}
        </div>
        <div className="items-center flex flex-col px-10 w-screen">
          <BannerWithTitle
            bannerImageSrc="our-favorites.jpeg"
            title="Our favorites"
          />
          {favorites && favorites.collection && (
            <Carousel
              items={favorites.collection.products.edges}
              renderItem={(item) => (
                <Card
                  images={item.node.images.edges}
                  title={item.node.title}
                  handle={item.node.handle}
                  collections={item.node.collections.edges}
                  priceRange={item.node.priceRange}
                  id={item.node.id}
                />
              )}
            />
          )}
        </div>
        <div className="divider"></div>
        <article className="prose lg:prose-xl p-4 text-justify">
          <h1>PokéStore explained etc. :</h1>
          <p>
            This is a prototype-ish e-shop website with NextJS and Shopify as
            back API, rather than the front solution offer by Shopify. The goal
            is to allow other usecases. Currently in work in progress.
          </p>
          <p>
            Remains todos: - SSG with tRPC for all pages (only collections and
            products right now) - Account and Checkout - Footer pages -
            LocalStorage recently seen
          </p>
        </article>
        <div className="divider"></div>
        <div>
          <p>Recently seen</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
