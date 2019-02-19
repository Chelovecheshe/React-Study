import React, { useState } from "react";
import PropTypes from "prop-types";

// styles
import {
  AccordionStyled,
  AccordionContent,
  Arrow
} from "../../themes/accordion/accordion";
import { ENUM } from "../../constants/constans";

const Accordion = ({ names, content }) => {
  const [value, setValue] = useState(ENUM.INITIAL);

  const showContent = index => setValue(value === index ? ENUM.INITIAL : index);

  return (
    <>
      {names.map((item, index) => (
        <AccordionStyled key={index}>
          {item}
          <Arrow onClick={() => showContent(index)} />
          {value === index && (
            <AccordionContent key={index}>{content[index]}</AccordionContent>
          )}
        </AccordionStyled>
      ))}
    </>
  );
};

Accordion.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Accordion;
