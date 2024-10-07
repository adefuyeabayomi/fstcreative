import React from "react";
import "./style.css";

interface ButtonPropType {
  children: React.JSX.Element | string;
  iconLeft?: React.JSX.Element;
  iconRight?: React.JSX.Element;
}

const FButtonMain = ({ children, iconLeft, iconRight }: ButtonPropType) => {
  return <button className="fbuttonmain">{children}</button>;
};

export default FButtonMain;
