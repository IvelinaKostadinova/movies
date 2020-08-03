import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './helpers/ErrorBoundry';
import HomePage from './pages/homePage/HomePage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
