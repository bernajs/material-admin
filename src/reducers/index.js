import { combineReducers } from 'redux'
import usuarios from './usuarios_reducer'
import general from './general_reducers'
export default combineReducers({ usuarios, general })
