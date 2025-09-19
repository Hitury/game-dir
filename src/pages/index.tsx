import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { Divider } from "@heroui/divider";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Carousel from "@/components/carousel-explorer";
import CarouselTop from "@/components/carousel-top";
import DefaultLayout from "@/layouts/default";
import { ScrollToTopButton } from '@/components/scrolltotop';
import Footer from "@/components/footer";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          {/* <span className={title()}>Make&nbsp;</span> */}

          <span className={title()}>Cinder Watch&nbsp;</span>
          <br />
          {/* <span className={title()}>
            websites regardless of your design experience.
          </span> */}
          <div className={subtitle({ class: "mt-4" })}>
            The Game Library for discovering, organizing, and sharing your
            favorite games.
          </div>
        </div>

        <div className="flex justify-center flex-col absolute">
          <div className="flex justify-center z-[-1] opacity-40 mb-[-16px]">
            <img src="/sunbros.jpg" className=""></img>
          </div>
          <Divider className="my-4 bg-[#DB924B] h-0.5" />
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "md",
              className: "text-xl font-semibold p-[30px] bg-[#c59f5e]",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Explore
          </Link>
        </div>
      </section>
      <div className="mt-100"></div>
      {/* Div containing Carousels with Games */}
      <div className="text-center">
        <h1 className={title()}>Recommended for You</h1>
        <Carousel />
        <h1 className={title()}>Featured</h1>
        <Carousel />
        <h1 className={title()}>Favorites</h1>
        <Carousel />
        <Divider className="mt-28 mb-8 bg-[#DB924B] h-0.5" />
        <CarouselTop />
      </div>
      <ScrollToTopButton />
      <Footer />
    </DefaultLayout>
    
  );
}
