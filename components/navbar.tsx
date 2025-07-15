import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/siteConfig";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">Wet Dog</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-4 justify-start ml-2">
          {Object.entries(siteConfig.links)
            .filter((link) => link[0] !== "home")
            .map(([key, settings]) => (
              <NavbarItem key={key}>
                <NextLink color="foreground" href={settings.route}>
                  {key}
                </NextLink>
              </NavbarItem>
            ))}
        </ul>
      </NavbarContent>
      <NavbarMenuToggle className="sm:hidden" />

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {Object.entries(siteConfig.links)
            .filter((link) => link[0] !== "home")
            .map(([key, settings]) => (
              <NavbarMenuItem key={`${key}`}>
                <Link href="settings.route" size="lg">
                  {key}
                </Link>
              </NavbarMenuItem>
            ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
