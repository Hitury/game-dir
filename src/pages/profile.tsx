import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Divider } from "@heroui/divider";
import { ScrollToTopButton } from "@/components/scrolltotop";
import { Avatar } from "@heroui/avatar";

export default function ProfilePage() {
  return (
    <DefaultLayout>
      <section
        className="relative flex flex-col items-center justify-center p-8 md:py-16 text-center"
        style={{
          backgroundImage: 'url("/sunbros.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "75vh",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Profile Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Avatar */}
          <Avatar
            src="/avatar.png" // replace with your avatar
            alt="Profile Avatar"

            className="rounded-full border-4 border-white shadow-lg w-42 h-42"
          />

          {/* Name */}
          <h1 className={`${title()} mt-6 text-white drop-shadow-lg`}>
            Your Name
          </h1>

          {/* Bio / Subtitle */}
          <p className={`${subtitle()} text-gray-200 max-w-md mt-2`}>
            Software Developer
            <br />
            “HAMAS OVERDRIVEOOO”
          </p>
        </div>
      </section>

      {/* Divider + Scroll button */}
      <Divider className="bg-[#DB924B] h-0.5" />
      <ScrollToTopButton />
    </DefaultLayout>
  );
}
