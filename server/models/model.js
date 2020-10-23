const db = require('../database/index.js');

const getGameData = (gameId, callback) => {
  const query = db.Game.find({ game_id: gameId });
  query.exec((err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getGameData,
};