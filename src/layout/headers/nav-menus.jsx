import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenus = () => {
  return (
    <ul>
      {menu_data.map((menu, i) => (
        <li key={i}>
          <Link href={menu.link}>
            <a>{menu.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenus;
