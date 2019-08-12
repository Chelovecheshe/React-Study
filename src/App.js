import React from "react";

// components
import Home from "components/home";
import Authentication from "components/authentication";
import SnackbarPresentation from "components/snackbar/snackbarPresentation";
// styles
import GlobalStyle from "themes/globalStyle";
import Wrapper from "themes/wrapper";
import { StyledListNavigation, StyledLink } from "themes/navigation";
// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// redux
import { connect } from "react-redux";
import {
  changeOption,
  changeText,
  changeSnackbarVisibility
} from "store/actions";

const App = ({ changeOption, changeTextAction, changeSnackbarVisibility }) => {
  console.log(changeTextAction);
  return (
    <Wrapper>
      <GlobalStyle />
      <Router>
        <StyledListNavigation>
          <StyledLink>
            <Link to="/">Home</Link>
          </StyledLink>
          <StyledLink>
            <Link to="/auth">Auth</Link>
          </StyledLink>
        </StyledListNavigation>
        <Route
          exact
          path="/"
          render={props => (
            <Home
              {...props}
              changeOption={changeOption}
              changeTextAction={changeTextAction}
              changeSnackbarVisibility={changeSnackbarVisibility}
            />
          )}
        />
        <Route path="/auth" component={Authentication} />
        <Route />
      </Router>
      <SnackbarPresentation />
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    optionSelected: state.optionSelected,
    snackbarText: state.snackbarText,
    snackbarIsVisible: state.snackbarIsVisible
  };
};

const mapDispatchToProps = dispatch => ({
  changeOption: value => dispatch(changeOption(value)),
  changeTextAction: value => dispatch(changeText(value)),
  changeSnackbarVisibility: value => dispatch(changeSnackbarVisibility(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
