import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import MoviesContext from '../../MoviesContext';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

import './MovieDetails.scss';

const MovieDetails = () => {
  const movies = React.useContext(MoviesContext);
  const { id } = useParams();

  const item = movies.find((i) => {
    return i.id == parseInt(id);
  });

  return (
    <div className="details">
      <div className="details__picture">
        <img className="details__picture__img" src={item.url}></img>
      </div>
      <div className="details__info">
        <div className="details__info__name">
          {item.name}
          <span className="details__info__rating">{item.rating}</span>
        </div>
        <div className="details__info__award">{item.award}</div>
        <div className="details__info__year__duration">
          {item.year}&nbsp;&nbsp;&nbsp;{item.duration}
        </div>
        <div className="details__info__description">{item.description}</div>
      </div>
      <div className="details__back">
        <Link to="/">
          <SearchIcon style={{ fill: '#f65261' }} fontSize="large"></SearchIcon>
        </Link>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  item: PropTypes.object,
};

export default MovieDetails;
