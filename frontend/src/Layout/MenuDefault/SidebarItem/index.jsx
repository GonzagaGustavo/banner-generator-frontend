import React from "react";
import { Container } from "./styles";

const SidebarItem = ({ Icon, Text, Link }) => {
  return (
    <Container onClick={() => (window.location.href = Link)}>
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
