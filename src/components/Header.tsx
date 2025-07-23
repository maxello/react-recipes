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
import SearchForm from "./SearchForm";

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
    <Navbar onMenuOpenChange={setIsMenuOpen} className="border-b bg-content1/80">
      <NavbarContent className="!grow-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavLink to="/">
          <NavbarBrand className="flex items-center gap-2">
            <Soup className="w-7 h-7 md:w-8.5 md:h-8.5 mb-1" />
            <p className="hidden md:block font-bold text-inherit text-base md:text-xl leading-[1]">Recipes</p>
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
      <div className="flex gap-4 items-center">
        <SearchForm />
        <ThemeSwitcher />
      </div>
      
      <NavbarMenu className="items-center gap-4 justify-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <HeroLink
              className="w-full text-2xl uppercase p-5"
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

