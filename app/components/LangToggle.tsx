"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import IconEnglishFlag from "./icons/IconEnglishFlag";
import IconIndonesiaFlag from "./icons/IconIndonesiaFlag";
import { useLingui } from "@lingui/react";

export default function LangToggle() {
  const pathname = usePathname();
  const { i18n } = useLingui();

  const langPath = pathname.split("/")[1];
  const [lang, setLang] = useState(langPath);
  const isEnglish = lang === "en";

  const handleClick = () => {
    const newLang = lang === "en" ? "id" : "en";
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    i18n.activate(newLang);
    setLang(newLang);
    window.history.replaceState(null, "", newPath);
  };
  return (
    <button
      onClick={handleClick}
      className="w-14 h-8 flex items-center bg-red-900 rounded-full px-1 relative"
      aria-label="Toggle language"
      title="Toggle language"
    >
      <>
        <div className="absolute w-full">
          <div className="flex w-full justify-between pr-4 pl-1 text-white text-xs font-semibold">
            <p>EN</p>
            <p>ID</p>
          </div>
        </div>
        <motion.div
          className="w-6 h-6 bg-red-800 rounded-full shadow-md flex items-center justify-center overflow-hidden z-10"
          layout
          animate={{ x: isEnglish ? 24 : 0 }} // Moves the knob
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {isEnglish ? <IconEnglishFlag /> : <IconIndonesiaFlag />}
        </motion.div>
      </>
    </button>
  );
}
