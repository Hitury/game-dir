import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Divider } from "@heroui/divider";
import NumberInput from "@/components/numberinput";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Support</h1>
          <h1 className={subtitle()}>For those who want to support our website!</h1>
        </div>
      </section>
      <Divider className="my-4 bg-[#DB924B] h-0.5" />
      <section>
        <span>
          You’re welcome to join our discord server at any time! Also don’t forget to support us for only 1,99 dollars (More or less), it really helps us out and makes running this website easier. You can also take a subscription which includes the following:
          <ul>
            <li>- Supporter Role next to your profile</li>
            <li>- No more ads (3 Months of membership disables ads permenantly)</li>
            <li>- Access to our members only channels in the discord</li>
            <li>- Able to post reviews on games</li>
          </ul>
        </span>
        <div className="flex justify-center">
          <div className="flex w-[100vh] text-center items-center">
            <div className="my-[20px] w-1/2 flex justify-center flex-col items-center gap-3">
              <h1 className={title()}>Enter a Price</h1> 
              <NumberInput />
              <p className="text-red-300">Minimum = $1,99</p>
              <p className="text-green-300">Any donation higher than $4,99 disables ads</p>
            </div>
            <div className="my-[20px] w-1/2 flex justify-center flex-col items-center gap-3">
              <h1 className={title()}>Become a Supporter</h1> 
              <NumberInput />
              <p className="text-red-300">Monthly = $1,99</p>
              <p className="text-green-300">Yearly = $17,91 (SAVE 25%)</p>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}