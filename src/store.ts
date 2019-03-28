import { routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, compose, createStore } from 'redux'
import { createMigrate, persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'

export const history = createHistory()

const migrations = {}

const persistConfig = {
  key: 'redux-template',
  storage,
  whitelist: [],
  migrate: createMigrate(migrations, { debug: false }),
}

export default () => {
  const middleware = [thunk, routerMiddleware(history)]
  const enhancers = []

  if (process.env.NODE_ENV === 'development') {
    const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devTools === 'function') {
      enhancers.push(devTools())
    }
  }

  const composed = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

  const persistedReducer = persistReducer(
    persistConfig,
    createRootReducer(history)
  )
  const store = createStore(persistedReducer, composed)

  const persistor = persistStore(store)

  return { store, persistor }
}
