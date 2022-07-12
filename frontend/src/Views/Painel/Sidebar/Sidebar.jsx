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
      path: "/banners",
      icon: <FiImage />,
      name: "Criar Banners",
    },
  ];
  React.useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      api.post("/users/checkRole", { token: token }).then((res) => {
        if (res.data > 2) {
          const items = [
            {
              path: "/admin",
              icon: <FiUser />,
              name: "Admin",
            },
            ...menuItem,
          ];
          setAdmin(items);
        }
      });
    }
  }, []);

  function handleLogOut() {
    let msgSair = "Tem certeza que deseja sair?";
    if (window.confirm(msgSair) === true) {
      Cookies.remove("token");
      Cookies.remove("id");
    }
  }

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
      <div
        className="container-icone"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div>
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
        <div>
          <NavLink
            style={{ justifyContent: isOpen ? "start" : "center" }}
            className="link"
            to="/"
            onClick={handleLogOut}
          >
            <div className="icon">
              <FiLogOut />
            </div>
            <div
              className="link-text"
              style={{ display: isOpen ? "block" : "none" }}
            >
              Sair
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
