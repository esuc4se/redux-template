import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import App from './containers/App'
import * as sw from './serviceWorker'
import stores from './store'

const { persistor, store } = stores()

const root = document.getElementById('root')
if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={<div>persist loading</div>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    root
  )
}

sw.unregister()
