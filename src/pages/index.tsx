import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          {/* <span className={title()}>Make&nbsp;</span> */}

          
          <span className={title({ color: "yellow" })}>Cinder Watch&nbsp;</span>
          <br />
          {/* <span className={title()}>
            websites regardless of your design experience.
          </span> */}
          <div className={subtitle({ class: "mt-4" })}>
            The Game Library for discovering, organizing, and sharing your favorite games.
          </div>
        </div>
        
        <div className="flex justify-center flex-col absolute">
          <div className="flex justify-center z-[-1] opacity-40 mb-[-16px]">
            <img src="public/sunbros.jpg" className=""></img>
            
          </div>
          <Divider className="my-4 bg-[#DB924B] h-0.5"/>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "md",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Explore
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
