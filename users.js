const users = require('./userData');
const validateUser = require('./utils').validateUser;
const _ = require('lodash');

function index() {
  return users;
}

function genId() {
  return users[users.length - 1].id + 1;
}

exports.findOne = function(key, value) {
  if (!key) {
    return index();
  }


  for (let i = 0; i < users.length; i++) {
    if (users[i][key] === value) {
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