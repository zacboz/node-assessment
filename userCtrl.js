const users = require('./users');

module.exports = {

  readAll: () => {
    console.log('find all users');
    let allUsers = users.find();
    return allUsers;
  },

  findUserById: (userId) => {
    console.log('find one user');
    let one = users.findOne('id', userId);
    return one;
  },

  getAdmins: () => {
    console.log('find admins');
    let admins = users.find('type', 'admin');
    return admins
  },

  getNonAdmins: () => {
    console.log('find all non-admins');
    let nonAdmin = users.find('type', 'user');
    return nonAdmin;
  },

  getUsersByFavorite: (str) => {
    console.log('users by favorite');
    let all = users.find();
    all = all.filter((user) => {
      for (let i = 0; i < user.favorites.length; i++) {
        if (user.favorites[i] == str){
          return user;
        }
      }
    })
    return all;
  },

  getUsersByAgeLimit: (age) => {
    console.log('get users by age limit');
    let all = users.find();
    ageLimit = all.filter((user) => {
      return user.age < age;
    })
    return ageLimit;
  },

  findUserByQuery: (term, value) => {
    console.log('get user by query term');
    let q = users.find(term, value);
    return q;
  },

  createUser: (user) => {
    console.log('creating new user');
    let newUser = users.add(user);
    return newUser;
  },

  updateUser: (userId, obj) => {
    console.log('updating user');
    let updatedUser = users.update('id', userId, obj);
    return updatedUser;
  },

  removeUser: (userId) => {
    console.log('removing user');
    let getOuttaHere = users.remove('id', userId);
    return getOuttaHere;
  }



};
