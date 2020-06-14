import React from 'react';

const Actions = () => {
  return (
    <div className="actions-container">
      <button className="filter-btn" type="submit">
        ALL
      </button>
      <button className="filter-btn" type="submit">
        DOCUMENTARY
      </button>
      <button className="filter-btn" type="submit">
        COMEDY
      </button>
      <button className="filter-btn" type="submit">
        HORROR
      </button>
      <button className="filter-btn" type="submit">
        CRIME
      </button>
      <button className="filter-btn" type="submit">
        FANTASY
      </button>

      <select name="sort" id="sort-slc">
        <option value="releseDate">RELEASE DATE</option>
        <option value="title">TITLE</option>
      </select>
      <label id="sort-lbl">SORT BY</label>
    </div>
  );
};

export default Actions;
