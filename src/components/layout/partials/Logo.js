import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";
import svg from "../../../assets/images/logo-full.png";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <Link to="/">
        <Image src={svg} alt="Open" width={200} />
      </Link>
    </div>
  );
};

export default Logo;
