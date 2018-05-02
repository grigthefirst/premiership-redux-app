import fetch from 'isomorphic-fetch'

const fetchUrl = 'data.json';

const requestRoundResults = () => ({
	type: actionTypes.REQUEST_ROUND_RESULTS
})

const recieveRoundResults = (json) => ({
	type: actionTypes.RECIEVE_ROUND_RESULTS,
	data: json
})

export const actionTypes = {
	SELECT_ROUND: 'SELECT_ROUND',
	REQUEST_ROUND_RESULTS: 'REQUEST_ROUND_RESULTS',
	RECIEVE_ROUND_RESULTS: 'RECIEVE_ROUND_RESULTS' 
};

export const selectRound = (round) => ({
	type: actionTypes.SELECT_ROUND,
	round: round
})

export const fetchRoundResults = () => (dispatch) => {
	dispatch(requestRoundResults());
	return fetch(fetchUrl, {
            headers: {
				'Accept': 'application/json'
			}
        })
	.then(response => response.json())
	.then(json =>  dispatch(recieveRoundResults(json)));
}