import React from "react";
// import sections
import GenericSection from "../components/sections/GenericSection";
import Image from "../components/elements/Image";

const Sprinkler = () => {
  return (
    <>
      <GenericSection>
        <h3 className="m-0 mb-24">ABOUT US</h3>
        <p>
          Welcome to Fire Central Private Limited, your trusted partner in fire
          protection services! With years of experience in the industry, we have
          the knowledge and expertise to handle all your fire protection needs.
        </p>
        <Image
          className="mb-24"
          src={require("./../assets/images/about-1.jpg")}
          alt="aboutus"
        />
        <p>
          Our company was founded on the principle of providing reliable fire
          protection services to protect the lives and properties of individuals
          and businesses. At our company, we take pride in offering a wide range
          of services to ensure that your property is fully protected. Whether
          you need a fire alarm system installation or a fire sprinkler system
          installation, or any maintenance and repairs, we have the skills and
          resources to get the job done right.
        </p>
        <p>
          We understand that fire protection is not a one-size-fits-all
          solution, which is why we take the time to listen to your specific
          needs and concerns. From the initial consultation to the final
          installation, we work closely with you every step of the way to ensure
          that your fire protection system is tailored to your unique
          requirements.
        </p>
        <p>
          Our team is made up of certified fire protection specialists who are
          passionate about what they do. We are committed to staying up-to-date
          with the latest industry standards and regulations to ensure that our
          services are always of the highest quality and fully complaint.
        </p>
        <Image
          className="mb-24"
          src={require("./../assets/images/about-2.jpg")}
          alt="aboutus"
        />
        <h3 className="m-0 mb-32 mt-32">WE LIVE OUR VALUES</h3>
        <ul className="list-reset">
          <li class="pb-16">
            <span class="text-color-primary fw-600 tt-u mr-8">ACCOUNTABLE</span>
            We meet current Australian and international fire-safety standards.
          </li>
          <li class="pb-16">
            <span class="text-color-primary fw-600 tt-u mr-8">FOCUSED</span>
            We are committed to delivering the best solutions and
            highest-quality equipment.
          </li>
          <li class="pb-16">
            <span class="text-color-primary fw-600 tt-u mr-8">EXCELLENCE</span>
            We continually refine and improve our technical skills through
            ongoing training.
          </li>
          <li class="pb-16">
            <span class="text-color-primary fw-600 tt-u mr-8">
              SERVICE-ORIENTED
            </span>
            We offer excellent fire-protection support during the design,
            procurement and commissioning stages.
          </li>
        </ul>
      </GenericSection>
    </>
  );
};

export default Sprinkler;
