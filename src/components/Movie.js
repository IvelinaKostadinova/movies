import React from 'react';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';
import PropTypes from 'prop-types';
import { ContextMenu, ContextMenuTrigger } from 'react-contextmenu';

const Movie = (props) => {
  const id = 'contextMenuTrigger_'.concat(props.item.id);

  return (
    <div className="movie-container">
      <ContextMenuTrigger id={id}>
        <div className="context-menu">
          <button className="context-menu-btn">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </button>
        </div>
      </ContextMenuTrigger>

      <ContextMenu className="menu" id={id}>
        <EditMovie movie={props.item}></EditMovie>
        <DeleteMovie movie={props.item}></DeleteMovie>
      </ContextMenu>

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
