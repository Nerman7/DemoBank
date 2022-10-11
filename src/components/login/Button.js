import React from "react";
import arrow from "../../assets/resources/ic_next.svg";
import "./button.css";
import { useTranslation } from "react-i18next";

export default function Button({ disabled, type, text_button, button_color, button_arow, button_opacity }) {
  const { t } = useTranslation();
  
  return (
    <div>
      <button
        className={"btnLogin"}
        type={type}
        disabled={disabled}
        style={{backgroundColor: `${button_color}` , opacity:`${button_opacity}` }}
      >
        {text_button}
       { button_arow && <img className="btnArrow" src={arrow} alt="da"></img>}
      </button>
    </div>
  );
}
