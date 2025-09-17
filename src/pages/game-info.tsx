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
          minHeight: '75%', // 75% good enough?
        }}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black opacity-50" // Dark overlay with 50% opacity
          style={{ zIndex: 1 }} // Make sure the overlay doesn't mess up the text
        ></div>

        {/* Content */}
        <div className="relative z-10 inline-block max-w-lg text-left align-bottom">
          <h1 className={title()}>Game Info</h1>
          <h2 className={subtitle()}>Creator: IJvadeli - 5 Stars 10/10 gameplay</h2>
          <h1 className={title()}>STER STER STER STER STER</h1> {/*5 sterren :thumbs_up:*/}
        </div>
      </section>
    </DefaultLayout>
  );
}