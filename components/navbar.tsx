'use client';

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Divider } from "@nextui-org/divider";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Spacer } from "@nextui-org/spacer";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  Logo,
  VKLogo,
  TelegramLogo,
  SiteLogo,
} from "@/components/icons";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarMenuToggle  className="sm:hidden" />
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/menu">
            <Logo />
            <p className="font-bold text-inherit uppercase">Lets Order</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full gap-6" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem
            key={item.href}
            className="hidden sm:flex"
          >
            <Link className={"text-inherit" + (item.href === pathname ? " font-bold" : "")} href={item.href}>{item.label}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent
        className="flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="flex gap-2 ">
          <Link isExternal aria-label="Site" href={siteConfig.links.site}>
            <SiteLogo className="text-default-500" />
          </Link>
          <Link isExternal aria-label="VK" href={siteConfig.links.vk}>
            <VKLogo className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Telegram" href={siteConfig.links.telegram}>
            <TelegramLogo className="text-default-500" />
          </Link>
          <Spacer x={0.5} />
          <ThemeSwitch />
        </NavbarItem>
        
      </NavbarContent>

      <NavbarMenu className="bg-opacity-0">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
