import React from "react";
import { useState, useEffect, useRef  } from "react";
import leonus from "../../assets/resources/img_leonus_logo.svg";
import "./login.css";
import Button from "../../components/login/Button";
import bacgroundVideo from "../../assets/resources/login_video.mp4";
import "../../assets/fonts/axiforma/axiforma-bold.otf";
import "../../assets/fonts/axiforma/axiforma-regular.otf";

export default function Login() {
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')

  const [disabled, setDisabled] = useState(true)
  
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false  // it's no longer the first render
      return // skip the code below
    }
    setDisabled(formValidation())
  }, [mail, password]) 


  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // function handleChange(e) {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  //   console.log(formValues);
  // }
  function handleSubmit(e) {
    // e.preventDefault();
    // setFormErrors(validate(formValues));
    // setIsSubmit(true);
  }

  const formValidation = () => {
    if (mail === "" || password === "") {
      return true
    } else {
      return false
    }
  }

  // function validate() {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  //   if (!values.mail) {
  //     errors.mail = "Email is required";
  //   } else if (!regex.test(values.mail)) {
  //     errors.mail = "This is not a valid format. Please try again.";
  //   }

  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password is too short.";
  //   } else if (values.password.length > 10) {
  //     errors.password = "Password is too long.";
  //   }

  //   return errors;
  // }

  return (
    <div className="loginPage">
      <video autoPlay loop muted playsInline width={100} className="myVideo">
        <source src={bacgroundVideo} type="video/mp4"></source>
      </video>
      <div className="centerPage">
        {(Object.keys(formErrors).length === 0) & isSubmit ? (
          <h1>Signed in!</h1>
        ) : (
          <div></div>
        )}
        <img className="logoImg" src={leonus} alt="Please wait"></img>
        <h1 className="mainTitle">Welcome</h1>
        <h3 className="credentials">Please enter your credentials to login.</h3>
        <form className="loginPassAndMail" onSubmit={handleSubmit}>
          <input
            className="loginInputs"
            onChange={ e => setMail(e.target.value) }
            value={mail}
            placeholder="Your e-mail adress"
            type="text"
            name="mail"
            required
          ></input>
          <p>{formErrors.mail}</p>
          <input
            className="loginInputs"
            onChange={ e => setPassword(e.target.value) }
            placeholder="Your password"
            type="password"
            value={password}
            name="password"
            required
          ></input>
          <p>{formErrors.password}</p>
          <button type="submit" disabled={disabled} >Login</button>
        </form>
      </div>
    </div>
  );
}
