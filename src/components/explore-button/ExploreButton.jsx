import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../assets/svg/arrows/Arrow';
import './ExploreButton.scss';

const ExploreButton = ({ curved }) => (
  <button type="button" className={`explore-button ${curved ? 'curved' : ''}`}>
    <span>Explore</span>
    <Arrow arrowStyle="right-white" />
  </button>
);

ExploreButton.propTypes = {
  curved: PropTypes.bool
};

ExploreButton.defaultProps = {
  curved: false
};

export default ExploreButton;
