import {combineReducers} from 'redux'

import Cliente from './Cliente'
import Articles from './Articles'

const RootReducer = combineReducers({ Cliente, Articles });

export default RootReducer;