import React from "react";
import { scrollTo } from "../utils";

const ScrollToButton2 = ({ toId, toRef, duration, children }) => {
  const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });

  return <div onClick={handleClick}>{children}</div>;
};

export default ScrollToButton2;
