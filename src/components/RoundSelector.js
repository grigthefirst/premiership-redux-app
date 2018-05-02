import React from 'react'
import { connect } from 'react-redux'
import { selectRound } from '../actions'

let RoundSelector = ({rounds, selectedRound, onRoundSelected}) => (
<div className='roundSelector'>
  <span>Select round: </span>
	<select  
		onChange={onRoundSelected} 
		value={(selectedRound ? selectedRound : '')}>
		<option value='null'>-</option>
		{rounds.map(round => (<option key={round} value={round}>Round {round}</option>))}
	</select>
  </div>
)

const mapStateToProps = (state) => {
  return {
    rounds: state.roundResults.rounds,
    selectedRound: state.selectedRound
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRoundSelected: (event) => {
      dispatch(selectRound(event.target.value))
    }
  }
}

RoundSelector = connect(mapStateToProps, mapDispatchToProps)(RoundSelector)
export default RoundSelector