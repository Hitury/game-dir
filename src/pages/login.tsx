import { title } from "@/components/primitives";
import AuthLayout from "@/layouts/auth";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";

export default function LoginPage() {
  const searchInput = (
    <Input
      aria-label="Email"
      classNames={{
        inputWrapper: "bg-[#20161f]",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Email"
      type="Email"
    />
  );

  return (
    <AuthLayout>
      <section className="h-[100%] flex items-center justify-center">
        <div className="flex flex-row bg-[#2d1f2c] rounded-sm p-7 rounded-lg shadow-lg">
          <div className="bg-[#DB924B] w-110 h-130 rounded-sm flex items-start justify-start text-black p-3 bg-[url('public/solaireandsiegmeyer.jpg')] bg-cover">
            <p className="font-bold text-inherit">CINDERWATCH</p>
          </div>
          <div className="bg-[#2d1f2c] w-110 h-130 flex flex-col items-start justify-start gap-10 p-10 ml-7">
            <h1 className="font-semibold text-[40px] text-white">Create an Account</h1>
            {searchInput}
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}
