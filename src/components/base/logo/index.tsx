import React, { type JSX } from "react";

type LogoProps = {
  size?: "small" | "medium" | "large";
};

const sizes = {
  small: { width: 60, height: 60 },
  medium: { width: 120, height: 120 },
  large: { width: 180, height: 180 },
};

const Logo: React.FC<LogoProps> = ({ size = "medium" }): JSX.Element => {
  return (
    <img
      src="/assets/images/logo.png"
      width={sizes[size].width}
      height={sizes[size].height}
      alt=""
    />
  );
};

export default Logo;
