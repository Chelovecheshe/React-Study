import styled from "styled-components";

export const StyledAuthenticationWrapper = styled.div`
  width: 200px;
  height: 300px;
  margin: 50px auto 0 auto;
`;

export const StyledAuthenticationInput = styled.input.attrs({
  placeholder: props => props.textHint || ""
})`
  width: 200px;
  height: 2em;
  padding: 0.2em 0.5em;
  border: 1px solid #609da0;
  border-radius: 3px;
  display: block;
  box-sizing: border-box;

  &:nth-child(2) {
    margin-top: 5px;
  }
`;

export const StyledAuthenticationButton = styled.button`
  width: 80px;
  margin-top: 15px;
  color: #3d2f12;
  border-color: #e3ad42;
  border-radius: 4px;
  background-color: #fcbf49;
  float: right;

  &:active {
    border: 1px solid #609ca0;
  }

  &:focus {
    outline: none;
  }
`;

//TODO pepelsbey svg icons
export const StyledAuthenticationCheckbox = styled.input`
  margin-left: 5px;
  margin-top: 18px;
`;
