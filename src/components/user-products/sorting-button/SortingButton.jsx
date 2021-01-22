import React from 'react';
import PropTypes from 'prop-types';
import Arrow from '../../../assets/svg/arrow/Arrow';
import './SortingButton.scss';

const renderArrow = (sortBy) =>
  sortBy === 'lowest' ? (
    <Arrow direction="down" color="white" />
  ) : (
    <Arrow direction="up" color="white" />
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
