import React from 'react';

import './Actions.scss';

const Actions = () => {
  return (
    <div className="actions">
      <button className="actions__filter" type="submit">
        ALL
      </button>
      <button className="actions__filter" type="submit">
        DOCUMENTARY
      </button>
      <button className="actions__filter" type="submit">
        COMEDY
      </button>
      <button className="actions__filter" type="submit">
        HORROR
      </button>
      <button className="actions__filter" type="submit">
        CRIME
      </button>
      <button className="actions__filter" type="submit">
        FANTASY
      </button>

      <select name="sort" className="actions__sort">
        <option value="releseDate">RELEASE DATE</option>
        <option value="title">TITLE</option>
      </select>
      <label className="actions__sort__label">SORT BY</label>
    </div>
  );
};

export default Actions;
