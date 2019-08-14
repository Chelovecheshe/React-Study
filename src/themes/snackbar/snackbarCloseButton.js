import styled from "styled-components";

export const SnackbarCloseButtonStyled = styled.div`
  position: absolute;
  right: 3px;
  top: 2px;
  width: 5px;
  height: 5px;
  opacity: 0.25;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &:before,
  &:after {
    position: absolute;
    left: 1px;
    content: " ";
    height: 9px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;
