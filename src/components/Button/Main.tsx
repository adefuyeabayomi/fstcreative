import React from "react";
import "./style.css";

interface ButtonPropType {
  children: React.JSX.Element | string;
  icon?: React.JSX.Element;
  iconLeft?: boolean;
}

const FButtonMain = ({ children, icon, iconLeft }: ButtonPropType) => {
  let button = iconLeft ? <button className="fbuttonmain">{icon} {children} </button>  : <button className="fbuttonmain">{children} {icon}</button>;
  return button;
}

export default FButtonMain





