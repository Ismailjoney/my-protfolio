import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, IconName } from "react-icons/fa";

const Footer = () => {
  return (

    <footer className="footer footer-center p-10 text-primary-content">
      <div>
        <h3 className='text-2xl italic font-bold'>Mohammad Ismail Hossen Joney</h3>
        <h3 className='italic font-bold'>Barishal, Bangladesh</h3>
        <h3 className='italic font-bold'>mohammadismailjoney@gmail.com</h3>
         <h3 className='italic font-bold'>+8801580680940</h3>
         </div>

      <div>
        <div className="grid grid-flow-col gap-4">
          <a href='https://web.facebook.com/profile.php?id=100009195877064'>
          <FaFacebook style={{color:'white', width:'40px', height:'40px', borderRadius:'20px'}}></FaFacebook>
          </a>
          <a href='https://www.linkedin.com/in/mohammad-ismail-joney-2b8584259/'>
          <FaLinkedin style={{color:'white', width:'40px', height:'40px', borderRadius:'20px'}}></FaLinkedin>
          </a>
          <a href=''>
          <FaInstagram style={{color:'white', width:'40px', height:'40px',borderRadius:'20px'}}></FaInstagram>
          </a>
        </div>
      </div> 
    </footer>
  );
};

export default Footer;