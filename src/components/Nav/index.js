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
  const handleLinkClick = () => {
    setShowNav(false);
  };
  return (
    <div className="col-12 zindex" id="nav">
      <div className="mylogo">
        <img src={photo} alt="logo"/>
      </div>

      <ul className={showNav ? "show-nav nav__active zindex animate__animated animate__fadeInRight" : "nav-links zindex"}>
        <li className="hover-grow underline-animation zindex">
          <Link to={"/"} onClick={handleLinkClick}>Home</Link>
        </li>

        <li className="hover-grow underline-animation zindex">
          <Link to={"About"} onClick={handleLinkClick}>About Me</Link>
        </li>

        <li className="hover-grow underline-animation zindex">
          <Link to={"Services"}>Services</Link>
        </li>
        
        <li className="hover-grow underline-animation zindex">
          <Link to={"Contact"} onClick={handleLinkClick}>Contact</Link>
        </li>

      </ul>
      <div onClick={() => setShowNav(!showNav)} className="nav__toggler zindex">
        <FontAwesomeIcon className="zindex" icon={faBars} />
      </div>
    </div>
  );
}
