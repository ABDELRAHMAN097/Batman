import React from "react";
import "animate.css";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import photo from "../../assets/banner.png";
import project1 from "../../assets/project01.png";
import project02 from "../../assets/project02.png";
import project03 from "../../assets/project03.png";
import { LuSquareDashedBottomCode } from "react-icons/lu";
import { MdPhonelink } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { GoCodescan } from "react-icons/go";
export default function HomePage() {
  // what`sApp
  const handleWhatsAppClick = () => {
    const phoneNumber = "+201023671214";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  //   Facebook
  const handelface = () => {
    window.open(
      `https://www.facebook.com/profile.php?id=100010178802930&mibextid=ZbWKwL`,
      "_blank"
    );
  };
  const handelCv = () => {
    window.open(
      `https://drive.google.com/drive/folders/1_6vNPk5AKrELiTPd07bKqmUvIEBCtpZU?usp=drive_link`,
      "_blank"
    );
  };
  const projectOne = () => {
    window.open("https://dental74.netlify.app/", "_blank");
  };
  const projectTwo = () => {
    window.open("https://abdelrahman097.github.io/burgerKing/", "_blank");
  };
  const projectThre = () => {
    window.open("https://alhilal-hospital00.netlify.app/", "_blank");
  };
  return (
    <div className="col-12  w-100 px-5">
      <div className="hero">
        <div className="intro text-container  animated-text">
          <div className="ml">
            <h1>
              I Am <span>Abdelrahman</span> Magdy
            </h1>
            <p>
              Front-End <span>Developer</span>
            </p>
            <div className="social">
              <div className="border-icon">
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </div>
              <div className="border-icon" onClick={handleWhatsAppClick}>
                <FontAwesomeIcon className="icon" icon={faWhatsapp} />
              </div>
              <div className="border-icon">
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </div>
              <div className="border-icon" onClick={handelface}>
                <FontAwesomeIcon className="icon" icon={faFacebook} />
              </div>
            </div>
            <button className="btn" onClick={handelCv}>
              Download CV
            </button>
          </div>
        </div>
        <div className="intro-img animated-img ">
          <img className="photo col-12 " src={photo} alt="" />
        </div>
      </div>

      <div className="sercices ">
        <h2 className="py-5 text-center">sercices</h2>
        <div className="row w-100  px-3 align-items-baseline">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="border rounded m-2 p-2">
              <span className="fs-1">
                <LuSquareDashedBottomCode />
              </span>
              <h3>Web Development</h3>
              <p className="text-white-50 py-2">
                I will provide web development service. If you need please
                contact with me.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="border rounded m-2 p-2">
            <span className="fs-1">
              <MdPhonelink />
            </span>
            <h3>Full Responsive</h3>
            <p className="text-white-50 py-2">
              I will provide full responsive website with mobile phone, tablet,
              desktop, extra large device.
            </p>
          </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ">
          <div className="border rounded m-2 p-2">
            <span className="fs-1">
              <GoCodescan />
            </span>
            <h3>Pixel Perfect Design</h3>
            <p className="text-white-50 py-2">100% Pixel perfect design is my goal.</p>
          </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ">
          <div className="border rounded m-2 p-2">

            <span className="fs-1">
              <MdOutlineDesignServices />
            </span>
            <h3>Web Design</h3>

            <p className="text-white-50 py-2">
              I can do any kind of website design like E-commerce, Portfolio,
              etc.
            </p>
          </div>
          </div>
        </div>
      </div>

      <div className="Projects">
        <h2 className="py-5 text-center">Projects</h2>
        <div class="row px-3 w-100 align-items-baseline">
          <div class=" col-lg-4 col-md-6 col-sm-12 ">
            <div className="border rounded m-2">
              <img className="w-100" src={project1} alt="projectPhoto" />
              <div className="p-2 text-start">
                <button className="btn">Github</button>
                <button className="m-3 btn" onClick={projectOne}>
                  Live Demo
                </button>
              </div>
            </div>
          </div>
          <div class=" col-lg-4 col-md-6 col-sm-12 text-center">
            <div className="border rounded m-2">
              <img className="w-100" src={project02} alt="project02" />
              <div className="p-2 text-start">
                <button className="btn">Github</button>
                <button className="m-3 btn" onClick={projectTwo}>
                  Live Demo
                </button>
              </div>
            </div>
          </div>
          <div class=" col-lg-4 col-md-6 col-sm-12 text-center">
            <div className="border rounded ">
              <img className="w-100" src={project03} alt="project03" />
              <div className="p-2 text-start">
                <button className="btn">Github</button>
                <button className="m-3 btn" onClick={projectThre}>
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
