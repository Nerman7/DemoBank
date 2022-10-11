import React from "react";
import { useState, useEffect, useRef } from "react";
import login_leonus_logo from "../../assets/resources/img_leonus_logo.svg";
import "./login.css";
import Button from "../../components/login/Button";
import login_bacground_video from "../../assets/resources/login_video.mp4";
import "../../assets/fonts/axiforma/axiforma-bold.otf";
import "../../assets/fonts/axiforma/axiforma-regular.otf";
import { useTranslation } from "react-i18next";

export default function Login() {
  const { t } = useTranslation();
  const [login_user_code, set_login_user_code] = useState("");
  const [login_OTP, set_login_OTP] = useState("");
  const [disabled, set_disabled] = useState(true);
  const login_first_render = useRef(true);
  const [login_error_warning, set_login_error_warning] = useState(null);

  useEffect(() => {
    if (login_first_render.current) {
      login_first_render.current = false;
      return;
    }
    set_disabled(login_form_validation());
  }, [login_user_code, login_OTP]);

  const login_form_validation = () => {
    if (login_user_code === "" || login_OTP === "") {
      set_login_error_warning(t("login_error"));
      return true;
    } else {
      set_login_error_warning(null);
      return false;
    }
  };

  return (
    <div className="login_main_page">
      <video
        autoPlay
        loop
        muted
        playsInline
        width={100}
        className="login_background_video"
      >
        <source src={login_bacground_video} type="video/mp4"></source>
      </video>
      <div className="login_center_page">
        <img className="login_logo_image" src={login_leonus_logo} alt="Please wait"></img>
        <h1 className="login_main_title">{t("login_welcome_title")}</h1>
        <h3 className="login_credentials">{t("login_credentials_text")}</h3>
        <form className="login_mail_and_password">
          <input
            className="login_mail_and_password_inputs"
            onChange={(e) => set_login_user_code(e.target.value)}
            value={login_user_code}
            placeholder={t("login_email_placeholder_text")}
            type="text"
            name="login_user_code"
            required
          ></input>
          <div className="login_error_message">
            {" "}
            {login_error_warning && <p>{t("login_error_text")}</p>}
          </div>
          <input
            className="login_mail_and_password_inputs"
            onChange={(e) => set_login_OTP(e.target.value)}
            placeholder={t("login_password_placeholder_text")}
            type="password"
            value={login_OTP}
            name="login_OTP"
            required
          ></input>

          <Button
            text_button={t("login_button_title")}
            button_color=''
            button_opacity={`${disabled ? 0.5 : 1}`}
            button_arow={true}
            type="submit"
            disabled={disabled}
          ></Button>
        </form>
      </div>
    </div>
  );
}
