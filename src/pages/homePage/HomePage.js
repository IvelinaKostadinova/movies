import React, { useState, useEffect } from 'react';
import Movie from '../../components/movie/Movie';
import Search from '../../components/search/Search';
import Actions from '../../components/actions/Actions';
import AddMovie from '../../components/modals/AddMovie';
import MovieDetails from '../../components/movie-details/MovieDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import useFetch from '../../helpers/Hooks';
import { loadMovies } from '../../redux/actions/movieActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './HomePage.scss';

const HomePage = ({ movies, loadMovies }) => {
  const { response = [], error, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/',
    {}
  );

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();

  const [sortBy, setSortBy] = useState(query.get('sort') || 'release_date');
  const [filterBy, setFilterBy] = useState(query.get('genre'));
  const [searchBy, setSearchBy] = useState(query.get('text'));

  let history = useHistory();

  const setURL = (args) => {
    let url = '';

    if (args.sort) url += '?sort='.concat(args.sort);
    else url += '?sort='.concat(sortBy);

    if (args.filter) url += '&genre='.concat(args.filter);
    else if (filterBy) url += '&genre='.concat(filterBy);

    if (args.search) url += '&text='.concat(args.search);
    else if (searchBy) url += '&text='.concat(searchBy);

    history.push({
      pathname: '/',
      query: url,
      search: url,
    });
  };

  const handleFilter = (e) => {
    setURL({ filter: e });
    setFilterBy(e);
  };

  const handleSort = (e) => {
    setURL({ sort: e });
    setSortBy(e);
  };

  const handleSearch = (e) => {
    setURL({ search: e });
    setSearchBy(e);
  };

  useEffect(() => {
    if (filterBy !== null || searchBy !== null) {
      loadMovies(sortBy, filterBy, searchBy);
    }
  }, [sortBy, filterBy, searchBy]);

  return (
    <>
      {loading && 'Loading'}
      {error && 'Error'}
      {response && 'Response'}
      <div id="home">
        <Router>
          <Switch>
            <Route exact path="/">
              <div id="home__search">
                <AddMovie></AddMovie>
                <Search search={searchBy} onSearch={handleSearch}></Search>
              </div>
            </Route>
            <Route path="/movie/:id" component={MovieDetails}></Route>
          </Switch>
          <div id="home__result">
            <Actions
              filter={filterBy}
              sort={sortBy}
              onFilter={handleFilter}
              onSort={handleSort}
            ></Actions>
            <hr></hr>
            {movies.length === 0 && (
              <div id="home__result__no-movies-found">NO MOVIES FOUND</div>
            )}

            {movies.length > 0 && (
              <div id="home__result__text">{movies.length} movies found</div>
            )}

            {movies.map((movie) => {
              return <Movie key={movie.id} item={movie}></Movie>;
            })}
          </div>
        </Router>
      </div>
    </>
  );
};

HomePage.propTypes = {
  movies: PropTypes.array.isRequired,
  loadMovies: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

const mapDispatchToProps = {
  loadMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
