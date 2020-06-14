import React from 'react';
import Movie from '../components/Movie';
import Search from '../components/Search';
import Actions from '../components/Actions';
import AddMovie from '../components/AddMovie';
import MoviesContext from '../MoviesContext';

const Home = () => {
  const movies = React.useContext(MoviesContext);
  return (
    <div className="home">
      <div className="search-area">
        <AddMovie></AddMovie>
        <Search></Search>
      </div>
      <div className="result-area">
        <Actions></Actions>
        <hr></hr>
        <div id="result">{movies.length} movies found</div>
        {movies.map((movie) => {
          return <Movie key={movie.id} item={movie}></Movie>;
        })}
      </div>
    </div>
  );
};

export default Home;
