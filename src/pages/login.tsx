import { title } from "@/components/primitives";
import AuthLayout from "@/layouts/auth";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";

export default function LoginPage() {
  const emailInput = (
    <Input
      isRequired
      className="max-w-xs"
      defaultValue="junior@heroui.com"
      label="Email"
      type="email"
    />
  );
  const passInput = (
    <Input
      isRequired
      minLength={5}
      className="max-w-xs"
      defaultValue="junior@heroui.com"
      label="Password"
      type="password"
    />
  );

  return (
    <AuthLayout>
      <section className="h-[100%] flex items-center justify-center">
        <div className="flex flex-row bg-[#2d1f2c] rounded-sm p-7 rounded-lg shadow-lg">
          <div className="bg-[#DB924B] w-110 h-130 rounded-sm flex items-start justify-start text-black p-3 bg-[url('public/solaireandsiegmeyer.jpg')] bg-cover">
            <p className="font-bold text-inherit">CINDERWATCH</p>
          </div>
          <div className="bg-[#2d1f2c] w-110 h-130 flex flex-col items-center justify-start gap-10 p-10 ml-7">
            <h1 className="font-semibold text-[40px] text-white">
              Create an Account
            </h1>
            {emailInput}
            {passInput}
            <Button
              isExternal
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href="/"
              variant="ghost"
            >
              Login
            </Button>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}
