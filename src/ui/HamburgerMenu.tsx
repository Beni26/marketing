import React, { useEffect, useRef } from "react";

type HamburgerMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void; // تغییر نوع setIsOpen
  children: React.ReactNode;
  openFrom: "left" | "right"; // New prop to determine opening direction
};
const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  isOpen,
  setIsOpen,
  children,
  openFrom,
}) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsOpen]);

  return (
    <div
      className={`${
        isOpen
          ? "backdrop-blur-sm  top-0 left-0 w-full h-screen bg-slate-950 bg-opacity-30 "
          : ""
      } fixed z-10`}
    >
      <nav
    ref={navRef}
    className={`${
      openFrom === "left" ? "left-0" : "right-0"
    } fixed top-0 h-full bg-white w-96 overflow-hidden transition-transform duration-500 ease-in-out z-15 ${
      isOpen
        ? ""
        : openFrom === "left"
        ? "-translate-x-full"
        : "translate-x-full"
    }`}
  >
    {children}
  </nav>
    </div>
  );
};

export default HamburgerMenu;
