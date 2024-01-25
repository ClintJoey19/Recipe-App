import React from "react";
import "../styles/Menu.css";
import { MenuList } from "../helpers/Menulist";
import MenuItem from "../components/MenuItem";

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((list, index) => (
          <MenuItem
            key={index}
            name={list.name}
            image={list.image}
            price={list.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
