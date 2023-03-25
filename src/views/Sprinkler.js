import React from "react";
// import sections
import GenericSection from "../components/sections/GenericSection";
import Image from "../components/elements/Image";

const Sprinkler = () => {
  return (
    <>
      <GenericSection>
        <h3 className="m-0 mb-24">Fire Sprinkler Systems</h3>
        <p>
          Fire sprinkler systems are vital installations that help protect
          buildings and the people inside them in the event of a fire. They are
          designed to detect a fire as soon as it starts and automatically spray
          water or other firefighting agents to extinguish the flames.
        </p>
        <Image
          className="mb-24"
          src={require("./../assets/images/sprinkler1.jpg")}
          alt="Hero"
        />
        <p>
          At Fire Central, we specialize in designing, installing, repairing,
          and maintaining fire sprinkler systems for commercial, industrial, and
          residential buildings of all sizes in accordance with latest
          Australian Fire Protection Standards. Our team of experts approaches
          each project with a unique perspective to ensure that we deliver the
          most effective fire sprinkler system for your property.
        </p>
        <p>
          Our fire sprinkler systems come with a variety of benefits. First,
          they offer quick fire suppression, which will save lives and reduce
          property damage. Secondly, they increase the overall value of the
          property by demonstrating its level of preparedness and safety.
          Additionally, a properly installed and maintained sprinkler system can
          also lower your insurance premiums.
        </p>
        <p>
          We use only top-quality materials and components to ensure your system
          is reliable and durable. We also offer regular maintenance services,
          which include testing, inspection, and repairs to keep your system
          functioning optimally.
        </p>
        <Image
          className="mb-24"
          src={require("./../assets/images/sprinkler2.jpg")}
          alt="Hero"
        />
        <p>Fire Central is an expert provider of following fire sprinkler:</p>
        <ul>
          <li>Wet Pipe Sprinkler Systems</li>
          <li>Dry Pipe Sprinkler Systems</li>
          <li>Deluge Sprinkler Systems</li>
          <li>Pre-action Sprinkler Systems</li>
        </ul>
        <p>
          Don't wait until it's too late! Install a fire sprinkler system today
          and ensure the safety of your building and its occupants. Contact us
          to discuss your fire protection needs and get a free consultation
          today.
        </p>
      </GenericSection>
    </>
  );
};

export default Sprinkler;
