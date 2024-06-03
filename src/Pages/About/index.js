import React, { useEffect } from 'react'
import './index.scss'
import { WOW } from "wowjs";
import svg from '../../assets/svg i.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import jquery from '../../assets/jquery.png'
import js from '../../assets/js.png'
import bootstrap from '../../assets/bootstrap.png'
import tailwind from '../../assets/tailwind.png'
import react from '../../assets/react.png'
import git from '../../assets/git.png'
import githup from '../../assets/githup.png'
import sass from '../../assets/sass.png'
import redux from '../../assets/redux.png'
import vscode from '../../assets/vscode.png'
import ParticlesComponent from "../../components/ParticlesComponent/ParticlesComponent";

export default function About() {
  useEffect(() => {
    const wow = new WOW({ live: false });
    wow.init();
  }, []);
  return (
<div>
        <div className='about col-12 zindex py-5 mb-5'>
            <div className='about-details col-8 wow animate__animated animate__fadeInLeft'>
            <ParticlesComponent id="tsparticles" />
              <div className='infos'>
              <h2 className='py-2'>Know Who <span>I'M</span></h2>
                <p>Hi Everyone, I am <span>Abdelrahman Magdy</span> from Egypt.</p>
                <p>I am currently working freelance as a front-end developer.</p>
                <p>I completed my Front End course with Eraa Soft.</p>
                <p>I completed my bachelor's degree in computers and information technology.</p>
              </div>
                
                <div className='Interests'>
                <p>Aside from coding, there are some other activities I like to do!</p>
                  <div className='hobbies'>
                  <span>Writing Tech Blogs</span>
                  <span> Playing Games</span>
                  <span>Travelling</span>
                  <span>fishing</span>
                  </div>
                </div>
            </div>

            <div className='img col-4 animate__animated  animate__fadeInRight'>
              <img className='wow animate__animated animate__pulse animate__delay-1s animate__slower	4s animate__infinite	infinite' src={svg} alt='svg'/>
            </div>
        </div>
        
        <div className='skills col-12 my-5 py-5 wow animate__animated animate__fadeInDown animate__delay-1s'>
          <h2>Professional skills</h2>
          <div className='items'>
            <div className='item'>
              <img src={html} alt=''/>
            </div>
            <div className='item'>
              <img src={css} alt=''/>
            </div>
            <div className='item'>
              <img src={jquery} alt=''/>
            </div>
            <div className='item'>
              <img src={js} alt=''/>
            </div>
            <div className='item'>
              <img src={bootstrap} alt=''/>
            </div>
            <div className='item'>
              <img src={tailwind} alt=''/>
            </div>
            <div className='item'>
              <img src={react} alt=''/>
            </div>
            <div className='item'>
              <img src={redux} alt=''/>
            </div>
            <div className='item'>
              <img src={sass} alt=''/>
            </div>


          </div>
        </div>

        <div className='skills col-12 pt-5 mb-4 wow animate__animated animate__fadeInUp animate__delay-1s'>
          <h2>Tools I Use</h2>
          <div className='items'>
            <div className='item'>
              <img src={vscode} alt=''/>
            </div>
            <div className='item'>
              <img src={git} alt=''/>
            </div>
            <div className='item'>
              <img src={githup} alt=''/>
            </div>
          </div>
        </div>
</div>        
  )
}
