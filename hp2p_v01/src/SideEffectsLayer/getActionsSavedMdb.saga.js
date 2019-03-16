import { takeEvery, call } from 'redux-saga/effects'

function* getActionsSavedMdb(payload) {
  console.info('getDocSavedMdbSaga.saga.js [0]', { payload })
  try {
    yield call(() => {
      console.info('getActionsSavedMdb [5]', {})
    })
  }
  catch (error) {
    yield call(() => {})
  }
}

export default function* getActionsSavedMdbWatcher() {
  // console.info('getDocSavedMdbWatcher SAVING_DOC_NAMED', )
  yield takeEvery('SAVE_ACTIONS_REQUEST', getActionsSavedMdb)
}
