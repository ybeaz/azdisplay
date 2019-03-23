
export const fetchPost = async (endpoint, payload) => {
  // console.info('fetch.js->fetchPost [5]', { endpointPayload, payload })

  return fetch(endpoint, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'no-cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'text/plain',
      // 'Content-Type': 'application/x-www-form-urlencoded', text/plain, application/json
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(payload), // body data type must match 'Content-Type' header
  })
}


export const fetchGet = (endpoint, payload) => {
  
  let payloadString = ''
  Object.keys(payload).forEach(key => {
    payloadString = `${payloadString}&${key}=${payload[key]}`
  })

  const endpointPayload = `${endpoint}?jsonp=none${payloadString}`
  // console.info('fetch.js->fetchGet [5]', { endpointPayload, payload })

  return fetch(endpointPayload, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    // mode: 'no-cors', // no-cors, cors, *same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit  //Should include to preserve PHPSESSID
    headers: {
      'Content-Type': 'text/plain',
      // 'Content-Type': 'application/x-www-form-urlencoded', text/plain
    },
    accept: 'application/json',
    redirect: 'follow', // manual, *follow, error
    referrer: 'client', // no-referrer, *client
  })



}


export const getAsync = () => {
  return 'Hello async'
}
