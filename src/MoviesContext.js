import React from 'react';

const movies = [
  {
    id: 1,
    name: 'Harry Potter',
    genre: 'Fantasy',
    year: '2010',
    url:
      'https://i.pinimg.com/originals/5f/a4/b7/5fa4b7287975bbb34f0d61008cc1d586.jpg',
  },
  {
    id: 2,
    name: 'Lord of the rings',
    genre: 'Fantasy',
    year: '2012',
    url:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  },
  {
    id: 3,
    name: 'Game of thrones',
    genre: 'Fantasy',
    year: '2011',
    url:
      'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
  },
];

const MoviesContext = React.createContext(movies);

export default MoviesContext;
