import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Divider } from "@heroui/divider";
import { ScrollToTopButton } from "@/components/scrolltotop";
import TabFunc from "@/components/tabs";

export default function DocsPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-end gap-4 p-8 md:p-12 h-[75vh] text-white"
        style={{
          backgroundImage: 'url("/sunbros.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className={title()}>Game Info</h1>
          <h2 className={subtitle()}>
            Creator: IJvadeli — 5 Stars, 10/10 gameplay
          </h2>
          {/* Rating Display */}
          <div className="mt-4 text-2xl text-[#DB924B]">
            ★ ★ ★ ★ ☆
          </div>
        </div>
      </section>

      {/* Divider */}
      <Divider className="bg-[#DB924B] h-0.5" />

      {/* Tabs Section */}
      <section className="max-w-6xl">
        <TabFunc />
      </section>

      {/* Scroll Button */}
      <ScrollToTopButton />
    </DefaultLayout>
  );
}
