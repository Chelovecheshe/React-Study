import React, { Component } from "react";
import PropTypes from "prop-types";

// styles
import {
  AccordionStyled,
  AccordionContent,
  Arrow
} from "../../themes/accordion/accordion.js";

class Accordion extends Component {
  state = {
    active: -1
  };

  showContent(index) {
    this.setState(state => ({ active: state.active === index ? -1 : index }));
  }

  render() {
    return (
      <>
        {this.props.names.map((item, index) => (
          <AccordionStyled key={index}>
            {item}
            <Arrow onClick={() => this.showContent(index)} />
            {this.state.active === index && (
              <AccordionContent key={index}>
                {this.props.content[index]}
              </AccordionContent>
            )}
          </AccordionStyled>
        ))}
      </>
    );
  }
}

Accordion.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Accordion;
