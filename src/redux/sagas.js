import { all, fork } from 'redux-saga/effects';
import watchMessages from './UserMessage/sagas/putMessages';
import watchLoadData from './UserMessage/sagas/loadDataSaga';

export default function* watchSaga() {
  yield all([fork(watchMessages), fork(watchLoadData)]);
}
