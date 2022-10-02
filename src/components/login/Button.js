import React from "react";
import arrow from "../../assets/resources/ic_next.svg";
import "./button.css";

export default function Button({disabled, type}) {

  return (
    <div>
        <button className={`${disabled ? 'btnLoginOpa': 'btnLogin'}`}  type={type} disabled={disabled}>
          Login <img className="btnArrow" src={arrow} alt="da" ></img>
        </button>
    </div>
  );
}