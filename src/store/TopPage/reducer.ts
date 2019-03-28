import _ from 'lodash'
import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface State {}

const initialState: State = {}

export const reducer = reducerWithInitialState<State>(initialState)
