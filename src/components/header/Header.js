import React from 'react'
import './header.css'
import CV from "../../assets/CV.pdf"
import {BsLinkedin, BsGithub, BsFacebook} from "react-icons/bs"
import wall from "../../assets/wallpaper.jpg";



const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Sandip Shakya</h1>
        <h5 className="text-light">
          FullStack Developer
        </h5>

        <div className='cta'>
        <a href={CV} download className='btn'> Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>

    <div className='header-socials'>
        <a href="https://linkedin.com"><BsLinkedin /></a>
        <a href="https://linkedin.com"><BsGithub /></a>
        <a href="https://linkedin.com"><BsFacebook /></a>
       
        
    </div>

        <div className="me">
            <img src={wall} alt="me" />
          </div>
          <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header