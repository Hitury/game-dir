import { subtitle, title } from "@/components/primitives";
import { Navbar } from "@/components/navbar";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Avatar } from "@heroui/avatar";
import { ScrollToTopButton } from "@/components/scrolltotop";
import TabFunc from "@/components/tabs";

export default function DocsPage() {
  return (
    <main className="flex flex-col bg-background text-foreground">
      <Navbar />

      {/* GAME HEADER - now the top area */}
      <section className="relative flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-15 w-full mx-auto bg-black/40 border-b border-[#DB924B]/30 mt-6">
        {/* Game Icon */}
        <Avatar
          src="/sunbros.jpg"
          size="lg"
          radius="sm"
          className="border border-[#DB924B]/50"
        />

        {/* Title + Metadata */}
        <div className="flex flex-col flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white">ELDEN RING</h1>
          <h2 className="text-sm md:text-base text-gray-400">
            Soulslike • RPG • Alexander
          </h2>
          <div className="mt-2 text-xl text-[#DB924B]">★ ★ ★ ★ ☆</div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button className="bg-[#C59F60] text-black hover:bg-[#b88a5c]">
            Play Now
          </Button>
          <Button
            variant="bordered"
            className="border-[#C59F60] text-[#C59F60]"
          >
            Follow
          </Button>
        </div>
      </section>

      {/* DIVIDER */}

      {/* TABS SECTION */}
      <section className="px-4 py-8">
        <TabFunc />
      </section>

      {/* CONTENT GRID */}
      <section className="max-w-6xl mx-auto px-4 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Content (media/overview) */}
        <div className="lg:col-span-2 bg-black/40 rounded-xl p-4 border border-[#DB924B]/20">
          <img
            src="/sunbros.jpg"
            alt="Gameplay Preview"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-300 text-sm">
            Explore vast worlds, fight bosses, and uncover mysteries. Illuvium
            offers deep RPG mechanics with stunning visuals and engaging combat.
          </p>
        </div>

        {/* Right Content (stats / sidebar) */}
        <div className="bg-black/40 rounded-xl p-4 border border-[#DB924B]/20">
          <h3 className="text-lg font-semibold text-[#DB924B] mb-2">
            Player Stats
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Active Players: 12,158,249</li>
            <li>Peak Online: 1,245,012</li>
            <li>Followers: 854,231</li>
          </ul>
        </div>
      </section>

      <ScrollToTopButton />
    </main>
  );
}
