import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL.concat('/movies');

export function getMovies(sortBy, filterBy, searchBy) {
  let queryParams = '';
  let sortParams = '';
  let filterParams = '';
  let searchParams = '';

  if (sortBy) {
    sortParams = '?sortBy='.concat(sortBy);
    sortParams += '&sortOrder=desc';
  }

  if (filterBy) {
    filterParams = '&filter='.concat(filterBy);
  }

  if (searchBy) {
    searchParams = '&search='.concat(searchBy);
    searchParams += '&searchBy=title';
  }

  queryParams = sortParams.concat(filterParams).concat(searchParams);

  return fetch(baseUrl.concat(queryParams))
    .then(handleResponse)
    .catch(handleError);
}

export function getMovie(movieId) {
  // eslint-disable-next-line prefer-template
  return fetch(baseUrl + '/' + movieId, { method: 'GET' })
    .then(handleResponse)
    .catch(handleError);
}

export function saveMovie(movie) {
  return fetch(baseUrl, {
    method: movie.id ? 'PUT' : 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(movie),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteMovie(movieId) {
  // eslint-disable-next-line prefer-template
  return fetch(baseUrl + '/' + movieId, { method: 'DELETE' })
    .then(handleResponse)
    .catch(handleError);
}
