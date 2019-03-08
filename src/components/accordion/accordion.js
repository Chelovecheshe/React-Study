import React from "react";
import PropTypes from "prop-types";
// styles
import {
  AccordionStyled,
  AccordionContent,
  Arrow
} from "themes/accordion/accordion";
// libs
import withAccordion from "libs/withAccordion";

const Accordion = ({ names, content, active, setActive }) => {
  return (
    <>
      {names.map((item, index) => (
        <AccordionStyled key={index}>
          {item}
          <Arrow key={index} onClick={() => setActive(index)} />
          {active === index && (
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

export default withAccordion(Accordion);
