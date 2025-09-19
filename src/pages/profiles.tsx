import { useState, useEffect, useRef } from "react";
// import { Input } from "@heroui/input";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Skeleton } from "@heroui/skeleton";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";
import { ScrollToTopButton } from "@/components/scrolltotop";
import { useNavigate } from "react-router-dom";

// Mock "database" of profiles
const allProfiles = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Solaire ${i + 1}`,
  bio: `This is a description for Solaire ${i + 1}.`,
  avatar: `/avatars/avatar${(i % 6) + 1}.jpg`,
}));

export default function ProfileSearchPage() {
  const [query, setQuery] = useState("");
  const [visibleProfiles, setVisibleProfiles] = useState<typeof allProfiles>(
    []
  );
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const searchIcon = (
    <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="flex justify-end items-center"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
  );

  const filteredProfiles = allProfiles.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // Reset when search query changes
  useEffect(() => {
    setVisibleProfiles(filteredProfiles.slice(0, 12));
    setHasMore(filteredProfiles.length > 12);
  }, [query]);

  // Fake fetch with delay
  const fetchMoreProfiles = async () => {
    if (loading) return;
    setLoading(true);

    await new Promise((res) => setTimeout(res, 1500)); // simulate API delay

    setVisibleProfiles((prev) => {
      const next = filteredProfiles.slice(0, prev.length + 12);
      setHasMore(next.length < filteredProfiles.length);
      return next;
    });

    setLoading(false);
  };

  const handleClick = (id: number) => {
      navigate(`/profile#${id}`);
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
          <div className="relative">
            <input
              className="bg-[#00000055] p-3 pr-10 w-full rounded-xl focus:outline-none"
              placeholder="Search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              {searchIcon}
            </span>
          </div>
          
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-6">
          {visibleProfiles.map((profile) => (
            <Card
              isPressable
              key={profile.id}
              onPress={() => handleClick(profile.id)}
              className="bg-[#00000050] hover:bg-[#00000070] transition rounded-xl shadow-lg cursor-pointer"
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

          {/* Skeletons when loading more */}
          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <Card
                key={`skeleton-${i}`}
                className="bg-[#00000030] rounded-xl shadow-lg"
              >
                <CardBody className="flex flex-row items-center gap-4 p-4">
                  <Skeleton className="rounded-full w-12 h-12" />
                  <div className="flex flex-col gap-2 w-full">
                    <Skeleton className="h-4 w-2/3 rounded-md" />
                    <Skeleton className="h-3 w-1/2 rounded-md" />
                  </div>
                </CardBody>
              </Card>
            ))}
        </div>

        {/* Loader sentinel */}
        {hasMore && <div ref={loaderRef} className="py-6" />}

        {filteredProfiles.length === 0 && !loading && (
          <p className="text-gray-400 mt-6">No profiles found.</p>
        )}
      </section>
      <ScrollToTopButton />
    </DefaultLayout>
  );
}
