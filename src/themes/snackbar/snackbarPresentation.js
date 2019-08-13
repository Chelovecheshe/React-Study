import styled, { keyframes } from "styled-components";

const fadein = keyframes`
  from { bottom: 0; opacity: 0; }
  to { bottom: 10px; opacity: 1; }
`;

const fadeout = keyframes`
  from { bottom: 10px; opacity: 1; }
  to { bottom: 0; opacity: 0; }
`;

export const SnackbarPresentationHiddenStyled = styled.div`
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #609da0;
  color: white;
  text-align: center;
  border-radius: 2px;
  padding: 8px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 10px;
  font-size: 1rem;
  animation: ${fadeout} 0.5s 2.5s;
`;

export const SnackbarPresentationVisibleStyled = styled.div`
  min-width: 250px;
  margin-left: -125px;
  background-color: #609da0;
  color: white;
  text-align: center;
  border-radius: 2px;
  padding: 8px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 10px;
  font-size: 1rem;
  animation: ${fadein} 0.5s;
`;
