import React from 'react';
import PropTypes from 'prop-types';
import './Arrow.scss';

const Arrow = ({ direction, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14.222"
    height="10"
    viewBox="0 0 14.222 10"
    className={`arrow-${direction}  arrow-${color}`}
  >
    <path
      d="M9.577,4.824a.5.5,0,0,0-.717.71l3.634,3.634H.5a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.509H12.494L8.86,13.807a.515.515,0,0,0,0,.717.5.5,0,0,0,.717,0l4.495-4.495a.494.494,0,0,0,0-.71Z"
      transform="translate(0 -4.674)"
    />
  </svg>
);

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Arrow;
