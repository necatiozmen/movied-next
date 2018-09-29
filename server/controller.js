const allItems = require('./models');

exports.getMovies = (req, res) => {
  let movies = allItems.getAllItems()
  .filter((item, index) => item.releaseYear >= 2010 && item.programType === 'movie')
  .sort((a, b) => a.title > b.title ? 1 : -1)
  .slice(0, 21);
  res.send(movies);
};

exports.getSeries = (req, res) => {
  let series = allItems.getAllItems()
  .filter((item, index) => item.releaseYear >= 2010 && item.programType === 'series')
  .sort((a, b) => a.title > b.title ? 1 : -1)
  .slice(0, 21);
  res.send(series);
};
