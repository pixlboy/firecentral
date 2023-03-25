import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import Input from "../elements/Input";
import Button from "../elements/Button";

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    "cta section center-content-mobile reveal-from-bottom",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "cta-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider",
    split && "cta-split"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <h3 className="m-0">Wish to contact us ?</h3>
          <div className="mb-24">Send us a message!</div>
          <div className="mb-16 mt-16 d-flex">
            <Input id="firstname" type="text" placeholder="Full Name"></Input>
          </div>
          <div className="mb-16 d-flex">
            <Input id="email" type="email" placeholder="E-mail"></Input>
          </div>
          <div className="mb-16 d-flex">
            <Input
              id="phone"
              type="tel"
              placeholder="Phone number"
            ></Input>
          </div>
          <div className="mb-16 d-flex">
            <Input
              id="message"
              type="textarea"
              placeholder="Your Message"
            ></Input>
          </div>
          <div className="mb-16 ta-l">
            <Button wideMobile>Send</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
