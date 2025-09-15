import React, { useState } from "react";
import { Button } from "@heroui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    image: "https://picsum.photos/id/1018/600/400",
  },
  {
    title: "Celeste",
    price: "$14.99",
    description:
      "Climb a massive mountain full of tight platforming challenges and discover a heartfelt story of perseverance.",
    image: "https://picsum.photos/id/1015/600/400",
  },
  {
    title: "Dead Cells",
    price: "$24.99",
    description:
      "Fight your way through ever-changing dungeons in this roguevania full of action and discovery.",
    image: "https://picsum.photos/id/1019/600/400",
  },
  {
    title: "Ori and the Blind Forest",
    price: "$19.99",
    description:
      "A visually stunning action-platformer with emotional storytelling and fluid movement.",
    image: "https://picsum.photos/id/1021/600/400",
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

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? games.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === games.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-6 bg-[#1E1525]">
      {/* Top Sellers Title */}
      <h2 className="text-sm text-[#d4a373] mb-4 self-start">Top Sellers</h2>

      <div className="flex items-center gap-4 w-full max-w-5xl">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="p-2 bg-[#2e2237] rounded-full hover:bg-[#3a2b47] transition"
        >
          <ChevronLeft className="text-[#d4a373]" />
        </button>

        {/* Main Content */}
        <div className="flex bg-[#2e2237] shadow-lg rounded-xl overflow-hidden w-full">
          {/* Left Side - Image */}
          <div className="relative w-2/3 h-[400px] bg-black flex items-center justify-center">
            <img
              src={games[currentIndex].image}
              alt={games[currentIndex].title}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Side - Description */}
          <div className="w-1/3 bg-[#1E1525] flex flex-col justify-between p-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-[#d4a373] mb-2">
                {games[currentIndex].price}
              </p>
              <p className="text-sm text-gray-300">
                {games[currentIndex].description}
              </p>
            </div>
            <Button className="bg-[#d4a373] text-black hover:bg-[#b88a5c] mt-4 w-fit">
              Buy Now
            </Button>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="p-2 bg-[#2e2237] rounded-full hover:bg-[#3a2b47] transition"
        >
          <ChevronRight className="text-[#d4a373]" />
        </button>
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-2 mt-4">
        {games.map((game, i) => (
          <img
            key={i}
            src={game.image}
            alt={game.title}
            onClick={() => setCurrentIndex(i)}
            className={`w-16 h-16 object-cover rounded-md border cursor-pointer transition ${
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