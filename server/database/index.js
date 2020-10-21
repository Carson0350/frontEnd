const mongoose = require('mongoose');
// change between database or localhost
mongoose.connect('mongodb+srv://mongodb:STLhockey15@e-league.qfs0h.mongodb.net/E-League?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => { console.log('db connected'); },
  (err) => { console.log('error connecting to db', err); },
);

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  id: Schema.Types.ObjectId,
  game: String,
  logo: String,
  category: String,
  number_of_teams: Number,
  start_year: Number,
});

const leagueSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  logo: String,
  game_id: Number,
  game: { type: Schema.Types.ObjectId, ref: 'Game' },
});

const teamSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: String,
  logo: String,
  sponsored: Boolean,
  league_id: Number,
  game_id: Number,
  league: { type: Schema.Types.ObjectId, ref: 'League' },
});

const playerSchema = new Schema ({
  id: Schema.Types.ObjectId,
  name: String,
  years_pro: Number,
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
});

const scoreSchema = new Schema ({
  id: Schema.Types.ObjectId,
  team_score: Number,
  oponent_score: Number,
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
});

const Score = mongoose.model('Score', scoreSchema)
const Player = mongoose.model('Player', playerSchema)
const Game = mongoose.model('Game', gameSchema);
const League = mongoose.model('League', leagueSchema);
const Team = mongoose.model('Team', teamSchema);

module.export = {
  Score,
  Player,
  Game,
  League,
  Team,
};
