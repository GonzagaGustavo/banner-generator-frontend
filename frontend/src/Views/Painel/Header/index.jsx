/* eslint-disable no-unused-vars */
import React from "react";
import { Section } from "./styles";
// import { FaBars } from "react-icons/fa";
// import Sidebar from "../Sidebar";
// import Search from "../Search";
import ProfileOverview from "./Profile";
import { Box } from "@mui/system";
import MenuDefault from "../../../Layout/MenuDefault";

const Header = () => {
  return (
    <Box style={Section}>
      <MenuDefault>
        <ProfileOverview />
      </MenuDefault>
    </Box>
  );
};

export default Header;
