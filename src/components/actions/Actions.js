import React, { useState } from 'react';
import Filter from '../filter/Filter';

import './Actions.scss';

const Actions = () => {
  const [allActive, setAllActive] = useState(false);
  const [documentaryActive, setDocumentaryActive] = useState(false);
  const [comedyActive, setComedyActive] = useState(false);
  const [horrorActive, setHorrorActive] = useState(false);
  const [crimeActive, setCrimeActive] = useState(false);
  const [fantasyActive, setFantasyActive] = useState(false);

  const handleClick = (e) => {
    e == 'ALL' ? setAllActive(true) : setAllActive(false);
    e == 'DOCUMENTARY'
      ? setDocumentaryActive(true)
      : setDocumentaryActive(false);
    e == 'COMEDY' ? setComedyActive(true) : setComedyActive(false);
    e == 'HORROR' ? setHorrorActive(true) : setHorrorActive(false);
    e == 'CRIME' ? setCrimeActive(true) : setCrimeActive(false);
    e == 'FANTASY' ? setFantasyActive(true) : setFantasyActive(false);
  };

  return (
    <div className="actions">
      <Filter text="ALL" handleClick={handleClick} active={allActive}></Filter>
      <Filter
        text="DOCUMENTARY"
        handleClick={handleClick}
        active={documentaryActive}
      ></Filter>
      <Filter
        text="COMEDY"
        handleClick={handleClick}
        active={comedyActive}
      ></Filter>
      <Filter
        text="HORROR"
        handleClick={handleClick}
        active={horrorActive}
      ></Filter>
      <Filter
        text="CRIME"
        handleClick={handleClick}
        active={crimeActive}
      ></Filter>
      <Filter
        text="FANTASY"
        handleClick={handleClick}
        active={fantasyActive}
      ></Filter>

      <select name="sort" className="actions__sort">
        <option value="releseDate">RELEASE DATE</option>
        <option value="title">TITLE</option>
      </select>
      <label className="actions__sort__label">SORT BY</label>
    </div>
  );
};

export default Actions;
