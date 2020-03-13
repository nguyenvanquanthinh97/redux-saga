import { all } from 'redux-saga/effects';

import imageSaga from './imageSaga';
import statSaga from './statSaga';

export default function* rootSaga() {
  yield all([
    imageSaga(),
    statSaga()
  ]);
}