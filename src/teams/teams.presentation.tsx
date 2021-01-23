import React from 'react';

const teams = [
  {
    id: 93,
    seasonGoals_home: 57,
    seasonGoals_away: 38,
    seasonConceded_away: 11,
    seasonConceded_home: 12,
    seasonGoals: 95,
    points: 98,
    ppg_overall: 2.5789473684210527,
    seasonGoalDifference: 72,
    seasonWins_home: 18,
    seasonWins_away: 14,
    seasonDraws_home: 0,
    seasonDraws_away: 2,
    seasonLosses_away: 3,
    seasonLosses_home: 1,
    matchesPlayed: 38,
    name: 'Manchester City FC',
    country: 'england',
    cleanName: 'Manchester City',
    shortHand: 'manchester-city-fc',
    url: '/clubs/england/manchester-city-fc',
    seasonURL_overall: '/clubs/england/manchester-city-fc',
    seasonURL_home: '/clubs/england/manchester-city-fc',
    seasonURL_away: '/clubs/england/manchester-city-fc',
    position: 1,
    zone: {
      name: 'UEFA Champions League',
      number: 1,
    },
  },
];

export const Teams = () => {
  return <p>{JSON.stringify(teams)}</p>;
};

export default Teams;
