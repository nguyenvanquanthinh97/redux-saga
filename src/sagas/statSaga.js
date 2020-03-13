import { take, fork, put, call } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import * as actions from '../actions';

function* handleStatsRequest(id) {
  try {
    yield put(actions.loadImagesStats(id));
    const res = yield call(fetchImageStats, id);
    yield put(actions.setImagesStats(id, res.downloads));
  } catch (error) {
    yield put(actions.setImagesStatsError(id, error.toString()));
  }
}

function* watchStatsRequest() {
  while (true) {
    const obj = yield take(IMAGES.LOAD_SUCCESS);

    const { images } = obj;

    for (let i = 0; i < images.length; i++) {
      yield fork(handleStatsRequest, images[i].id);
    }
  }
}

export default watchStatsRequest;