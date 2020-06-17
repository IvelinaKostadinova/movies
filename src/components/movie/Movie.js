import React from 'react';
import PropTypes from 'prop-types';
import MVContextMenu from '../context-menu/MVContextMenu';

import './Movie.scss';

const Movie = (props) => {
  return (
    <div className="movie-container">
      <MVContextMenu item={props.item}></MVContextMenu>

      <img src={props.item.url}></img>
      <div className="name">{props.item.name}</div>
      <div className="genre">{props.item.genre}</div>
      <div className="year">{props.item.year}</div>
    </div>
  );
};

Movie.propTypes = {
  item: PropTypes.object,
};

export default Movie;
