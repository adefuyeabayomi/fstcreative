import React, { CSSProperties } from "react";
import "./style.css";

interface ButtonPropType {
  children: React.JSX.Element | string;
  icon?: React.JSX.Element;
  iconLeft?: boolean;
  style?: CSSProperties;
}

const FButtonMain = ({
  children,
  icon,
  iconLeft,
  style = {},
}: ButtonPropType) => {
  let button = iconLeft ? (
    <button style={style} className="fbuttonmain">
      {icon} {children}{" "}
    </button>
  ) : (
    <button style={style} className="fbuttonmain">
      {children} {icon}
    </button>
  );
  return button;
};

export default FButtonMain;
