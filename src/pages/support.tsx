import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Divider } from "@heroui/divider";
import { Card, CardHeader, CardBody } from "@heroui/card";
import NumberInput from "@/components/numberinput";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Support</h1>
          <h1 className={subtitle()}>
            For those who want to support our website!
          </h1>
        </div>
      </section>

      <Divider className="my-4 bg-[#DB924B] h-0.5" />

      <section className="px-4 md:px-12">
        <span>
          You’re welcome to join our discord server at any time! Also don’t
          forget to support us for only 1,99 dollars (More or less), it really
          helps us out and makes running this website easier. You can also take
          a subscription which includes the following:
          <ul className="list-disc list-inside mt-2">
            <li>Supporter Role next to your profile</li>
            <li>No more ads (3 Months of membership disables ads permanently)</li>
            <li>Access to our members only channels in the discord</li>
            <li>Able to post reviews on games</li>
          </ul>
        </span>

        <div className="flex flex-col md:flex-row justify-center gap-8 mt-10">
          {/* Donation Card */}
          <Card className="w-full md:w-1/2 p-10 bg-[#00000050] rounded-xl shadow-lg">
            <CardHeader className="flex justify-center">
              <h1 className={title()}>Enter a Price</h1>
            </CardHeader>
            <CardBody className="flex flex-col items-center gap-3">
              <NumberInput />
              <p className="text-red-300">Minimum = $1,99</p>
              <p className="text-green-300">
                Any donation higher than $4,99 disables ads
              </p>
            </CardBody>
          </Card>

          {/* Supporter Subscription Card */}
          <Card className="w-full p-10 md:w-1/2 bg-[#00000050] rounded-xl shadow-lg">
            <CardHeader className="flex justify-center">
              <h1 className={title()}>Become a Supporter</h1>
            </CardHeader>
            <CardBody className="flex flex-col items-center gap-3">
              <NumberInput />
              <p className="text-red-300">Monthly = $1,99</p>
              <p className="text-green-300">Yearly = $17,91 (SAVE 25%)</p>
            </CardBody>
          </Card>
        </div>
      </section>
    </DefaultLayout>
  );
}