import React from 'react';
import EditMovie from '../modals/EditMovie';
import DeleteMovie from '../modals/DeleteMovie';
import PropTypes from 'prop-types';
import { ContextMenu, ContextMenuTrigger } from 'react-contextmenu';

import './MVContextMenu.scss';

const MVContextMenu = (props) => {
  const id = 'contextMenuTrigger_'.concat(props.item.id);

  return (
    <>
      <ContextMenuTrigger holdToDisplay={0} id={id}>
        <div className="context-menu">
          <button className="context-menu__btn">
            <span className="context-menu__btn__dot"></span>
            <span className="context-menu__btn__dot"></span>
            <span className="context-menu__btn__dot"></span>
          </button>
        </div>
      </ContextMenuTrigger>

      <ContextMenu className="menu" id={id}>
        <EditMovie movieToEdit={props.item}></EditMovie>
        <DeleteMovie movieToDelete={props.item}></DeleteMovie>
      </ContextMenu>
    </>
  );
};

MVContextMenu.propTypes = {
  item: PropTypes.object,
};

export default MVContextMenu;
