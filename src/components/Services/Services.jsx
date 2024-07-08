import React from 'react'
import { GoCodescan } from 'react-icons/go'
import { LuSquareDashedBottomCode } from 'react-icons/lu'
import { MdOutlineDesignServices, MdPhonelink } from 'react-icons/md'
import ParticlesComponent from "../../components/ParticlesComponent/ParticlesComponent";
import './Services.scss'
export default function Services() {
  return (
    <div>
  <div className="mb-5 zindex">
  <h2 className="py-3 text-center">services</h2>
  <ParticlesComponent id="tsparticles" />
  <div className="row w-100 px-3 align-items-stretch">
    <div className="col-md-6 col-sm-12 wow animate__animated animate__fadeInLeft animate__delay-1s d-flex">
      <div className="shadow services m-2 p-2 flex-grow-1 d-flex flex-column">
        <span className="fs-1">
          <LuSquareDashedBottomCode className='services-icon'/>
        </span>
        <div className="py-3 flex-grow-1 d-flex flex-column justify-content-between">
          <h3 className="pt-3">Web Development</h3>
          <p className="text-white-50 py-2">
            I will provide web development service. If you need please
            contact with me.
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-sm-12 wow animate__animated animate__fadeInUp animate__delay-1s d-flex">
      <div className="shadow services m-2 p-2 flex-grow-1 d-flex flex-column">
        <span className="fs-1">
          <MdPhonelink className='services-icon'/>
        </span>
        <div className="py-3 flex-grow-1 d-flex flex-column justify-content-between">
          <h3 className="pt-3">Full Responsive</h3>
          <p className="text-white-50 py-2">
            I will provide full responsive website with mobile phone, tablet,
            desktop, extra large device.
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-sm-12 wow animate__animated animate__fadeInRight animate__delay-1s d-flex">
      <div className="shadow services m-2 p-2 flex-grow-1 d-flex flex-column">
        <span className="fs-1">
          <GoCodescan className='services-icon'/>
        </span>
        <div className="py-3 flex-grow-1 d-flex flex-column justify-content-between">
          <h3 className="pt-3">Pixel Perfect Design</h3>
          <p className="text-white-50 py-2">100% Pixel perfect design is my goal.</p>
        </div>
      </div>
    </div>
    <div className="col-md-6 col-sm-12 wow animate__animated animate__fadeInRight animate__delay-1s d-flex">
      <div className="shadow services m-2 p-2 flex-grow-1 d-flex flex-column">
        <span className="fs-1">
          <MdOutlineDesignServices className='services-icon'/>
        </span>
        <div className="py-3 flex-grow-1 d-flex flex-column justify-content-between">
          <h3 className="pt-3">Web Design</h3>
          <p className="text-white-50 py-2">
            I can do any kind of website design like E-commerce, Portfolio,
            etc.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
