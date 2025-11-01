import Link from "next/link";
import { MenusNavKey } from "./Navigation";

export default function Accordion({
  openCollapse,
  collapseOpen,
  value,
  menus,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  openCollapse: any;
  collapseOpen: string;
  value: MenusNavKey;
  menus: string;
}) {
  return (
    <>
      <div id={`accordion-collapse-heading-${value}`}>
        <button
          className={`flex items-center justify-between w-[calc(100vw-2rem)] p-5 font-medium text-sm font-inter ${
            false ? "text-white" : "hover:bg-gray-100 text-darkGrafit"
          } rounded-xl  gap-3`}
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded="true"
          aria-controls="accordion-collapse-body-2"
          onClick={() => {
            openCollapse(value);
          }}
        >
          <span>{value}</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </div>
      <div
        id={`accordion-collapse-body-${value}`}
        className={collapseOpen === value ? "visible" : "hidden"}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="px-5 pt-1 pb-5">
          {Array.isArray(menus) &&
            menus.map((item) => (
              <Link
                key={item.value}
                href={item.value}
                className={`block px-4 py-4
                  hover:bg-gray-200 text-sm font-inter `}
              >
                {item.title}
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
