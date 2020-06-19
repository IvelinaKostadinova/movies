import React from 'react';

const movies = [
  {
    id: 1,
    name: 'Harry Potter',
    award: 'Oscar winning movie',
    rating: 8.6,
    genre: 'Fantasy',
    year: '2010',
    duration: '154min',
    description:
      "Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harry's struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggles (non-magical people).",
    url:
      'https://i.pinimg.com/originals/5f/a4/b7/5fa4b7287975bbb34f0d61008cc1d586.jpg',
  },
  {
    id: 2,
    name: 'Lord of the rings',
    award: 'Oscar winning movie',
    rating: 9.6,
    genre: 'Fantasy',
    year: '2012',
    duration: '128min',
    description:
      'The Lord of the Rings is a film series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring (2001), The Two Towers (2002) and The Return of the King (2003). Produced and distributed by New Line Cinema with the co-production of WingNut Films, it is an international venture between New Zealand and the United States. ',
    url:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  },
  {
    id: 3,
    name: 'Game of thrones',
    award: 'Oscar winning movie',
    rating: 9.8,
    genre: 'Fantasy',
    year: '2011',
    duration: '93min',
    description:
      "Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is A Game of Thrones. The show was both produced and filmed in Belfast and elsewhere in the United Kingdom. Filming locations also included Canada, Croatia, Iceland, Malta, Morocco, and Spain.",
    url:
      'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg',
  },
];

const MoviesContext = React.createContext(movies);

export default MoviesContext;
