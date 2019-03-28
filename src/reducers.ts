import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'
import { reducer as topPage } from './store/TopPage/reducer'
import { State } from './types'

const reducer = (history: History) =>
  combineReducers<State>({
    topPage,
    router: connectRouter(history),
  })

export default reducer
