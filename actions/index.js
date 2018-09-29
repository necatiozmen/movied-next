import { API } from '../middlewares/api';

export const getMovies = () => ({
  type: 'GET_MOVIES',
  [API]: {
    endpoint: '/v1/api/feed/movies',
    method: 'GET',
  },
});

export const getSeries = () => ({
  type: 'GET_SERIES',
  [API]: {
    endpoint: '/v1/api/feed/series',
    method: 'GET',
  },
});

export const changeHeaderTitle = (data) => ({
  type: 'CHANGE_HEADER_TITLE',
  data,
});
