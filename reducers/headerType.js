const defaultState = {
  headerTitle: '',
};

const headerType = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_HEADER_TITLE':
      return { ...state, headerTitle: action.data };
    default:
      return state;
  }
};

export default headerType;
