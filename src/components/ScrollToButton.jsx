import React from "react";
import { scrollTo } from "../utils";

const ScrollToButton = ({ toId, toRef, duration, children }) => {
  const handleClick = () => scrollTo({ id: toId, ref: toRef, duration });

  return <div className="list-item" onClick={handleClick}>{children}</div>;
};

export default ScrollToButton;
