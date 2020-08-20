import { takeEvery, call, put } from 'redux-saga/effects';
import { LOAD_DATA_FROM_API } from '../types';
import getMessageFromApi from '../../../services/getMessageFromApi';
import { saveMessagesFromAPI } from '../actions';

function* workerLoadData() {
  const userMessages = yield call(getMessageFromApi);
  yield put(saveMessagesFromAPI(userMessages));
}

export default function* watchLoadData() {
  yield takeEvery(LOAD_DATA_FROM_API, workerLoadData);
}
