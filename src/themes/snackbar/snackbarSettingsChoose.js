import styled from "styled-components";

//TODO pepelsbey svg icons
export const SnackbarSettingsChooseWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SnackbarSettingsChoose = styled.label`
  text-align: left;
  cursor: pointer;
  padding-left: 1.2em;
`;

export const SnackbarSettingsChooseRadioButton = styled.input`
  -webkit-appearance: none;
  position: absolute;

  &:checked + span {
    background-color: #609ca0;
  }
`;

export const SnackbarSettingsChooseName = styled.span`
  position: absolute;
  height: 1em;
  width: 1em;
  background-color: #fcbf49;
  margin-top: 0.17em;
  border-radius: 50%;
  margin-left: -1.2em;
`;
