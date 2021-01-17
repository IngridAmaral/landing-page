import React from 'react';
import PropTypes from 'prop-types';
import LiqidWritten from '../../assets/svg/liqid/LiqidWritten';
import './Footer.scss';

const Footer = ({ colorName }) => (
  <footer className={`footer-container-${colorName}`}>
    <LiqidWritten colorName={colorName} />
  </footer>
);

Footer.propTypes = {
  colorName: PropTypes.string.isRequired
};

export default Footer;
