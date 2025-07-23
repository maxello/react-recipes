import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link as HeroLink
} from "@heroui/react";
import { NavLink } from "react-router"
import { cn } from "../lib/utils";
import { ThemeSwitcher } from "./ThemeSwither";
import { Soup } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      label: "Home",
      link: "/"
    },
    {
      label: "Categories",
      link: "/categories"
    },
    {
      label: "About",
      link: "/about"
    }
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="border-b bg-content1">
      <NavbarContent className="!grow-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavLink to="/">
          <NavbarBrand className="flex items-end gap-2">
            <Soup size={36}/>
            <p className="font-bold text-inherit text-xl leading-[1] mb-1">Recipes</p>
          </NavbarBrand>
        </NavLink>
      </NavbarContent>
      
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.label}>
            <NavLink 
              aria-current="page" 
              to={item.link}
              className={({ isActive }) => (cn(isActive ? `text-primary` : 'text-foreground', 'font-semibold'))}
            >
              {item.label}
            </NavLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <ThemeSwitcher />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <HeroLink
              className="w-full"
              href={item.link}
              size="lg"
            >
              {item.label}
            </HeroLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

