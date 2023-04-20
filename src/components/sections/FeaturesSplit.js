import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "Additional Services",
    paragraph: "We provide the following services in addition to the above.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Organize | Plan | Evaluate
                </div>
                <h3 className="mt-0 mb-12">Project Management</h3>
                <p className="m-0">
                  At Fire Central, we will plan, organize and manage your
                  project to ensure that it delivers on time and within budget.
                  Our efficient job costing, and productivity reporting allow us
                  to manage each project with accurate and up to date
                  information.
                </p>
                <p>At Fire Central:</p>
                <ul>
                  <li>
                    We are responsible for total delivery of the project in
                    accordance with established criteria.
                  </li>
                  <li>
                    We conduct long range project planning and scheduling.
                  </li>
                  <li>
                    We monitor and manage projects to comply with safety,
                    quality, and applicable Australian standards.
                  </li>
                  <li>
                    We review drawings as well as field check all stages of the
                    project.
                  </li>
                  <li>
                    We provide regular progress reports to our customers on the
                    project.
                  </li>
                  <li>
                    We participate in the evaluation of completed jobs to ensure
                    full acceptance.
                  </li>
                </ul>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/add-image-01.jpg")}
                  alt="Features split 01"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Maintain | Test | Warn
                </div>
                <h3 className="mt-0 mb-12">ESM Maintenance</h3>
                <p className="m-0">
                  ESM Maintenance is a periodic inspection, testing and
                  preventive maintenance services applicable to fire protection
                  systems and equipment in accordance with AS1851.
                </p>
                <p>
                  At Fire Central, we can look after your Essential Safety
                  Services Equipment including:
                </p>
                <ul>
                  <li>Smoke and Heat Detection Systems</li>
                  <li>Building Occupant Warning Systems</li>
                  <li>Fire Sprinkler Systems</li>
                  <li>Fire Hydrant Systems</li>
                  <li>Fire Hose Reel Systems</li>
                  <li>Portable Fire Extinguishers</li>
                </ul>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/add-image-02.jpg")}
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Prevent | Protect | Evacuate
                </div>
                <h3 className="mt-0 mb-12">EVAC &amp; Block Plans</h3>
                <p className="m-0">
                  Australian Standard AS3735-2010 mandates the requirement of
                  having an emergency evacuation plan for your facility and must
                  be reviewed every five years. These diagrams show vital
                  information that is essential in case of emergency, and at a
                  minimum must show the fire equipment, designated exit points,
                  emergency assembly points & evacuation routes.
                </p>
                <p>
                  Emergency Management Plans and Evacuation Diagrams help to:
                </p>
                <ul>
                  <li>Reduce the effects of an emergency</li>
                  <li>Prevent personal injuries.</li>
                  <li>Prevent property damage</li>
                  <li>Prevent loss of lives in the event of an emergency</li>
                  <li>Minimise business downtime and interruptions</li>
                </ul>
                <p>
                  A fire block plan includes layout of the building, the fire
                  protection system configuration installed in the building, and
                  other critical information to assist fire brigade in the event
                  of an emergency.
                </p>
                <p>
                  At Fire Central, we can assist you with several type of Block
                  Plans such as:
                </p>
                <ul>
                  <li>Fire Alarm Block Plans - AS1670.1</li>
                  <li>EWIS Block Plans - AS1670.4</li>
                  <li>Sprinkler Block Plans - AS2118.1 </li>
                  <li>Hydrant Block Plans - AS2419.1</li>
                </ul>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/add-image-03.jpg")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
