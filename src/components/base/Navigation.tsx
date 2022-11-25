import { Link } from "gatsby";
import React from "react";

const links = [
  {
    title: "Home",
    page: "/",
  },
  {
    title: "PLCS",
    page: "/plcs",
  },
  {
    title: "About",
    page: "/about",
  }
];

const Navigation = () => {
  return (
    <nav>
      <ul>
        {links.map((link, i) => (
          <li key={i}>
            <Link to={link.page}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
