import { takeEvery, put, call, select } from 'redux-saga/effects';

import { IMAGES } from '../constants';
import { fetchImages } from '../api/index';
import * as actions from '../actions';

const getPage = state => state.images.nextPage;

function* loadImages() {
  const page = yield select(getPage);
  try {
    const images = yield call(fetchImages, page);
    yield put(actions.setImages(images));
  } catch (error) {
    yield put(actions.setError(error.toString()));
  }
}

function* imageSaga() {
  yield takeEvery(IMAGES.LOAD, loadImages);
}

export default imageSaga;