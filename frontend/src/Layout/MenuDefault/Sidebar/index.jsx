import React from "react";
import { Container, Content, ContentExit } from "./styles";
import { FaTimes, FaHome, FaRegFileAlt } from "react-icons/fa";
import { AiOutlinePicture, AiOutlineUserAdd } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import SidebarItem from "../SidebarItem";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };
  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />
      <Content>
        <SidebarItem Icon={FaHome} Text="Início" Link="/" />
        <SidebarItem Icon={AiOutlinePicture} Text="Banners" Link="/painel" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={AiOutlineUserAdd} Text="Criar Usuários" />
        <ContentExit>
          <SidebarItem Icon={ImExit} Text="Sair" />
        </ContentExit>
      </Content>
    </Container>
  );
};

export default Sidebar;
