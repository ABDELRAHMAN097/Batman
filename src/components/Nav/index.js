import React, { useState } from "react";
import { Link } from "react-router-dom";
import photo from '../../assets/boody logo.png'
import "../../App.css";
import "./index.scss";
import "../../index.scss";
import 'animate.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="col-12" id="nav">
      <div className="mylogo">
        <img src={photo} alt="logo"/>
      </div>

      <ul className={showNav ? "show-nav nav__active " : "nav-links"}>
        <li className="hover-grow">
          <Link to={"/"}>Home</Link>
        </li>
        
        <li className="hover-grow">
          <Link to={"About"}>About Me</Link>
        </li>

        <li className="hover-grow">
          <Link to={"Contact"}>Contact</Link>
        </li>

      </ul>
      <div onClick={() => setShowNav(!showNav)} className="nav__toggler">
        <FontAwesomeIcon icon={faBars} />
      </div>
    </div>
  );
}
