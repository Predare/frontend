import { MenuIcon, OrderIcon, ServiceIcon } from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Lets Order",
  description: "Make beautiful websites regardless of your design experience.",
  navMenuItems: [
    {
      label: "Сообщить об ошибке",
      href: "/docs",
    },
  ],
  navItems: [
    {
      icon: MenuIcon,
      label: "Меню",
      href: "/menu",
    },
    {
      icon:ServiceIcon,
      label: "Услуги",
      href: "/service",
    },
    {
      icon: OrderIcon,
      label: "Заказ",
      href: "/order",
    }
  ],
  links: {
    vk: "https://vk.com/getnextui",
    telegram: "https://t.me/getnextui",
    site: "https://nextui.org",
  },
};
