const mongoose = require('mongoose');
const faker = require('faker');
const db = require('./index');

const games = [];

const createGameData = () => {
  for (let i = 1; i <= 10; i += 1) {
    const game = new db.Game({
      _id: new mongoose.Types.ObjectId(),
      game: faker.lorem.word(),
      logo: faker.image.abstract(156, 156),
      catigory: faker.company.bsAdjective(),
      number_of_teams: faker.random.number(0, 20),
      start_year: faker.date.between('2012-01-01', '2020-11-25');
    });
    stores.push(store);
  }
  console.log(`populating db with ${games.length} stores `);

  games.forEach((game) => {
    game.save((err) => {
      if (err) {
        console.log('error adding games to db');
      } else {
        console.log(`saved store ${games._id} in db`);
      }
    });
  });
};

// clear out Games collection, then invoke Game creator function
db.Game.deleteMany({}, (err) => {
  if (err) {
    console.log('error deleting Games');
  } else {
    console.log('deleted Game data');
    createGameData();
  }
});