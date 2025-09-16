import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Divider } from "@heroui/divider";
import {NumberInput} from "@heroui/react";
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
        <NumberInput
          endContent={
            <div className="flex items-center">
              <label className="sr-only" htmlFor="currency">
                Currency
              </label>
              <select
                aria-label="Select currency"
                className="outline-solid outline-transparent border-0 bg-transparent text-default-400 text-small"
                defaultValue="EUR"
                id="currency"
                name="currency"
              >
                <option aria-label="US Dollar" value="USD">
                  USD
                </option>
                <option aria-label="Japanese Yen" value="YEN">
                  ARS
                </option>
                <option aria-label="Euro" value="EUR">
                  EUR
                </option>
              </select>
            </div>
          }
          label="Price"
          placeholder="0.00"
        />
      </section>
    </DefaultLayout>
  );
}