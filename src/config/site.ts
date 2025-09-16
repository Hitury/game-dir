export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CinderWatch",
  description: "The ultimate game library.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Explore",
      href: "/explorer",
    },
    {
      label: "Profiles",
      href: "/profiles",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Explore",
      href: "/explorer",
    },
    {
      label: "Profiles",
      href: "/profiles",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "/support",
    login: "/login"
  },
};
