import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { loadMovie } from '../../redux/actions/movieActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './MovieDetails.scss';

const MovieDetails = ({ movie }) => {
  return (
    <div className="details">
      <div className="details__picture">
        <img className="details__picture__img" src={movie.poster_path}></img>
      </div>
      <div className="details__info">
        <div className="details__info__name">
          {movie.title}
          <span className="details__info__rating">{movie.vote_average}</span>
        </div>
        <div className="details__info__award">{movie.tagline}</div>
        <div className="details__info__year__duration">
          {new Date(movie.release_date).getFullYear()}&nbsp;&nbsp;&nbsp;
          {movie.duration}
        </div>
        <div className="details__info__description">{movie.overview}</div>
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
  movie: PropTypes.object.isRequired,
  loadMovie: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;

  return {
    movie: state.movies.find((item) => {
      return item.id === parseInt(id);
    }),
  };
}

const mapDispatchToProps = {
  loadMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
