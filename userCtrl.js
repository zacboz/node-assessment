const users = require('./users');

exports.readAll = function() {
  return users.find();
}