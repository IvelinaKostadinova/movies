import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { MenuItem } from 'react-contextmenu';
import PropTypes from 'prop-types';

import './Modal.scss';
import 'react-datepicker/dist/react-datepicker.css';

const DeleteMovie = () => {
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

  return (
    <>
      <MenuItem data={{ option: 'delete' }} onClick={handleClick}>
        Delete
      </MenuItem>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <label id="title">DELETE MOVIE</label>
          <label id="confirm-msg">
            Are you sure that you want to delete this movie?
          </label>
        </Modal.Body>
        <Modal.Footer>
          <button id="submit-btn" onClick={handleSubmit}>
            CONFIRM
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

DeleteMovie.propTypes = {
  movie: PropTypes.object,
};

export default DeleteMovie;
