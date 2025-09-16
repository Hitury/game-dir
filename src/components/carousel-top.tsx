import { useState } from "react";
import { Button } from "@heroui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Game = {
  title: string;
  price: string;
  description: string;
  image: string;
};

const games: Game[] = [
  {
    title: "Hollow Knight",
    price: "$19.99",
    description:
      "Venture into the vast depths of Hallownest, a ruined kingdom full of challenges, mysteries, and powerful foes.",
    image: "hk.webp",
  },
  {
    title: "ELDEN RING",
    price: "$59.99",
    description:
      "In Elden Ring, the player, a Tarnished, must traverse the Lands Between to collect the shattered runes of the Elden Ring and become the next Elden Lord.",
    image: "eldenring.avif",
  },
  {
    title: "Dark Souls III",
    price: "$59.99",
    description:
      "In Dark Souls III, the Age of Fire is ending as the First Flame begins to fade, and the player, an Unkindled warrior, must find and force the Lords of Cinder—previous heroes who linked the flame—to return to their thrones to rekindle it and prevent the world's descent into a prolonged Age of Dark.",
    image: "ds3.png",
  },
  {
    title: "Balatro",
    price: "$14.99",
    description:
      "Balatro is a poker-inspired roguelike deck builder all about creating powerful synergies and winning big. Combine valid poker hands with unique Joker cards in order to create varied synergies and builds.",
    image: "balatro.png",
  },
  {
    title: "Hades",
    price: "$29.99",
    description:
      "Defy the god of the dead as you hack and slash your way out of the Underworld in this award-winning roguelike.",
    image: "https://picsum.photos/id/1025/600/400",
  },
];

export default function GameShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? games.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === games.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center justify-center text-white p-4 sm:p-6">
      {/* Top Sellers Title */}
      <h2 className="text-lg sm:text-xl font-bold text-[#DB924B] mb-4 self-start">
        Top Sellers
      </h2>

      <div className="flex items-center gap-2 sm:gap-4 w-full max-w-6xl">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="p-2 hover:bg-[#DB924B] bg-[#db934b9b] transition rounded-full shrink-0"
        >
          <ChevronLeft className="text-black" />
        </button>

        {/* Main Content */}
        <div className="relative flex flex-col md:flex-row bg-[#00000050] shadow-lg rounded-xl overflow-hidden w-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              className="flex flex-col md:flex-row w-full h-full"
              custom={direction}
              initial={{ opacity: 0, x: direction === "right" ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction === "right" ? -100 : 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-2/3 h-48 sm:h-64 md:h-auto flex items-center justify-center bg-black">
                <img
                  src={games[currentIndex].image}
                  alt={games[currentIndex].title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Description Section */}
              <div className="w-full md:w-1/3 bg-[#00000050] flex flex-col justify-between p-4 sm:p-6 md:justify-center">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {games[currentIndex].title}
                  </h3>
                  <p className="text-[#d4a373] mb-2">
                    {games[currentIndex].price}
                  </p>
                  <p className="text-sm sm:text-base text-gray-300 line-clamp-5">
                    {games[currentIndex].description}
                  </p>
                </div>
                <Button className="bg-[#DB924B] text-black hover:bg-[#b88a5c] mt-4 w-fit">
                  Buy Now
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="p-2 hover:bg-[#DB924B] bg-[#db934b9b] transition rounded-full shrink-0"
        >
          <ChevronRight className="text-black" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {games.map((game, i) => (
          <img
            key={i}
            src={game.image}
            alt={game.title}
            onClick={() => {
              setDirection(i > currentIndex ? "right" : "left");
              setCurrentIndex(i);
            }}
            className={`w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-md border cursor-pointer transition ${
              currentIndex === i
                ? "border-[#d4a373]"
                : "border-gray-700 hover:border-[#d4a373]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}