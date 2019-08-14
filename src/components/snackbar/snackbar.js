import React from "react";

//styles
import SnackbarStyled from "themes/snackbar/snackbar";
import SnackbarInput from "themes/snackbar/snackbarInput";
import SnackbarButton from "themes/snackbar/snackbarButton";
import SnackbarSettingsWrapper from "themes/snackbar/snackbarSettings";
import {
  SnackbarSettingsChoose,
  SnackbarSettingsChooseWrapper,
  SnackbarSettingsChooseName,
  SnackbarSettingsChooseRadioButton
} from "themes/snackbar/snackbarSettingsChoose";

const Snackbar = ({
  buttonName,
  textHint,
  snackbarType,
  snackbarPosition,
  controlDirection,
  changePositionAction,
  changeTypeAction,
  changeTextAction,
  changeSnackbarVisibilityAction,
  snackbarIsVisible
}) => {
  const handleChangeText = event => changeTextAction(event.target.value);

  const handleButtonClick = () => {
    changeSnackbarVisibilityAction(!snackbarIsVisible);
  };

  const handleTypeChanged = index => () => {
    changeTypeAction(snackbarType[index]);
  };

  const handlePositionChange = index => () => {
    changePositionAction(snackbarPosition[index]);
  };

  // TODO set function and rules for animation direction

  return (
    <SnackbarStyled>
      <SnackbarInput
        textHint={textHint}
        onChange={handleChangeText}
        type="text"
      />
      <SnackbarButton onClick={handleButtonClick}>
        {buttonName || "Create"}
      </SnackbarButton>
      <SnackbarSettingsWrapper>
        <SnackbarSettingsChooseWrapper>
          {snackbarType.map((item, index) => (
            <SnackbarSettingsChoose key={index}>
              <SnackbarSettingsChooseRadioButton
                type={"radio"}
                defaultChecked={index === 2}
                name={"group1"}
                onChange={handleTypeChanged(index)}
              />
              <SnackbarSettingsChooseName />
              {item}
            </SnackbarSettingsChoose>
          ))}
        </SnackbarSettingsChooseWrapper>
        <SnackbarSettingsChooseWrapper>
          {snackbarPosition.map((item, index) => (
            <SnackbarSettingsChoose key={index}>
              <SnackbarSettingsChooseRadioButton
                type={"radio"}
                defaultChecked={index === 0}
                name={"group2"}
                onChange={handlePositionChange(index)}
              />
              <SnackbarSettingsChooseName />
              {item}
            </SnackbarSettingsChoose>
          ))}
        </SnackbarSettingsChooseWrapper>
        <SnackbarSettingsChooseWrapper>
          {controlDirection.map((item, index) => (
            <SnackbarSettingsChoose key={index}>
              <SnackbarSettingsChooseRadioButton
                type={"radio"}
                defaultChecked={index === 0}
                name={"group3"}
              />
              <SnackbarSettingsChooseName />
              {item}
            </SnackbarSettingsChoose>
          ))}
        </SnackbarSettingsChooseWrapper>
      </SnackbarSettingsWrapper>
    </SnackbarStyled>
  );
};

export default Snackbar;
