import React from "react";

// containers
import Tabs from "containers/tabs/tabs";
// components
import TabBar from "components/tabs/tabBar";
import TabView from "components/tabs/tabView";
import { buttonsNames } from "constants/constants";

const Home = ({
  changeTextAction,
  changeSnackbarVisibilityAction,
  snackbarIsVisible
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
            changeTextAction={changeTextAction}
            changeSnackbarVisibilityAction={changeSnackbarVisibilityAction}
            snackbarIsVisible={snackbarIsVisible}
          />
        </>
      )}
    />
  );
};

export default Home;
