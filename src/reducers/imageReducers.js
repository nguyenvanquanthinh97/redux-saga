import { IMAGES } from '../constants';

const initialState = {
  loading: false,
  images: [],
  error: null,
  nextPage: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return { ...state, loading: true, error: null };
    case IMAGES.LOAD_SUCCESS:
      return { ...state, images: [...state.images, ...action.images], loading: false, error: null, nextPage: state.nextPage + 1 };
    case IMAGES.LOAD_FAIL:
      return { ...state, error: true, loading: false, error: action.error, nextPage: 1 };
    default:
      return state;
  }
};

export default reducer;