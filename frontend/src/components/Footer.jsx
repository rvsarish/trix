import React from 'react';
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineEnvironment,
} from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import logo from '../assets/l1.png';

import './Footer.css';
import { HiExternalLink } from 'react-icons/hi';
class Link {
  constructor(name, href) {
    this.name = name;
    this.href = href || '#';
  }
}

const Footer = () => {
  return (
    <footer
      id='footer'
      className='text-white'
      style={{ backgroundColor: '#40916C' }}
    >
      <div className='container'>
        <div className='grid'>
          <div className='column'>
            <img className='logo'  src={logo} alt='grocery' style={{ width: '60px', height: '60px' }} />

            <p className='description'>
              We provide fresh, top-notch meat, vegetables, and more. Enjoy
              quick delivery and savor the finest ingredients for a delicious
              dining experience.
            </p>

            <div className='social-media'>
            
              <a href='#'>
                <FaFacebook className='social-icon' />
              </a>
              
              <a href='#'>
                <FaInstagram className='social-icon' />
              </a>
              {/* Twitter */}
              <a href='#'>
                <FaTwitter className='social-icon' />
              </a>

              <a href='#'>
                <FaLinkedin className='social-icon' />
              </a>
            </div>
          </div>

          <div className='column'>
            <h3>About Us</h3>
            <div className='links'>
              <a href='#'>
                About Us <HiExternalLink />
              </a>
              <a href='#'>
                Why Us <HiExternalLink />
              </a>
              <a href='#'>
                Security <HiExternalLink />
              </a>
              <a href='#'>
                Testimonials <HiExternalLink />
              </a>
            </div>
          </div>
          <div>
            <h3>Help</h3>
            <div className='links'>
              <a href='#'>
                Account <HiExternalLink />
              </a>
              <a href='#'>
                Support Center <HiExternalLink />
              </a>
              <a href='#'>
                Privacy Policy <HiExternalLink />
               
              </a>
              <a href='#'>
                Terms & Conditions <HiExternalLink />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className='column'>
            <h3>Contact Us</h3>
            <div className='contact-info'>
              {/* Phone */}
              <a className='contact-link' href='tel:+91 9876543210'>
                <AiOutlinePhone className='contact-icon' /> +91 9876543210
              </a>
              {/* Email */}
              <a className='contact-link' href='mailto:developer@gmail.com'>
                <AiOutlineMail className='contact-icon' /> developer@gmail.com
              </a>
              {/* Address */}
              <p>
                <AiOutlineEnvironment className='contact-icon' /> sjce,chennai{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Credits */}
      <div className='footer-bottom'>
        <hr />
        <div className='credits'>
          <p>© 2024 Trix </p>
        </div>
      </div>
    </footer>
  );
};

// Footer Links Component
const Links = ({ title, linksArray }) => (
  <div className='column'>
    <h3>{title}</h3>
    <div className='links'>
      {linksArray.map((link, i) => (
        <a key={i} href={link.href}>
          {link.name}
        </a>
      ))}
    </div>
  </div>
);

export default Footer;
