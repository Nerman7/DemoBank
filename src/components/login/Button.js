import React from "react";
import arrow from "../../assets/ic_next.svg";
import "./button.css";

export default function Button() {

  return (
    <div>
        <button className="btnLogin" >
          Login <img src={arrow} alt="da"></img>
        </button>
    </div>
  );
}
