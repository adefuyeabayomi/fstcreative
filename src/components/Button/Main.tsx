import React, { CSSProperties } from "react";
import "./style.css";

interface ButtonPropType {
  children: React.JSX.Element | string;
  icon?: React.JSX.Element;
  iconLeft?: boolean;
  style?: CSSProperties;
  actionFn?: () => void;
}

const FButtonMain = ({
  children,
  icon,
  iconLeft,
  style = {},
  actionFn,
}: ButtonPropType) => {
  let button = iconLeft ? (
    <button onClick={actionFn} style={style} className="fbuttonmain">
      {icon} {children}{" "}
    </button>
  ) : (
    <button onClick={actionFn} style={style} className="fbuttonmain">
      {children} {icon}
    </button>
  );
  return button;
};

export default FButtonMain;
