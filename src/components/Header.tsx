"use client";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomUI/CustomButton";
import { Menu, ShoppingBag } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const Header: React.FC = () => {
  return (
    <header className=" max-w flex items-center justify-between border-b border-b-black px-4 4xl:px-0 py-[25px] md:py-[30px] lg:py-[35px] xl:py-[32px] 2xl:py-[32px] 3xl:py-[32px] 4xl:py-[32px]">
      <div className="logo w-fit">
        <Link href={"/"}>
          {/* <Image alt='Kratom' src={"/assets/images/logo.png"} width={250} height={48}/> */}
          <img
            src="/assets/images/logo.png"
            alt="Kratom"
            className="3xl:w-[250px] 4xl:w-[250px] w-[150px] max-w-[250px] md:w-[200px] lg:w-[200px] xl:w-[250px] 2xl:w-[250px]"
          />
        </Link>
      </div>
      <div className="options 3xl:gap-[50px] 4xl:gap-[50px] flex items-center gap-[20px] 2xl:gap-[35px] ">
        {/* Menu */}
        <NavigationMenu className="hidden 2xl:flex 3xl:flex 4xl:flex ">
          <NavigationMenuList className="gap-[30px]">
            <NavigationMenuItem className="">
              <NavigationMenuLink
                href="/"
                className={"font-dmSans text-[20px] hover:text-lightestGreen"}
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="">
              <NavigationMenuLink
                href="/about-us"
                className={"font-dmSans text-[20px] hover:text-lightestGreen"}
              >
                About Us
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="font-dmSans font-normal text-[20px] hover:text-lightestGreen hover:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                Our Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-[518px]">
                <ul className="grid gap-3 p-4">
                  <li className="row-span-3">
                    <NavigationMenuLink href="/products/kratom-capsule" className="font-dmSans text-[20px] hover:text-lightestGreen" >
                        Kratom Capsule
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink href="/products/kratom-gummies" className="font-dmSans text-[20px] hover:text-lightestGreen" >
                        Kratom Gummies
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink href="/products/kratom-liquid-shot" className="font-dmSans text-[20px] hover:text-lightestGreen" >
                        Kratom Liquid Shot
                    </NavigationMenuLink>
                  </li>
                  <li className="row-span-3">
                    <NavigationMenuLink href="/products/kratom-powder" className="font-dmSans text-[20px] hover:text-lightestGreen" >
                        Kratom Powder
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="">
              <NavigationMenuLink
                href="contact-us"
                className={"font-dmSans text-[20px] hover:text-lightestGreen"}
              >
                Contact Us
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Shop Now Button */}
        <div className="3xl:block 4xl:block hidden w-fit lg:block xl:block 2xl:block">
          <CustomButton arrowed variant={"default"}>
            Shop Now
          </CustomButton>
        </div>
        {/* Mobile Menu Icon */}
        <div className="mob-menu 3xl:hidden 4xl:hidden 2xl:hidden">
          <Menu className="h-[32px] w-[32px]" />
        </div>
        {/* Cart Icon */}
        <div className="cart h-[32px] w-[32px] cursor-pointer">
          <ShoppingBag className="h-[32px] w-[32px]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
