import React from 'react';
import 'animate.css'
import "./index.scss"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import photo from "../../assets/banner.png"
export default function HomePage(){
    // what`sApp
    const handleWhatsAppClick = () => {
        const phoneNumber = '+201023671214'; 
        window.open(`https://wa.me/${phoneNumber}`, '_blank');
      };
    //   Facebook
    const handelface = () => {
        window.open(`https://www.facebook.com/profile.php?id=100010178802930&mibextid=ZbWKwL`, '_blank');
    }
    return(
        <div className="hero col-12">
            <div className='intro text-container  animated-text'>
                <div className='ml'>
                <h1 className='animate__animated animate__pulse animate__infinite	infinite animate__slower 1s'>I Am <span>Abdelrahman</span> Magdy</h1>
                <p>Front-End <span>Developer</span></p>
                <div className='social'>
                    <div className='border-icon'>
                        <FontAwesomeIcon className='icon' icon={faGithub}/>
                    </div>
                    <div className='border-icon' onClick={handleWhatsAppClick}>
                        <FontAwesomeIcon className='icon' icon={faWhatsapp}/>
                    </div>
                    <div className='border-icon'>
                        <FontAwesomeIcon className='icon' icon={faTwitter}/>
                    </div>
                    <div className='border-icon' onClick={handelface}>
                        <FontAwesomeIcon className='icon' icon={faFacebook}/>
                    </div>
                </div>
                <button>Download CV</button>
                </div>
            </div>
            <div className='intro-img animated-img'>
                <img className='photo col-12 ' src={photo} alt=''/>
            </div>
        </div>
    )
}





