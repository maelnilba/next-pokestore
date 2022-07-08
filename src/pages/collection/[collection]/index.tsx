import Gallery from "@components/gallery";
import { CollectionsList } from "@components/navigation";
import { Card } from "@components/product";
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { appRouter, ResponseShopify } from "server/router";
import { MenuSchema } from "server/router/schema";
import { shopifyStore } from "server/shopify/client";
import type { ShopifyGetMenuByHandleQuery } from "types/shopify.type";
import { createSSGHelpers } from "@trpc/react/ssg";
import { trpc } from "utils/trpc";
import superjson from "superjson";

const Index: NextPage<StaticProps> = ({ handleCollection }) => {
  const { data: menu } = trpc.useQuery([
    "menu.getByHandle",
    { handle: "collections" },
  ]);
  const { data: collection } = trpc.useQuery([
    "collections.getByHandleWithProducts",
    { handle: handleCollection },
  ]);
  return (
    <div>
      <div className="mb-10 flex flex-col md:flex-row">
        <div className="md:sticky md:top-10 h-max">
          {menu && (
            <CollectionsList
              menu={menu.menu}
              currentHandle={handleCollection}
            />
          )}
        </div>
        <div className="gap-y-10 flex flex-col items-center mt-10 w-full">
          {collection && collection.collection && (
            <div className="flex flex-col items-center">
              <article className="prose lg:prose-lg px-4">
                <h3>{collection.collection?.description}</h3>
              </article>
              <div className="divider"></div>
              <Gallery
                items={collection.collection.products.edges}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

type StaticProps = InferGetStaticPropsType<typeof getStaticProps>;
export async function getStaticProps(
  context: GetStaticPropsContext<{ collection: string }>
) {
  const ssg = await createSSGHelpers({
    router: appRouter,
    ctx: {
      req: null as any,
      res: null as any,
      shopifyStore: shopifyStore,
    },
    transformer: superjson,
  });
  const handleCollection = context.params?.collection as string;

  await ssg.fetchQuery("collections.getByHandleWithProducts", {
    handle: handleCollection,
  });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      handleCollection,
    },
    revalidate: 1,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const getHandle = (url: string) => {
    const absoluteShopUrl = `https://${process.env.NEXT_PUBLIC_SHOP}/`;
    if (url.includes(absoluteShopUrl)) {
      const split = url.replace(absoluteShopUrl, "").split("/");
      if (split.length > 1)
        if (split[0] === "collections") {
          return split[split.length - 1] || "/";
        }
    }
    return "/";
  };
  const collections = (await shopifyStore.query({
    data: {
      query: MenuSchema.getByHandle,
      variables: { handle: "collections" },
    },
  })) as ResponseShopify<ShopifyGetMenuByHandleQuery>;
  if (collections.body.errors) console.error(collections.body.errors);

  return {
    paths: collections.body.data.menu!.items.map((item) => ({
      params: {
        collection: getHandle(item.url),
      },
    })),
    // https://nextjs.org/docs/basic-features/data-fetching#fallback-blocking
    fallback: "blocking",
  };
};

export default Index;
