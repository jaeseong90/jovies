import axios from 'axios';

const TMDB_KEY = '1a3810937b0dde9cf8fcbaabd86871a7';
const IMAGE_PATH = '';

const makeRequest = (path, param) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...param,
      api_key: TMDB_KEY,
    },
  });

const getAnything = async (path, param = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, param);
    return [results || data, null];
  } catch (e) {
    console.log(e);
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getAnything('/movie/now_playing', { language: 'ko-kr' }),
  popular: () =>
    getAnything('/movie/popular', { language: 'ko-kr', region: 'kr' }),
  upcoming: () =>
    getAnything('/movie/upcoming', { language: 'ko-kr', region: 'kr' }),
  search: (word) =>
    getAnything('/search/movie', { query: word, language: 'ko-kr' }),
  movie: (id) =>
    getAnything(`/movie/${id}`, {
      language: 'ko-kr',
      append_to_response: 'videos',
    }),
  discover: () => getAnything('/discover/movie'),
};

export const tvApi = {
  today: () =>
    getAnything('/tv/airing_today', { language: 'ko-kr', region: 'kr' }),
  thisWeek: () => getAnything('/tv/on_the_air', { language: 'ko-kr' }),
  topRated: () => getAnything('/tv/top_rated', { language: 'ko-kr' }),
  popular: () => getAnything('/tv/popular', { language: 'ko-kr' }),
  search: (word) =>
    getAnything(`/search/tv`, { query: word, language: 'ko-kr' }),
  show: (id) =>
    getAnything(`/tv/${id}`, {
      language: 'ko-kr',
      append_to_response: 'videos',
    }),
};

export const imageApi = (path) =>
  path === null || path === undefined
    ? 'https://images.unsplash.com/photo-1529511696370-b8554caa7261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80'
    : `https://image.tmdb.org/t/p/w500${path}`;
