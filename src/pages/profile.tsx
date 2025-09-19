import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ScrollToTopButton } from "@/components/scrolltotop";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Tabs, Tab } from "@heroui/tabs";

export default function ProfilePage() {
  return (
    <DefaultLayout>
      {/* Header Section with Gradient */}
      <section className="relative w-full p-6 md:p-12 bg-[url(/sunbros.jpg)] bg-cover bg-center">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-0"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
          {/* Left: Avatar + Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <Avatar
              src="/pfpIJvadeli.png"
              alt="Profile Avatar"
              className="rounded-full border-4 border-white shadow-lg w-28 h-28 flex-shrink-0"
            />
            <div>
              <h1 className={`${title()} text-[#C59F60]`}>Solaire</h1>
              <p className={`${subtitle()} text-gray-200`}>Praise the Sun!</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center sm:justify-start">
                <Button color="primary" variant="solid">
                  Add Friend
                </Button>
                <Button color="danger" variant="ghost">
                  Block
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-100">
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm opacity-80">Mutual Hollows</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-sm opacity-80">Rated Games</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto px-6 mt-6">
        <Tabs
          aria-label="Profile Sections"
          color="primary"
          variant="underlined"
        >
          <Tab key="about" title="About">
            <div className="mt-6 text-gray-500">
              This user hasn't written any information about themselves...
            </div>
          </Tab>

          <Tab key="reviews" title="Reviews">
            <div className="mt-6 text-gray-500">
              This user has no reviews...
            </div>
          </Tab>

          <Tab key="gamelist" title="Game List">
            <div className="mt-6 text-gray-500">
              This user hasn't rated any games...
            </div>
          </Tab>
        </Tabs>
      </div>

      <ScrollToTopButton />
    </DefaultLayout>
  );
}
