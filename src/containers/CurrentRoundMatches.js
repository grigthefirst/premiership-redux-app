import { connect } from 'react-redux'
import { Matches } from '../components'

const mapStateToProps = state => {
	const matchByRound = state.roundResults.matchesByRound
		.find(matchByRound => matchByRound.round.toString() === state.selectedRound)
	return ({
		matches: matchByRound ? matchByRound.matches : null
	})}

export default connect(mapStateToProps)(Matches)