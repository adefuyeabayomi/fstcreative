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
export function ButtonGradientMain({
  actionFn,
  children,
}: ButtonPropType): React.JSX.Element {
  return (
    <div className="d-button-gradient-1">
      <button
        className="gradient-main-bg text-p text-medium white"
        onClick={actionFn}
      >
        {children}
      </button>
    </div>
  );
}

interface SocialButtonPropType {
  actionFn: () => void;
  icon: React.JSX.Element;
  text: string;
}

export function SocialButton({
  actionFn,
  icon,
  text,
}: SocialButtonPropType): React.JSX.Element {
  return (
    <div className="d-button-social">
      <button onClick={actionFn} className="">
        <div className="row no-space align-items-center text-p text-medium">
          <div className="w-max-content no-space d-s-button">{icon}</div>
          <div className="col no-space text-left">
            <span style={{ paddingLeft: 7 }}>{text}</span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default FButtonMain;
