import React from 'react';

import './Search.scss';

const Search = () => {
  return (
    <div className="search-container">
      <input
        id="search-txt"
        type="text"
        placeholder="What do you want to watch?"
      ></input>
      <button id="search-btn" type="submit">
        Search
      </button>
    </div>
  );
};

export default Search;
