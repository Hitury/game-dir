import { Link } from "@heroui/link";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";

const Year = new Date().getFullYear(); {/* Easy auto updating year function */ }

export default function Footer() {
    return (
        <footer className="w-full bg-[#00000050] rounded-t-medium py-3 mt-[100px]">
            <div className="footer-content text-center">
                <p className="font-bold text-inherit py-[10px]">CINDERWATCH</p>
                    <a href="/about" className="mx-[10px]">About</a>
                    <a href="/support" className="mx-[10px]">Support</a>
                    <a href="/contact" className="mx-[10px]">Contact</a>
                    <br/>
                    <div className="my-[5px] mt-[10px]">
                    <Link isExternal href={siteConfig.links.twitter} title="Twitter">
                        <TwitterIcon className="text-white mx-[5px]" />
                    </Link>
                    <Link isExternal href={siteConfig.links.discord} title="Discord">
                        <DiscordIcon className="text-white mx-[5px]" />
                    </Link>
                    <Link isExternal href={siteConfig.links.github} title="GitHub">
                        <GithubIcon className="text-white mx-[5px]" />
                    </Link>
                    </div>
                <p className="">© {Year} Cinder Watch. All rights reserved.</p>
            </div>
        </footer>
    )
}
