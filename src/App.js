import React from "react";

// containers
import Tabs from "containers/tabs/tabs";
// styles
import GlobalStyle from "themes/globalStyle";
import Wrapper from "themes/wrapper";
// constants
import { buttonsNames } from "constants/constants";
import TabBar from "./components/tabs/tabBar";
import TabView from "./components/tabs/tabView";

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
            <TabView active={active} />
          </>
        )}
      />
    </Wrapper>
  );
};

export default App;
