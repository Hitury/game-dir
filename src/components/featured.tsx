// components/FeaturedCarousel.tsx
import { useState } from "react";
import { Card, CardBody } from "@heroui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

type FeaturedCarouselProps = {
  items: { title: string; image: string; description: string }[];
  cardsPerView?: number; // make it configurable
};

export default function FeaturedCarousel({
  items,
  cardsPerView = 3,
}: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure we don't scroll past the last item
  const maxIndex = Math.max(0, items.length - cardsPerView);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gold-500 mb-6">Featured</h2>

      <div className="relative">
        {/* Row */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)` }}
          >
            {items.map((game, i) => (
              <div
                key={i}
                className={`min-w-[250px] sm:min-w-[300px] lg:min-w-[350px] px-2`}
              >
                <Card isHoverable isPressable className=" bg-black/10 border border-default-200 hover:border-gold-500 transition rounded-xl h-full">
                  <CardBody className="flex flex-col items-center text-center p-6">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">{game.title}</h3>
                    <p className="text-sm text-default-500">{game.description}</p>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full disabled:opacity-40"
        >
          <ChevronLeft className="text-white" />
        </button>
        <button
          onClick={next}
          disabled={currentIndex === maxIndex}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full disabled:opacity-40"
        >
          <ChevronRight className="text-white" />
        </button>
      </div>
    </section>
  );
}
