import "./style.css";
import React, { Dispatch, SetStateAction, useState, useEffect } from "react";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
let lock = <FontAwesomeIcon icon={faLock} />;
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;
interface InputProps {
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

interface InputPropType {
  type?: string;
  placeholder?: string;
  leftIcon?: React.JSX.Element | null;
  rightIcon?: React.JSX.Element | null;
  feedbackText?: string;
  valid?: boolean | null;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  onFocus?: () => void;
  onBlur?: () => void;
  dark?: boolean;
}

export function D_TextInput({
  type = "text",
  placeholder = "Enter Text",
  leftIcon = null,
  rightIcon = null,
  feedbackText = "",
  valid = null,
  value = "",
  onChange,
  onFocus,
  onBlur,
  dark = true,
}: InputPropType): React.JSX.Element {
  let additionalInputStyle = { paddingLeft: "", paddingRight: "" };
  let [secure, setSecure] = useState(true);
  type == "password" ? (leftIcon = lock) : false;
  type == "password" || rightIcon
    ? (additionalInputStyle.paddingRight = "40px")
    : false;
  type == "password" ? (rightIcon = null) : false;
  leftIcon ? (additionalInputStyle.paddingLeft = "30px") : false;
  let darkStyle = dark ? "dark-input" : "light-input";

  return (
    <div className="d-input-container-main type-1 gray-5 text-p">
      <span className="d-input-left-icon">{leftIcon}</span>
      <input
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        style={additionalInputStyle}
        className={`${darkStyle}`}
        placeholder={placeholder}
        type={type !== "password" ? "text" : secure ? "password" : "text"}
      />
      <span className="d-input-right-icon" onClick={() => setSecure(!secure)}>
        {type == "password" && secure ? eye : null}
        {type == "password" && !secure ? eyeSlash : null}
        {rightIcon}
      </span>
      <FeedbackComponent
        text={feedbackText}
        valid={valid == null ? "default" : valid ? "true" : "false"}
      />
    </div>
  );
}

const InputPlain = ({ value, onChange }: InputProps) => {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="fst-input-main"
      />
    </div>
  );
};

const FeedbackComponent = ({ text = "", valid = "" }) => {
  const [feedback, setFeedback] = useState<React.ReactElement | null>();

  useEffect(() => {
    if (valid === "true") {
      setFeedback(<small className="text-medium valid-true">{text}</small>);
    } else if (valid === "false") {
      setFeedback(<small className="text-medium valid-false">{text}</small>);
    } else {
      setFeedback(null);
    }
  }, [text, valid]);

  return feedback;
};

export default InputPlain;

export const TextAreaPlain = ({ value, onChange }: InputProps) => {
  return (
    <div>
      <textarea
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="fst-textarea-main"
      />
    </div>
  );
};
