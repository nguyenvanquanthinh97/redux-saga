import { combineReducers } from 'redux';

import imageReducer from './imageReducers';
import statReducer from './statReducer';

const rootReducer = combineReducers({
  images: imageReducer,
  stats: statReducer
});

export default rootReducer;