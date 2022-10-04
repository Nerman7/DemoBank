import React from "react";
import arrow from "../../assets/resources/ic_next.svg";
import "./button.css";
import { useTranslation } from "react-i18next";

export default function Button({ disabled, type }) {
  const { t } = useTranslation();
  return (
    <div>
      <button
        className={`${disabled ? "btnLoginOpa" : "btnLogin"}`}
        type={type}
        disabled={disabled}
      >
        {t("button")}
        <img className="btnArrow" src={arrow} alt="da"></img>
      </button>
    </div>
  );
}
