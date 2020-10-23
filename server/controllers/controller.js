const model = require('../models/model');

const getGameData = (req, res) => {
  const { gameId } = req.query;
  model.getGameData(gameId, (err, results) => {
    if (err) {
      console.log('error getting a sigle game from db');
    } else {
      console.log('got game from db');
      res.json({
        store: results[0],
      });
    }
  });
};

module.exports = {
  getGameData,
};