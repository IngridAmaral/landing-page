import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../assets/svg/logo/Logo';
import './Footer.scss';

const Footer = ({ backgroundColor, svgColor }) => (
  <footer className={`footer-container-${backgroundColor}`}>
    <Logo colorName={svgColor} />
  </footer>
);

Footer.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  svgColor: PropTypes.string.isRequired
};

export default Footer;
