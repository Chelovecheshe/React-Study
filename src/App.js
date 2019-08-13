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
import { changeText, changeSnackbarVisibility } from "store/actions";

const App = ({ changeTextAction, changeSnackbarVisibilityAction }) => {
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
        isVisible={store.getState().snackbarIsVisible}
        text={store.getState().snackbarText}
      />
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    snackbarText: state.snackbarText,
    snackbarIsVisible: state.snackbarIsVisible
  };
};

const mapDispatchToProps = dispatch => ({
  changeTextAction: value => dispatch(changeText(value)),
  changeSnackbarVisibilityAction: value =>
    dispatch(changeSnackbarVisibility(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
