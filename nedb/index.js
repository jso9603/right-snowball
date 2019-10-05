const Datastore = require('nedb');
let db = {};

db.snows = new Datastore({ filename: 'nedb/snows.db', autoload: true });
db.topics = new Datastore({ filename: 'nedb/topics.db', autoload: true });

module.exports = db;