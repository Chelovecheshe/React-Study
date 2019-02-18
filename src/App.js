import React, { useState } from "react";

// containers
import TabBar from "./containers/tab/tabBar";
import TabView from "./containers/tab/tabView";
// libs
import TabsWrapper from "./libs/withTabs";
// styles
import "./App.css";
import Wrapper from "./themes/wrapper";
// constants
import { ENUM, buttonsNames } from "./constants/constans";

const App = () => {
  const [value, setValue] = useState(ENUM.FIRST);

  const handleClick = nextTab => setValue(nextTab);

  return (
    <Wrapper>
      <TabsWrapper
        tabBar={
          <TabBar
            names={buttonsNames}
            setActiveTab={handleClick}
            active={value}
          />
        }
        tabView={<TabView active={value} />}
      />
    </Wrapper>
  );
};

export default App;
