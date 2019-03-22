import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect  } from 'react-router-dom'
import { Provider } from 'react-redux'
import './ViewLayer/CssStyles/index.less'
// import './Shared/styles.less' 

import * as actions from './DataLayer/actions/index'
import store from './DataLayer/store'
import * as serviceFunc from './Shared/serviceFunc'
import FacePage326 from './ViewLayer/Pages/FacePage326.react'
import Error404 from './ViewLayer/Pages/Error404.react'

const PAGES = {
  FacePage326,
  Error404,
}

// Setup language
const lang = 'rus'
const { treeDefault, router } = USERTO[lang]
const { routes, redirects } = router

// console.info('index.js->treeDefault', { USERTO })



const App = () => {

  
  store.dispatch(actions.UPLOAD_TREE_DATA({ treeData: USERTO }))

  const { width, height } = serviceFunc.mediaSizeCrossBrowser(global)
  const payload = { optGet: 'sus', target: 'startSession', width, height }
  store.dispatch(actions.getActionAsync('START_USER_SESSION', 'REQUEST', payload))
  console.info('index->app [10] ', { payload })
  // https://github.com/ReactTraining/react-router/issues/4551
  // https://tylermcginnis.com/react-router-cannot-get-url-refresh/

  const getRedirects = () => redirects
    .map(redirect => {
      const { from, to, exact } = redirect
      return (
        <Route
          key={from}
          {...{ path: from, exact }}
        >
          <Redirect {...{ from, to }} />
        </Route>
      )
    })

  const getRoutes = () => routes
    .map(route => {
      const { path, exact, page } = route
      const Page = PAGES[page]
      // console.info('App->getRoutes', { path, exact, page, Page })
      return (
        <Route
          key='path'
          {...{ path, exact }}
          component={() => <Page {...{ treeDefault }} />}
        />
      )
    })

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {getRedirects()}
          {getRoutes()}
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

// <Route path='/dist/index_dev.html' component={() => <FacePage326 {...{ treeDefault }} />} />

const rootElement = document.getElementById('root')
ReactDOM.render(<App {...treeDefault } />, rootElement)
