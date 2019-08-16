import React, { FunctionComponent } from "react";

// styles
import { TabsStyled, TabButtonStyled } from "../../themes/tab/tabs";

type TabBarComponent = {
  buttonsNames: string[],
  active: number,
  setActiveTab: (index: number) => void
}

const TabBar: FunctionComponent<TabBarComponent> = ({ buttonsNames, active, setActiveTab }) => {
  return (
    <TabsStyled>
      {buttonsNames.map((item, index) => (
        <TabButtonStyled
          key={index}
          onClick={() => (active === index ? null : setActiveTab(index))}
          isActive={active === index}
        >
          {item}
        </TabButtonStyled>
      ))}
    </TabsStyled>
  );
};

export default TabBar;
