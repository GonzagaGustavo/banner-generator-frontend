import React, { useState } from "react";
import { Container, TextContainer, Section } from "./styles";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Search from "./Search";
import { Box } from "@mui/system";

const MenuDefault = ({ children }) => {
  return (
    <Box style={Section}>
      <Container>
        <TextContainer>Bem Vindo</TextContainer>
        <Search />
      </Container>
      <Box mt={2} p={1} sx={{ width: "100%", height: "85vh" }}>
        {children}
      </Box>
    </Box>
  );
};

export default MenuDefault;
