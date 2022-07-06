import Carousel from "@components/carousel";
import Footer from "@components/footer";
import NavigationBar from "@components/navigation";
import { Card, ImagesPreview } from "@components/product";
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
  console.log(product);
  return (
    <div>
      <NavigationBar />
      {product.product && (
        <>
          <div className="mb-40 flex flex-col md:flex-row justify-center gap-20">
            <ImagesPreview images={product.product.images.edges} />
            <div className="flex flex-col flex-[0.75] gap-4">
              <div className="prose lg:prose-lg">
                <h2>{product.product.title}</h2>
                <h3>{product.product.priceRange.minVariantPrice.amount}€</h3>
              </div>
              <div className="flex flex-row gap-2">
                {product.product.options.length > 0 &&
                  product.product.options[0]?.name !== "Title" && (
                    <>
                      {product.product.options.map((option) => (
                        <div key={option.id}>
                          <label
                            htmlFor={option.name}
                            className="block mb-2 text-sm font-medium text-gray-900 "
                          >
                            Select an {option.name}
                          </label>
                          <select
                            id={option.name}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                          >
                            {option.values.map((value) => (
                              <option key={value} value={value}>
                                {value}
                              </option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </>
                  )}
              </div>
              <div className="flex justify-start">
                <button
                  className="btn gap-2 rounded-md text-base-100"
                  disabled={!product.product.availableForSale}
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to my cart
                </button>
              </div>
              <div className="prose lg:prose-lg">
                <h2>What's an {product.product.title} ?</h2>
                {product.product.description}
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className=" items-center w-screen">
            <div className="flex justify-center">
              <div className="prose lg:prose-lg ">
                <h1>Nos recommendations</h1>
              </div>
            </div>
            <Recommendations productId={product.product.id} />
          </div>
          {/* <div className="text-xs">
            {product && <pre>{JSON.stringify(product, null, 2)}</pre>}
          </div> */}
        </>
      )}
      <Footer />
    </div>
  );
};

const Recommendations: React.FC<{ productId: string }> = ({ productId }) => {
  const { data: recommendations } = trpc.useQuery([
    "products.getProductsRecommendations",
    { id: productId },
  ]);
  if (!recommendations) return <div>loading...</div>;
  return (
    <div>
      <Carousel
        items={recommendations.productRecommendations!}
        renderItem={(item) => (
          <Card
            images={item.images.edges}
            title={item.title}
            handle={item.handle}
            collections={item.collections.edges}
            priceRange={item.priceRange}
            id={item.id}
          />
        )}
      />
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
