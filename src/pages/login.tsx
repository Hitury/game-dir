import { title } from "@/components/primitives";
import AuthLayout from "@/layouts/auth";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";
import { Divider } from "@heroui/divider";
import { useState } from "react";

export default function LoginPage() {
  const emailInput = (
    <Input
      isRequired
      className="max-w-xs"
      defaultValue=""
      placeholder="solaire@cinderwatch.com"
      label="Email"
      type="email"
    />
  );
  const passInput = (
    <Input
      isRequired
      minLength={5}
      className="max-w-xs"
      defaultValue=""
      placeholder="Enter your password"
      label="Password"
      type="password"
    />
  );

  const discordIcon = (
    <svg
      fill="grey"
      height={24}
      viewBox="0 -28.5 256 256"
      width={24}
      xmlns="http://www.w3.org/2000/svg"

    >
      <path
        clipRule="evenodd"
        d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
        
        fillRule="evenodd"
      />
    </svg>
  );

  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // Simulate async action (e.g. login, API call)
    setTimeout(() => {
      setLoading(false);
      // redirect, show toast, etc...
    }, 2000);
  };

  return (
    <AuthLayout>
      <section className="h-[100%] flex items-center justify-center">
        <div className="flex flex-col bg-[#2d1f2c] rounded-sm p-7 rounded-lg shadow-lg sm:flex-row">
          <div className="bg-[#DB924B] w-110 h-130 rounded-sm flex items-start justify-start text-black p-3 bg-[url('public/solaireandsiegmeyer.jpg')] bg-cover">
            <p className="font-bold text-inherit">CINDERWATCH</p>
          </div>
          <div className="bg-[#2d1f2c] w-110 h-130 flex flex-col items-center justify-start gap-7 p-10 ml-7">
            <h1 className="font-semibold text-[40px] text-[#c59f5e]">
              Create an Account
            </h1>
            {emailInput}
            {passInput}
            <Link>
              <Button
                isExternal
                as={Link}
                onPress={handleClick}
                isLoading={loading}
                spinner={
                  <svg
                    className="animate-spin h-5 w-5 text-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor"
                    />
                  </svg>
                }
                className="text-lg font-normal text-default-600 bg-default-100 w-60 h-12"
                variant="light"
              >
                Login
              </Button>
            </Link>
            <div className="flex flex-row gap-5 justify-center">
              <Divider className="w-32" />
              <h3 className="mb-10">Or</h3>
              <Divider className="w-32" />
            </div>
            <div className="flex flex-row gap-4 flex-1">
              <Button
                isExternal
                as={Link}
                className="text-lg font-normal text-default-600 bg-default-100 w-60 h-12"
                variant="light"
              >
                {discordIcon}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}
