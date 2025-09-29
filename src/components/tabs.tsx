import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { subtitle  } from "./primitives";
import DropDownFunc from "@/components/dropdown";

export default function TabFunc() {
  return (
    <div className="flex flex-col">
      <Tabs
        aria-label="Game Sections"
        color="primary"
        variant="underlined"
        classNames={{
          base: "w-full",
          tabList:
            "gap-6 w-full relative rounded-none p-0 border-b border-[#DB924B]/30 bg-black/0",
          cursor: "w-full bg-[#DB924B]", // underline cursor
          tab: "max-w-fit px-2 h-12",
          tabContent:
            "group-data-[selected=true]:text-[#DB924B] text-gray-400 font-medium transition-colors",
        }}
      >
        <Tab key="details" title="Details">
          <Card className="bg-black/10 border border-[#DB924B]/20">
            <CardBody className="text-gray-400 text-sm">
              <h2 className={subtitle()}>Details</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, nihil soluta repellat qui consectetur voluptatibus explicabo quos incidunt totam non sunt necessitatibus error vero voluptate animi, reprehenderit officia et blanditiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus pariatur inventore, nihil eveniet consequuntur veniam modi iusto itaque sequi illo consequatur et eius, atque nesciunt ea! Vel quos odit impedit!
                <br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut officiis dolorem facilis, magni voluptate deleniti eaque nulla rerum optio perspiciatis, tempore beatae accusantium quas doloribus nobis nemo adipisci. At. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ad. Excepturi architecto error vel rerum neque, ipsam distinctio dicta quasi numquam, incidunt quaerat quos dolore maxime sunt repudiandae temporibus natus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, veniam. Nobis incidunt aperiam earum natus quos sequi, quaerat molestiae a quam nulla nostrum omnis?
                <br/><br/>
                Nostrum fugiat aut rem quaerat veniam! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat impedit eveniet aliquam nemo mollitia ex consectetur, omnis dicta facilis aut nesciunt saepe dolor ullam sunt reprehenderit repellendus. Eum, error nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum saepe aliquam veniam ut rem fugiat temporibus! Consequatur non excepturi nobis necessitatibus suscipit, iure architecto optio corporis laudantium sit unde modi.
                <img src="./public/hasbrowncat.gif" className="w-[100px]"/>
              </p>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="reviews" title="Reviews">
          <Card className="bg-black/10 border border-[#DB924B]/20">
            <CardBody className="text-gray-400 text-sm">
              <h2 className={subtitle()}>Reviews</h2>
              <DropDownFunc />
              <img src="./public/hasbrowncat.gif" className="w-[100px]"/>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="socials" title="Socials">
          <Card className="bg-black/10 border border-[#DB924B]/20">
            <CardBody className="text-gray-400 text-sm">
              <h2 className={subtitle()}>Socials</h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem vitae laudantium minus ipsa, illo fugiat saepe assumenda? Quisquam quam quasi, a eaque nesciunt quas exercitationem nemo debitis, aliquid commodi quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates aspernatur, magnam optio unde alias quam fugiat repudiandae cum modi, corporis qui atque eum aperiam doloremque? Quae perferendis quasi ex.
              <br/><br/>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequatur maxime dignissimos atque maiores delectus reiciendis quaerat accusantium magni sed nulla in cum, est voluptas dolor! Autem rem blanditiis iste!
              <br/><br/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure reiciendis architecto quia reprehenderit earum omnis impedit tempore, dicta quas nam sapiente cumque itaque nostrum aspernatur ipsam doloribus atque nulla laudantium.
              <img src="./public/hasbrowncat.gif" className="w-[100px]"/>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="ouropinion" title="Our Opinion">
          <Card className="bg-black/10 border border-[#DB924B]/20">
            <CardBody className="text-gray-400 text-sm">
              <h2 className={subtitle()}>Our Opinion</h2>
              <img src="./public/hasbrowncat.gif" className="w-[100px]"/>
            </CardBody>
          </Card>
        </Tab>

        <Tab key="pricing" title="Pricing">
          <Card className="bg-black/10 border border-[#DB924B]/20">
            <CardBody className="text-gray-400 text-sm">
              <h2 className={subtitle()}>Pricing</h2>
              <p className="float-left">
                <img src="./public/hasbrowncat.gif" className=" w-[18px] float-left"/>= 100$
              </p>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
