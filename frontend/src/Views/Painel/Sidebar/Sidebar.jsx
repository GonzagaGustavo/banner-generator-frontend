import React from "react";
import {
  FiImage,
  FiAlignRight,
  FiAlignJustify,
  FiLogOut,
  FiUser,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import Cookies from "js-cookie";
import api from "../../../services/api";

function Sidebar({ isOpen, setIsOpen }) {
  const toggle = () => setIsOpen(!isOpen);
  const [admin, setAdmin] = React.useState();
  const menuItem = [
    {
      path: "/painel",
      icon: <FiImage />,
      name: "Criar Banners",
    },
    {
      path: "",
      icon: <FiLogOut />,
      name: "Sair",
      onclick: () => {
        Cookies.remove("token");
        Cookies.remove("id");
      },
    },
  ];
  console.log(admin);
  React.useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      api.post("/users/checkRole", { token: token }).then((res) => {
        if (res.data > 2) {
          const items = [
            {
              path: "/admin",
              icon: <FiImage />,
              name: "Admin",
            },
            ...menuItem,
          ];
          setAdmin(items);
        }
      });
    }
  }, []);

  return (
    <div
      style={{
        width: isOpen ? "20vw" : "70px",
        marginRight: isOpen ? "" : "70px",
      }}
      className="sidebar"
    >
      <div
        style={{ justifyContent: isOpen ? "space-between" : "center" }}
        className="top-section"
      >
        <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
          <div></div>
        </h1>
        <div className="icons">
          {isOpen ? (
            <FiAlignRight onClick={toggle} />
          ) : (
            <FiAlignJustify onClick={toggle} />
          )}
        </div>
      </div>
      {admin
        ? admin.map((item, index) => (
            <NavLink
              style={{ justifyContent: isOpen ? "start" : "center" }}
              className="link"
              to={item.path}
              key={index}
              onClick={item.onclick ? item.onclick : null}
            >
              <div className="icon">{item.icon}</div>
              <div
                className="link-text"
                style={{ display: isOpen ? "block" : "none" }}
              >
                {item.name}
              </div>
            </NavLink>
          ))
        : menuItem.map((item, index) => (
            <NavLink
              style={{ justifyContent: isOpen ? "start" : "center" }}
              className="link"
              to={item.path}
              key={index}
              onClick={item.onclick ? item.onclick : null}
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
