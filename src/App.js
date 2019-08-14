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
import store from "store/store";
import {
  changePosition,
  changeType,
  changeText,
  changeSnackbarVisibility
} from "store/actions";

const App = ({
  changePositionAction,
  changeTypeAction,
  changeTextAction,
  changeSnackbarVisibilityAction
}) => {
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
              changePositionAction={changePositionAction}
              changeTypeAction={changeTypeAction}
              changeTextAction={changeTextAction}
              changeSnackbarVisibilityAction={changeSnackbarVisibilityAction}
              snackbarIsVisible={store.getState().snackbarIsVisible}
            />
          )}
        />
        <Route path="/auth" component={Authentication} />
        <Route />
      </Router>
      <SnackbarPresentation
        snackbarType={store.getState().snackbarType}
        snackbarPosition={store.getState().snackbarPosition}
        snackbarText={store.getState().snackbarText}
        snackbarIsVisible={store.getState().snackbarIsVisible}
        changeSnackbarVisibilityAction={changeSnackbarVisibilityAction}
      />
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    snackbarType: state.snackbarType,
    snackbarPosition: state.snackbarPosition,
    snackbarText: state.snackbarText,
    snackbarIsVisible: state.snackbarIsVisible
  };
};

const mapDispatchToProps = dispatch => ({
  changePositionAction: value => dispatch(changePosition(value)),
  changeTypeAction: value => dispatch(changeType(value)),
  changeTextAction: value => dispatch(changeText(value)),
  changeSnackbarVisibilityAction: value =>
    dispatch(changeSnackbarVisibility(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
