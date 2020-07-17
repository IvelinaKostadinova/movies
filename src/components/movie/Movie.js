import React from 'react';
import PropTypes from 'prop-types';
import MVContextMenu from '../context-menu/MVContextMenu';
import { Link } from 'react-router-dom';

import './Movie.scss';

const Movie = (props) => {
  const url = '/movie/'.concat(props.item.id);

  return (
    <div className="movie">
      <MVContextMenu item={props.item}></MVContextMenu>

      <Link to={url}>
        <img
          className="movie__url"
          src={props.item.poster_path}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              'https://sd.keepcalms.com/i/error-404-no-wallpaper-found.png';
          }}
        ></img>
      </Link>
      <div className="movie__name">{props.item.title}</div>
      <div className="movie__genre">{props.item.genres.join(', ')}</div>
      <div className="movie__year">
        {new Date(props.item.release_date).getFullYear()}
      </div>
    </div>
  );
};

Movie.propTypes = {
  item: PropTypes.object,
};

export default Movie;
