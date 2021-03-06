import styled from "styled-components";

export const TabsStyled = styled.div`
  height: 50px;
  width: 100%;
  background-color: #609da0;
  border-radius: 3px 3px 0 0;
  overflow: hidden;

  @media (max-width: 480px) {
    height: 150px;
    border-radius: 0;
  }
`;

export const TabButtonStyled = styled.button`
  height: 50px;
  width: 150px;
  border: none;
  border-bottom: 4px ${props => (props.isActive ? "solid red" : "transparent")};
  background-color: transparent;
  padding: 0;
  outline: none;
  cursor: pointer;
  color: #f4f4f4;

  @media (max-width: 480px) {
    border-bottom: none;
    border-left: 5px ${props => (props.isActive ? "solid red" : "transparent")};
    width: inherit;
    float: left;
  }
`;
