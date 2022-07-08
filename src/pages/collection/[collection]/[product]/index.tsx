import Carousel from "@components/carousel";
import { QuantityInput } from "@components/input";
import { Card, ImagesPreview, SelectVariant } from "@components/product";
import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import { appRouter, ResponseShopify } from "server/router";
import { shopifyStore } from "server/shopify/client";
import { CollectionSchema } from "server/router/schema";
import type { ShopifyGetAllCollectionsWithProductQuery } from "types/shopify.type";
import { createSSGHelpers } from "@trpc/react/ssg";
import { trpc } from "utils/trpc";
import superjson from "superjson";
import { useQueryClient } from "react-query";

const Index: NextPage<StaticProps> = ({ handleCollection, handleProduct }) => {
  const router = useRouter();
  const { query } = router;
  const { variant } = query;
  const client = useQueryClient();

  const [quantity, setQuantity] = useState(1);

  const { data: product } = trpc.useQuery([
    "products.getProductVariantsByHandle",
    { handle: handleProduct },
  ]);

  const { mutate: addCart } = trpc.useMutation(["cart.cartLinesAdd"], {
    onSuccess: (data) => {
      data && client.setQueryData("cart.getCart", data);
    },
  });

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

  const handleAddCart = useCallback((productId: string, quantity: number) => {
    addCart({
      lines: [
        {
          merchandiseId: productId,
          quantity,
        },
      ],
    });
  }, []);
  const handleQuantity = (q: number) => {
    setQuantity(q);
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
              <QuantityInput
                quantity={quantity}
                onChange={handleQuantity}
                rangeQuantity={{ max: 20, min: 1 }}
                label="Quantity"
              />
              <div className="flex justify-start">
                <button
                  className="btn gap-2 rounded-md text-base-100"
                  disabled={!product.product.availableForSale}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!selectedVariant) return;
                    handleAddCart(selectedVariant.node.id, quantity);
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

type StaticProps = InferGetStaticPropsType<typeof getStaticProps>;
export async function getStaticProps(
  context: GetStaticPropsContext<{ collection: string; product: string }>
) {
  const ssg = await createSSGHelpers({
    router: appRouter,
    ctx: {
      req: null as any,
      res: null as any,
      shopifyStore: shopifyStore,
    },
    transformer: superjson, // optional - adds superjson serialization
  });
  const handleCollection = context.params?.collection as string;
  const handleProduct = context.params?.product as string;

  await ssg.fetchQuery("products.getProductVariantsByHandle", {
    handle: handleProduct,
  });

  return {
    props: {
      trpcState: ssg.dehydrate(),
      handleCollection,
      handleProduct,
    },
    revalidate: 1,
  };
}

interface Path {
  collection: string;
  product: string;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const collections = (await shopifyStore.query({
    data: {
      query: CollectionSchema.getAllCollectionsWithProduct,
      variables: { first: 250 },
    },
  })) as ResponseShopify<ShopifyGetAllCollectionsWithProductQuery>;
  let paths: Path[] = [];
  if (collections.body.data.collections) {
    for (const collection of collections.body.data.collections.edges) {
      for (const product of collection.node.products.nodes) {
        paths = [
          ...paths,
          { collection: collection.node.handle, product: product.handle },
        ];
      }
    }
  }

  return {
    paths: paths.map((path) => ({
      params: {
        collection: path.collection,
        product: path.product,
      },
    })),
    fallback: "blocking",
  };
};

export default Index;
