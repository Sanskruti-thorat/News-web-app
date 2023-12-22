/* eslint-disable @typescript-eslint/no-explicit-any */

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const footerStyle :any = {
    backgroundColor: '#f2f2f2',
    padding: '20px',
    textAlign: 'center',
  };

  const iconStyle = {
    marginRight: '10px',
    fontSize: '1.5rem',
    color: '#333',
  };

  return (
    <div style={footerStyle}>
      <p>&copy; 2023 Your Website. All Rights Reserved.</p>
      <div>
        <a href="#" style={iconStyle}><FaTwitter /></a>
        <a href="#" style={iconStyle}><FaFacebook /></a>
        <a href="#" style={iconStyle}><FaInstagram /></a>
        <a href="#" style={iconStyle}><FaLinkedin /></a>
      </div>
    </div>
  );
};

export default Footer;
