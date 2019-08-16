import React, { FunctionComponent } from "react";

// components
import Home from "../src/components/home";
import Authentication from "./components/authentication";
import SnackbarPresentation from "./components/snackbar/snackbarPresentation";
// styles
import GlobalStyle from "./themes/globalStyle";
import Wrapper from "./themes/wrapper";
import { StyledListNavigation, StyledLink } from "./themes/navigation";
// router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// redux
import { useDispatch, useSelector } from "react-redux";
import store from "./store/store";
import {
  changePosition,
  changeType,
  changeText,
  changeSnackbarVisibility
} from "./store/actions";

type AppComponent = {
  changeActiveTabAction: any,
  changePositionAction: any,
  changeTypeAction: any,
  changeTextAction: any,
  changeSnackbarVisibilityAction: any
};

const App: FunctionComponent<AppComponent> = () => {
  // redux
  interface IState {
    snackbarType: { snackbarType: string },
    snackbarText: { snackbarText: string },
    snackbarPosition: { snackbarPosition: string },
    snackbarVisibility: { snackbarVisibility: boolean }
  }

  interface ISelected {
    snackbarType: string,
    snackbarText: string,
    snackbarPosition: string,
    snackbarVisibility: boolean
  }

  const dispatch = useDispatch();

  const {
    changeSnackbarTypeAction,
    changeSnackbarTextAction,
    changeSnackbarPositionAction,
    changeSnackbarVisibilityAction
  } = React.useMemo(
    () => ({
      changeSnackbarTypeAction: (snackbarType: string) =>
        dispatch(changeType(snackbarType)),
      changeSnackbarTextAction: (snackbarText: string) =>
        dispatch(changeText(snackbarText)),
      changeSnackbarPositionAction: (snackbarPosition: string) =>
        dispatch(changePosition(snackbarPosition)),
      changeSnackbarVisibilityAction: (snackbarVisibility: boolean) =>
        dispatch(changeSnackbarVisibility(snackbarVisibility))
    }),
    [dispatch]
  );

  const selector = useSelector<IState, ISelected>(
    ({
      snackbarType: { snackbarType },
      snackbarText: { snackbarText },
      snackbarPosition: { snackbarPosition },
      snackbarVisibility: { snackbarVisibility }
    }) => ({
      snackbarType: snackbarType,
      snackbarText: snackbarText,
      snackbarPosition: snackbarPosition,
      snackbarVisibility: snackbarVisibility
    })
  );

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
              changeSnackbarTypeAction={changeSnackbarTypeAction}
              changeSnackbarTextAction={changeSnackbarTextAction}
              changeSnackbarPositionAction={changeSnackbarPositionAction}
              changeSnackbarVisibilityAction={changeSnackbarVisibilityAction}
              snackbarVisibility={store.getState().snackbarVisibility}
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
        snackbarVisibility={store.getState().snackbarVisibility}
        changeSnackbarVisibilityAction={changeSnackbarVisibilityAction}
      />
    </Wrapper>
  );
};

export default App;
