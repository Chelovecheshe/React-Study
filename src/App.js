import React from "react";

// containers
import Tabs from "containers/tabs/tabs";
// components
import TabBar from "./components/tabs/tabBar";
import TabView from "./components/tabs/tabView";
// styles
import GlobalStyle from "themes/globalStyle";
import Wrapper from "themes/wrapper";
// constants
import { buttonsNames } from "constants/constants";
// actions
import { changeOption } from "./store/actions";

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Tabs
        render={({ active, setActive }) => (
          <>
            <TabBar
              buttonsNames={buttonsNames}
              setActiveTab={setActive}
              active={active}
            />
            <TabView active={active} changeOption={changeOption} />
          </>
        )}
      />
    </Wrapper>
  );
};

export default App;
