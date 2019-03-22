import { takeEvery, call } from 'redux-saga/effects'

import { fetchAsyncAwaitPost } from '../ComminicationLayer/fetch'

function* getSavedUserVisitActions(payload) {
  console.info('getSavedUserVisitActions [0]', { payload })
  try {
    yield call(() => {
      console.info('getSavedUserVisitActions [5]', { payload })
      const endpoint = 'https://userto.com/api/apiP2p.php'
      fetchAsyncAwaitPost(endpoint, payload)
    })
  }
  catch (error) {
    yield call(() => {})
  }
}

export default function* getSavedUserVisitActionsWatcher() {
  // console.info('getSavedUserVisitActionsMdbWatcher SAVE_USER_VISIT_ACTIONS', )
  yield takeEvery('SAVE_USER_VISIT_ACTIONS_REQUEST', getSavedUserVisitActions)
}
