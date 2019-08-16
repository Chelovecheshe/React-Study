import React, { FunctionComponent } from "react";

// containers
import Tabs from "../containers/tabs/tabs";
// components
import TabBar from "../components/tabs/tabBar";
import TabView from "../components/tabs/tabView";
import { buttonsNames } from "../constants/constants";

type HomeComponent = {
  changeSnackbarPositionAction: (snackbarPosition: string) => { type: string; payload: string; },
  changeSnackbarTextAction: (snackbarText: string) => { type: string; payload: string; },
  changeSnackbarTypeAction: (snackbarType: string) => { type: string; payload: string; },
  changeSnackbarVisibilityAction: (snackbarVisibility: boolean) => { type: string; payload: boolean; },
  snackbarVisibility: boolean
};

const Home: FunctionComponent<HomeComponent> = ({
  changeSnackbarPositionAction,
  changeSnackbarTextAction,
  changeSnackbarTypeAction,
  changeSnackbarVisibilityAction,
  snackbarVisibility
}) => {
  return (
    <Tabs
      render={({ active, setActive }) => (
        <>
          <TabBar
            buttonsNames={buttonsNames}
            setActiveTab={setActive}
            active={active}
          />
          <TabView
            active={active}
            changeSnackbarPositionAction={changeSnackbarPositionAction}
            changeSnackbarTypeAction={changeSnackbarTypeAction}
            changeSnackbarTextAction={changeSnackbarTextAction}
            changeSnackbarVisibilityAction={changeSnackbarVisibilityAction}
            snackbarVisibility={snackbarVisibility}
          />
        </>
      )}
    />
  );
};

export default Home;
