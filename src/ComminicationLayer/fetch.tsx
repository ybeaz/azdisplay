import { devModeTrueFalse } from '../Shared/serviceFunc'

export const fetchPost: Function = (endpoint: string, payload: any): any => {
  // console.info('fetch.js->fetchPost [5]', { endpointPayload, payload })

  return fetch(endpoint, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', //(devModeTrueFalse() ? 'omit' : 'include'), // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Content-Type': 'application/x-www-form-urlencoded', text/plain, application/json
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(payload), // body data type must match 'Content-Type' header
  })
}

export const fetchGet: Function = (endpoint: string, payload: any): any => {

  let payloadString: string = ''
  Object.keys(payload)
  .forEach((key: string) => {
    payloadString = `${payloadString}&${key}=${payload[key]}`
  })

  const endpointPayload: string = `${endpoint}?jsonp=none${payloadString}`
  // console.info('fetch.js->fetchGet [5]', { credentials: (devModeTrueFalse() ? 'omit' : 'include'), devModeTrueFalse: devModeTrueFalse(), endpointPayload, payload })

  return fetch(endpointPayload, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //mode: 'cors', // no-cors, cors, *same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: (devModeTrueFalse() ? 'omit' : 'omit'), // include, *same-origin, omit  //Should include to preserve PHPSESSID
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      // 'Content-Type': 'application/x-www-form-urlencoded', text/plain, multipart/form-data, application/json
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'client', // no-referrer, *client
  })
}
