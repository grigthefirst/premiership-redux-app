import { connect } from 'react-redux'
import { Leaderboard } from '../components'

const flattenMatches = (matchesByRound) => {
	let matches = [];
	matchesByRound.forEach(item => { matches = matches.concat(item.matches) });
	return matches;
}

const getTeamMatches = (matches) => {
    const map = new Map();
    matches.forEach((item) => {
    	item.forEach(teamResult => {
    		const collection = map.get(teamResult.team);
	        if (!collection) {
	            map.set(teamResult.team, [item]);
	        } else {
	            collection.push(item);
	        }
    	})
    });
    return map;
}

const calculateLeader = (leader) => {
	const leaderTeam = leader[0];
	const leaderMatches = leader[1];

	const teamResults = leaderMatches.reduce((accumulator, currentValue) => {
		const currentTeamGoals = currentValue.find(teamResult => teamResult.team === leaderTeam).score
		const enemyTeamGoals = currentValue.find(teamResult => teamResult.team !== leaderTeam).score
		return {
			won: accumulator.won + (currentTeamGoals > enemyTeamGoals ? 1 : 0),
			drawn: accumulator.drawn + (currentTeamGoals === enemyTeamGoals ? 1 : 0),
			lost: accumulator.lost + (currentTeamGoals < enemyTeamGoals ? 1 : 0),
			goalsFor: accumulator.goalsFor + currentTeamGoals,
			goalsAgainst: accumulator.goalsAgainst + enemyTeamGoals
		}
	}, { 
		won: 0, 
		drawn: 0, 
		lost: 0, 
		goalsFor: 0, 
		goalsAgainst: 0 
	})

	return {
		team: leaderTeam,
		played: leaderMatches.length,
		won: teamResults.won,
		drawn: teamResults.drawn,
		lost: teamResults.lost,
		goalsFor: teamResults.goalsFor,
		goalsAgainst: teamResults.goalsAgainst,
		goalDifference: teamResults.goalsFor - teamResults.goalsAgainst,
		points: 3 * teamResults.won + teamResults.drawn
	}
}

const getSortedLeaders = (matchesByRound) => {
	return Array.from(getTeamMatches(flattenMatches(matchesByRound)))
	.map(calculateLeader)
	.sort((a, b) => {
		if(
			(a.points > b.points)
			|| (a.points === b.points && a.goalDifference > b.goalDifference)
			|| (a.points === b.points && a.goalDifference === b.goalDifference && a.goalsFor > b.goalsFor)){
			return -1
		}
		else {
			return 1
		}
	})
}

const mapStateToProps = state => {
	return {
		leaders: getSortedLeaders(state.roundResults.matchesByRound)
	}
}

export default connect(mapStateToProps)(Leaderboard)