import { useRef } from "react";
import { Card, CardBody } from "@heroui/card";

const items = [
  { id: 1, title: "Dark Souls III", image: "/praisethesun.jpg" },
  { id: 2, title: "Hollow Knight", image: "/praisethesun.jpg" },
  { id: 3, title: "Hades", image: "/praisethesun.jpg" },
  { id: 4, title: "Balatro", image: "/praisethesun.jpg" },
  { id: 5, title: "Bloodborne", image: "/praisethesun.jpg" },
  { id: 6, title: "Sekiro", image: "/praisethesun.jpg" },
];

function SnappingCarousel({ titleText }: { titleText: string }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth * 0.9; // almost full row width

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      const isAtEnd =
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 1;

      if (isAtEnd) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gold-500 mb-6">{titleText}</h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gold-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory space-x-4"
      >
        {items.map((item) => (
          <div key={item.id} className="snap-center">
            <Card isHoverable isPressable className="bg-black/10 border border-default-200 hover:border-gold-500 transition rounded-xl min-w-[220px] sm:min-w-[250px] lg:min-w-[280px]">
              <CardBody className="flex flex-col items-center text-center p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-default-500">
                  A critically acclaimed action RPG.
                </p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gold-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
}

export default SnappingCarousel;
