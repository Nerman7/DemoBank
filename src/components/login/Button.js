import React from "react";
import arrow from "../../assets/resources/ic_next.svg";
import "./button.css";

export default function Button() {

  return (
    <div>
        <button className="btnLogin" >
          Login <img className="btnArrow" src={arrow} alt="da" type='button'></img>
        </button>
    </div>
  );
}
