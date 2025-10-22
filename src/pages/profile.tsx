import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ScrollToTopButton } from "@/components/scrolltotop";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { Tabs, Tab } from "@heroui/tabs";
import { Skeleton } from "@heroui/skeleton";
import { useEffect, useState } from "react";
import { useDisclosure } from "@heroui/react";
import ConfirmBlockModal from "@/components/block-modal.tsx";
import { useParams } from "react-router-dom";
import supabase from "@/auth/baseClient";

interface Profile {
  id: string;
  username: string;
  avatar_url?: string;
  // Add other fields as they exist in your profiles table
}

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { username } = useParams<{ username: string }>();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setError("No username provided");
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log("Fetching profile for username:", username);
        
        const { data, error } = await supabase
          .from("profiles") // Changed to match your table name
          .select("*")
          .eq("username", username)
          .single();

        console.log("Supabase response:", { data, error });

        if (error) {
          console.error("Supabase error:", error);
          if (error.code === 'PGRST116') {
            setError("User not found");
          } else {
            setError("Failed to load profile");
          }
          setProfile(null);
        } else {
          console.log("Profile found:", data);
          setProfile(data);
          setError(null);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load profile");
        setProfile(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [username]);

  const handleConfirmBlock = () => {
    console.log("User blocked!");
  };

  // Error state
  if (!loading && error) {
    return (
      <DefaultLayout>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h1 className={`${title()} text-red-400 mb-4`}>Error 404</h1>
          <p className="text-gray-500 mb-6">{error}</p>
          <p className="text-gray-400 text-sm mb-6">
            Tried to find user: "{username}"
          </p>
          <Button color="primary" onPress={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </DefaultLayout>
    );
  }

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
            {loading ? (
              <Skeleton className="rounded-full w-28 h-28" />
            ) : (
              <Avatar
                src={profile?.avatar_url || "/pfpIJvadeli.png"}
                alt="Profile Avatar"
                className="rounded-full border-4 border-white shadow-lg w-28 h-28 flex-shrink-0"
              />
            )}

            <div>
              {loading ? (
                <>
                  <Skeleton className="h-6 w-40 mb-2 rounded" />
                  <Skeleton className="h-4 w-32 mb-4 rounded" />
                </>
              ) : (
                <>
                  <h1 className={`${title()} text-[#C59F60]`}>
                    {profile?.username || "Unknown User"}
                  </h1>
                  <p className={`${subtitle()} text-gray-200`}>
                    @{profile?.username}
                  </p>
                </>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center sm:justify-start">
                {loading ? (
                  <>
                    <Skeleton className="h-10 w-24 rounded" />
                    <Skeleton className="h-10 w-24 rounded" />
                  </>
                ) : (
                  <>
                    <Button color="primary" variant="solid">
                      Add Friend
                    </Button>
                    <Button color="danger" variant="ghost" onPress={onOpen}>
                      Block
                    </Button>
                  </>
                )}
              </div>
              <ConfirmBlockModal
                isOpen={isOpen}
                onClose={onClose}
                onConfirm={handleConfirmBlock}
              />
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-100">
            {loading ? (
              <>
                <Skeleton className="h-6 w-16 rounded" />
                <Skeleton className="h-6 w-16 rounded" />
              </>
            ) : (
              <>
                <div className="text-center">
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm opacity-80">Friends</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm opacity-80">Rated Games</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="max-w-6xl mx-auto px-6 mt-6">
        {loading ? (
          <div className="flex flex-col gap-4">
            <Skeleton className="h-10 w-32 rounded" />
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-2/3 rounded" />
          </div>
        ) : (
          <Tabs
            aria-label="Profile Sections"
            color="primary"
            variant="underlined"
            classNames={{
              base: "w-full",
              tabList:
                "gap-6 w-full relative rounded-none p-0 border-b border-[#DB924B]/30 bg-black/0",
              cursor: "w-full bg-[#DB924B]",
              tab: "max-w-fit h-12",
              tabContent:
                "group-data-[selected=true]:text-[#DB924B] text-gray-400 font-medium transition-colors",
            }}
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
        )}
      </div>

      <ScrollToTopButton />
    </DefaultLayout>
  );
}