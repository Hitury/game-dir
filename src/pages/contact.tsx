import { subtitle, title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Input from "@/components/form";
import { Divider } from "@heroui/divider";
import Footer from "@/components/footer";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center w-[100vh]">
          <h1 className={title()}>Contact</h1>
          <h1 className={subtitle()}>Any questions..?</h1>
        </div>
        <Divider className="my-4 bg-[#DB924B] h-0.5"/>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-[50%] text-left justify-center">
          <p>
            If you got any questions, or want to give us feedback you can contact us via our business e-mail: placeholder@gmail.com or you can join our Discord, possibly getting in contact with us. We are always open for reviews or feedback and really makes us give the users the best experience they can get.
          </p>
          <br/>
          <p>        
            IMPORTANT: If you got any issues with copyrighted artwork, please let us now! We will put rightful credits to the owner or take it down.
          </p>
          <img className="my-[15px] rounded-[25px]" src="/sunbros.jpg"/>
          <p>
            Kind regards, the developer team.
          </p>
        </div>
      </section>
      <Input />
      <Footer />
    </DefaultLayout>
  );
}
