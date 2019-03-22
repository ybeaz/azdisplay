import { takeEvery, call } from 'redux-saga/effects'

import { fetchAsyncAwaitGet } from '../ComminicationLayer/fetch'

function* getStartedUserSession(payload) {
  // console.info('getStartedUserSession [0]', { payload })
  try {
    yield call(() => {
      // console.info('getStartedUserSession [5]', { payload })
      const endpoint = 'https://userto.com/api/apiP2p.php'
      fetchAsyncAwaitGet(endpoint, payload)
    })
  }
  catch (error) {
    yield call(() => {})
  }
}

export default function* getStartedUserSessionWatcher() {
  // console.info('getSavedUserVisitActionsMdbWatcher START_USER_SESSION', )
  yield takeEvery('START_USER_SESSION_REQUEST', getStartedUserSession)
}
