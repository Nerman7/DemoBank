import React from "react";
import arrow from "../../assets/resources/ic_next.svg";
import "./button.css";

const STYLES = ["btnLoginDisabled", "btnLoginBlue", "btnLoginGrey"];

export default function Button({
  children,
  buttonStyle,
  width,
  height,
  border,
  color,
  radius,
  disable
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <div>
      <button
        style={{
          backgroundColor: color,
          border,
          borderRadius: radius,
          height,
          width,
        }}
        className={`${checkButtonStyle}`}
        
      >
        {children}{" "}
        <img className="btnArrow" src={arrow} alt="da" type="button"></img>
      </button>
    </div>
  );
}
