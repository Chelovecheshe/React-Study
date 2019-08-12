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
  options,
  position,
  controlDirection,
  changeTextAction
}) => {
  const handleChangeText = event =>
    changeTextAction.changeTextAction(event.target.value);

  return (
    <SnackbarStyled>
      <SnackbarInput textHint={textHint} onChange={handleChangeText} />
      <SnackbarButton>{buttonName || "Create"}</SnackbarButton>
      {/* TODO simplify components */}
      <SnackbarSettingsWrapper>
        <SnackbarSettingsChooseWrapper>
          {options.map((item, index) => (
            <SnackbarSettingsChoose key={index}>
              <SnackbarSettingsChooseRadioButton
                type={"radio"}
                defaultChecked={index === 0}
                name={"group1"}
              />
              <SnackbarSettingsChooseName />
              {item}
            </SnackbarSettingsChoose>
          ))}
        </SnackbarSettingsChooseWrapper>
        <SnackbarSettingsChooseWrapper>
          {position.map((item, index) => (
            <SnackbarSettingsChoose key={index}>
              <SnackbarSettingsChooseRadioButton
                type={"radio"}
                defaultChecked={index === 0}
                name={"group2"}
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
