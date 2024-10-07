import React, { CSSProperties, useEffect, useRef } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import "./style.css";

interface OverlayPropsType {
  children: React.JSX.Element | Array<React.JSX.Element>;
  toggle: () => void;
  isOpen: boolean;
  styles?: CSSProperties;
}

function Overlay({ styles, children, toggle, isOpen }: OverlayPropsType) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef.current && overlayRef.current) {
      if (isOpen) {
        divRef.current.classList.add("active");
        overlayRef.current.classList.add("overlay");
      } else {
        divRef.current.classList.remove("active");
        overlayRef.current.classList.remove("overlay");
      }
    }
  }, [isOpen]);

  return (
    <div>
      <div ref={overlayRef}></div>
      <div ref={divRef} style={styles} className="jg-overlay-container">
        <div className="green-color-main jg-overlay-close-container">
          <Hamburger toggled={true} color="#9d82ff" size={17} toggle={toggle} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Overlay;
