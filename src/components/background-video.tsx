import { useState, useEffect } from "react";

const BackgroundVideo = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <section className="flex bg-transparent justify-center items-center w-full h-screen overflow-hidden">
      {isLoaded && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="true"
          className="object-cover w-full h-full absolute top-0 left-0 block "
          src="/assets/medias/teaser.mp4"
        />
      )}
      <div className="prose lg:prose-2xl z-[1] text-center bg-clip-text text-[#3a3a3a] mix-blend-color-burn opacity-100  ">
        <h1>PokeStore</h1>
        <h4>
          <b>
            <em>Everything</em>
          </b>{" "}
          you need.
        </h4>
      </div>
    </section>
  );
};

export default BackgroundVideo;
