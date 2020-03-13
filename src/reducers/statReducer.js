import { STATS } from '../constants';
const reducer = (state = {}, action) => {
  switch (action.type) {
    case STATS.LOAD:
      return {
        ...state,
        [action.id]: {
          isLoading: true,
          download: null,
          error: false
        }
      };
    case STATS.LOAD_SUCCESS:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          download: action.downloads,
          error: false
        }
      };
    case STATS.LOAD_FAIL:
      return {
        ...state,
        [action.id]: {
          isLoading: false,
          download: null,
          error: true
        }
      };
    default:
      return state;
  }
};

export default reducer;