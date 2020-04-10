import { GET_CHARTDATA } from '../actions/chartConsts'

const initialState = {
  chartdata: []
}

export default function(state = initialState, action) {
  switch(action.type) {

		case GET_CHARTDATA:
			return {
				...state,
				chartdata: action.payload
			}

		default:
			return state;

  }
}