import Footer from "@components/footer";
import Gallery from "@components/gallery";
import NavigationBar, { CollectionsList } from "@components/navigation";
import { Card } from "@components/product";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { trpc } from "utils/trpc";

const Index: NextPage<ServerSideProps> = ({ handleCollection }) => {
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
      <NavigationBar />
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
      <Footer />
    </div>
  );
};
// To do SSG later, SSR too consuming and work not well
// https://trpc.io/docs/ssg
type ServerSideProps = InferGetServerSidePropsType<typeof getServerSideProps>;
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const handleCollection = context.params?.collection as string;
  return {
    props: {
      handleCollection: handleCollection || "",
    },
  };
};

export default Index;
