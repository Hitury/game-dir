import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Divider } from "@heroui/divider";
import Footer from "@/components/footer";

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
      <section className="flex flex-nowrap justify-center items-start gap-8 px-4 py-12 overflow-x-auto">
        {/* Card 1 */}
        <div className="w-[400px] flex-shrink-0 flex flex-col items-center text-center">
          <img className="w-[175px] rounded-full" src="/pfpIJvadeli.png" />
          <h1 className={title()}>IJvadeli</h1>
          <p className="text-left mt-3">
            Hello, my name is IJsbrand van de Lindt. I'm 33 years old. My house is in the northeast section of Morioh, where all the villas are, and I am not married. I work as an employee for the Kame Yu department stores, and I get home every day by 8 PM at the latest. I don't smoke, but I occasionally drink. I'm in bed by 11 PM, and make sure I get eight hours of sleep, no matter what. After having a glass of warm milk and doing about twenty minutes of stretches before going to bed, I usually have no problems sleeping until morning. Just like a baby, I wake up without any fatigue or stress in the morning. I was told there were no issues at my last check-up. I'm trying to explain that I'm a person who wishes to live a very quiet life. I take care not to trouble myself with any enemies, like winning and losing, that would cause me to lose sleep at night. That is how I deal with society, and I know that is what brings me happiness. Although, if I were to fight I wouldn't lose to anyone.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-[400px] flex-shrink-0 flex flex-col items-center text-center">
          <img className="w-[175px] rounded-full" src="/pfpHitury.png" />
          <h1 className={title()}>Hitury</h1>
          <p className="text-left mt-3">
            You’re welcome to join our discord server at any time! Also don’t forget to support us for only 5 dollars (More or less), it really helps us out and makes running this website easier. You can also take a subscription of only 1,99 euro’s per month to get a supporter role next to your username and access to our members only discord channels.
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
