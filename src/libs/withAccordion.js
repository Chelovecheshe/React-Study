import React, { useState } from "react";
// constants
import { ENUM } from "constants/constants";

const withAccordion = WrappedComponent => {
  return props => {
    const [value, setValue] = useState(ENUM.INITIAL);

    const showContent = index =>
      setValue(value === index ? ENUM.INITIAL : index);

    return (
      <WrappedComponent {...props} active={value} setActive={showContent} />
    );
  };
};

export default withAccordion;
