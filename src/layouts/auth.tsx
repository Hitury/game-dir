import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col flex-1 h-screen bg-[#20161f]">
      <div className="p-5">
        <ThemeSwitch />
      </div>
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://heroui.com"
          title="heroui.com homepage"
        >
          {/* <span className="text-default-600">Powered by</span>
          <p className="text-primary">HeroUI</p> */}
        </Link>
      </footer>
    </div>
  );
}
