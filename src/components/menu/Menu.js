import React from "react";
import Item from "./Item";
import styles from "./menu.module.css";
const items = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
const Menu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navlist}>
        {items.map((n ,i) => {
          return <Item key={i} {...n} />;
        })}
      </ul>
    </nav>
  );
};

export default Menu;
