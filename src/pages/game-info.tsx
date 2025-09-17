import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section
        className="relative flex flex-col items-center justify-center gap-4 py-8 md:py-10"
        style={{
          backgroundImage: 'url("/sunbros.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '75%', // Optional: Set a minimum height
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black opacity-50" // Dark overlay with 50% opacity
          style={{ zIndex: 1 }} // Ensure it's above the background
        ></div>

        {/* Content */}
        <div className="relative z-10 inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Game Info</h1>
          <h2 className={subtitle()}>Creator: IJvadeli - 5 Stars 10/10 gameplay</h2>
          <h1 className={title()}>STER STER STER STER STER</h1> {/*5 sterren :thumbs_up:*/}
        </div>
      </section>
    </DefaultLayout>
  );
}