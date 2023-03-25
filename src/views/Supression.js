import React from "react";
// import sections
import GenericSection from "../components/sections/GenericSection";
import Image from "../components/elements/Image";

const Supression = () => {
  return (
    <>
      <GenericSection>
        <h3 className="m-0 mb-24">Fire Suppression Systems</h3>
        <p>
          There are many cases where a standard fire sprinkler system cannot and
          will not protect property in the event of a fire. In instances where
          you are fighting electrical fires, certain chemicals, metals, or
          flammable materials less dense than water, you need a specialty system
          to extinguish fires. Fire Central can design, install, inspect and
          servicing any specialty fire suppression system that usually has four
          key components i.e. Detection, Control Panel, Suppression System and
          Monitoring.
        </p>
        <Image
          className="mb-24"
          src={require("./../assets/images/supression1.png")}
          alt="Hero"
        />
        <p>
          Fire Central is an expert provider of following non-water based fire
          suppression systems:
        </p>
        <ul>
          <li>FM-200 Systems </li>
          <li>NOVEC 1230 Systems</li>
          <li>Inergen Systems</li>
          <li>CO2 Systems</li>
          <li>Foam Systems</li>
          <li>Wet and Dry Chemical Systems</li>
        </ul>
        <p>
          Don't take chances with the safety of your business and your
          employees. Contact us today to learn more about our fire suppression
          systems and how we can help protect your property and people.
        </p>
      </GenericSection>
    </>
  );
};

export default Supression;
