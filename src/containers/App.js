import React from 'react'
import { Loader, RoundSelector } from '../components'
import { default as CurrentRoundMatches } from './CurrentRoundMatches'
import { default as CurrentLeaderboard } from './CurrentLeaderboard'

export default () => (
  <div>
    <h2>Premiership leaderboard and results</h2>
    <Loader />
    <RoundSelector />
    <CurrentRoundMatches />
    <CurrentLeaderboard />
  </div>
)