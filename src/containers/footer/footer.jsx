import React from 'react'
import './footer.css'
import gpt3logo from "../../assets/logo.svg"

const footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-button'>
        <button type='button'>Request Early Access</button>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt='logo'/>
          <p>YRM Ofiice Hingorja Mir's All Rights Reserved
          </p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Oversons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>Social Media</p>
          <p>03058216069</p>
          <p>yrm@gmail.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2024 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default footer
