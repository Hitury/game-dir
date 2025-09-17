import { useState } from "react";
import { Input } from "@heroui/input";
import { Card, CardBody } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

// Example profiles (replace with API later)
const profiles = [
  { id: 1, name: "Solaire of Astora", bio: "Loyal knight who praises the sun.", avatar: "/avatars/solaire.jpg" },
  { id: 2, name: "Siegmeyer of Catarina", bio: "Onion knight with a big heart.", avatar: "/avatars/siegmeyer.jpg" },
  { id: 3, name: "Knight Artorias", bio: "The Abysswalker, a fallen hero.", avatar: "/avatars/artorias.jpg" },
  { id: 4, name: "Maiden Astraea", bio: "A saint corrupted by the Valley of Defilement.", avatar: "/avatars/astraea.jpg" },
  { id: 5, name: "Gwyndolin", bio: "The last-born deity of Anor Londo.", avatar: "/avatars/gwyndolin.jpg" },
  { id: 6, name: "Oscar of Astora", bio: "Knight who gives the player the Estus Flask.", avatar: "/avatars/oscar.jpg" },
  { id: 7, name: "Lady Maria of the Astral Clocktower", bio: "A hunter of hunters bound to her oath.", avatar: "/avatars/maria.jpg" },
  { id: 8, name: "Gehrman", bio: "The first hunter, mentor in the Hunter’s Dream.", avatar: "/avatars/gehrman.jpg" },
  { id: 9, name: "Malenia, Blade of Miquella", bio: "An Empyrean and unmatched warrior.", avatar: "/avatars/malenia.jpg" },
  { id: 10, name: "Ranni the Witch", bio: "Mysterious Lunar Princess who seeks her own fate.", avatar: "/avatars/ranni.jpg" },
  { id: 11, name: "The Nameless King", bio: "God of War who allied with the storm drakes.", avatar: "/avatars/namelessking.jpg" },
  { id: 12, name: "Patches the Hyena", bio: "The trickster who betrays at every chance.", avatar: "/avatars/patches.jpg" },
  { id: 13, name: "Hitury", bio: "Biggest elden ring glazer to date", avatar: "/pfpHitury.png" },
  { id: 14, name: "IJvadeli", bio: "Kippie is mijn pookie", avatar: "/pfpIJvadeli.png" },
];


export default function ProfileSearchPage() {
  const [query, setQuery] = useState("");

  const filteredProfiles = profiles.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

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
          {filteredProfiles.map((profile) => (
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

        {filteredProfiles.length === 0 && (
          <p className="text-gray-400 mt-6">No profiles found.</p>
        )}
      </section>
    </DefaultLayout>
  );
}
