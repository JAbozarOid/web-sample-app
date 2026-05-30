import React, { type JSX, type PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }): JSX.Element => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

export default Container;
