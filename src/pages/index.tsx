import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Carousel from "@/components/carousel";
import CarouselTop from "@/components/carousel-top";
import DefaultLayout from "@/layouts/default";
import { ScrollToTopButton } from '@/components/scrolltotop';
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import  FeaturedCarousel from "@/components/featured.tsx"
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";

import GameShowcase from "@/components/carousel-top"; // your existing carousel

export default function HomePage() {
  const featuredGames = [
  {
    title: "Dark Souls III",
    image: "https://picsum.photos/seed/ds3/600/300",
    description: "A critically acclaimed action RPG with deep lore and combat.",
  },
  {
    title: "Hollow Knight",
    image: "https://picsum.photos/seed/hk/600/300",
    description: "Explore Hallownest, a world of adventure and mystery.",
  },
  {
    title: "Hades",
    image: "https://picsum.photos/seed/hades/600/300",
    description: "Defy the god of the dead in this award-winning roguelike.",
  },
  {
    title: "Hades",
    image: "https://picsum.photos/seed/hades/600/300",
    description: "Defy the god of the dead in this award-winning roguelike.",
  },
  {
    title: "Hades",
    image: "https://picsum.photos/seed/hades/600/300",
    description: "Defy the god of the dead in this award-winning roguelike.",
  },
];

  return (
    <main className="flex flex-col bg-background text-foreground">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-center">
        <img
          src="/sunbros.jpg"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="relative z-10 max-w-2xl flex flex-col gap-4">
          <h1 className={title()}>
            Cinder Watch
          </h1>
          <p className={subtitle()}>
            Discover, organize, and share your favorite games.
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Link href="/explorer">
            <Button color="primary" className="text-black font-medium">
              Explore
            </Button>
            </Link>
            <Link href="/about">
            <Button color="primary" variant="bordered">
              Learn More
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* RECOMMENDED */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gold-500 mb-6">
          Recommended for You
        </h2>
        <GameShowcase />
      </section>
      <Carousel titleText="Recommended"/>
      {/* FEATURED */}
      <FeaturedCarousel items={featuredGames}/>

      {/* FAVORITES */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gold-500 mb-6">Your Favorites</h2>
        <div className="space-y-4">
          {["Elden Ring", "Sekiro"].map((title, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-default-100 border border-default-200 hover:border-gold-500 rounded-lg p-4 transition"
            >
              <Avatar src={`https://picsum.photos/seed/fav${i}/100`} size="lg" />
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-default-500">
                  Recently played and ranked in your top list.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOP SELLERS */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gold-500 mb-6">Top Sellers</h2>
        <GameShowcase />
      </section>

      <Footer />
      <ScrollToTopButton />
    </main>
  );
}

