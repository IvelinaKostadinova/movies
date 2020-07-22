import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import DatePicker from 'react-datepicker';
import { saveMovie } from '../../redux/actions/movieActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Modal.scss';
import 'react-datepicker/dist/react-datepicker.css';

const initialMovie = {
  title: '',
  release_date: null,
  poster_path: '',
  genres: null,
  overview: '',
  runtime: null,
};

export const AddMovie = ({ saveMovie }) => {
  const [show, setShow] = useState(false);
  const [movie, setMovie] = useState(initialMovie);

  const handleChange = (event) => {
    let value = event.target.value;
    if (event.target.name === 'runtime') {
      value = parseInt(value);
    } else if (event.target.name === 'genres') {
      value = [value];
    }
    setMovie({ ...movie, [event.target.name]: value });
  };

  const handleReleaseDateChange = (date) => {
    setMovie({ ...movie, release_date: date });
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleClick = () => {
    setShow(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveMovie(movie);
    setShow(false);
  };

  return (
    <>
      <button id="add-movie-btn" type="submit" onClick={handleClick}>
        + ADD MOVIE
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <label id="title">ADD MOVIE</label>
          <label>TITLE</label>
          <input
            id="input-title"
            name="title"
            type="text"
            placeholder="Select Title"
            onChange={handleChange}
          ></input>
          <label>RELEASE DATE</label>
          <DatePicker
            selected={movie.release_date}
            onChange={handleReleaseDateChange}
            placeholderText="Select Date"
            dateFormat="MMMM d, yyyy"
          />
          <label>MOVIE URL</label>
          <input
            name="poster_path"
            type="text"
            placeholder="Movie URL here"
            onChange={handleChange}
          ></input>
          <label>GENRE</label>
          <select
            name="genres"
            defaultValue={'SELECT_GENRE'}
            onChange={handleChange}
          >
            <option disabled value="SELECT_GENRE">
              Select Genre
            </option>
            {['Documentary', 'Comedy', 'Horror', 'Crime', 'Fantasy'].map(
              (genre) => {
                return (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                );
              }
            )}
          </select>
          <label>OVERVIEW</label>
          <input
            name="overview"
            type="text"
            placeholder="Overview here"
            onChange={handleChange}
          ></input>
          <label>RUNTIME</label>
          <input
            name="runtime"
            type="text"
            placeholder="Runtime here"
            onChange={handleChange}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <button id="reset-btn" onClick={handleClose}>
            Reset
          </button>
          <button id="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

AddMovie.propTypes = {
  saveMovie: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

const mapDispatchToProps = {
  saveMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
