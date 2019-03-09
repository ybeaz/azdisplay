

export const handleActions = (e, action) => {
  // console.info(`handleActions.js type->${action.type}`, { e, action })

  switch (action.type) {
    case 'registrationQuick': {
      console.info(`handleActions.js type->${action.type}`, { e, action })
    } break

    default: {
      console.info('handleActions.js unexpected action', { action })
    }
  }

}

export default handleActions
