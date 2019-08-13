import styled from "styled-components";

const SnackbarInput = styled.input.attrs({
  placeholder: props => props.textHint || "Enter name"
})`
  width: 200px;
  height: 1.44em;
  margin: 15px auto 0 auto;
  border-radius: 3px;
  border: 1px solid #e3ad42;
  padding: 3px;

  &:focus {
    border-color: #609ca0;
    outline: none;
  }

  &:focus::placeholder {
    color: #9b9b9b;
  }
`;

export default SnackbarInput;
