import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="min-h-screen gap-4 py-8 md:py-10">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>About</h1>
            <h2 className={subtitle()}>Learn about the awesome developers who build this website</h2>
            <div className="bg-white w-110 h-130">
              <img src="/pfpIJvadeli.png"/>
            </div>
            <div className="bg-black w-110 h-130">
              <img src="/pfpHitury.png"/>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
