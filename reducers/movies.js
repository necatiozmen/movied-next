const defaultState = {
  movies: [],
};

const movies = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_MOVIES_REQUEST':
      return { ...state, getEntriesFromDatabase: false };
    case 'GET_MOVIES_SUCCESS':
      return {
        ...state,
        movies: action.data,
        getEntriesFromDatabase: true,
      };
    case 'GET_MOVIES_FAILURE':
      return { ...state, getEntriesFromDatabaseFailed: true };
    default:
      return state;
  }
};

export default movies;
