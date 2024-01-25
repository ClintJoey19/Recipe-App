import React from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={() => setOpenLinks((prev) => !prev)}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
