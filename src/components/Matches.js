import React from 'react'

export default ({matches}) => {
	if (!matches) {
		return null;
	}
	return (
	<React.Fragment>
	<h2>Matches for this round:</h2>
	<div class='matches'>
	{matches.map(match => (
		<div class='matches-row' key={match.reduce((prev, next) => { return prev.team + next.team })}>
			{match.map(teamResult => (
				<React.Fragment key={teamResult.team}>
					<div className='matches-row-team'>{teamResult.team}</div>
					<div className='matches-row-score'>{teamResult.score}</div>
				</React.Fragment>)
				)}
		</div>)
	)}
	</div>
	</React.Fragment>
)}