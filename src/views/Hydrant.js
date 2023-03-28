import React from "react";
// import sections
import GenericSection from "../components/sections/GenericSection";
import Image from "../components/elements/Image";

const Hydrant = () => {
  return (
    <>
      <GenericSection>
        <h3 className="m-0 mb-24">Fire Hydrant Systems</h3>
        <p>
          A fire hydrant system is a critical piece of infrastructure for any
          building or industrial site. It is a network of pipes, valves and
          outlets connected to an underground water supply that can provide a
          reliable source of water during a fire emergency.
        </p>
        <Image
          className="mb-24"
          src={require("./../assets/images/hydrant1.jpg")}
          alt="Hydrant"
        />
        <p>
          Commercial buildings and industrial sites are required to have a
          functioning fire hydrant system installed on their premises. This
          includes the installation of water supply pipelines and fire hydrants
          at strategic locations so that fire fighters can connect their hoses
          to the nearest fire hydrant to access the water supply.
        </p>
        <p>
          Fire Central specialise in the design, installation, testing and
          commissioning of fire hydrant systems that comply to Australian
          Standard AS2419 and Building Code of Australia (BCA) requirements.
        </p>
        <p>Our fire hydrant system services mainly consist of:</p>
        <ul>
          <li>Fire Booster Assemblies</li>
          <li>Fire Hydrant Assemblies</li>
          <li>Suction Points</li>
        </ul>
        <p>Apart from fire hydrant systems, we also supply and install:</p>
        <ul>
          <li>Fire Hose Reels</li>
          <li>Fire Cabinets</li>
          <li>Fire Isolation Valves</li>
          <li>Fire Extinguishers</li>
          <li>Fire Blankets</li>
        </ul>
        <p>
          Get in touch with us today when you need a fire hydrant system
          installed in the building you’re working on.{" "}
        </p>
      </GenericSection>
    </>
  );
};

export default Hydrant;
