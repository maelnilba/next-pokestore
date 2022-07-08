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
import { CollectionSchema, MenuSchema } from "server/router/schema";
import { shopifyStore } from "server/shopify/client";
import type { ShopifyGetAllCollectionsQuery } from "types/shopify.type";
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

  await ssg.fetchQuery("menu.getByHandle", {
    handle: "collections",
  });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      handleCollection,
    },
    revalidate: 1,
  };
}

interface Path {
  collection: string;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const collections = (await shopifyStore.query({
    data: {
      query: CollectionSchema.getAllCollections,
      variables: { first: 250 },
    },
  })) as ResponseShopify<ShopifyGetAllCollectionsQuery>;
  let paths: Path[] = [];
  if (collections.body.data.collections) {
    for (const collection of collections.body.data.collections.edges) {
      paths = [
        ...paths,
        {
          collection: collection.node.handle,
        },
      ];
    }
  }

  return {
    paths: paths.map((path) => ({
      params: {
        collection: path.collection,
      },
    })),
    fallback: "blocking",
  };
};

export default Index;
