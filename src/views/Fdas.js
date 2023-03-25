import React from "react";
// import sections
import GenericSection from "../components/sections/GenericSection";
import Image from "../components/elements/Image";

const Fdas = () => {
  return (
    <>
      <GenericSection>
        <h3 className="m-0 mb-24">Fire Detection & Alarm Systems</h3>
        <p>
          As a business owner, protecting your property and employees from the
          threat of fire is a must. A fire alarm system can save lives and
          reduce damage to your property by alerting people to a fire as soon as
          it starts.
        </p>
        <Image
          className="mb-24"
          src={require("./../assets/images/fdas1.jpg")}
          alt="Hero"
        />
        <p>
          A fire alarm system is an early detection and warning system designed
          to alert occupants of a fire. Upon the activation of an alarm, sirens
          will commence, instructing the occupants to evacuate. These systems
          generally use smoke, heat, or flame detectors to detect the outbreak
          of fire and to alert building occupants and the fire service.
        </p>
        <p>
          At Fire Central, we specialize in designing and installing
          high-quality fire alarm systems for businesses of all types and sizes
          to meet the specific needs of your property. We can advise you on the
          best type of fire alarm system for your specific purpose based on the
          building classification and intended use.
        </p>
        <p>
          Our team of experienced technicians ensure to install, commission,
          monitor, inspect, test, and repair your fire alarm system up to latest
          Australian Standards. We will put our wealth of industry experience to
          good use, making your building code compliant and safe for your
          employees and customers.
        </p>
        <Image
          className="mb-24"
          src={require("./../assets/images/fdas2.jpg")}
          alt="Hero"
        />
        <p>
          Fire Central is an expert provider of following fire alarm systems and
          devices:
        </p>
        <ul>
          <li>Fire Indicator Panels (FIP)</li>
          <li>Smoke and Heat Detectors</li>
          <li>Building Occupant Warning Systems (BOWS)</li>
          <li>Emergency Warning and Intercommunication Systems (EWIS)</li>
          <li>VESDA Aspirating Smoke Detection Systems</li>
          <li>Gas Suppression Systems</li>
          <li>Linear Heat Detection Systems</li>
          <li>Audio & Visual Notification Devices</li>
          <li>Monitoring Services</li>
        </ul>
        <p>
          Don't take chances with fire safety. Contact us today to learn more
          about how our fire alarm systems can help you protect your business.{" "}
        </p>
      </GenericSection>
    </>
  );
};

export default Fdas;
