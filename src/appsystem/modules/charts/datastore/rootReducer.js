import { combineReducers } from 'redux'
import chartReducer from './reducers/chartReducer'


export default combineReducers({
  chartReducer: chartReducer
});