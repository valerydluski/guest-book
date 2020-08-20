import { takeLatest, call } from 'redux-saga/effects';
import { SAVE_USER_MESSAGE_TO_API } from '../types';
import putMessageToApi from '../../../services/putMessageToApi';

function* workerStatus({ payload }) {
  const sss = yield call(putMessageToApi, payload);
  console.log('function*workerStatus -> sss', sss);
}

export default function* watchStatus() {
  yield takeLatest(SAVE_USER_MESSAGE_TO_API, workerStatus);
}
