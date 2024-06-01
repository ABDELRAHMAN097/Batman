/* eslint-disable react/jsx-no-duplicate-props */
import React, { useRef } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faAnglesDown ,  faLocationDot , faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook , faGithub , faTwitter , faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import photo from '../../assets/2.jpeg'
import emailjs from "emailjs-com";

export default function Index() {
   // what`sApp
   const handleWhatsAppClick = () => {
    const phoneNumber = "+201023671214";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };
  //   Facebook
  const handelface = () => {
    window.open(
      `https://www.facebook.com/profile.php?id=61554441730`,
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
    <div className="contact">
      <div className="intro-services py-5 text-center">
        <h1 className="py-3 animate__animated animate__fadeInUp">CONTACT</h1>
        <p className="animate__animated animate__fadeInDown">
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
        <div className="social fs-1 text-end animate__animated animate__fadeInUp">
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
              <div className="text-center p-3">
                <img className="border rounded" src={photo} alt="photo2"/>
              </div>
              </div>
              <div className="text-start vertical-text d-flex align-items-center">   
              <h3 className="color-changing-textanimate__animated animate__fadeInDown">Scrole Downe <FontAwesomeIcon className="icon" icon={faAnglesDown} /> </h3>
            </div>
            </div>
          
      </div>
      <div className="contactUs py-5">
        <div className="ourAddress ">
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

        <form ref={form} onSubmit={sendEmail} className="formContact ">
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
