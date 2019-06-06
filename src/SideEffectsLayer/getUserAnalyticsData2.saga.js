import { takeEvery, call, put } from 'redux-saga/effects'

import * as serviceFunc from '../Shared/serviceFunc'
import { fetchPost } from '../ComminicationLayer/fetch'
import * as actions from '../DataLayer/actions/index'

function* getUserAnalyticsData(payload) {
  // console.info('getUserAnalyticsData [0]', { payload })
  const payloadNext = payload
  delete payloadNext.type
  const endpoint = serviceFunc.getEndpoint()

  // It works with php: const endpoint = 'https://bb.userto.com/api/apiP2p.php'
  try {
    const response = yield fetchPost(endpoint, payloadNext)

    const data = yield response.json()
    const dataNext = data.data.getWebAnalytics2
    // console.info('getUserAnalyticsData2 [7]', { data })

    yield put(actions.getActionAsync('GET_USER_ANALYTICS_DATA', 'SUCCESS', { data: dataNext }))
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
