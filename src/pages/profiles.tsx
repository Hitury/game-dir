import { useState, useEffect, useRef } from "react";
import { Input } from "@heroui/input";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Spinner } from "@heroui/spinner";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { ScrollToTopButton } from '@/components/scrolltotop';

// Mock "database" of profiles
const allProfiles = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Solaire ${i + 1}`,
  bio: `This is a description for Solaire ${i + 1}.`,
  avatar: `/avatars/avatar${(i % 6) + 1}.jpg`, // cycles through 6 avatar files
}));

export default function ProfileSearchPage() {
  const [query, setQuery] = useState("");
  const [visibleProfiles, setVisibleProfiles] = useState<typeof allProfiles>(
    []
  );
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const filteredProfiles = allProfiles.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // Reset when search query changes
  useEffect(() => {
    setVisibleProfiles(filteredProfiles.slice(0, 12));
    setHasMore(filteredProfiles.length > 12);
  }, [query]);

  // Fake fetch function (simulates API delay)
  const fetchMoreProfiles = async () => {
    if (loading) return;
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1000)); // simulate 1s delay

    setVisibleProfiles((prev) => {
      const next = filteredProfiles.slice(0, prev.length + 12);
      setHasMore(next.length < filteredProfiles.length);
      return next;
    });

    setLoading(false);
  };

  // Infinite scroll
  useEffect(() => {
    if (!loaderRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          fetchMoreProfiles();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [filteredProfiles, hasMore, loading]);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-12 w-full">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Profiles</h1>
        </div>

        {/* Search Input */}
        <div className="w-full max-w-md">
          <input
            className="bg-[#00000055] p-3 pr-10 w-full rounded-xl focus:outline-none"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-6">
          {visibleProfiles.map((profile) => (
            <Card
              key={profile.id}
              className="bg-[#00000050] hover:bg-[#00000070] transition rounded-xl shadow-lg"
            >
              <CardBody className="flex flex-row items-center gap-4 p-4">
                <Avatar
                  src={profile.avatar}
                  size="lg"
                  className="shrink-0"
                  alt={profile.name}
                />
                <div className="flex flex-col text-left">
                  <p className="text-lg font-semibold text-white">
                    {profile.name}
                  </p>
                  <p className="text-sm text-gray-300">{profile.bio}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Loader sentinel */}
        {hasMore && (
          <div ref={loaderRef} className="py-6 flex justify-center">
            {loading && <Spinner size="lg" color="warning" />}
          </div>
        )}

        {filteredProfiles.length === 0 && (
          <p className="text-gray-400 mt-6">No profiles found.</p>
        )}
      </section>
      <ScrollToTopButton />
    </DefaultLayout>
  );
}
