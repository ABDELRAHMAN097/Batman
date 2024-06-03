/* eslint-disable react/jsx-no-duplicate-props */
import React, { useEffect, useRef } from "react";
import "./index.scss";
import { WOW } from "wowjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAnglesDown ,  faLocationDot , faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook , faGithub , faLinkedin, faTwitter , faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import photo from '../../assets/2.jpeg'
import emailjs from "emailjs-com";
import ParticlesComponent from "../../components/ParticlesComponent/ParticlesComponent";

export default function Index() {
  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
  }, []);
   // what`sApp
   const handleWhatsAppClick = () => {
    const phoneNumber = "+201023671214";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  //   Facebook
  const handelface = () => {
    window.open(
      `https://www.facebook.com/profile.php?id=61554441730373`,
      "_blank"
    );
  };
  //   Twitter
  const handelTwitter = () => {
    window.open(
      `https://x.com/bodymagdy097`,
      "_blank"
    );
  };
  //   linkedin
  const handellinkedin = () => {
    window.open(
      `https://www.linkedin.com/in/abdelrahman-magdy-4944a3242/`,
      "_blank"
    );
  };
   //   github
   const handelgithub = () => {
    window.open(
      `https://github.com/ABDELRAHMAN097`,
      "_blank"
    );
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_23iigtc",
        "template_4yegygj",
        form.current,
        "UROKVOaB76jqo3Am-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact zindex">
      <div className="intro-services py-5 text-center zindex">
      <ParticlesComponent id="tsparticles" />
        <h1 className="py-3 wow animate__animated animate__fadeInUp">CONTACT</h1>
        <p className="wow animate__animated animate__fadeInDown">
          Thank you for visiting my portfolio! If you have any questions,
          project proposals, or just want to say hello, feel free to reach out
          to me. I am always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Whether you're looking to
          build a website, improve your existing web presence, or need some
          advice on front-end development, I'm here to help. Fill out the form
          below or use the provided contact details to get in touch. I look
          forward to connecting with you!
        </p>
        <div className="social py-5">
        <div className="social fs-1 text-end wow animate__animated animate__fadeInUp">
              <div className="border-icon">
                <FontAwesomeIcon className="icon" onClick={handelgithub} icon={faGithub} />
              </div>
              <div className="border-icon" onClick={handleWhatsAppClick}>
                <FontAwesomeIcon className="icon" icon={faWhatsapp} />
              </div>
              <div className="border-icon">
                <FontAwesomeIcon className="icon" onClick={handelTwitter} icon={faTwitter} />
              </div>
              <div className="border-icon">
                <FontAwesomeIcon className="icon" onClick={handellinkedin} icon={faLinkedin} />
              </div>
              <div className="border-icon" onClick={handelface}>
                <FontAwesomeIcon className="icon" icon={faFacebook} />
              </div>
              <div className="text-center p-3 zindex">
                <img className="responsive-img" src={photo} alt="photo2"/>
              </div>
              </div>
              <div className="text-start vertical-text d-flex align-items-center wow animate__animated animate__fadeInUp animate__delay-1s">   
              <h3 className="color-changing-text">Scrole Downe <FontAwesomeIcon className="icon" icon={faAnglesDown} /> </h3>
            </div>
            </div>
          
      </div>
      <div className="contactUs py-5">
        <div className="ourAddress wow animate__animated animate__fadeInLeft">
          <div className="parent1">
            <div className="icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <h2>Our Address</h2>
            <p>Mahmashah, El Sharabiya, Cairo Governorate</p>
          </div>

          <div className="parents d-flex justify-between items-center">
            <div className="parent">
              <div className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h2>Email Us</h2>
              <p>bodymagdy097@gmail.com</p>
            </div>
            <div className="parent">
              <div className="icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h2>Call Us</h2>
              <p>01023671214</p>
              <p>01090041772</p>
            </div>
          </div>
        </div>

        {/* onSubmit={handleSubmit} */}

        <form ref={form} onSubmit={sendEmail} className="formContact zindex wow animate__animated animate__fadeInRight">
          {/* name && email */}
          <div className="name-email">
            <div className="name">
              <input
                type="text"
                id="name"
                name="from_name"
                required
                placeholder="الاسم"
              />
            </div>
            <div className="email">
              <input
                type="email"
                id="email"
                name="to_name"
                required
                placeholder="البريد الالكتروني"
              />
            </div>
          </div>
          <div></div>
          <div>
            <textarea
              id="message"
              name="message"
              // value={formData.message}
              // onChange={handleChange}
              required
              placeholder="الرسالة:"
            />
          </div>
          <button type="submit">إرسال</button>
        </form>
      </div>
      <iframe
      className="zindex wow animate__animated animate__fadeInUp"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17889.45674668869!2d31.248137862139618!3d30.075554860394153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f8745b98161%3A0x547e5cdd526c8b88!2sAl%20Sharabeya%2C%20Mahmashah%2C%20El%20Sharabiya%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1717011611728!5m2!1sen!2seg"
        width="100%"
        height="400"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Embedded Content"
      ></iframe>
    </div>
  );
}

// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17889.45674668869!2d31.248137862139618!3d30.075554860394153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f8745b98161%3A0x547e5cdd526c8b88!2sAl%20Sharabeya%2C%20Mahmashah%2C%20El%20Sharabiya%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1717011611728!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
