import React, { useContext } from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { AppContext } from "../Context";

const navigationItems = [
  { id: 1, route: "", protected: true },
  {
    id: 2,
    route: "library",
    protected: true,
  },
  {
    id: 3,
    route: "register",
    protected: false,
  },
  {
    id: 4,
    route: "login",
    protected: false,
  },
  {
    id: 5,
    route: "account",
    protected: true,
  },
  {
    id: 6,
    route: "logout",
    protected: true,
  },
];

const Navigation = () => {
  const { user } = useContext(AppContext);
  const filteredItems = navigationItems.filter(
    (item) => item.protected === !!user
  );

  return (
    <div className={styles.navigation}>
      <div className={"box-wide"}>
        {filteredItems.map((navItem) => (
          <NavLink
            className={styles.navigationItem}
            to={`/${navItem.route}`}
            key={navItem.id}
            activeClassName={styles.active}
          >
            {navItem.route}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
