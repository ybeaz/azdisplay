import { all, fork } from 'redux-saga/effects'

import getUserAnalyticsDataWatcher from './getUserAnalyticsData.saga'
import getUserAnalyticsDataWatcher2 from './getUserAnalyticsData2.saga'

export default function* indexSaga() {
  yield all([
    fork(getUserAnalyticsDataWatcher2),
    fork(getUserAnalyticsDataWatcher),
  ])
}
