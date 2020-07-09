import React from 'react';
import ErrorBoundary from './helpers/ErrorBoundry';
import HomePage from './pages/home/HomePage';

const App = () => {
  return (
    <ErrorBoundary>
      <HomePage></HomePage>
    </ErrorBoundary>
  );
};

export default App;
