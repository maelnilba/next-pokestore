import Carousel from "@components/carousel";
import { Card, ImagesPreview, SelectVariant } from "@components/product";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { trpc } from "utils/trpc";
import { useStore } from "utils/zustand";

const Index: NextPage<ServerSideProps> = ({
  handleCollection,
  handleProduct,
}) => {
  const router = useRouter();
  const { query } = router;
  const { variant } = query;
  const { update } = useStore((store) => ({
    update: store.update,
  }));

  const { data: product } = trpc.useQuery([
    "products.getProductVariantsByHandle",
    { handle: handleProduct },
  ]);

  const selectedVariant = useMemo(() => {
    if (!product) return undefined;
    if (!product.product) return undefined;
    if (typeof variant !== "string") return product.product.variants.edges[0]!;
    else {
      return (
        product.product.variants.edges.find((edge) =>
          edge.node.id.includes(variant)
        ) || product.product.variants.edges[0]!
      );
    }
  }, [product, variant]);
  const { mutate: addCart } = trpc.useMutation(["cart.cartLinesAdd"], {
    onSuccess: (data) => {
      data && update(data);
    },
  });
  const handleAddCart = (productId: string) => {
    addCart({
      lines: [
        {
          merchandiseId: productId,
        },
      ],
    });
  };
  if (!product) return <div>is loading...</div>;
  return (
    <div>
      {product.product && (
        <>
          <div className="mb-40 flex flex-col md:flex-row justify-center gap-20">
            <ImagesPreview images={product.product.images.edges} />
            <div className="flex flex-col flex-[0.75] gap-4 mx-8 sm:mx-4">
              <div className="prose lg:prose-lg">
                <h2>{product.product.title}</h2>
                <h3>{selectedVariant?.node.priceV2.amount}€</h3>
              </div>
              <div className="flex flex-row gap-2">
                {product.product.options.length > 0 &&
                  product.product.options[0]?.name !== "Title" && (
                    <SelectVariant
                      options={product.product.options}
                      variants={product.product.variants.edges.map((edge) => {
                        return {
                          id: edge.node.id,
                          selectedOptions: edge.node.selectedOptions,
                        };
                      })}
                      currentVariantOptions={
                        selectedVariant?.node.selectedOptions
                      }
                    />
                  )}
              </div>
              <div className="flex justify-start">
                <button
                  className="btn gap-2 rounded-md text-base-100"
                  disabled={!product.product.availableForSale}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!selectedVariant) return;
                    handleAddCart(selectedVariant.node.id);
                  }}
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
                <h1>Our recommendations</h1>
              </div>
            </div>
            <Recommendations productId={product.product.id} />
          </div>
        </>
      )}
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
