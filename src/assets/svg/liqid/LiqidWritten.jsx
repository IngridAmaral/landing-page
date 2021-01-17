import React from 'react';
import PropTypes from 'prop-types';
import './LiqidWritten.scss';

const LiqidWritten = ({ colorName }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="96.952"
    height="29.462"
    viewBox="0 0 96.952 29.462"
  >
    <g transform="translate(-912 -1488)">
      <g transform="translate(912 1487.462)">
        <path
          className={`fill-${colorName}`}
          d="M.046.538H4.259V23.7H18.97v4.121H.046S-.058.431.046.538Z"
        />
        <rect
          className={`fill-${colorName}`}
          width="4.281"
          height="27.287"
          transform="translate(23.253 0.538)"
        />
        <rect
          className={`fill-${colorName}`}
          width="4.281"
          height="27.287"
          transform="translate(63.658 0.538)"
        />
        <path
          className={`fill-${colorName}`}
          d="M83.894.538H72.636V27.825H83.48c6.63,0,13.468-3.908,13.468-13.927A13.043,13.043,0,0,0,84.226.542C84.115.539,84,.538,83.894.538ZM83.2,23.666H76.918V4.747H83.2c3.926,0,9.255,1.76,9.255,9.315C92.456,21.572,87.8,23.666,83.2,23.666Z"
        />
        <path
          className={`fill-${colorName}`}
          d="M55.053,24.506a14.331,14.331,0,0,0,4.336-10.322,13.781,13.781,0,1,0-13.8,14.184,15.072,15.072,0,0,0,2.943-.309,15.5,15.5,0,0,1-3.626-3.975c-4.835-.284-8.867-4.754-8.867-9.91a9.565,9.565,0,0,1,19.122-.553c.005.184.005.369,0,.553a9.863,9.863,0,0,1-3.973,8.08A9.375,9.375,0,0,0,55.053,24.506Z"
        />
        <path
          className={`fill-${colorName}`}
          d="M57.286,30a13.97,13.97,0,0,1-13.8-13.848h4.178a9.574,9.574,0,0,0,9.53,9.618h.088Z"
        />
      </g>
    </g>
  </svg>
);

LiqidWritten.propTypes = {
  colorName: PropTypes.string.isRequired
};

export default LiqidWritten;
