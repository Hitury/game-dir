import { useRef } from "react";

const items = [
  { id: 1, title: "Card 1", image: "https://picsum.photos/id/1015/400/250" },
  { id: 2, title: "Card 2", image: "https://picsum.photos/id/1016/400/250" },
  { id: 3, title: "Card 3", image: "https://picsum.photos/id/1018/400/250" },
  { id: 4, title: "Card 4", image: "https://picsum.photos/id/1020/400/250" },
  { id: 5, title: "Card 5", image: "https://picsum.photos/id/1021/400/250" },
  { id: 6, title: "Card 6", image: "https://picsum.photos/id/1022/400/250" },
];

export default function NetflixCarousel() {
  // 👇 Type ref correctly as HTMLDivElement
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // 👇 Explicit type for direction
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 px-10"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[250px] flex-shrink-0 rounded-xl overflow-hidden shadow-md bg-white"
          >
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-3 text-center font-medium">{item.title}</div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-white/70 p-2 rounded-full shadow hover:bg-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}