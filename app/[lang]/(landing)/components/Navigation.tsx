"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect, useRef, useState } from "react";
import Accordion from "./Accordion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const PATHS = {
  PRICING: "/pricing",
  FAQ: "/faq",
  LOGIN: "/login",
};

export default function NavigationBar() {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [optionOpen, setOptionOpen] = useState<MenusNavKey>();
  const [collapseOpen, setCollapseOpen] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === PATHS.LOGIN;
  const [hasShadow, setHasShadow] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setHasShadow(!entry.isIntersecting),
      { threshold: 1 },
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const openCollapse = (value: string) => {
    setCollapseOpen(value);
  };

  const onMouseEnter = (key?: MenusNavKey) => {
    if (key) setOptionOpen(key);
  };

  const onMouseLeave = (key?: MenusNavKey) => {
    if (optionOpen === key) setOptionOpen(undefined);
  };

  return (
    <>
      <nav
        className={`pb-4 sticky top-0 left-0 right-0 h-[80px] w-full z-40 transition-shadow duration-300 
        ${hasShadow ? "shadow-lg bg-background" : ""}`}
      >
        <div className="flex justify-between items-center h-full px-[1vw] mx-4 my-2">
          <div className="p-4 pl-0">
            <Link href={"/"}>
              <Image
                src="/LogoKoois.png"
                alt="Example Image"
                width={97}
                height={27}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="flex ml-[30px] gap-1 xl:gap-1.5 items-center justify-center">
              {Object.entries(menus)?.map(
                ([key, value]: [key: string, value: MenuValue]) => {
                  const isActive = pathname === value.value;

                  if (!Array.isArray(value?.value)) {
                    return (
                      <Link
                        key={value.value}
                        href={value.value as string}
                        className={`inline-flex items-center justify-center px-4 py-2 rounded-md font-reguler w-auto hover:font-semibold text-sm font-inter ${
                          isActive ? "text-blue font-semibold" : ""
                        }`}
                      >
                        {value.label}
                      </Link>
                    );
                  }

                  return (
                    <div key={key}>
                      <div
                        onMouseEnter={() => onMouseEnter(key as MenusNavKey)}
                        onMouseLeave={() => onMouseLeave(key as MenusNavKey)}
                        className={`inline-flex items-center justify-center px-4 py-2 fill rounded-2xl w-auto text-sm font-rethinkSans gap-2 ${
                          optionOpen === key && !false
                            ? "border border-blueSamudra text-blue bg-blue bg-opacity-50 font-semibold"
                            : optionOpen === key && false
                              ? "border border-blueSamudra text-blue bg-white font-semibold"
                              : "font-reguler"
                        }`}
                      >
                        <p>{value.label}</p>
                        <IconArrowDown
                          color={
                            optionOpen === key
                              ? "#007CFE"
                              : false
                                ? "white"
                                : undefined
                          }
                          isRotate={optionOpen === key}
                        />
                      </div>
                      <div
                        className={`absolute left-0 w-full min-w-48 rounded shadow-lg border ${
                          false
                            ? "bg-[#181818] border-black"
                            : "border-gray-100 bg-white-pearl"
                        } ${
                          optionOpen === key ? "block" : "hidden"
                        } overflow-x-hidden max-h-[350px] overflow-y-auto px-0 border-t-0 bg-opacity-90 mt-[1px]`}
                        onMouseEnter={() => setOptionOpen(key as MenusNavKey)}
                        onMouseLeave={() => setOptionOpen(undefined)}
                      >
                        {menus[optionOpen as MenusNavKey]?.component}
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex justify-end items-center gap-[18px]">
            {!isLoginPage && (
              <Button
                onClick={() => router.push(PATHS.LOGIN)}
                className=" text-xs md:text-sm flex w-[120px] xl:w-[150px] xl:p-[15px] justify-center items-center gap-[10px] xl:gap-[18px]"
              >
                Login/Register
              </Button>
            )}

            {/* Mobile menu toggle */}
            <button
              onClick={toggleMenu}
              className="lg:hidden focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isBurgerMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.121 12l5.657-5.657a1 1 0 0 0-1.414-1.414L12 10.586 6.343 4.929a1 1 0 1 0-1.414 1.414L10.586 12l-5.657 5.657a1 1 0 0 0 1.414 1.414L12 13.414l5.657 5.657a1 1 0 0 0 1.414-1.414L13.414 12z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 5h20a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2zM2 11h20a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM2 17h20a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Shadow observer */}
      <div ref={observerRef} className={`${false ? "" : "h-[1px]"}`} />

      {/* Mobile Drawer Menu */}
      {isBurgerMenuOpen && (
        <div className="fixed inset-0 lg:hidden bg-opacity-75 flex justify-center items-center z-30 overflow-y-auto">
          <div className="absolute top-[60px] w-full h-[calc(100vh-60px)]">
            <div className={`p-4 shadow-lg h-full bg-background`}>
              <div className="flex flex-col">
                {Object.entries(menus).map(
                  ([key, value]: [key: string, value: MenuValue]) => {
                    if (Array.isArray(value.value)) {
                      return (
                        <Accordion
                          menus={menus[key].value}
                          key={key}
                          value={key as MenusNavKey}
                          openCollapse={openCollapse}
                          collapseOpen={collapseOpen}
                        />
                      );
                    }

                    return (
                      <Link
                        key={value.value}
                        href={value.value as string}
                        className={`flex items-center justify-between w-full p-5 font-medium text-sm font-inter rounded-xl focus:ring-1 ${
                          pathname === value.value
                            ? "text-blue font-semibold"
                            : ""
                        } ${false ? "" : "hover:bg-white"} gap-3`}
                      >
                        {value.label}
                      </Link>
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function IconArrowDown({
  color,
  isRotate,
}: {
  color?: string;
  isRotate?: boolean;
}) {
  return (
    <svg
      className={`transition-transform duration-400 ease-in-out ${
        isRotate ? "rotate-180" : ""
      }`} // Conditional rotation
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.89 6L8.22331 10.6667L3.55664 6"
        stroke={color ?? "#3B4752"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export type MenuValue = {
  label: string;
  value: string;
  component?: ReactNode;
};

const menus: { [key: string]: MenuValue } = {
  Pricing: {
    label: "Pricing",
    value: `/pricing`,
  },
  FAQ: {
    label: "FAQ",
    value: "/faq",
  },
};

export type MenusNavKey = keyof typeof menus;
