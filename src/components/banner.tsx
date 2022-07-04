import Image from "next/future/image";

interface BannerWithTitleProps {
  title: string;
  bannerImageSrc: string;
}

export const BannerWithTitle: React.FC<BannerWithTitleProps> = ({
  title,
  bannerImageSrc,
}) => {
  return (
    <div className="relative w-full">
      <div className="w-full">
        <Image
          src={`/assets/images/${bannerImageSrc}`}
          priority={true}
          className="w-full max-h-60 object-cover rounded-xl"
        />
      </div>
      <div className="prose lg:prose-2xl absolute left-16 top-16 ">
        <h1 className="text-white text-drop-shadow">{title}</h1>
      </div>
    </div>
  );
};
