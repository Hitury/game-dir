import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Divider } from "@heroui/divider";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
          <h1 className={subtitle()}>Learn about the awesome developers who build this website</h1>
        </div>
      </section>
      <Divider className="my-4 bg-[#DB924B] h-0.5" />
      <h1 className={title()}>Our Team:</h1>
      <section className="flex flex-nowrap justify-center items-start gap-8 px-4 py-12 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Card 1 */}
        <div className="w-[50%] bg-[#00000050] p-[15px] h-[650px] flex-shrink-0 flex flex-col items-center text-center">
          <img className="w-[175px] rounded-full" src="/pfpIJvadeli.png" />
          <h1 className={title()}>IJvadeli</h1>
          <p className="text-left mt-3">
            Hey! I am IJvadeli.<br/><br/>
            I am a passionate developer and gamer, and I love creating cool projects like this website.
            When I'm not coding, you can find me exploring new games or sharing my gaming experiences with friends.<br/><br/>
            Skills:<br/>- JavaScript<br/>- TypeScript<br/>- React<br/>- Next.js<br/>- Node.js<br/>- HTML, CSS<br/>- Git<br/>- GitHub<br/>

          </p>
        </div>

        {/* Card 2 */}
        <div className="w-[50%] bg-[#00000050] p-[15px] h-[650px] flex-shrink-0 flex flex-col items-center text-center">
          <img className="w-[175px] rounded-full" src="/pfpHitury.png" />
          <h1 className={title()}>Hitury</h1>
          <p className="text-left mt-3">
            HOLA PAPUM
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
