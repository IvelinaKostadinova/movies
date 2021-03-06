import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

export const Search = ({ initialSearch, onSearch }) => {
  const [text, setText] = useState(initialSearch);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    onSearch(text);
  };

  return (
    <div id="search">
      <input
        id="search__text"
        type="text"
        placeholder="What do you want to watch?"
        value={text}
        onChange={handleChange}
      ></input>
      <button id="search__button" type="submit" onClick={handleClick}>
        Search
      </button>
    </div>
  );
};

Search.propTypes = {
  initialSearch: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Search;
