import React from 'react';
import Modal from 'react-bootstrap/Modal';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { useState } from 'react';

const AddMovie = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleSubmit = () => {
    setShow(false);
  };

  const handleChange = () => {};

  return (
    <>
      <button id="add-movie-btn" type="submit" onClick={handleShow}>
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
          <input type="text" placeholder="Select Title"></input>
          <label>RELEASE DATE</label>
          <DatePicker onChange={handleChange} placeholderText="Select Date" />
          <label>MOVIE URL</label>
          <input type="text" placeholder="Movie URL here"></input>
          <label>GENRE</label>
          <select defaultValue={'SELECT_GENRE'}>
            <option disabled value="SELECT_GENRE">
              Select Genre
            </option>
            <option value="DOCUMENTARY">DOCUMENTARY</option>
            <option value="COMEDY">COMEDY</option>
            <option value="HORROR">HORROR</option>
            <option value="CRIME">CRIME</option>
            <option value="FANTASY">FANTASY</option>
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
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddMovie;
