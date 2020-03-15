import * as actions from './actions'
import { ActionType } from 'typesafe-actions'

export type CounterAction = ActionType<typeof actions>

export type CounterState = {
    value: number
    counterChanges: number
}