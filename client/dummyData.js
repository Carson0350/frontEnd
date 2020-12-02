const sampleGameData = {
  id: 1,
  game: 'Rocket League',
  logo: 'www.someImage.com',
  catigory: 'Car Soccer',
  number_of_teams: 15,
  start_year: 1993
}
// {
//   id: 2,
//   game: 'League of Legands',
//   logo: 'www.someImage.com',
//   catigory: 'Big team Battle',
//   number_of_teams: 15,
//   start_year: 1903
// };

const sampleLeagueData = {
  id: 1,
  name: 'Rocket League Championships Series',
  logo: 'www.someRLlogo.com',
  game_id: 1,
};

const sampleTeamData = {
  id: 1,
  name: 'Cloud9',
  logo: 'www.someCloud9Logo.com',
  sponosered: 'True',
  game_id: 1,
  league_id: 1,
};

const samplePlayerData = {
  id: 1,
  name: 'Squishy Muffins',
  years_pro: '7'
};

const currentGameId = Math.floor(Math.random() * (10 - 1 + 1)) + 1;


export {
  sampleGameData,
  sampleLeagueData,
  sampleTeamData,
  samplePlayerData,
  currentGameId
};
