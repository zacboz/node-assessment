const userData = require('./lib/userData');
const validateUser = require('./lib/utils').validateUser;
const _ = require('lodash');
let users;

userData.subscribe(userData => {
  users = userData;
})

function index() {
  return users
}

function genId() {
  return _.last(users).id + 1;
}

exports.find = function(key, value) {
  let results = _.filter(users, user => {
    return user[key] == value;
  })

  return results[0] ? results : null;
}

exports.findOne = function(key, value) {
  if (!key) {
    return index();
  }

  for (let i = 0; i < users.length; i++) {
    if (users[i][key] == value) {
      return users[i];
    }
  }

  return null;
}

exports.add = function(user) {

  try {
    validateUser(user)
  } catch(err) {
    throw err;
  }

  user = _.assign({}, user, {id: genId()});

  users.push(user);

  return user;
}

exports.remove = function(key, value) {
  for (let i = users.length-1; i >= 0; i--) {
    if (users[i][key] === value) {
      users.splice(i, 1);
    }
  }
}

exports.update = function(key, value, update) {
  let user = _.find(users, [key, value]);

  _.assign(user, update);
}
