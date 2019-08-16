import React, { FunctionComponent } from "react";

// styles
import {
  AccordionStyled,
  AccordionContent,
  Arrow
} from "../../themes/accordion/accordion";
// libs
import withAccordion from "../../libs/withAccordion";

type AccordionComponent = {
  names: string[],
  content: string[],
  active: number,
  setActive: (index: number) => void
}

const Accordion: FunctionComponent<AccordionComponent> = ({ names, content, active, setActive }) => {
  return (
    <>
      {names.map((item: string, index: number) => (
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

export default withAccordion(Accordion);
