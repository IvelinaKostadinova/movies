import React from 'react';
import PropTypes from 'prop-types';

import './Filter.scss';

const Filter = (props) => {
  const handleClick = () => {
    props.handleClick(props.text);
  };

  return (
    <button
      className={`${props.active ? 'filter--active' : 'filter'}`}
      type="submit"
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
};

Filter.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func,
  active: PropTypes.bool,
};

export default Filter;
