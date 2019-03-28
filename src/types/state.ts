import { RouterState } from 'connected-react-router'
import { State as TopPageState } from '../store/TopPage/reducer'

export type State = {
  topPage: TopPageState
  router: RouterState
}
