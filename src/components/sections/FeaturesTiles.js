import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import svg1 from "../../assets/images/feature-tile-icon-01.svg";
import svg2 from "../../assets/images/feature-tile-icon-01.svg";
import svg3 from "../../assets/images/feature-tile-icon-01.svg";
import svg4 from "../../assets/images/feature-tile-icon-01.svg";
import { Link } from "react-router-dom";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
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
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "What We Do",
    paragraph: "Installation and Upgrade of following systems",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={svg1}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <Link to="/fdas" className="item-link">
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">
                      Fire Detection & Alarm Systems
                    </h4>
                    <p className="m-0 text-sm">
                      We can equip your facility with required fire alarm and
                      detection system to meet your specific requirements and
                      ensure full compliance with latest Australian Standards.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={svg2}
                      alt="Features tile icon 03"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <Link to="/sprinkler" className="item-link">
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Fire Sprinkler Systems</h4>
                    <p className="m-0 text-sm">
                      We design, fabricate and install the fire sprinkler
                      systems for a variety of commercial, industrial and
                      residential applications, providing the highest level of
                      fire protection in accordance with latest Australian
                      Standards.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={svg3}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <Link to="/supression">
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Fire Suppression System</h4>
                    <p className="m-0 text-sm">
                      We can supply and install the gas fire suppression systems
                      like FM200 & NOVEC1230 which are the environment friendly
                      fire protection solutions for server rooms, data halls,
                      control rooms, record stores and many other high value
                      critical assets.
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={svg4}
                      alt="Features tile icon 04"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <Link to="/hydrant">
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Fire Hydrant Systems</h4>
                    <p className="m-0 text-sm">
                      We can help you with pre-construction street flow and
                      pressure testing for your fire hydrant design,
                      installation, certification and commissioning.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
