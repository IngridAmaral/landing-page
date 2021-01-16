import React from 'react';
import PropTypes from 'prop-types';
import RightArrow from '../../assets/svg/arrows/RightArrow';
import './ExploreButton.scss';

const ExploreButton = ({ curved }) => (
  <button type="button" className={`explore-button ${curved ? 'curved' : ''}`}>
    <span>Explore</span>
    <RightArrow />
  </button>
);

ExploreButton.propTypes = {
  curved: PropTypes.bool
};

ExploreButton.defaultProps = {
  curved: false
};

export default ExploreButton;
