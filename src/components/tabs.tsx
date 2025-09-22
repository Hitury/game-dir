import { Tabs, Tab, Card, CardBody } from "@heroui/react";

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
              Me Bomba — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua...
            </CardBody>
          </Card>
        </Tab>

        <Tab key="reviews" title="Reviews">
          <Card className="bg-black/40 border border-[#DB924B]/20">
            <CardBody className="text-gray-300 text-sm">
              DIOOOOO — Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua...
            </CardBody>
          </Card>
        </Tab>

        <Tab key="socials" title="Socials">
          <Card className="bg-black/40 border border-[#DB924B]/20">
            <CardBody className="text-gray-300 text-sm">
              JoJo's Bizarre Adventure — Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </CardBody>
          </Card>
        </Tab>

        <Tab key="ouropinion" title="Our Opinion">
          <Card className="bg-black/40 border border-[#DB924B]/20">
            <CardBody className="text-gray-300 text-sm">
              HAMON OVERDRIVEOOOOO — Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </CardBody>
          </Card>
        </Tab>

        <Tab key="pricing" title="Pricing">
          <Card className="bg-black/40 border border-[#DB924B]/20">
            <CardBody className="text-gray-300 text-sm">
              Hallo Hitury — Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
