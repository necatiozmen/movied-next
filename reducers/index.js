import { combineReducers } from 'redux';
import movies from './movies';
import series from './series';
import headerType from './headerType';

export default combineReducers({
  movieList: movies,
  serieList: series,
  headerType: headerType,
});
