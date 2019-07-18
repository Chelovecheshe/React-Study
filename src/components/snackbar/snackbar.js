import React from "react";

//styles
import SnackbarStyled from "themes/snackbar/snackbar";
import SnackbarInput from "themes/snackbar/snackbarInput";
import SnackbarButton from "themes/snackbar/snackbarButton";
import SnackbarSettings from "themes/snackbar/snackbarSettings";
import {
  SnackbarSettingsChoose,
  SnackbarSettingsChooseWrapper,
  SnackbarSettingsChooseName,
  SnackbarSettingsChooseRadioButton
} from "themes/snackbar/snackbarSettingsChoose";
// redux
import { connect } from "react-redux";
import { changeText } from "store/actions";

const Snackbar = ({
  buttonName,
  textHint,
  options,
  position,
  controlDirection,
  changeText
}) => {
  const handleChangeText = event => {
    changeText(event.target.value);
  };

  return (
    <SnackbarStyled>
      <SnackbarInput textHint={textHint} onChange={handleChangeText} />
      <SnackbarButton>{buttonName || "Create"}</SnackbarButton>
      <SnackbarSettings>
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
      </SnackbarSettings>
    </SnackbarStyled>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    snackbarText: state.snackbarText
  };
};

const mapDispatchToProps = {
  changeText
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Snackbar);
