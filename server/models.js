const db = require('./db.js');

exports.getAllItems = () => db.entries;
