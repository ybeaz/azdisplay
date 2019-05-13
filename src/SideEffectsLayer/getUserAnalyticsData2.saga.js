import { takeEvery, call, put } from 'redux-saga/effects'

import { fetchGet } from '../ComminicationLayer/fetch'
import * as actions from '../DataLayer/actions/index'

function* getUserAnalyticsData(payload) {
  // console.info('getUserAnalyticsData [0]', { payload })
  const endpoint = 'http://localhost:8081/api/apiP2p/2.0'
  // It works with php: const endpoint = 'https://bb.userto.com/api/apiP2p.php'
  try {
    const response = yield fetchGet(endpoint, payload)

    const data = yield response.json()
    // console.info('getUserAnalyticsData [7]', { data })

    yield put(actions.getActionAsync('GET_USER_ANALYTICS_DATA', 'SUCCESS', { data }))
    yield put(actions.CLOSE_ALL_MODALS(data))
  }
  catch (error) {
    yield call(() => {})
  }
}

export default function* getUserAnalyticsDataWatcher2() {
  // console.info('getSavedUserVisitActionsMdbWatcher START_USER_SESSION', )
  yield takeEvery(['GET_USER_ANALYTICS_DATA2_REQUEST'],
    getUserAnalyticsData)
}
