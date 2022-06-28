import React, { useState } from "react";
import { Container, TextContainer } from "./styles";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";
import Search from "../Search";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Container>
      <TextContainer>Bem Vindo</TextContainer>
      <Search />
      <FaBars onClick={showSidebar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  );
};

export default Header;
