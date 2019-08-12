import styled, { keyframes } from "styled-components";

export const SnackbarPresentationVisibleStyled = styled.div`
  visibility: visible;
  min-width: 300px;
  margin-left: -150px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 0;
`;

const fadein = keyframes`
  from { bottom: 0; opacity: 0; }
  to { bottom: 30px; opacity: 1; }
`;

const fadeout = keyframes`
  from { bottom: 30px; opacity: 1; }
  to { bottom: 0; opacity: 0; }
`;

export const SnackbarPresentationHiddenStyled = styled.div`
  animation: ${fadein} 0.5s, ${fadeout} 0.5s 2.5s;
`;
