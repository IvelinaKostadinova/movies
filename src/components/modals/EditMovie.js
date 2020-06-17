import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import DatePicker from 'react-datepicker';
import { MenuItem } from 'react-contextmenu';
import PropTypes from 'prop-types';

import './Modal.scss';
import 'react-datepicker/dist/react-datepicker.css';

const EditMovie = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleClick = () => {
    setShow(true);
  };

  const handleSubmit = () => {
    setShow(false);
  };

  const handleChange = () => {};

  return (
    <>
      <MenuItem data={{ option: 'edit' }} onClick={handleClick}>
        Edit
      </MenuItem>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <label id="title">EDIT MOVIE</label>
          <label>TITLE</label>
          <input
            type="text"
            placeholder="Select Title"
            value={props.movie.name}
            onChange={handleChange}
          ></input>
          <label>RELEASE DATE</label>
          <DatePicker
            onChange={handleChange}
            placeholderText="Select Date"
            selected={new Date(props.movie.year)}
          />
          <label>MOVIE URL</label>
          <input type="text" placeholder="Movie URL here"></input>
          <label>GENRE</label>
          <select defaultValue={props.movie.genre}>
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
          <input type="text" placeholder="Overview here"></input>
          <label>RUNTIME</label>
          <input type="text" placeholder="Runtime here"></input>
        </Modal.Body>
        <Modal.Footer>
          <button id="reset-btn" onClick={handleClose}>
            Reset
          </button>
          <button id="submit-btn" onClick={handleSubmit}>
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

EditMovie.propTypes = {
  movie: PropTypes.object,
};

export default EditMovie;
