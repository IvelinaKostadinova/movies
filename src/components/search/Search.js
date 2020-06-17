import React from 'react';

import './Search.scss';

const Search = () => {
  return (
    <div id="search">
      <input
        id="search__text"
        type="text"
        placeholder="What do you want to watch?"
      ></input>
      <button id="search__button" type="submit">
        Search
      </button>
    </div>
  );
};

export default Search;
