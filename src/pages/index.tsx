import BackgroundVideo from "@components/background-video";
import { BannerWithTitle } from "@components/banner";
import Carousel from "@components/carousel";
import Footer from "@components/footer";
import NavigationBar from "@components/navigation";
import { Card } from "@components/product";
import type { NextPage } from "next";
import { trpc } from "utils/trpc";

const Index: NextPage = () => {
  const {
    data: newArrivals,
    error,
    isLoading,
  } = trpc.useQuery(["products.getNewArrivals"]);

  const { data: favorites } = trpc.useQuery([
    "collections.getByHandleWithProducts",
    { handle: "favorites" },
  ]);

  return (
    <div>
      <NavigationBar />
      <div className="mb-10 flex flex-col items-center w-full">
        <BackgroundVideo />
        <div className="items-center flex flex-col px-10  w-screen">
          <BannerWithTitle
            bannerImageSrc="new-arrivals.jpeg"
            title="New arrivals"
          />
          {newArrivals && (
            <Carousel
              items={newArrivals.products.edges}
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
          )}
        </div>
        <div className="items-center flex flex-col px-10 w-screen">
          <BannerWithTitle
            bannerImageSrc="our-favorites.jpeg"
            title="Our favorites"
          />
          {favorites && favorites.collection && (
            <Carousel
              items={favorites.collection.products.edges}
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
          )}
        </div>
        <div className="divider"></div>
        <article className="prose lg:prose-xl p-4 text-justify">
          <h1>PokéStore explained etc. :</h1>
          <p>
            La Boutique Pokémon est un magasin trouvable dans la plupart des
            villes que le joueur visitera, dotée d'un toit bleu caractéristique.
            Elle permet l'achat comme la vente des objets trouvables durant la
            partie, principalement des articles de soin, des accessoires pour
            l'aventure et des Balls. Au fur et à mesure de la progression du
            joueur, la gamme d'objets proposés s'élargit et s'améliore (par
            exemple : Poké Ball ► Super Ball ► Hyper Ball). Il existe aussi dans
            chaque version du jeu un grand magasin (Centre Commercial), offrant
          </p>
          <p>
            le plus vaste choix de marchandises. À partir de la cinquième
            génération, la Boutique Pokémon a "fusionné" avec le Centre Pokémon.
            Dans la huitième génération, il y a une boutique dans chaque Centre
            Pokémon, Gare, et Stade.
          </p>
        </article>
        <div className="divider"></div>
        <div>
          <p>Recently seen</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
