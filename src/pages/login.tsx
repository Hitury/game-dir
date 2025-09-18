import { title } from "@/components/primitives";
import AuthLayout from "@/layouts/auth";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Input } from "@heroui/input";
import { Divider } from "@heroui/divider";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const images = [
  "solaireandsiegmeyer.jpg",
  "sunbros.jpg",
];

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

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const passInput = (
    <Input
      isRequired
      minLength={8}
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
      height={20}
      viewBox="0 -28.5 256 256"
      width={20}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
        fillRule="evenodd"
      />
    </svg>
  );

  const googleIcon = (
    <svg
      aria-label="Google logo"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g>
        <path d="m0 0H512V512H0" fill="none"></path>
        <path
          fill="grey"
          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
        ></path>
        <path
          fill="grey"
          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
        ></path>
        <path
          fill="grey"
          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
        ></path>
        <path
          fill="grey"
          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
        ></path>
      </g>
    </svg>
  );

  const githubIcon = (
    <svg
      aria-label="GitHub logo"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill="grey"
        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
      ></path>
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

  const navigate = useNavigate();
  const [isLeaving, setIsLeaving] = useState(false);

  const handleGoSignup = (e: React.MouseEvent) => {
    e.preventDefault();              // stop immediate navigation
    if (isLeaving) return;           // guard double clicks
    setIsLeaving(true);              // start exit animation
  };

  return (
    <motion.div
      // start at center
      initial={{ x: 0, opacity: 1 }}
      // animate depends on whether we're leaving
      animate={isLeaving ? { x: "-100vw", opacity: 0 } : { x: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      // after exit animation finished, navigate
      onAnimationComplete={() => {
        if (isLeaving) navigate("/signup");
      }}
      className="min-h-screen"
    >
      <AuthLayout>
      <section className="h-[100%] flex items-center justify-center">
        <div className="flex flex-col bg-[#2d1f2c] rounded-sm p-7 rounded-lg shadow-lg sm:flex-row justify-center overflow-hidden">
          {/* <div className="bg-[#DB924B] w-110 h-130 rounded-sm flex items-start justify- self-center text-black p-3"> */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-[#DB924B] w-110 h-130 rounded-sm flex items-start bg-cover self-center text-black p-3"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </AnimatePresence>
          {/* </div> */}
          <div className="bg-[#2d1f2c] w-110 h-130 flex flex-col items-center justify-center gap-7 p-10 sm:ml-7">
            <h1 className="text-4xl font-bold text-[#C59F60]">Login</h1>
            {emailInput}
            {passInput}
            <Link href="/">
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
                className="text-lg font-normal text-black bg-[#B6925A] hover:opacity-90 w-60 h-12"
                
              >
                Login
              </Button>
            </Link>
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-row gap-5 justify-center w-[40%] items-center mb-10">
                <Divider className="w-32" />
                <h3 className="">Or</h3>
                <Divider className="w-32" />
              </div>
              <Link
                onClick={handleGoSignup}
                size="md"
                className="bottom-6 transition"
                underline="hover"
              >
                Sign Up
              </Link>
              <div className="flex flex-row gap-4 flex-1 mb-4">
                <Button
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-default-600 bg-default-100 w-10 h-12"
                  variant="light"
                >
                  {discordIcon}
                </Button>
                <Button
                  isExternal
                  as={Link}
                  className="text-sm font-normal text-default-600 bg-default-100 w-10 h-12"
                  variant="light"
                >
                  {githubIcon}
                </Button>
                <Button
                  isExternal
                  as={Link}
                  className="text-sm text-default-600 bg-default-100 w-10 h-12"
                  variant="light"
                >
                  {googleIcon}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuthLayout>
    </motion.div>
    
  );
}
