import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundPage.scss';

const NotFoundPage = () => {
  return (
    <>
      <div id="not-found">
        <div id="not-found__title">Page Not Found</div>
        <img src="https://cdn4.iconfinder.com/data/icons/gradient-4/50/303-512.png" />
        <div id="not-found__text" style={{ textAlign: 'center' }}>
          <Link to="/">Go Back To Home</Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
