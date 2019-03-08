import React, { useState } from "react";
// constants
import { ENUM } from "../../constants/constants";

const Tabs = ({ render }) => {
  const [value, setValue] = useState(ENUM.FIRST);

  return (
    <>
      {render({
        active: value,
        setActive: setValue
      })}
    </>
  );
};

export default Tabs;
