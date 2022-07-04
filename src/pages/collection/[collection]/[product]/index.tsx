import Footer from "@components/footer";
import NavigationBar from "@components/navigation";
import { ImagesPreview } from "@components/product";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { trpc } from "utils/trpc";

const Index: NextPage<ServerSideProps> = ({
  handleCollection,
  handleProduct,
}) => {
  const { data: product } = trpc.useQuery([
    "products.getByHandle",
    { handle: handleProduct },
  ]);
  if (!product) return <div>is loading...</div>;
  return (
    <div>
      <NavigationBar />
      <div className="mb-10 flex flex-col md:flex-row items-center justify-center">
        {product.product && (
          <ImagesPreview images={product.product.images.edges} />
        )}
      </div>
      {/* <div className="text-xs">
        {product && <pre>{JSON.stringify(product, null, 2)}</pre>}
      </div> */}
      <Footer />
    </div>
  );
};

type ServerSideProps = InferGetServerSidePropsType<typeof getServerSideProps>;
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const handleCollection = context.params?.collection as string;
  const handleProduct = context.params?.product as string;
  return {
    props: {
      handleCollection: handleCollection || "",
      handleProduct: handleProduct || "",
    },
  };
};

export default Index;
