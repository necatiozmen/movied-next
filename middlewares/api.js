export const API = Symbol('API');
export const SERVER_BASE_URL = 'http://localhost:5000';

export const api = store => next => action => {
  if (action[API]) {
    const { endpoint, method } = action[API];

    fetch(`${SERVER_BASE_URL}${endpoint}`, {
        method: method,
      })
      .then(result => result.json())
      .then((data) => {
        store.dispatch({
          type: `${action.type}_SUCCESS`,
          data,
        });
      })
      .catch((error) => {
        store.dispatch({
          type: `${action.type}_FAILURE`,
          error,
        });
      });
    next({
      ...action,
      type: `${action.type}_REQUEST`,
    });
  } else {
    next(action);
  }
};
