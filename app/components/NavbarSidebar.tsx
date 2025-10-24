"use client";

import { useEffect, useState } from "react";
import IconBurger from "./icons/IconBurger";
import Sidebar from "./Sidebar";
import { IProfile, useProfile } from "../store/profile";
import { Menu } from "../type";
import { usePathname } from "next/navigation";

type Props = {
  menus: Menu[];
  children: React.ReactNode;
  user: IProfile;
};

export default function NavbarSidebar({ menus, children, user }: Props) {
  const pathname = usePathname();
  const lastPath = pathname?.split("/").reverse()[0] ?? "";
  const isAuthorized =
    menus.some((menu) => menu.url === `/${lastPath}`) || lastPath === "en";

  const setProfile = useProfile((state) => state.setProfile);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setProfile(user);
  }, [setProfile, user]);
  return (
    <>
      <nav className="fixed top-0 left-0 z-40 bg-black h-16 w-full">
        <div className="flex justify-between h-full items-center mx-3 ">
          <button
            className="cursor-hoverh-full"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            <IconBurger />
          </button>
        </div>
      </nav>
      <Sidebar menus={menus} open={open} />
      <div
        className={`transition-all duration-300 ease-in-out mt-20 rounded-xl p-4 border border-gray-300 dark:border-gray-600 
                ${open ? "sm:ml-[205px] ml-[50px]" : "ml-[60px]"} mr-[20px]`}
      >
        {isAuthorized ? children : <p>Nope</p>}
      </div>
    </>
  );
}
