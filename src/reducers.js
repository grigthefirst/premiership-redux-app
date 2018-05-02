import { combineReducers } from 'redux'
import { actionTypes } from './actions'

const selectedRound = (state = null, action) => {
	switch(action.type) {
		case actionTypes.SELECT_ROUND:
			return action.round;
		default:
			return state;
	}
} 

const roundResults = (state = { 
		isLoading: false, 
		rounds: [], 
		matchesByRound: [] 
	}, action) => {
	switch(action.type) {
		case actionTypes.REQUEST_ROUND_RESULTS:
			return Object.assign({}, state, {isLoading: true});
		case actionTypes.RECIEVE_ROUND_RESULTS:
			return Object.assign({}, state, {
				rounds: action.data.map(row => row.round),
				matchesByRound: action.data.map(matchByRound => ({
					round: matchByRound.round,
					matches: matchByRound.matches.map(match => Object.entries(match).map(kvp => ({team: kvp[0], score: kvp[1]})))
				})),
				isLoading: false
			});
		default:
			return state;
	}
} 

export const reducer = combineReducers({
  selectedRound,
  roundResults
})

