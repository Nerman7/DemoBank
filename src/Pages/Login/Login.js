import React from "react";
import { useState, useEffect, useRef } from "react";
import leonus from "../../assets/resources/img_leonus_logo.svg";
import "./login.css";
import Button from "../../components/login/Button";
import bacgroundVideo from "../../assets/resources/login_video.mp4";
import "../../assets/fonts/axiforma/axiforma-bold.otf";
import "../../assets/fonts/axiforma/axiforma-regular.otf";

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const firstRender = useRef(true);
  const [nameError, setNameError] = useState(null);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setDisabled(formValidation());
  }, [mail, password]);

  const formValidation = () => {
    if (mail === "" || password === "") {
      setNameError("Mail or password cant be blank!");
      return true;
    } else {
      setNameError(null);
      return false;
    }
  };

  return (
    <div className="loginPage">
      <video autoPlay loop muted playsInline width={100} className="myVideo">
        <source src={bacgroundVideo} type="video/mp4"></source>
      </video>
      <div className="centerPage">
        {/* {(mail && password) ? (
          <h1>Signed in!</h1>
        ) : (
          <div></div>
        )}  */}
        <img className="logoImg" src={leonus} alt="Please wait"></img>
        <h1 className="mainTitle">Welcome</h1>
        <h3 className="credentials">Please enter your credentials to login.</h3>
        <form className="loginPassAndMail">
          <input
            className="loginInputs"
            onChange={(e) => setMail(e.target.value)}
            value={mail}
            placeholder="Your e-mail adress"
            type="text"
            name="mail"
            required
          ></input>
          {nameError && <p>{nameError}</p>}
          <input
            className="loginInputs"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            type="password"
            value={password}
            name="password"
            required
          ></input>
          <Button type="submit" disabled={disabled}>
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
