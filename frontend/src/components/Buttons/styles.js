import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  font: 700 16px/16px "Roboto", sans-serif;
  color: #fff;
  background-color: #171923;
  border-radius: 6px;
  border: none;
  width: 93%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  box-shadow: 0px 2px 3px #aaddff;
  text-transform: uppercase;
  letter-spacing: 0.04rem;

  :hover {
    background-color: #aaddff;
    color: #171923;
  }
`;

export default Button;
