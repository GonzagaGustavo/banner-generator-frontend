import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #1a202c;
  font-size: 20px;
  color: white;
  height: 60px;
  border-radius: 10px;
  margin: 0 10px 20px;
  cursor: pointer;

  > svg {
    margin: 0 70px;
  }

  &:hover {
    background-color: black;
  }
`;
