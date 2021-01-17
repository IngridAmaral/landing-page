import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../../assets/svg/arrows/Arrow';
import './SortingButton.scss';

const renderArrow = (sortBy) =>
  sortBy === 'lowest' ? (
    <Arrow arrowStyle="down-white" />
  ) : (
    <Arrow arrowStyle="up-white" />
  );

const SortingButton = ({ isActive, text, sortBy, onClick }) => (
  <button
    id={sortBy}
    type="button"
    onClick={() => onClick(sortBy)}
    className={`sorting-button ${isActive ? 'sorting-button-active' : ''}`}
  >
    <span>{text}</span>
    {renderArrow(sortBy)}
  </button>
);

SortingButton.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  sortBy: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default SortingButton;
