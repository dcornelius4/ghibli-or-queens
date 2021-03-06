import { loadFilms } from './film-list-component.js';

const URL = 'https://ghibliapi.herokuapp.com/films';

fetch(URL)
    .then(response => response.json())
    .then(films => {
        loadFilms(films);
    })
    .catch(err => {
        /* eslint-disable-next-line */
        console.error('fetch error', err);
    });