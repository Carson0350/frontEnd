const mongoose = require('mongoose');
// change between database or localhost
mongoose.connect('mongodb+srv://mongodb:STLhockey15@e-league.qfs0h.mongodb.net/E-League?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => { console.log('db connected'); },
  (err) => { console.log('error connecting to db', err); },
);

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  _id: Schema.Types.ObjectId,
  game: String,
  logo: String,
  category: String,
  number_of_teams: Number,
  start_year: Number,
});

const leagueSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  logo: String,
  game_id: { type: Schema.Types.ObjectId, ref: 'Game' },
});

const teamSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  logo: String,
  sponsored: Boolean,
  game_id: { type: Schema.Types.ObjectId, ref: 'Game' },
  league_id: { type: Schema.Types.ObjectId, ref: 'League' },
  location: String,
});

const playerSchema = new Schema ({
  _id: Schema.Types.ObjectId,
  name: String,
  years_pro: Number,
  team_id: { type: Schema.Types.ObjectId, ref: 'Team' },
});

const scoreSchema = new Schema ({
  _id: Schema.Types.ObjectId,
  team_score: Number,
  oponent_score: Number,
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
});

const Game = mongoose.model('Game', gameSchema);
const League = mongoose.model('League', leagueSchema);
const Team = mongoose.model('Team', teamSchema);
const Player = mongoose.model('Player', playerSchema)
const Score = mongoose.model('Score', scoreSchema)

module.export = {
  Score,
  Player,
  Game,
  League,
  Team,
};
