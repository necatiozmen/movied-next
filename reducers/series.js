const defaultState = {
  series: [],
};

const series = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_SERIES_REQUEST':
      return { ...state, getEntriesFromDatabase: false };
    case 'GET_SERIES_SUCCESS':
      return {
        ...state,
        series: action.data,
        getEntriesFromDatabase: true,
      };
    case 'GET_SERIES_FAILURE':
      return { ...state, getEntriesFromDatabaseFailed: true };
    default:
      return state;
  }
};

export default series;
