import { IconType } from "react-icons";
import { NavLink, useLocation } from "react-router-dom";
import React from "react";

interface CustomNavLinkProps {
  link: string;
  text: string;
  icon: IconType; // استفاده از IconType برای تعریف پراپ icon
}

export const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  link,
  text,
  icon,
}) => {
  const IconComponent = icon; // آیکون به عنوان IconType
  const location = useLocation();

  // تابع برای بررسی فعال بودن لینک
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <NavLink
      to={link}
      className={`flex items-center justify-between ${
        isActive(link) ? "text-primary" : ""
      }`}
    >
      {
        <>
          <span>{text}</span>
          <span
            className={`${
              isActive(link) ? "opacity-100" : "opacity-40"
            } group-hover:opacity-100 duration-0`}
          >
            <IconComponent />
          </span>
        </>
      }
    </NavLink>
  );
};
