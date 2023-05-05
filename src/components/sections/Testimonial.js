import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Customer testimonials",
    paragraph: "Our satisfied customers have shared their delight with us...",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    We recently had Fire Central install the new fire hydrant
                    and fire alarm system at our Burwood Highway project, and we
                    couldn't be happier with the results. The technicians were
                    extremely knowledgeable and efficient, and the company
                    director (Khurram) always remained available in person or on
                    call whenever we needed to discuss the project. He was quick
                    to respond to any of our queries and worked together with us
                    to complete the project in time. I highly recommend Fire
                    Central for anyone in need of reliable fire protection
                    services.{" "}
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high mr-8">
                    Terence Wang
                  </span>
                  <span class="text-color-primary fw-600 tt-u">
                    Dandenong Views Private Limited{" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    Fire Central has recently completed the installation of fire
                    sprinkler and fire alarm system for one of my educational
                    facilities in West Melbourne. It was a pleasure to work with
                    them. They are thoroughly professional and willing to go an
                    extra mile to ensure that their clients are satisfied. They
                    have truly exceeded my expectations.
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high mr-8">
                    John Qian
                  </span>
                  <span class="text-color-primary fw-600 tt-u">
                    Qian Trading Private Limited
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
