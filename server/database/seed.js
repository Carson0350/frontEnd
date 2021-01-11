// const mongoose = require('mongoose');
// const faker = require('faker');
// const db = require('./index.js');

// console.log(db)

// const games = [];

// const createGameData = () => {
//   for (let i = 1; i <= 10; i += 1) {
//     const game = new db.Game({
//       _id: new mongoose.Types.ObjectId(),
//       game_id: i,
//       game: faker.lorem.word(),
//       logo: faker.image.abstract(156, 156),
//       catigory: faker.company.bsAdjective(),
//       number_of_teams: faker.random.number(0, 20),
//       start_year: faker.date.between('2012-01-01', '2020-11-25'),
//     });
//     games.push(game);
//   }
//   console.log(`populating db with ${games.length} games `);

//   games.forEach((game) => {
//     game.save((err) => {
//       if (err) {
//         console.log('error adding games to db');
//       } else {
//         console.log(`saved games ${game.game_id} in db`);
//       }
//     });
//   });
// };

// // clear out Games collection, then invoke Game creator function

// db.Game.deleteMany({}, (err) => {
//   if (err) {
//     console.log('error deleting Games');
//   } else {
//     console.log('deleted Game data');
//     createGameData();
//   }
// });

// const leagues = [];

// const createLeagueData = () => {
//   const gameId = 1

//   const league = new db.League({
//     _id: new mongoose.Types.ObjectId(),
//     name: faker.commerce.productName(),
//     logo: faker.image.abstract(156, 156),
//     game_id: gameId,
//   });
//   leagues.push(league);
// }
// console.log(`populating db with ${leagues.length} leagues `);

// leagues.forEach((league) => {
//   league.save((err) => {
//     if (err) {
//       console.log('error adding leagues to db');
//     } else {
//       console.log(`saved product ${league._id} in db`);
//     }
//   });
// });

// // clear out Product collection, then invoke product creator function
// db.League.deleteMany({}, (err) => {
//   if (err) {
//     console.log('error deleting Leagues');
//   } else {
//     console.log('deleted League data');
//     createLeagueData();
//   }
// });

// setTimeout(() => {
//   process.exit();
// }, 5000);

