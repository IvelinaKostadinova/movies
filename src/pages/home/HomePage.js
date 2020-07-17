import React, { useState, useEffect } from 'react';
import Movie from '../../components/movie/Movie';
import Search from '../../components/search/Search';
import Actions from '../../components/actions/Actions';
import AddMovie from '../../components/modals/AddMovie';
import MovieDetails from '../../components/movie-details/MovieDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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

  const [sortBy, setSortBy] = useState('release_date');
  const [filterBy, setFilterBy] = useState(null);
  const [searchBy, setSearchBy] = useState(null);

  const handleFilter = (e) => {
    setFilterBy(e);
  };

  const handleSort = (e) => {
    setSortBy(e);
  };

  const handleSearch = (e) => {
    setSearchBy(e);
  };

  useEffect(() => {
    loadMovies(sortBy, filterBy, searchBy).catch((error) => {
      alert('Loading movies failed'.concat(error));
    });
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
                <Search onSearch={handleSearch}></Search>
              </div>
            </Route>
            <Route path="/movie/:id" component={MovieDetails}></Route>
          </Switch>
          <div id="home__result">
            <Actions onFilter={handleFilter} onSort={handleSort}></Actions>
            <hr></hr>
            <div id="home__result__text">{movies.length} movies found</div>
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
