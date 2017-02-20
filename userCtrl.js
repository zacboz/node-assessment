const users = require('./users');

module.exports = {

  readAll: () => {
    console.log("get all users");
    let all = users.find();
    return all;
  },

  findUserById: (userId) => {
    console.log('get user by id');
    let key = 'id';
    // console.log(userId);
    let one = users.findOne(key, userId)
    return one;
  },

  getAdmins: () => {
    console.log('getting admins');
    let key = 'type';
    let value = 'admin'
    let allAdmin = users.find(key, value);
    return allAdmin;
  },


  getNonAdmins: () => {
    console.log('getting non-admins');
    let key = 'type';
    let value = 'user';
    let nonAdmin = users.find(key, value);
    return nonAdmin;
  },

  getUsersByFavorite: (favorite) => {
    console.log('getting users by favorite');
    let all = users.find();
    all = all.filter(function(user){
      for (let i = 0; i < user.favorites.length; i++) {
        if (user.favorites[i] == favorite) {
          return user;
        }
      }
    })
    return all;
  },

  getUsersByAgeLimit: (age) => {
    console.log('getting age limit');
    let key = 'age';
    let ageLimit = users.find();
    return ageLimit.filter( function(user){
      return user.age < age;
    });
  },

  findUserByQuery: (query, value) => {
    console.log('getting query');
    let arr = users.find(query, value);
    return arr;
  },

  updateUser: (id, object) => {
    users.update('id', id, object);
    let user = users.findOne('id', id);
    console.log(user);
    return user;
  },

  createUser: (user) => {
    let newUser = users.add(user);
    return newUser;
  },

  removeUser: (userId) => {
    let key = 'id';
    let remove = users.remove(key, userId);
    return remove;
  }



};
