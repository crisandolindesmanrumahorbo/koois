import { ReactElement, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram as IconInstagram } from "lucide-react";

export const FOOTER_LINKS = {
  faq: `${process.env.NEXT_PUBLIC_MOST}/bantuan`,
  kebijakanPrivasi: `${process.env.NEXT_PUBLIC_MOST}/kebijakan-privasi`,
  userGuide: `${process.env.NEXT_PUBLIC_USER_GUIDE}`,
  whatsapp: process.env.NEXT_PUBLIC_REDIRECT_WHATSAPP_DIMA,
  email: process.env.NEXT_PUBLIC_REDIRECT_EMAIL,
  call: process.env.NEXT_PUBLIC_REDIRECT_CALL,
  facebook: process.env.NEXT_PUBLIC_REDIRECT_FACEBOOK,
  twitter: process.env.NEXT_PUBLIC_REDIRECT_TWITTER,
  instagram: process.env.NEXT_PUBLIC_REDIRECT_INSTAGRAM,
  youtube: process.env.NEXT_PUBLIC_REDIRECT_YOUTUBE,
  linkedin: process.env.NEXT_PUBLIC_REDIRECT_LINKEDIN,
};

type Footer = {
  label?: string;
  url?: string;
  icon?: ReactElement;
  children?: ReactNode;
};

const informationFooter: Array<Footer> = [
  { label: "FAQ", url: FOOTER_LINKS["faq"] },
  { label: "Privacy Policy", url: FOOTER_LINKS["kebijakanPrivasi"] },
];

const careCenter: Array<Footer> = [
  {
    label: "Contact us",
    url: `tel:${FOOTER_LINKS["call"] || ""}`,
    icon: <IconInstagram />,
  },
  {
    label: "Email us",
    url: `tel:${FOOTER_LINKS["call"] || ""}`,
    icon: <IconInstagram />,
  },
];

const socialMedia: Array<Footer> = [
  { icon: <IconInstagram />, url: FOOTER_LINKS["facebook"] || "" },
  { icon: <IconInstagram />, url: FOOTER_LINKS["linkedin"] || "" },
];

const features: Array<Footer> = [
  {
    icon: <IconInstagram />,
    children: (
      <p className="font-[400] text-xs font-inter">
        Jl. jalan ke pasar kemanggisan
        <br />
        Cakep
      </p>
    ),
  },
  {
    icon: <IconInstagram />,
    children: (
      <p className="font-[400] text-xs font-inter">
        08.30 - 17:30 WIB <br />
        Senin - Jumat
      </p>
    ),
  },
];

export default function FooterStatic() {
  return (
    <footer className={` pt-[3vw] pb-[1vw]`}>
      <div className="flex flex-col gap-7 md:gap-4 px-[4vw] md:flex-row md:justify-between lg:px-[4vw]">
        <Link href={"/"}>
          <Image
            src="/LogoKoois.png"
            alt="Example Image"
            width={97}
            height={27}
          />
        </Link>
        <div className="flex flex-col">
          <p className="font-[700] text-base font-inter mb-[4px]">
            Information
          </p>
          <>
            {informationFooter.map((item, index) => (
              <Link
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                href={item.url!}
                className=" font-[400] text-xs font-inter my-[3px]"
              >
                {item.label}
              </Link>
            ))}
          </>
        </div>
        <div className="flex flex-col">
          <p className="font-[700] text-base font-inter mb-[4px]">
            Care Center
          </p>
          <>
            {careCenter.map((item, index) => (
              <Link
                key={index}
                href={item.url!}
                className="font-[400] text-xs font-inter my-[3px]"
              >
                <div className="flex items-center">
                  <div className="mr-[7px]">{item.icon}</div>

                  <p className="font-[400] text-xs font-inter">{item.label}</p>
                </div>
              </Link>
            ))}
          </>
        </div>
        <div>
          <p className="font-[700] text-base font-inter mb-[4px]">
            Social Media
          </p>
          <div className="flex gap-[15px]">
            <>
              {socialMedia.map((item, index) => (
                <Link
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.url!}
                >
                  {item.icon}
                </Link>
              ))}
            </>
          </div>
        </div>
        <div>
          <p className=" font-[700] text-base font-inter">Coming Soon</p>
          <>
            {features.map((item, index) => (
              <div className="flex mt-[6px]" key={index}>
                <div className="mr-[7px]">{item.icon}</div>
                {item.children}
              </div>
            ))}
          </>
        </div>
      </div>
    </footer>
  );
}
