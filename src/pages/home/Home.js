import React from 'react';
import Movie from '../../components/movie/Movie';
import Search from '../../components/search/Search';
import Actions from '../../components/actions/Actions';
import AddMovie from '../../components/modals/AddMovie';
import MoviesContext from '../../MoviesContext';
import MovieDetails from '../../components/movie-details/MovieDetails';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Home.scss';

const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);
  return { response: response, error: error, loading: loading };
};

const Home = () => {
  const { response = [], error, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/',
    {}
  );

  const movies = React.useContext(MoviesContext);

  return (
    <>
      {loading && 'Loading'}
      {error && 'Error'}
      {response && (
        <div id="home">
          <Router>
            <Switch>
              <Route exact path="/">
                <div id="home__search">
                  <AddMovie></AddMovie>
                  <Search></Search>
                </div>
              </Route>
              <Route path="/movie/:id">
                <MovieDetails />
              </Route>
            </Switch>
            <div id="home__result">
              <Actions></Actions>
              <hr></hr>
              <div id="home__result__text">{movies.length} movies found</div>
              {movies.map((movie) => {
                const url = '/movie/'.concat(movie.id);

                return (
                  <Link to={url} key={movie.id}>
                    <Movie item={movie}></Movie>
                  </Link>
                );
              })}
            </div>
          </Router>
        </div>
      )}
    </>
  );
};

export default Home;
