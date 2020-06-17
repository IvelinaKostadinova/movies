import React from 'react';
import ErrorBoundary from './helpers/ErrorBoundry';
import Home from './pages/home/Home';

const App = () => {
  return (
    <ErrorBoundary>
      <Home></Home>
    </ErrorBoundary>
  );
};

export default App;
