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
          <div className="mb-24 text-color-high text-xs">Type in your email address and/or your phone number with message and hit send.</div>
          <div className="contact-info">
            <div className="form-items">
              <div className="mb-16 mt-16">
                <Input
                  id="firstname"
                  type="text"
                  placeholder="Full Name"
                ></Input>
              </div>
              <div className="mb-16">
                <Input id="email" type="email" placeholder="E-mail"></Input>
              </div>
              <div className="mb-16">
                <Input id="phone" type="tel" placeholder="Phone number"></Input>
              </div>
              <div className="mb-16">
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
            <div className="address-items pl-64">
              <div className="pb-4">
                <address className="">
                  <div className="mb-4 d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 384 512"
                      fill="#4595d0"
                    >
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />{" "}
                    </svg>
                    <span className="ml-16">
                      333 Drummond Street, <br />
                      Carlton, VIC 3053
                    </span>
                  </div>
                  <br />
                  <p className="mb-4 d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 512 512"
                      fill="#4595d0"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />{" "}
                    </svg>
                    <a href="tel:+61413905850" className="ml-16">
                      +61-413-905850
                    </a>
                  </p>
                  <p className="mb-4 d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 512 512"
                      fill="#4595d0"
                    >
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                    <a
                      href="mailto: khurram@firecentral.com.au"
                      className="ml-16"
                    >
                      khurram@firecentral.com.au
                    </a>
                  </p>
                </address>
              </div>
            </div>
          </div>
          <div className="mt-32 text-xs">
            Feel free to contact Fire Central 24 x 7 if you have any inquiries
            or require quote for any of our listed services.
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
