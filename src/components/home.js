import React from "react";

// containers
import Tabs from "containers/tabs/tabs";
// components
import TabBar from "components/tabs/tabBar";
import TabView from "components/tabs/tabView";
import { buttonsNames } from "../constants/constants";
// actions
import { changeOption } from "../store/actions";

const Home = () => {
  return (
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
  );
};

export default Home;
