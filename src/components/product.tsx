import Link from "next/link";
import Image from "next/future/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

interface TImage {
  node: {
    id?: string | null | undefined;
    url: string;
  };
}

interface TCollection {
  node: {
    id: string;
    handle: string;
    title?: string;
  };
}

interface TPriceRange {
  maxVariantPrice: {
    amount: string;
  };
  minVariantPrice: {
    amount: string;
  };
}

interface CardProps {
  isNew?: boolean;
  discount?: number;
  images: TImage[];
  title: string;
  priceRange: TPriceRange;
  id: string | number;
  handle: string;
  collections: TCollection[];
}
export function Card(props: CardProps) {
  const url = useMemo(
    () =>
      props.collections[0]
        ? `/collection/${props.collections[0].node.handle}/${props.handle}`
        : `/product/${props.handle}`,
    [props.collections, props.handle]
  );
  return (
    <Link passHref href={url}>
      <article className="card w-80 bg-base-100 shadow-xl cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
        <figure>
          <Image
            src={props.images[0]?.node.url || ""}
            width="200px"
            height="200px"
            className="w-[200px] h-[200px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl">
            {props.title}
            {props.isNew && <div className="badge badge-secondary">NEW</div>}
          </h2>
          <div className="flex gap-2 text-base">
            <div className="">From</div>
            <div className="">{props.priceRange.minVariantPrice.amount}€</div>
          </div>
        </div>
      </article>
    </Link>
  );
}

interface ImagesPreviewProps {
  images: {
    node: {
      id?: string | null | undefined;
      url: string;
    };
  }[];
}
// Might find a way to use ONLY css, or at least use css for preview on hover
export function ImagesPreview(props: ImagesPreviewProps) {
  const firstImage = useMemo(
    () => props.images[0] || { node: { id: "", url: "" } },
    [props]
  );
  const [activeImage, setActiveImage] = useState<
    ImagesPreviewProps["images"][number] | null
  >(firstImage);
  useEffect(() => {
    setActiveImage(firstImage);
  }, [firstImage]);
  if (!props.images) return <div>display no image found</div>;
  return (
    <div className="flex flex-row w-max gap-4 m-2 flex-[1] justify-end">
      <div className="w-max flex flex-col gap-2 ">
        {props.images.map((image, index) => (
          <Image
            src={image.node.url}
            key={image.node.id || index}
            onClick={() => setActiveImage(image)}
            className={`w-20 p-2 ${
              activeImage?.node.id === image.node.id
                ? "ring-2 opacity-100"
                : "opacity-60"
            } rounded-lg bg-base-200 h-auto hover:opacity-100 cursor-pointer block`}
          />
        ))}
      </div>
      <div className="w-auto h-auto bg-base-200 rounded-lg p-8">
        <Image
          src={activeImage?.node.url || props.images[0]?.node.url || ""}
          className="object-cover w-80 h-auto"
        />
      </div>
    </div>
  );
}

interface SelectVariantProps {
  options: {
    id: string;
    name: string;
    values: string[];
  }[];
  variants: {
    id: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
  }[];
  currentVariantOptions:
    | {
        name: string;
        value: string;
      }[]
    | undefined;
}
export const SelectVariant = ({
  options,
  variants,
  currentVariantOptions,
}: SelectVariantProps) => {
  const router = useRouter();
  const { query } = router;
  return (
    <>
      {options.map((option, index) => (
        <div key={option.id}>
          <label
            htmlFor={option.name}
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Select an {option.name}
          </label>
          <select
            onChange={(e) => {
              if (!currentVariantOptions) return;
              let _currentOptions = [...currentVariantOptions];
              if (!_currentOptions) return;
              _currentOptions[index] = {
                name: option.name,
                value: e.target.value,
              };
              let selected = variants.find(
                (edge) =>
                  JSON.stringify(edge.selectedOptions) ===
                  JSON.stringify(_currentOptions)
              );
              if (!selected) return;
              router.replace({
                pathname: router.pathname,
                query: {
                  ...query,
                  ["variant"]: selected.id.split("/").slice(-1)[0],
                },
              });
            }}
            defaultValue={
              currentVariantOptions && currentVariantOptions[index]?.value
            }
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
  );
};
