import React from 'react';
import PropTypes from 'prop-types';
import MVContextMenu from '../context-menu/MVContextMenu';

import './Movie.scss';

const Movie = (props) => {
  return (
    <div className="movie">
      <MVContextMenu item={props.item}></MVContextMenu>

      <img className="movie__url" src={props.item.url}></img>
      <div className="movie__name">{props.item.name}</div>
      <div className="movie__genre">{props.item.genre}</div>
      <div className="movie__year">{props.item.year}</div>
    </div>
  );
};

Movie.propTypes = {
  item: PropTypes.object,
};

export default Movie;
