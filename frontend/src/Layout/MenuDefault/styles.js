import { flexbox } from "@mui/system";
import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #f0f2f5;
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: #171923;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 37px;
    cursor: pointer;
  }
`;

export const TextContainer = styled.h1`
  display: flex;
  color: #171923;
  margin-left: 45%;
  margin-top: 27px;
`;

export const Section = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  minHeight: "100vh",
};
