const _ = require('lodash');
const userData = require('./userData.json');

const cbs = [];

exports.subscribe = function(cb) {
  cbs.push(cb);
  cb(userData);
}

exports.reset = (function(data) {
  data = _.cloneDeep(data);
  return function() {
    cbs.forEach(cb => {
      cb(data);
    })
  }
})(userData)