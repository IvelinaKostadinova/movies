import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Filter from '../filter/Filter';

import './Actions.scss';

const Actions = ({ initialSelectedGenre, initialSort, onFilter, onSort }) => {
  const [selectedGenre, setSelectedGenre] = useState(initialSelectedGenre);

  const handleSelect = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="actions">
      {['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME', 'FANTASY'].map(
        (genre) => {
          return (
            <Filter
              key={genre}
              text={genre}
              handleClick={(e) => {
                setSelectedGenre(genre);
                if (e == 'ALL') e = '';
                onFilter(e);
              }}
              active={genre === selectedGenre}
            ></Filter>
          );
        }
      )}

      <select
        defaultValue={initialSort}
        name="sort"
        className="actions__sort"
        onChange={handleSelect}
      >
        <option value="release_date">RELEASE DATE</option>
        <option value="title">TITLE</option>
      </select>
      <label className="actions__sort__label">SORT BY</label>
    </div>
  );
};

Actions.propTypes = {
  initialSelectedGenre: PropTypes.string.isRequired,
  initialSort: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default Actions;
