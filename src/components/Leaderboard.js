import React from 'react'

export default ({leaders}) => {
	if (!leaders) {
		return null;
	}
	return (
		<React.Fragment>
			<h2>Overall leaderboard:</h2>
			<div className='leaderboard'>
			<div className='leaderboard-head'>
				<div>Team</div>
				<div>Played</div>
				<div>Won</div>
				<div>Drawn</div>
				<div>Lost</div>
				<div>Goals for</div>
				<div>Goals against</div>
				<div>Goal difference</div>
				<div>Points</div>
			</div>
			{leaders.map(leader => (
				<div className='leaderboard-row' key={leader.team}>
					<div>{leader.team}</div>
					<div>{leader.played}</div>
					<div>{leader.won}</div>
					<div>{leader.drawn}</div>
					<div>{leader.lost}</div>
					<div>{leader.goalsFor}</div>
					<div>{leader.goalsAgainst}</div>
					<div>{leader.goalDifference}</div>
					<div>{leader.points}</div>
				</div>
				))}
			</div>
		</React.Fragment>
	)
}