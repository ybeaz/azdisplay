

export const handleActions = (e, payload) => {
  console.info(`handleActions.js type->${payload.type}`, { e, payload })

  switch (payload.type) {
    case '0': {
      return payload
    }

    default: {
      console.info('handleActions.js unexpected payload', { payload })
    }
  }

}

export default handleActions
