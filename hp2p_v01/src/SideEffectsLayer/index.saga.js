import { all, fork } from 'redux-saga/effects'

import getActionsSavedMdbWatcher from './getActionsSavedMdb.saga'

export default function *indexSaga() {
  yield all([
    fork(getActionsSavedMdbWatcher),
  ])
}
