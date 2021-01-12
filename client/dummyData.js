const sampleGameData = [{
  id: 1,
  game: 'Rocket League',
  logo: 'www.someImage.com',
  catigory: 'Car Soccer',
}];

const currentGameId = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

module.exports = {
  sampleGameData,
  currentGameId,
};
