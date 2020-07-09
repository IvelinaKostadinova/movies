import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import DatePicker from 'react-datepicker';
import { saveMovie } from '../../redux/actions/movieActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Modal.scss';
import 'react-datepicker/dist/react-datepicker.css';

const AddMovie = ({ saveMovie }) => {
  const initialMovie = {
    title: '',
    release_date: null,
    poster_path: '',
    genres: null,
    overview: '',
    runtime: null,
  };

  const [show, setShow] = useState(false);
  const [movie, setMovie] = useState(initialMovie);

  const handleTitleChange = (event) => {
    setMovie({ ...movie, title: event.target.value });
  };
  const handleUrlChange = (event) => {
    setMovie({ ...movie, poster_path: event.target.value });
  };
  const handleReleaseDateChange = (date) => {
    setMovie({ ...movie, release_date: date });
  };
  const handleGenreChange = (event) => {
    setMovie({ ...movie, genres: [event.target.value] });
  };
  const handleOverviewChange = (event) => {
    setMovie({ ...movie, overview: event.target.value });
  };
  const handleRuntimeChange = (event) => {
    setMovie({ ...movie, runtime: parseInt(event.target.value) });
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleClick = () => {
    setShow(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    saveMovie(movie).catch((error) => {
      alert('Saving movie failed'.concat(error));
    });
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
            type="text"
            placeholder="Select Title"
            onChange={handleTitleChange}
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
            type="text"
            placeholder="Movie URL here"
            onChange={handleUrlChange}
          ></input>
          <label>GENRE</label>
          <select defaultValue={'SELECT_GENRE'} onChange={handleGenreChange}>
            <option disabled value="SELECT_GENRE">
              Select Genre
            </option>
            <option value="Documentary">DOCUMENTARY</option>
            <option value="Comedy">COMEDY</option>
            <option value="Horror">HORROR</option>
            <option value="Crime">CRIME</option>
            <option value="Fantasy">FANTASY</option>
          </select>
          <label>OVERVIEW</label>
          <input
            type="text"
            placeholder="Overview here"
            onChange={handleOverviewChange}
          ></input>
          <label>RUNTIME</label>
          <input
            type="text"
            placeholder="Runtime here"
            onChange={handleRuntimeChange}
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
