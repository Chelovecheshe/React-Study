import React, { FunctionComponent } from "react";

//styles
import SnackbarStyled from "../../themes/snackbar/snackbar";
import SnackbarInput from "../../themes/snackbar/snackbarInput";
import SnackbarButton from "../../themes/snackbar/snackbarButton";
import SnackbarSettingsWrapper from "../../themes/snackbar/snackbarSettings";
import {
  SnackbarSettingsChoose,
  SnackbarSettingsChooseWrapper,
  SnackbarSettingsChooseName,
  SnackbarSettingsChooseRadioButton
} from "../../themes/snackbar/snackbarSettingsChoose";

type SnackbarComponent = {
  buttonName: string,
  textHint: string,
  snackbarType: string[],
  snackbarPosition: string[],
  controlDirection: string[],
  changeSnackbarPositionAction: (snackbarPosition: string) => { type: string; payload: string; },
  changeSnackbarTypeAction: (snackbarType: string) => { type: string; payload: string; },
  changeSnackbarTextAction: (snackbarText: string) => { type: string; payload: string; },
  changeSnackbarVisibilityAction: (snackbarVisibility: boolean) => { type: string; payload: boolean; },
  snackbarVisibility: boolean
}

const Snackbar: FunctionComponent<SnackbarComponent> = ({
  buttonName,
  textHint,
  snackbarType,
  snackbarPosition,
  controlDirection,
  changeSnackbarPositionAction,
  changeSnackbarTypeAction,
  changeSnackbarTextAction,
  changeSnackbarVisibilityAction,
  snackbarVisibility
}) => {
  const handleChangeText = event =>
    changeSnackbarTextAction(event.target.value);

  const handleButtonClick = () => {
    changeSnackbarVisibilityAction(!snackbarVisibility);
  };

  const handleTypeChanged = index => () => {
    changeSnackbarTypeAction(snackbarType[index]);
  };

  const handlePositionChange = index => () => {
    changeSnackbarPositionAction(snackbarPosition[index]);
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
