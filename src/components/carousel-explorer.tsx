import { useRef } from "react";

const items = [ // Praise the Sun!
  { id: 1, title: "Placeholder", image: "/praisethesun.jpg" },
  { id: 2, title: "Placeholder", image: "/praisethesun.jpg" },
  { id: 3, title: "Placeholder", image: "/praisethesun.jpg" },
  { id: 4, title: "Placeholder", image: "/praisethesun.jpg" },
  { id: 5, title: "Placeholder", image: "/praisethesun.jpg" },
  { id: 6, title: "Placeholder", image: "/praisethesun.jpg" },
  { id: 7, title: "Placeholder", image: "/praisethesun.jpg" },
  { id: 8, title: "Placeholder", image: "/praisethesun.jpg" },
  { id: 9, title: "Placeholder", image: "/praisethesun.jpg" },
  { id: 10, title: "Placeholder", image: "/praisethesun.jpg" },
];

export default function SnappingCarousel() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // No useEffect is needed; the carousel will default to the starting position.
  // We also no longer need to clone the items array.

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollAmount = container.clientWidth; // Scroll by the full container width

    if (direction === "left") {
      // Scroll left. The browser will automatically stop at the beginning.
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      // For right scroll, check if we are near the end.
      // A 1px buffer is added to account for potential sub-pixel rounding.
      const isAtEnd =
        container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;

      if (isAtEnd) {
        // If at the end, smoothly scroll back to the very beginning.
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Otherwise, just scroll to the right.
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  // The onScroll handler has been removed as it's no longer necessary.

  return (
    <div className="relative w-full max-w-5xl mx-auto mb-15 mt-5">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-[#DB924B] p-2 rounded-full shadow-lg hover:bg-[#DB924B] focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#000000]"
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
        className="flex overflow-x-auto scroll-smooth no-scrollbar space-x-4 px-10"
      >
        {/* We now map over the original `items` array */}
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[150px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg bg-[#00000050]"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-center font-semibold text-lg">{item.title}</div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-[#DB924B] p-2 rounded-full shadow-lg hover:bg-[#DB924B]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#000000]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}