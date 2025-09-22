import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Carousel from "@/components/carousel-explorer";
import CarouselTop from "@/components/carousel-top";
import DefaultLayout from "@/layouts/default";
import { ScrollToTopButton } from '@/components/scrolltotop';
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";

import GameShowcase from "@/components/carousel-top"; // your existing carousel

export default function HomePage() {
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

      {/* FEATURED */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gold-500 mb-6">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Dark Souls III", "Hollow Knight", "Hades"].map((title, i) => (
            <Card
              isHoverable
              key={i}
              className="border border-default-200 hover:border-gold-500 transition rounded-xl"
            >
              <CardBody className="flex flex-col items-center text-center p-6">
                <img
                  src={`https://picsum.photos/seed/${i}/300/200`}
                  alt={title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-default-500">
                  A critically acclaimed action RPG with deep lore and combat.
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

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

