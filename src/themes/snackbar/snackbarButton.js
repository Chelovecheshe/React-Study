import styled from "styled-components";

const SnackbarButton = styled.button`
  width: 80px;
  margin: 15px auto 0 auto;
  color: #3d2f12;
  border-color: #e3ad42;
  border-radius: 4px;
  background-color: #fcbf49;

  &:active {
    border: 1px solid #609ca0;
  }

  &:focus {
    outline: none;
  }
`;

export default SnackbarButton;
