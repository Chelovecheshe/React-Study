import React, { useState } from "react";

// containers
import TabBar from "containers/tab/tabBar";
import TabView from "containers/tab/tabView";
// styles
import GlobalStyle from "themes/globalStyle";
import Wrapper from "themes/wrapper";
// constants
import { ENUM, buttonsNames } from "constants/constans";

const App = () => {
  const [value, setValue] = useState(ENUM.FIRST);

  return (
    <Wrapper>
      <GlobalStyle />
      <TabBar names={buttonsNames} setActiveTab={setValue} active={value} />
      <TabView active={value} />
    </Wrapper>
  );
};

export default App;
