import {
  ThunkAction as _ThunkAction,
  ThunkDispatch as _ThunkDispatch,
} from 'redux-thunk'
import { State as _State } from './state'
export type State = _State

// export type ThunkAction = _ThunkAction<
//   void | Promise<void>,
//   State,
//   undefined,
//   AnyAction
// >
// export type ThunkDispatch = _ThunkDispatch<State, undefined, AnyAction>
// export type User = {
//   accessToken: string
//   name: string
// }
