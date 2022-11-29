import React from 'react'
import './footer.css'
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";


const Footer = () => {
  return (
    <footer>
    
      <div className="social-footer">
        <a href="https://www.facebook.com/profile.php?id=100085995626971">
          <BsFacebook />
        </a>
        <a href="https://www.linkedin.com/in/sandip-shakya-8230b91a5/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/sandipsky">
          <BsGithub />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Sandip Shakya. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer