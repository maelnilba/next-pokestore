import Link from "next/link";
import Image from "next/future/image";
import { useEffect, useMemo, useState } from "react";

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
    amount: any;
  };
  minVariantPrice: {
    amount: any;
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
      url: any;
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
          src={activeImage?.node.url || props.images[0]?.node.url}
          className="object-cover w-80 h-auto"
        />
      </div>
    </div>
  );
}
