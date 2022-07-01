import React from "react";
import { FiBook, FiImage, FiAlignRight, FiLogOut } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ isOpen, setIsOpen }) {
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      icon: <FiBook />,
      name: "About",
    },
    {
      path: "/Banners",
      icon: <FiImage />,
      name: "Banners",
    },
  ];
  return (
    <div style={{ width: isOpen ? "20vw" : "70px" }} className="sidebar">
      <div
        style={{ justifyContent: isOpen ? "space-between" : "center" }}
        className="top-section"
      >
        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          Logo
        </h1>
        <div className="icons">
          <FiAlignRight onClick={toggle} />
        </div>
      </div>
      {menuItem.map((item, index) => (
        <NavLink
          style={{ justifyContent: isOpen ? "start" : "center" }}
          className="link"
          to={item.path}
          key={index}
        >
          <div className="icon">{item.icon}</div>
          <div
            className="link-text"
            style={{ display: isOpen ? "block" : "none" }}
          >
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
