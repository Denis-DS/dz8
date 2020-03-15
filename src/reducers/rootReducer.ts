import { combineReducers } from 'redux'

import counterReducer from './counter'
import { CounterAction } from './counter/types'
import { StateType } from 'typesafe-actions'

const rootReducer = combineReducers({
    counter: counterReducer
})

export type IRootState = StateType<typeof rootReducer>
export type IRootAction = CounterAction

export default rootReducer