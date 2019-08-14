import styled, { keyframes } from "styled-components";

const fadein = keyframes`
  from { bottom: 0; opacity: 0; }
  to { bottom: 10px; opacity: 1; }
`;

const fadeout = keyframes`
  from { bottom: 10px; opacity: 1; }
  to { bottom: 0; opacity: 0; }
`;

// TODO fix animation for top positioned snackbar

export const SnackbarPresentationHiddenStyled = styled.div`
  visibility: hidden;
  min-height: 30px;
  min-width: 250px;
  margin-left: ${props =>
    (props.snackbarPosition === "Top-left" && "0px") ||
    (props.snackbarPosition === "Top-center" && "-125px") ||
    (props.snackbarPosition === "Top-right" && "90vw") ||
    (props.snackbarPosition === "Bottom-left" && "0px") ||
    (props.snackbarPosition === "Bottom-center" && "-125px") ||
    (props.snackbarPosition === "Bottom-left" && "90vw")};
  background-color: ${props =>
    (props.snackbarType === "Error" && "#f00000") ||
    (props.snackbarType === "Warning" && "#ffe743") ||
    (props.snackbarType === "Information" && "#3a6ea5") ||
    (props.snackbarType === "Success" && "#47cf73")};
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
  min-height: 30px;
  min-width: 250px;
  margin-left: ${props =>
    (props.snackbarPosition === "Top-left" && "0px") ||
    (props.snackbarPosition === "Top-center" && "-125px") ||
    (props.snackbarPosition === "Top-right" && "90vw") ||
    (props.snackbarPosition === "Bottom-left" && "0px") ||
    (props.snackbarPosition === "Bottom-center" && "-125px") ||
    (props.snackbarPosition === "Bottom-right" && "90vw")};
  background-color: ${props =>
    (props.snackbarType === "Error" && "#f00000") ||
    (props.snackbarType === "Warning" && "#ffe743") ||
    (props.snackbarType === "Information" && "#3a6ea5") ||
    (props.snackbarType === "Success" && "#47cf73")};
  color: white;
  text-align: center;
  border-radius: 2px;
  padding: 8px;
  position: fixed;
  z-index: 1;
  left: ${props =>
    (props.snackbarPosition === "Bottom-center" && "50%") ||
    (props.snackbarPosition === "Bottom-left" && "10px") ||
    (props.snackbarPosition === "Top-center" && "50%") ||
    (props.snackbarPosition === "Top-left" && "10px")};
  right: ${props =>
    (props.snackbarPosition === "Top-right" && "10px") ||
    (props.snackbarPosition === "Bottom-right" && "10px")};
  bottom: ${props =>
    (props.snackbarPosition === "Bottom-left" && "10px") ||
    (props.snackbarPosition === "Bottom-center" && "10px") ||
    (props.snackbarPosition === "Bottom-right" && "10px")};
  top: ${props =>
    (props.snackbarPosition === "Top-left" && "10px") ||
    (props.snackbarPosition === "Top-center" && "10px") ||
    (props.snackbarPosition === "Top-right" && "10px")};
  font-size: 1rem;
  box-sizing: border-box;
  animation: ${fadein} 0.5s;
`;
