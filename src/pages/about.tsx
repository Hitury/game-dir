import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="min-h-screen flex flex-nowrap justify-center items-start gap-8 px-4 py-12 overflow-x-auto">
        {/* Card 1 */}
        <div className="w-[400px] flex-shrink-0 flex flex-col items-center text-center">
          <img className="w-[175px] rounded-full" src="/pfpIJvadeli.png" />
          <h1 className={title()}>IJvadeli</h1>
          <p className="text-left mt-3">
            Hello, my name is IJsbrand van de Lindt. I'm 33 years old. My house is in the northeast section of Morioh...
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-[400px] flex-shrink-0 flex flex-col items-center text-center">
          <img className="w-[175px] rounded-full" src="/pfpHitury.png" />
          <h1 className={title()}>Hitury</h1>
          <p className="text-left mt-3">
            You’re welcome to join our Discord server at any time! Also don’t forget to support us for only 5 dollars...
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
