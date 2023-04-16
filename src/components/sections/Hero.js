import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import { Carousel } from "react-carousel-minimal";
import image1 from "./../../assets/images/image1.jpg";
import image2 from "./../../assets/images/image2.jpg";
import image3 from "./../../assets/images/image3.jpg";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const data = [
    {
      image: image1,
      caption: `<div>
                  <h4 class="m-16">OUR GOAL</h4>
                  Providing the very best fire protection solutions at affordable rates
                </div>`,
    },
    {
      image: image2,
      caption: `<div>
                  <h4 class="m-16">YOUR SAFETY</h4>
                  <p>We design, install, inspect and maintain all systems to absolute client safety and code compliance</p>
                </div>`,
    },
    {
      image: image3,
      caption: `<div>
                  <h4 class="m-16">FULL-SERVICE FIRE PROTECTION COMPANY</h4>
                  We offer all services necessary to address your fire protection needs across Melbourne
                </div>`,
    },
  ];

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner pt-32",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h3
              className="mt-0 mb-32 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Welcome to{" "}
              <span className="text-color-gradient">Firecentral</span> Melbourne
            </h3>
          </div>
          <div className="hero-figure mt-32 reveal-from-bottom illustration-element-01">
            <Carousel
              data={data}
              time={5000}
              width="100%"
              height="500px"
              slideNumber={false}
              automatic={true}
              dots={false}
              slideImageFit="cover"
              pauseIconColor="white"
              thumbnails={false}
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
