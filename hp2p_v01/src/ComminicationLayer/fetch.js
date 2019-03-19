

export const getSaveActionAwait = async (endpoint, payload) => {
  
  let payloadString = ''
  Object.keys(payload).forEach(key => {
    payloadString = `${payloadString}&${key}=${payload[key]}`
  })

  const endpointPayload = `${endpoint}?jsonp=no${payloadString}`
  // console.info('fetch.js->getSaveActionAwait [10]', { endpointPayload, payload })

  try {
    const response = await fetch(endpointPayload)
    const json = await response.json()
    console.info('fetch.js->getSaveActionAwait [10]', { json, endpointPayload, payload })
  } 
  catch(error) {
    console.info('getSaveActionAwait Error:', error)
  }
}


export const getAsync = () => {
  return 'Hello async'
}
