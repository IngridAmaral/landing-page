import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../assets/svg/arrow/Arrow';
import './ExploreButton.scss';

const ExploreButton = ({ curved, text }) => (
  <button type="button" className={`explore-button ${curved ? 'curved' : ''}`}>
    <span>{text}</span>
    <div className="arrow-container">
      <Arrow direction="right" color="white" />
    </div>
  </button>
);

ExploreButton.propTypes = {
  curved: PropTypes.bool,
  text: PropTypes.string
};

ExploreButton.defaultProps = {
  curved: false,
  text: 'Explore'
};

export default ExploreButton;
