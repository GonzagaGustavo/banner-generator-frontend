import styled from "styled-components";

export const Container = styled.div`
  background-color: #171923;
  position: fixed;
  height: 100%;
  width: 350px;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.5s;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;

export const ContentExit = styled.div`
  margin-top: 480px;
`;
