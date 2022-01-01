// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCopyright,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  const facebookIcon = <FontAwesomeIcon icon={faFacebookSquare} />;
  const instaIcon = (
    <FontAwesomeIcon icon={faInstagramSquare}></FontAwesomeIcon>
  );
  const linkedInIcon = <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>;
  const emailIcon = <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>;
  const phoneIcon = <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>;
  const locationIcon = (
    <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
  );
  const twitterIcon = (
    <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
  );
  const copyRightIcon = <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>;
  return (
    <div className="text-gray-300 tt-footer-container w-100 p-8">
      <h2 className="text-4xl font-bold">Start Earning from Today</h2>
      <p className="text-sm my-4">
        2021 Copyright {copyRightIcon} Ariful Tushar All rights resrved by
      </p>
      <div className="grid lg:grid-cols-2 mt-12 mt-4">
        <div className="m-2 text-justify w-1/2 mx-auto">
          <div>{locationIcon} 32 winstons road, Paris, France</div>
          <div>{emailIcon} herorider@gmail.com</div>
          <div>{phoneIcon} 01872320494</div>
        </div>
        <div className="w-1/2 mx-auto">
          <p>Drive safely and earn sagely</p>
          <h4 className="text-xl font-bold">Find Us On</h4>
          <div className="text-2xl">
            <span className="mx-2">{facebookIcon}</span>
            <span className="mx-2">{instaIcon}</span>
            <span className="mx-2">{linkedInIcon}</span>
            <span className="mx-2">{twitterIcon}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
