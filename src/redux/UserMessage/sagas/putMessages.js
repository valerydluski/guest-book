import { takeLatest, call } from 'redux-saga/effects';
import { SAVE_USER_MESSAGE_TO_API } from '../types';
import putMessageToApi from '../../../services/putMessageToApi';

function* workerStatus({ payload }) {
  yield call(putMessageToApi, payload);
}

export default function* watchStatus() {
  yield takeLatest(SAVE_USER_MESSAGE_TO_API, workerStatus);
}
