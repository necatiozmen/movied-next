const router = require('express').Router();
const controller = require('./controller');

router.get('/v1/api/feed/movies', controller.getMovies);
router.get('/v1/api/feed/series', controller.getSeries);

module.exports = router;
