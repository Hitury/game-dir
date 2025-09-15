import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="min-h-screen gap-4 py-8 md:py-10">
        <div className="flex flex-row justify-center items-center">
         <div className="text-center w-250 h-130">
            <img className="w-[175px] rounded-full" src="/pfpIJvadeli.png"/>
            <h1 className={title()}>IJvadeli</h1>
          </div>
          <div className="text-center w-250 h-130">
            <img className="w-[175px] rounded-full" src="/pfpHitury.png"/>
            <h1 className={title()}>Hitury</h1>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
