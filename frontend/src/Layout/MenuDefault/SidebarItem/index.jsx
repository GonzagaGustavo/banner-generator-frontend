import React from "react";
import { Container } from "./styles";
import Cookies from 'js-cookie'

const SidebarItem = ({ Icon, Text, Link }) => {
function link() {
  if(Link) {
    window.location.href = Link
  } else {
    Cookies.remove("id")
    Cookies.remove("token")
    window.location.href = "/"
  }
}
  return (
    <Container onClick={link}>
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
